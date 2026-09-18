import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { posWords } from "@/data/pos-words";
import { useProgress } from "@/store/progress";
import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/words")({ component: Words });

function Words() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(posWords[0].word);
  const bookmarks = useProgress((s) => s.bookmarks);
  const toggle = useProgress((s) => s.toggleBookmark);
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return posWords;
    return posWords.filter((w) => w.word.toLowerCase().includes(s));
  }, [q]);
  const word = posWords.find((w) => w.word === active) ?? filtered[0];

  return (
    <main>
      <h1 className="font-display text-3xl font-semibold">একই শব্দ, নানা পদ</h1>
      <p className="bn mt-2 text-muted">§347 — About থেকে Wrong। বাক্যে কাজ দেখে পদ চিনুন।</p>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="শব্দ খুঁজুন"
        className="mt-4 h-11 w-full rounded-md border border-border bg-surface px-3 text-sm"
      />
      <div className="mt-4 flex flex-wrap gap-1.5">
        {filtered.map((w) => (
          <button
            key={w.word}
            type="button"
            onClick={() => setActive(w.word)}
            className={cn(
              "h-9 rounded-md px-3 text-sm",
              active === w.word ? "bg-primary text-primary-fg" : "border border-border bg-surface",
            )}
          >
            {w.word}
          </button>
        ))}
      </div>
      {word ? (
        <section className="mt-6 rounded-xl border border-border bg-surface p-5 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold">{word.word}</h2>
            <button type="button" onClick={() => toggle(word.word)} className="rounded-md p-2 hover:bg-bg" aria-label="bookmark">
              <Bookmark className={cn("size-5", bookmarks.includes(word.word) ? "fill-primary text-primary" : "text-muted")} />
            </button>
          </div>
          <ul className="mt-4 space-y-3">
            {word.uses.map((u) => (
              <li key={u.pos + u.example} className="rounded-md bg-bg p-3">
                <p className="text-xs font-medium text-primary">
                  {u.pos} · {u.posBn}
                </p>
                <p className="mt-1">{u.example}</p>
                <p className="bn mt-0.5 text-sm text-muted">{u.exampleBn}</p>
              </li>
            ))}
          </ul>
          {word.notes?.map((n) => (
            <p key={n.en} className="bn mt-4 rounded-md bg-warn-soft p-3 text-sm text-warn">
              {n.bn} <span className="block mt-1 text-muted">{n.en}</span>
            </p>
          ))}
        </section>
      ) : (
        <p className="mt-6 text-muted">কোনো শব্দ মেলেনি।</p>
      )}
    </main>
  );
}
