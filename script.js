/* শব্দভেদ — Extreme Edition */
const KEY = "shabdabhed-html-v2";
const THEME_KEY = "shabdabhed-theme";

let state = {
  answers: {},
  streak: 0,
  lastPractice: null,
  lifetimeCorrect: 0,
  mode: "all",
  filter: "all",
  currentIdx: 0,
  shuffled: null,
  focusMode: true,
};

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "{}");
    state.answers = raw.answers || {};
    state.streak = raw.streak || 0;
    state.lastPractice = raw.lastPractice || null;
    state.lifetimeCorrect = raw.lifetimeCorrect || 0;
  } catch (e) {}
}

function persist() {
  localStorage.setItem(KEY, JSON.stringify({
    answers: state.answers,
    streak: state.streak,
    lastPractice: state.lastPractice,
    lifetimeCorrect: state.lifetimeCorrect,
  }));
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function recordPractice() {
  const t = todayStr();
  if (state.lastPractice === t) return;
  if (state.lastPractice) {
    const a = new Date(state.lastPractice + "T12:00:00");
    const b = new Date(t + "T12:00:00");
    const days = Math.round((b - a) / 86400000);
    state.streak = days === 1 ? state.streak + 1 : 1;
  } else {
    state.streak = 1;
  }
  state.lastPractice = t;
  persist();
  updateStreakUI();
}

function saveAnswer(id, picked, correct) {
  const prev = state.answers[id];
  let interval = 1;
  if (correct) {
    interval = prev && prev.correct ? Math.min((prev.interval || 1) * 2, 30) : 1;
  }
  const now = Date.now();
  state.answers[id] = {
    picked,
    correct,
    ts: now,
    interval,
    nextReview: now + interval * 86400000,
  };
  if (correct) state.lifetimeCorrect++;
  persist();
  recordPractice();
}

function isDue(id) {
  const r = state.answers[id];
  if (!r) return true;
  if (!r.correct) return true;
  return (r.nextReview || 0) <= Date.now();
}

function score() {
  const ids = Object.keys(state.answers);
  const correct = ids.filter((id) => state.answers[id].correct).length;
  const total = typeof QUESTIONS !== "undefined" ? QUESTIONS.length : 0;
  return { answered: ids.length, correct, total, accuracy: ids.length ? Math.round((100 * correct) / ids.length) : 0 };
}

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB";
  u.rate = 0.92;
  window.speechSynthesis.speak(u);
}

function updateStreakUI() {
  document.querySelectorAll(".streak-pill").forEach((el) => {
    if (state.streak > 0) {
      el.classList.add("show");
      el.innerHTML = "🔥 " + state.streak;
    } else {
      el.classList.remove("show");
    }
  });
}

function initTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = stored === "dark" || (!stored && prefers);
  document.documentElement.classList.toggle("dark", dark);
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = dark ? "☀️" : "🌙";
}

function toggleTheme() {
  const dark = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = dark ? "☀️" : "🌙";
}

function renderScore(el) {
  if (!el) return;
  const s = score();
  el.innerHTML = `
    <div class="stat"><div class="label">উত্তর</div><div class="val">${s.answered}/${s.total}</div></div>
    <div class="stat"><div class="label">সঠিক</div><div class="val">${s.correct}</div></div>
    <div class="stat"><div class="label">শুদ্ধতা</div><div class="val">${s.accuracy}%</div></div>
    <div class="stat"><div class="label">স্ট্রিক</div><div class="val">${state.streak || "—"}</div></div>`;
}

function renderHome() {
  const toc = document.getElementById("toc");
  if (typeof CHAPTERS === "undefined") {
    toc.innerHTML = '<p class="bn">ডেটা লোড হয়নি।</p>';
    return;
  }
  toc.innerHTML = CHAPTERS.map(
    (c) =>
      `<a href="#lesson-${c.id}" data-goto="lessons"><span class="num">অধ্যায় ${c.index} · ${c.article}</span><br><strong>${c.titleEn}</strong><br><span class="bn">${c.titleBn}</span></a>`
  ).join("");
  renderScore(document.getElementById("home-score"));
  document.querySelectorAll("[data-goto]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("lessons");
      const id = a.getAttribute("href").slice(1);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
    });
  });
  updateStreakUI();
}

