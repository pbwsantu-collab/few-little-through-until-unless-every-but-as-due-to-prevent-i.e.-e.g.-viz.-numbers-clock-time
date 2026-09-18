import { createFileRoute, Link } from "@tanstack/react-router";
import { chapters } from "@/data/lessons";
import { questions } from "@/data/questions";
import { useProgress } from "@/store/progress";

export const Route = createFileRoute("/progress")({ component: ProgressPage });

function ProgressPage() {
  const completed = useProgress((s) => s.completedLessons);
  const quiz = useProgress((s) => s.quiz);
  const bookmarks = useProgress((s) => s.bookmarks);
  const answered = Object.keys(quiz).length;
  const correct = Object.values(quiz).filter((x) => x.correct).length;
  const weak = questions.filter((q) => quiz[q.id] && !quiz[q.id].correct);

  return (
    <main>
      <h1 className="font-display text-3xl font-semibold">অগ্রগতি</h1>
      <p className="bn mt-2 text-muted">স্কোর এই ডিভাইসেই থাকে — সাইন-ইন লাগে না।</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="পড়া অধ্যায়" value={`${completed.length}/${chapters.length}`} />
        <Stat label="উত্তর দেওয়া" value={`${answered}/150`} />
        <Stat label="সঠিক" value={`${correct}/${answered || 0}`} />
      </div>
      {bookmarks.length > 0 ? (
        <p className="mt-6 text-sm">
          বুকমার্ক: {bookmarks.join(", ")} — <Link to="/words" className="text-primary">পদ তালিকা</Link>
        </p>
      ) : null}
      <h2 className="font-display mt-8 text-xl font-semibold">দুর্বল প্রশ্ন</h2>
      {weak.length === 0 ? (
        <p className="mt-2 text-sm text-muted">এখনো ভুল নেই, অথবা অনুশীলন শুরু হয়নি।</p>
      ) : (
        <ul className="mt-3 space-y-2">
          {weak.slice(0, 20).map((q) => (
            <li key={q.id} className="rounded-md border border-border bg-surface p-3 text-sm">
              <span className="text-xs text-primary">#{q.id}</span> {q.stem}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="font-display mt-1 text-2xl tabular-nums">{value}</p>
    </div>
  );
}
