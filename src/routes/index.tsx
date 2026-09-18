import { createFileRoute, Link } from "@tanstack/react-router";
import { chapters } from "@/data/lessons";
import { questions } from "@/data/questions";
import { posWords } from "@/data/pos-words";
import { useProgress } from "@/store/progress";
import { ChevronRight, WifiOff } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const completed = useProgress((s) => s.completedLessons);
  const quiz = useProgress((s) => s.quiz);
  const answered = Object.keys(quiz).length;
  const correct = Object.values(quiz).filter((x) => x.correct).length;

  return (
    <main>
      <section className="rounded-xl border border-border bg-surface p-6 shadow-card md:p-8">
        <p className="text-xs font-medium tracking-widest text-primary uppercase">§308–347 · Textbook companion</p>
        <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">শব্দভেদ</h1>
        <p className="bn mt-3 max-w-2xl text-lg leading-relaxed text-ink">
          Higher English Grammar-এর শব্দ-ব্যবহার অধ্যায়গুলো ক্রমবদ্ধ পাঠে সাজানো। প্রতিটি নিয়মের বাংলা যুক্তি, ইংরেজি উদাহরণ, ব্যতিক্রম, আর একশো পঞ্চাশটি প্রশ্ন — সব অ্যাপেই আছে।
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Few/little through until/unless, sticky phrases (but, due to, prevent, i.e.), and every word in §347 used as different parts of speech.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
          <span className="inline-flex items-center gap-1 rounded-full bg-ok-soft px-3 py-1 text-ok">
            <WifiOff className="size-3.5" /> একবার লোড হলে অফলাইনে চলে
          </span>
          <span className="rounded-full bg-bg px-3 py-1">{chapters.length} অধ্যায়</span>
          <span className="rounded-full bg-bg px-3 py-1">{questions.length} প্রশ্ন</span>
          <span className="rounded-full bg-bg px-3 py-1">{posWords.length} শব্দ · নানা পদ</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/lessons/$id"
            params={{ id: chapters[0].id }}
            className="inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm text-primary-fg"
          >
            প্রথম পাঠ
          </Link>
          <Link to="/practice" className="inline-flex h-11 items-center rounded-md border border-border-strong bg-surface px-4 text-sm">
            ১৫০ প্রশ্ন
          </Link>
        </div>
      </section>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-xs text-muted">পাঠ শেষ</p>
          <p className="font-display mt-1 text-2xl tabular-nums">
            {completed.length}/{chapters.length}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-xs text-muted">সঠিক উত্তর</p>
          <p className="font-display mt-1 text-2xl tabular-nums">
            {correct}/{answered || 0}
          </p>
        </div>
      </div>

      <h2 className="font-display mt-10 text-xl font-semibold">পাঠক্রম</h2>
      <p className="bn mt-1 text-sm text-muted">বইয়ের পাতার জগাখিচুড়ি নয় — ধারণা গড়ে তোলার ক্রম।</p>
      <ol className="mt-4 space-y-2">
        {chapters.map((ch) => {
          const done = completed.includes(ch.id);
          return (
            <li key={ch.id}>
              <Link
                to="/lessons/$id"
                params={{ id: ch.id }}
                className="flex items-start justify-between gap-3 rounded-lg border border-border bg-surface p-4 hover:border-border-strong"
              >
                <div>
                  <p className="text-xs text-primary">
                    অধ্যায় {ch.index} · {ch.article}
                    {done ? " · পড়া হয়েছে" : ""}
                  </p>
                  <p className="font-display mt-0.5 text-lg font-semibold">{ch.titleEn}</p>
                  <p className="bn text-sm text-muted">{ch.titleBn}</p>
                  <p className="bn mt-2 text-sm leading-relaxed text-ink">{ch.summaryBn}</p>
                </div>
                <ChevronRight className="mt-1 size-5 shrink-0 text-subtle" />
              </Link>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