function renderLessons() {
  const list = document.getElementById("lesson-list");
  if (typeof CHAPTERS === "undefined") return;
  list.innerHTML = CHAPTERS.map(
    (c) => `
    <div class="card" id="lesson-${c.id}">
      <p class="meta">অধ্যায় ${c.index} · ${c.article}</p>
      <h2>${c.titleEn}</h2>
      <p class="bn" style="color:var(--muted);margin:4px 0 0">${c.titleBn}</p>
      <p class="bn summary">${c.summaryBn}</p>
      ${(c.sections || [])
        .map(
          (s) => `
        <div class="section">
          <p class="meta">${s.article}</p>
          <h3>${s.titleEn}</h3>
          <div class="idea">
            <p class="bn">${s.ideaBn}</p>
            <p class="en">${s.ideaEn || ""}</p>
          </div>
          <ul class="bullets">${(s.bullets || [])
            .map(
              (b) => `
            <li><div class="bn">${b.bn}</div><div style="font-size:.875rem;color:var(--muted);margin-top:4px">${b.en}</div></li>`
            )
            .join("")}</ul>
          ${(s.examples || [])
            .map(
              (ex) => `
            <div class="ex ${ex.ok ? "ok" : "bad"}">
              <span class="mark">${ex.ok ? "✓" : "✗"}</span>
              <div style="flex:1;min-width:0">
                <div>${ex.en}</div>
                ${ex.bn ? `<div class="bn" style="opacity:.9;margin-top:2px">${ex.bn}</div>` : ""}
              </div>
              <button type="button" class="speak-ex" data-speak="${encodeURIComponent(ex.en)}" title="Speak">🔊</button>
            </div>`
            )
            .join("")}
        </div>`
        )
        .join("")}
    </div>`
  ).join("");

  list.querySelectorAll("[data-speak]").forEach((btn) => {
    btn.addEventListener("click", () => speak(decodeURIComponent(btn.dataset.speak)));
  });
}

function getFilteredList() {
  if (typeof QUESTIONS === "undefined") return [];
  let list = state.filter === "all" ? [...QUESTIONS] : QUESTIONS.filter((q) => q.chapter === state.filter);
  if (state.mode === "wrong") {
    list = list.filter((q) => state.answers[q.id] && !state.answers[q.id].correct);
  } else if (state.mode === "due") {
    list = list.filter((q) => isDue(q.id));
  } else if (state.mode === "shuffle" && state.shuffled) {
    const map = new Map(list.map((q) => [q.id, q]));
    list = state.shuffled.map((id) => map.get(id)).filter(Boolean);
  }
  return list;
}

function renderQuiz() {
  renderScore(document.getElementById("practice-score"));
  const quiz = document.getElementById("quiz");
  if (typeof QUESTIONS === "undefined") {
    quiz.innerHTML = '<p class="bn empty-state">প্রশ্ন লোড হয়নি।</p>';
    return;
  }

  const chapters = typeof CHAPTERS !== "undefined" ? CHAPTERS : [];
  const list = getFilteredList();

  let toolbar = `<div class="quiz-toolbar">
    <button type="button" class="filter-btn ${state.filter === "all" ? "active" : ""}" data-filter="all">সব</button>`;
  chapters.forEach((c) => {
    toolbar += `<button type="button" class="filter-btn ${state.filter === c.id ? "active" : ""}" data-filter="${c.id}">${c.index}</button>`;
  });
  toolbar += `</div>
  <div class="quiz-toolbar">
    <button type="button" class="mode-btn ${state.mode === "all" ? "active" : ""}" data-mode="all">সব</button>
    <button type="button" class="mode-btn ${state.mode === "wrong" ? "active" : ""}" data-mode="wrong">শুধু ভুল</button>
    <button type="button" class="mode-btn ${state.mode === "due" ? "active" : ""}" data-mode="due">রিভিউ (SRS)</button>
    <button type="button" class="mode-btn ${state.mode === "shuffle" ? "active" : ""}" data-mode="shuffle">🔀 এলোমেলো</button>
    <span class="kbd-hint">1–4 · Enter · ← → · S</span>
  </div>`;

  if (!list.length) {
    quiz.innerHTML = toolbar + `<div class="empty-state bn">
      ${state.mode === "wrong" ? "কোনো ভুল উত্তর নেই — দারুণ! 🎉" : state.mode === "due" ? "এখন রিভিউ করার কিছু নেই।" : "প্রশ্ন নেই।"}
    </div>`;
    bindQuizToolbar();
    return;
  }

  if (state.currentIdx >= list.length) state.currentIdx = list.length - 1;
  if (state.currentIdx < 0) state.currentIdx = 0;
  const q = list[state.currentIdx];
  const ans = state.answers[q.id];
  const revealed = !!ans;

  const pct = ((state.currentIdx + 1) / list.length) * 100;
  const correctCount = list.filter((x) => state.answers[x.id]?.correct).length;
  const answeredCount = list.filter((x) => state.answers[x.id]).length;

  let html = toolbar;
  html += `<p style="font-size:.85rem;color:var(--muted);margin:0 0 4px">প্রশ্ন ${state.currentIdx + 1} / ${list.length} · সঠিক ${correctCount}/${answeredCount}</p>`;
  html += `<div class="progress-bar"><div style="width:${pct}%"></div></div>`;

  html += `<div class="card q-card focus-mode ${revealed ? (ans.correct ? "just-correct" : "just-wrong") : ""}" data-qid="${q.id}">
    <div style="display:flex;justify-content:space-between;align-items:flex-start">
      <p class="meta">#${q.id} · ${q.chapter}</p>
      <button type="button" class="speak-btn" data-speak-stem title="Speak (S)">🔊</button>
    </div>
    <p class="bn" style="color:var(--muted);font-size:.95rem;margin:8px 0 4px">${q.stemBn || ""}</p>
    <p class="q-stem">${q.stem}</p>
    <div class="q-opts">`;

  (q.options || []).forEach((opt, idx) => {
    let cls = "";
    if (revealed) {
      if (opt === q.answer) cls = "correct";
      else if (opt === ans.picked) cls = "wrong";
    }
    const esc = String(opt).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
    html += `<button type="button" data-opt="${esc}" class="${cls}" ${revealed ? "disabled" : ""}>
      <span class="num">${idx + 1}</span><span>${esc}</span>
    </button>`;
  });
  html += `</div>`;

  if (revealed) {
    const why = q.whyBn || q.why || q.whyEn || "";
    const whyEn = q.whyEn || "";
    html += `<div class="q-why ${ans.correct ? "ok" : "bad"}">
      <strong>${ans.correct ? "✓ সঠিক।" : "✗ ভুল।"}</strong>
      ${why ? `<div class="bn" style="margin-top:4px">${why}</div>` : ""}
      ${whyEn && whyEn !== why ? `<div style="margin-top:4px;opacity:.9">${whyEn}</div>` : ""}
    </div>`;
  }

  html += `<div class="q-nav">
    <button type="button" id="q-prev" ${state.currentIdx === 0 ? "disabled" : ""}>← আগেরটি</button>
    <button type="button" id="q-next" ${state.currentIdx >= list.length - 1 ? "disabled" : ""} class="${revealed && state.currentIdx < list.length - 1 ? "primary" : ""}">পরেরটি →</button>
  </div></div>`;

  quiz.innerHTML = html;
  bindQuizToolbar();
  bindQuizCard(q, list);
}

