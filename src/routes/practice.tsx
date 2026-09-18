import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { questions } from "@/data/questions";
import { chapters } from "@/data/lessons";
import { useProgress } from "@/store/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Search = { chapter?: string };

export const Route = createFileRoute("/practice")({
  component: Practice,
  validateSearch: (s: Record<string, unknown>): Search => ({
    chapter: typeof s.chapter === "string" ? s.chapter : undefined,
  }),
});

function Practice() {
  const { chapter } = Route.useSearch();
  const [filter, setFilter] = useState(chapter ?? "all");
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const save = useProgress((s) => s.saveAnswer);
  const resetQuiz = useProgress((s) => s.resetQuiz);
  const quiz = useProgress((s) => s.quiz);

  const list = useMemo(
    () => (filter === "all" ? questions : questions.filter((q) => q.chapterId === filter)),
    [filter],
  );
  const q = list[Math.min(i, list.length - 1)];
  const revealed = picked !== null;
  const isCorrect = picked === q?.answer;
  const answeredCount = list.filter((item) => quiz[item.id]).length;
  const correctCount = list.filter((item) => quiz[item.id]?.correct).length;

  if (!q) return null;

  return (
    <main>
      <h1 className="font-display text-3xl font-semibold">১৫০টি প্রশ্ন</h1>
      <p className="bn mt-2 text-muted">বইয়ের অনুশীলনী ৩৮–৪৩ এবং প্রতিটি ব্যতিক্রম ঢোকানো হয়েছে। উত্তর স্থানীয়ভাবে সংরক্ষিত।</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className={cn("h-9 rounded-md px-3 text-sm", filter === "all" ? "bg-primary text-primary-fg" : "bg-surface border border-border")}
          onClick={() => {
            setFilter("all");
            setI(0);
            setPicked(null);
          }}
        >
          সব
        </button>
        {chapters.map((c) => (
          <button
            key={c.id}
            type="button"
            className={cn("h-9 rounded-md px-3 text-sm", filter === c.id ? "bg-primary text-primary-fg" : "bg-surface border border-border")}
            onClick={() => {
              setFilter(c.id);
              setI(0);
              setPicked(null);
            }}
          >
            {c.index}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted tabular-nums">
        প্রশ্ন {i + 1} / {list.length} · সঠিক {correctCount}/{answeredCount}
      </p>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
        <div className="h-full bg-primary" style={{ width: `${((i + 1) / list.length) * 100}%` }} />
      </div>

      <section className="mt-6 rounded-xl border border-border bg-surface p-5 shadow-card">
        <p className="text-xs text-primary">প্রশ্ন {q.id}</p>
        <p className="bn mt-2 text-lg leading-relaxed">{q.stemBn}</p>
        <p className="mt-2 font-medium">{q.stem}</p>
        <ul className="mt-5 space-y-2">
          {q.options.map((opt) => {
            const show = revealed && (opt === q.answer || opt === picked);
            return (
              <li key={opt}>
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => {
                    setPicked(opt);
                    save(q.id, opt, opt === q.answer);
                  }}
                  className={cn(
                    "w-full rounded-md border px-3 py-3 text-left text-sm min-h-11",
                    !show && "border-border bg-bg hover:border-border-strong",
                    revealed && opt === q.answer && "border-ok bg-ok-soft text-ok",
                    revealed && opt === picked && opt !== q.answer && "border-bad bg-bad-soft text-bad",
                  )}
                >
                  {opt}
                </button>
              </li>
            );
          })}
        </ul>
        {revealed ? (
          <div className={cn("mt-4 rounded-md p-3 text-sm", isCorrect ? "bg-ok-soft text-ok" : "bg-bad-soft text-bad")}>
            <p className="bn font-medium">{isCorrect ? "সঠিক।" : "ভুল।"} {q.whyBn}</p>
            <p className="mt-1 opacity-90">{q.whyEn}</p>
          </div>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            disabled={i === 0}
            onClick={() => {
              setI((n) => Math.max(0, n - 1));
              setPicked(null);
            }}
          >
            আগেরটি
          </Button>
          <Button
            type="button"
            disabled={i >= list.length - 1}
            onClick={() => {
              setI((n) => Math.min(list.length - 1, n + 1));
              setPicked(null);
            }}
          >
            পরেরটি
          </Button>
        </div>
      </section>

      <button type="button" className="mt-6 text-sm text-muted underline" onClick={() => resetQuiz()}>
        স্কোর মুছুন
      </button>
    </main>
  );
}
