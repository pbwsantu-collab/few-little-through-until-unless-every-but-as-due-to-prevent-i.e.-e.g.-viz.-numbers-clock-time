import type { PosWord } from "./types";

/**
 * Full word list is in the workspace zip (src/data/pos-words.ts).
 * Stub keeps the /words route importable.
 */
export const posWords: PosWord[] = [
  {
    word: "About",
    uses: [
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He is walking about.", exampleBn: "সে এদিক-ওদিক হাঁটছে।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "What do you know about him?", exampleBn: "তাকে নিয়ে তুমি কী জানো?" },
    ],
  },
  {
    word: "Above",
    uses: [
      { pos: "Noun", posBn: "বিশেষ্য", example: "I look for help from above.", exampleBn: "আমি উপর থেকে সাহায্য চাই।" },
      { pos: "Adjective", posBn: "বিশেষণ", example: "Give the substance of the above passage.", exampleBn: "উপরের অনুচ্ছেদের সারমর্ম দাও।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "Look above.", exampleBn: "উপরে তাকাও।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "He is above meanness.", exampleBn: "সে নীচতা থেকে ঊর্ধ্বে।" },
    ],
  },
  {
    word: "After",
    uses: [
      { pos: "Adjective", posBn: "বিশেষণ", example: "His after life was miserable.", exampleBn: "তার পরবর্তী জীবন দুঃখময় ছিল।" },
      { pos: "Adverb", posBn: "ক্রিয়াবিশেষণ", example: "He came soon after.", exampleBn: "সে কিছুক্ষণ পরেই এল।" },
      { pos: "Preposition", posBn: "পদান্বয়ী অব্যয়", example: "There is none to look after me here.", exampleBn: "এখানে আমাকে দেখাশোনা করার কেউ নেই।" },
      { pos: "Conjunction", posBn: "সংযোজক", example: "He went after we had left.", exampleBn: "আমরা চলে যাওয়ার পর সে গেল।" },
    ],
  },
];
