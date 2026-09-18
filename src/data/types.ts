export type Example = {
  en: string;
  bn?: string;
  ok: boolean;
  note?: string;
};

export type ExceptionNote = {
  titleEn: string;
  titleBn: string;
  bodyEn: string;
  bodyBn: string;
  examples?: Example[];
};

export type Section = {
  id: string;
  article: string;
  titleEn: string;
  titleBn: string;
  ideaBn: string;
  ideaEn: string;
  bullets: { en: string; bn: string }[];
  examples: Example[];
  exceptions?: ExceptionNote[];
};

export type Chapter = {
  id: string;
  index: number;
  article: string;
  titleEn: string;
  titleBn: string;
  summaryBn: string;
  minutes: number;
  sections: Section[];
};

export type QuestionType = "choice" | "blank" | "error";

export type Question = {
  id: number;
  chapterId: string;
  type: QuestionType;
  stem: string;
  stemBn: string;
  options: string[];
  answer: string;
  whyEn: string;
  whyBn: string;
};

export type PosUse = {
  pos: string;
  posBn: string;
  example: string;
  exampleBn: string;
};

export type PosWord = {
  word: string;
  uses: PosUse[];
  notes?: { en: string; bn: string }[];
};
