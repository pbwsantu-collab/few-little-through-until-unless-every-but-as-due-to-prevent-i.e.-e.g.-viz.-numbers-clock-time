import type { Question } from "./types";

/**
 * Full 150 questions are in the workspace zip (src/data/questions.ts).
 * Stub below keeps imports working.
 */
function q(
  id: number,
  chapterId: string,
  stem: string,
  stemBn: string,
  options: string[],
  answer: string,
  whyEn: string,
  whyBn: string,
  type: Question["type"] = "choice",
): Question {
  return { id, chapterId, type, stem, stemBn, options, answer, whyEn, whyBn };
}

export const questions: Question[] = [
  q(1, "few-little", "I have ___ friends here. (practically none)", "এখানে বন্ধু প্রায় নেই।", ["few", "a few", "the few", "not a few"], "few", "Few is negative: almost none.", "Few = প্রায় কেউই নেই।"),
  q(2, "few-little", "Give me ___ more biscuits. (some)", "কিছু বিস্কুট চাই।", ["few", "a few", "the few", "little"], "a few", "A few = some, opposed to none.", "A few = কিছু আছে।"),
  q(3, "few-little", "___ friends I had left me.", "যে অল্প বন্ধু ছিল তারা চলে গেল।", ["Few", "A few", "The few", "Not a few"], "The few", "The few = all of the small number that existed.", "The few = যা ছিল তার সব।"),
  q(4, "few-little", "He has ___ time to spare. (almost none)", "ফাঁকা সময় প্রায় নেই।", ["few", "little", "a little", "the little"], "little", "Little is negative quantity.", "Little = প্রায় কিছুই নেই।"),
  q(5, "few-little", "There is ___ milk left. (some)", "কিছু দুধ আছে।", ["little", "a little", "the little", "few"], "a little", "A little = some quantity.", "A little = কিছু পরিমাণ।"),
];
