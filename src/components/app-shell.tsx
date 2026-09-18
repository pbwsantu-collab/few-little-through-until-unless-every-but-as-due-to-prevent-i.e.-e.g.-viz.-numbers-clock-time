import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, BookMarked, ListChecks, Shapes, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "হোম", icon: Home },
  { to: "/reference", label: "সব নিয়ম", icon: BookOpen },
  { to: "/practice", label: "১৫০ প্রশ্ন", icon: ListChecks },
  { to: "/words", label: "পদ", icon: Shapes },
  { to: "/progress", label: "অগ্রগতি", icon: BookMarked },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg">
      <header className="sticky top-0 z-20 border-b border-border bg-bg-elevated/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-baseline gap-2 no-underline">
            <span className="font-display text-xl font-semibold tracking-tight text-primary">শব্দভেদ</span>
            <span className="hidden text-xs text-muted sm:inline">Higher English Grammar</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm",
                    active ? "bg-primary-soft text-primary" : "text-muted hover:bg-surface",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-4 pb-24 pt-6 md:pb-12">{children}</div>
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg-elevated/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        <ul className="grid grid-cols-5">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px]",
                    active ? "text-primary" : "text-muted",
                  )}
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
