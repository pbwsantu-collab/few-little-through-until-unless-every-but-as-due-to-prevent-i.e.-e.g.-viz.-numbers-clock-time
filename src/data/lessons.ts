import type { Chapter } from "./types";

/**
 * Full lesson content lives in the original Grok workspace zip:
 * IMKta5pVSavp2AmL-grok-workspace.zip → src/data/lessons.ts
 *
 * This stub keeps the app structure importable. Replace with the full file
 * from the zip for complete bilingual lessons (10 chapters, §308–347).
 */
export const chapters: Chapter[] = [
  {
    id: "few-little",
    index: 1,
    article: "§308–310",
    titleEn: "Few, Little, Less, Fewer",
    titleBn: "Few, Little, Less ও Fewer",
    summaryBn: "সংখ্যা না পরিমাণ? নেতিবাচক না ইতিবাচক? এই পার্থক্যই পরীক্ষার ভিত্তি।",
    minutes: 12,
    sections: [
      {
        id: "few",
        article: "§308",
        titleEn: "Few, a few, the few, not a few",
        titleBn: "Few, a few, the few, not a few",
        ideaBn: "Few সংখ্যা বোঝায় এবং বহুবচন বিশেষ্যের সাথে বসে।",
        ideaEn: "Few counts number and takes a plural noun.",
        bullets: [
          { en: "Few = almost none (negative).", bn: "Few = প্রায় কেউই নেই।" },
          { en: "A few = some (affirmative).", bn: "A few = কিছু আছে।" },
        ],
        examples: [
          { ok: true, en: "I have few friends here.", bn: "এখানে আমার প্রায় কোনো বন্ধু নেই।" },
          { ok: true, en: "I have a few friends here.", bn: "এখানে আমার কিছু বন্ধু আছে।" },
        ],
      },
    ],
  },
  {
    id: "quantity-words",
    index: 2,
    article: "§311–314",
    titleEn: "Lots, people, sometime, whole/all",
    titleBn: "Lots, people, sometime, whole ও all",
    summaryBn: "অনানুষ্ঠানিক পরিমাণ, জাতি-জন, সময়ের বানান।",
    minutes: 10,
    sections: [],
  },
  {
    id: "much-very-too",
    index: 3,
    article: "§315–318",
    titleEn: "Much, many, very, too, enough",
    titleBn: "Much, many, very, too, enough",
    summaryBn: "Much/many ও intensifiers।",
    minutes: 10,
    sections: [],
  },
  {
    id: "any-some-each",
    index: 4,
    article: "§319–320",
    titleEn: "Any, some, anyone, many a, each, every",
    titleBn: "Any, some, anyone, many a, each, every",
    summaryBn: "Any/some ও distributive determiners।",
    minutes: 10,
    sections: [],
  },
  {
    id: "order-degree",
    index: 5,
    article: "§321–327",
    titleEn: "Order & degree",
    titleBn: "Order ও degree",
    summaryBn: "Later/last, farther, elder…",
    minutes: 10,
    sections: [],
  },
  {
    id: "adverb-pairs",
    index: 6,
    article: "§328–332",
    titleEn: "Adverb pairs",
    titleBn: "Adverb pairs",
    summaryBn: "Late/hard/short, beside/presently…",
    minutes: 10,
    sections: [],
  },
  {
    id: "prepositions-place",
    index: 7,
    article: "§333–336",
    titleEn: "Prepositions of place",
    titleBn: "স্থানের preposition",
    summaryBn: "By/with, at/in/into, among/from…",
    minutes: 10,
    sections: [],
  },
  {
    id: "prepositions-time",
    index: 8,
    article: "§337–340",
    titleEn: "Prepositions of time",
    titleBn: "কালের preposition",
    summaryBn: "Since/for, until/unless…",
    minutes: 10,
    sections: [],
  },
  {
    id: "sticky-phrases",
    index: 9,
    article: "§341–346",
    titleEn: "Sticky phrases",
    titleBn: "Sticky phrases",
    summaryBn: "But, as, due to, prevent, i.e./e.g./viz.…",
    minutes: 12,
    sections: [],
  },
  {
    id: "parts-of-speech",
    index: 10,
    article: "§347",
    titleEn: "Parts of speech",
    titleBn: "Parts of speech",
    summaryBn: "একই শব্দ, নানা পদ।",
    minutes: 15,
    sections: [],
  },
];

export const chapterById = Object.fromEntries(chapters.map((c) => [c.id, c]));
