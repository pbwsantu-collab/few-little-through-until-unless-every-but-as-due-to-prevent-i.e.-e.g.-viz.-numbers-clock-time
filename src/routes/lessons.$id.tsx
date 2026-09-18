import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { chapterById, chapters } from "@/data/lessons";
import { RuleBlock } from "@/components/rule-block";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/lessons/$id")({
  component: LessonPage,
});

function LessonPage() {
  const { id } = Route.useParams();
  const chapter = chapterById[id];
  if (!chapter) throw notFound();

  const mark = useProgress((s) => s.markLesson);
  const done = useProgress((s) => s.completedLessons.includes(id));
  const idx = chapters.findIndex((c) => c.id === id);
  const prev = chapters[idx - 1];
  const next = chapters[idx + 1];

  return (
    <article>
      <p className="text-xs font-medium text-primary">
        অধ্যায় {chapter.index} / {chapters.length} · {chapter.article} · ~{chapter.minutes} মিনিট
      </p>
      <h1 className="font-display mt-1 text-3xl font-semibold">{chapter.titleEn}</h1>
      <p className="bn mt-1 text-lg text-muted">{chapter.titleBn}</p>
      <p className="bn mt-4 max-w-2xl leading-relaxed">{chapter.summaryBn}</p>

      <div className="mt-6 space-y-5">
        {chapter.sections.map((s) => (
          <RuleBlock key={s.id} section={s} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button type="button" onClick={() => mark(id)}>
          {done ? "পড়া হিসেবে চিহ্নিত" : "এই পাঠ শেষ করুন"}
        </Button>
        <Link to="/practice" search={{ chapter: id }} className="text-sm text-primary underline-offset-2 hover:underline">
          এই অধ্যায়ের প্রশ্ন
        </Link>
      </div>

      <div className="mt-8 flex justify-between gap-3 border-t border-border pt-6">
        {prev ? (
          <Link to="/lessons/$id" params={{ id: prev.id }} className="text-sm text-muted">
            ← {prev.titleBn}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to="/lessons/$id" params={{ id: next.id }} className="text-sm text-primary">
            {next.titleBn} →
          </Link>
        ) : (
          <Link to="/practice" className="text-sm text-primary">
            ১৫০ প্রশ্নে যান →
          </Link>
        )}
      </div>
    </article>
  );
}
