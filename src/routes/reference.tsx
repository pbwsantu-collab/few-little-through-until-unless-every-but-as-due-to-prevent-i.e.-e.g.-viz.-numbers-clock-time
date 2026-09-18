import { createFileRoute } from "@tanstack/react-router";
import { chapters } from "@/data/lessons";
import { RuleBlock } from "@/components/rule-block";

export const Route = createFileRoute("/reference")({ component: Reference });

function Reference() {
  return (
    <main>
      <h1 className="font-display text-3xl font-semibold">সব নিয়ম এক নজরে</h1>
      <p className="bn mt-2 max-w-2xl text-muted">
        বইয়ের §308 থেকে §347 — কোনো নিয়ম বা ব্যতিক্রম বাদ নেই। অফলাইনে পড়ার জন্য এই পাতাই পুরো পাঠ্য।
      </p>
      {chapters.map((ch) => (
        <section key={ch.id} className="mt-10">
          <h2 className="font-display text-2xl font-semibold">
            {ch.index}. {ch.titleEn}
          </h2>
          <p className="bn text-muted">{ch.titleBn}</p>
          <div className="mt-4 space-y-4">
            {ch.sections.map((s) => (
              <RuleBlock key={s.id} section={s} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
