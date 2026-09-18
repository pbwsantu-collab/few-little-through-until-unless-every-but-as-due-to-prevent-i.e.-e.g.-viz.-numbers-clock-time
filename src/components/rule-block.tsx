import { AlertTriangle, Check, X } from "lucide-react";
import type { Section } from "@/data/types";
import { cn } from "@/lib/utils";

export function RuleBlock({ section }: { section: Section }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-5 shadow-card">
      <p className="text-xs font-medium tracking-wide text-primary">{section.article}</p>
      <h3 className="mt-1 font-display text-xl font-semibold text-ink">{section.titleEn}</h3>
      <p className="bn mt-0.5 text-base text-muted">{section.titleBn}</p>
      <p className="bn mt-4 text-[1.05rem] leading-relaxed text-ink">{section.ideaBn}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{section.ideaEn}</p>
      <ul className="mt-4 space-y-3">
        {section.bullets.map((b) => (
          <li key={b.en} className="rounded-md bg-bg px-3 py-2.5">
            <p className="bn text-[0.98rem] text-ink">{b.bn}</p>
            <p className="mt-1 text-sm text-muted">{b.en}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 space-y-2">
        {section.examples.map((ex) => (
          <div
            key={ex.en}
            className={cn(
              "flex gap-2 rounded-md px-3 py-2 text-sm",
              ex.ok ? "bg-ok-soft text-ok" : "bg-bad-soft text-bad",
            )}
          >
            {ex.ok ? <Check className="mt-0.5 size-4 shrink-0" /> : <X className="mt-0.5 size-4 shrink-0" />}
            <div>
              <p className="font-medium">{ex.ok ? "সঠিক" : "ভুল"} — {ex.en}</p>
              {ex.bn ? <p className="bn mt-0.5 opacity-90">{ex.bn}</p> : null}
              {ex.note ? <p className="bn mt-1 text-xs">{ex.note}</p> : null}
            </div>
          </div>
        ))}
      </div>
      {section.exceptions?.map((ex) => (
        <aside key={ex.titleEn} className="mt-4 rounded-lg border border-warn/30 bg-warn-soft p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-warn">
            <AlertTriangle className="size-4" />
            ব্যতিক্রম · {ex.titleBn}
          </p>
          <p className="bn mt-2 text-sm leading-relaxed text-ink">{ex.bodyBn}</p>
          <p className="mt-1 text-sm text-muted">{ex.bodyEn}</p>
          {ex.examples?.map((e) => (
            <p key={e.en} className={cn("mt-2 text-sm", e.ok ? "text-ok" : "text-bad")}>
              {e.ok ? "✓" : "✗"} {e.en}
            </p>
          ))}
        </aside>
      ))}
    </article>
  );
}
