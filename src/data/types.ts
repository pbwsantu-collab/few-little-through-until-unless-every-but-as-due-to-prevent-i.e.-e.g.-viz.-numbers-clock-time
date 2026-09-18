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
  promptEn: string;
  promptBn?: string;
  options?: string[];
  answer: string | number;
  explanationBn?: string;
  explanationEn?: string;
};

export type PosWord = {
  word: string;
  pos: string;
  meaningBn: string;
  exampleEn?: string;
};
