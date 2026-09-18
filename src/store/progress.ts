import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  completed: string[];
  answers: Record<number, { correct: boolean; chosen?: string | number }>;
  markComplete: (chapterId: string) => void;
  recordAnswer: (id: number, correct: boolean, chosen?: string | number) => void;
  reset: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      completed: [],
      answers: {},
      markComplete: (chapterId) =>
        set((s) => ({
          completed: s.completed.includes(chapterId)
            ? s.completed
            : [...s.completed, chapterId],
        })),
      recordAnswer: (id, correct, chosen) =>
        set((s) => ({
          answers: { ...s.answers, [id]: { correct, chosen } },
        })),
      reset: () => set({ completed: [], answers: {} }),
    }),
    { name: "shabdabhed-progress" },
  ),
);
