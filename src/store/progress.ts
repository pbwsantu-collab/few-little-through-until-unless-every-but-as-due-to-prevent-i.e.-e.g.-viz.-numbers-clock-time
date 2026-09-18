import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type QuizRecord = {
  picked: string;
  correct: boolean;
};

type ProgressState = {
  completedLessons: string[];
  quiz: Record<number, QuizRecord>;
  bookmarks: string[];
  markLesson: (id: string) => void;
  saveAnswer: (id: number, picked: string, correct: boolean) => void;
  resetQuiz: () => void;
  toggleBookmark: (id: string) => void;
};

const memory: { map: Record<string, string> } = { map: {} };

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessons: [],
      quiz: {},
      bookmarks: [],
      markLesson: (id) =>
        set({
          completedLessons: get().completedLessons.includes(id)
            ? get().completedLessons
            : [...get().completedLessons, id],
        }),
      saveAnswer: (id, picked, correct) =>
        set({ quiz: { ...get().quiz, [id]: { picked, correct } } }),
      resetQuiz: () => set({ quiz: {} }),
      toggleBookmark: (id) => {
        const has = get().bookmarks.includes(id);
        set({
          bookmarks: has ? get().bookmarks.filter((x) => x !== id) : [...get().bookmarks, id],
        });
      },
    }),
    {
      name: "shabdabhed-progress",
      storage: createJSONStorage(() =>
        typeof window === "undefined"
          ? {
              getItem: (k) => memory.map[k] ?? null,
              setItem: (k, v) => {
                memory.map[k] = v;
              },
              removeItem: (k) => {
                delete memory.map[k];
              },
            }
          : localStorage,
      ),
    },
  ),
);