function bindQuizToolbar() {
  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.onclick = () => {
      state.filter = btn.dataset.filter;
      state.currentIdx = 0;
      state.shuffled = null;
      if (state.mode === "shuffle") state.mode = "all";
      renderQuiz();
    };
  });
  document.querySelectorAll("[data-mode]").forEach((btn) => {
    btn.onclick = () => {
      const m = btn.dataset.mode;
      if (m === "shuffle") {
        const base = state.filter === "all" ? [...QUESTIONS] : QUESTIONS.filter((q) => q.chapter === state.filter);
        state.shuffled = base.map((q) => q.id).sort(() => Math.random() - 0.5);
        state.mode = "shuffle";
      } else {
        state.mode = m;
        state.shuffled = null;
      }
      state.currentIdx = 0;
      renderQuiz();
    };
  });
}

function bindQuizCard(q, list) {
  const stemBtn = document.querySelector("[data-speak-stem]");
  if (stemBtn) stemBtn.onclick = () => speak(q.stem);

  document.querySelectorAll(".q-opts button:not(:disabled)").forEach((btn) => {
    btn.onclick = () => {
      const picked = btn.dataset.opt;
      const correct = picked === q.answer;
      saveAnswer(q.id, picked, correct);
      renderQuiz();
    };
  });

  const prev = document.getElementById("q-prev");
  const next = document.getElementById("q-next");
  if (prev) prev.onclick = () => { state.currentIdx = Math.max(0, state.currentIdx - 1); renderQuiz(); };
  if (next) next.onclick = () => { state.currentIdx = Math.min(list.length - 1, state.currentIdx + 1); renderQuiz(); };
}

function switchTab(name) {
  document.querySelectorAll("main > section").forEach((s) => s.classList.add("hidden"));
  const tab = document.getElementById("tab-" + name);
  if (tab) tab.classList.remove("hidden");
  document.querySelectorAll("nav button, .bottom-nav button").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === name);
  });
  if (name === "home") renderHome();
  if (name === "practice") renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("keydown", (e) => {
  if (e.target.matches("input, textarea")) return;
  const practiceVisible = !document.getElementById("tab-practice")?.classList.contains("hidden");
  if (!practiceVisible) return;
  const list = getFilteredList();
  if (!list.length) return;
  const q = list[state.currentIdx];
  if (!q) return;
  const ans = state.answers[q.id];

  if (!ans && e.key >= "1" && e.key <= "4") {
    const idx = +e.key - 1;
    if (q.options[idx]) {
      const picked = q.options[idx];
      saveAnswer(q.id, picked, picked === q.answer);
      renderQuiz();
    }
  }
  if (ans && (e.key === "Enter" || e.key === " " || e.key === "ArrowRight")) {
    e.preventDefault();
    if (state.currentIdx < list.length - 1) {
      state.currentIdx++;
      renderQuiz();
    }
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    if (state.currentIdx > 0) {
      state.currentIdx--;
      renderQuiz();
    }
  }
  if (e.key === "s" || e.key === "S") {
    speak(q.stem);
  }
});

load();
initTheme();

document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);

document.querySelectorAll("nav button, .bottom-nav button").forEach((b) => {
  b.addEventListener("click", () => switchTab(b.dataset.tab));
});

const resetBtn = document.getElementById("reset-quiz");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    if (confirm("সব উত্তর ও স্ট্রিক মুছে ফেলবেন?")) {
      state.answers = {};
      state.streak = 0;
      state.lastPractice = null;
      state.lifetimeCorrect = 0;
      persist();
      renderQuiz();
      updateStreakUI();
    }
  });
}

if (typeof CHAPTERS !== "undefined") {
  renderLessons();
  renderHome();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
