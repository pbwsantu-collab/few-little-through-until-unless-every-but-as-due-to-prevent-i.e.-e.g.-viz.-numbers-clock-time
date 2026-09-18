import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="mx-auto max-w-lg p-8 text-center">
      <h1 className="font-display text-2xl font-semibold">কিছু একটা গোলমাল</h1>
      <p className="mt-3 text-sm text-muted">{error.message}</p>
      <button
        type="button"
        className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-fg"
        onClick={() => window.location.assign("/")}
      >
        হোমে ফিরুন
      </button>
    </main>
  );
}
