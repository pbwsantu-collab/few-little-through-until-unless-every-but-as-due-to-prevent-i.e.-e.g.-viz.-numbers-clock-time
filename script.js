/* শব্দভেদ — script.js */
const KEY = "shabdabhed-html-quiz";
let answers = JSON.parse(localStorage.getItem(KEY) || "{}");

function save() {
  localStorage.setItem(KEY, JSON.stringify(answers));
}

function score() {
  const ids = Object.keys(answers);
  const correct = ids.filter((id) => answers[id].correct).length;
  const total = typeof QUESTIONS !== "undefined" ? QUESTIONS.length : 0;
  return { answered: ids.length, correct, total };
}

function renderScore(el) {
  if (!el) return;
  const s = score();
  el.innerHTML = `
    <div class="stat"><div class="label">উত্তর</div><div class="val">${s.answered}/${s.total}</div></div>
    <div class="stat"><div class="label">সঠিক</div><div class="val">${s.correct}</div></div>
    <div class="stat"><div class="label">শুদ্ধতা</div><div class="val">${s.answered ? Math.round((100 * s.correct) / s.answered) : 0}%</div></div>`;
}

function renderHome() {
  const toc = document.getElementById("toc");
  if (typeof CHAPTERS === "undefined") {
    toc.innerHTML = '<p class="bn">ডেটা লোড হয়নি। data-chapters.js চেক করুন।</p>';
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
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
    });
  });
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
            <p class="en">${s.ideaEn}</p>
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
              <div><div>${ex.en}</div>${ex.bn ? `<div class="bn" style="opacity:.9;margin-top:2px">${ex.bn}</div>` : ""}</div>
            </div>`
            )
            .join("")}
        </div>`
        )
        .join("")}
    </div>`
  ).join("");
}

function renderQuiz() {
  renderScore(document.getElementById("practice-score"));
  const quiz = document.getElementById("quiz");
  if (typeof QUESTIONS === "undefined") {
    quiz.innerHTML = '<p class="bn">প্রশ্ন লোড হয়নি।</p>';
    return;
  }
  quiz.innerHTML = QUESTIONS.map((q) => {
    const ans = answers[q.id];
    return `<div class="card q-card" data-qid="${q.id}">
      <p class="meta">#${q.id} · ${q.chapter}</p>
      <p class="q-stem">${q.stem}</p>
      <p class="bn" style="color:var(--muted);font-size:.9rem">${q.stemBn}</p>
      <div class="q-opts">${q.options
        .map((opt) => {
          let cls = "";
          if (ans) {
            if (opt === q.answer) cls = "correct";
            else if (opt === ans.picked) cls = "wrong";
          }
          return `<button type="button" data-opt="${String(opt).replace(/"/g, "&quot;")}" class="${cls}" ${ans ? "disabled" : ""}>${opt}</button>`;
        })
        .join("")}</div>
    </div>`;
  }).join("");

  document.querySelectorAll(".q-opts button:not(:disabled)").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".q-card");
      const id = +card.dataset.qid;
      const q = QUESTIONS.find((x) => x.id === id);
      const picked = btn.dataset.opt;
      answers[id] = { picked, correct: picked === q.answer };
      save();
      renderQuiz();
    });
  });
}

function switchTab(name) {
  document.querySelectorAll("main > section").forEach((s) => s.classList.add("hidden"));
  document.getElementById("tab-" + name).classList.remove("hidden");
  document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
  if (name === "home") renderHome();
  if (name === "practice") renderQuiz();
}

document.querySelectorAll("nav button").forEach((b) => {
  b.addEventListener("click", () => switchTab(b.dataset.tab));
});

const resetBtn = document.getElementById("reset-quiz");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    if (confirm("সব উত্তর মুছে ফেলবেন?")) {
      answers = {};
      save();
      renderQuiz();
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
