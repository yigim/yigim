export type Question = {
  question: string;
  examples: string[];
  score: number;
};

export type Problem = Question & {
  answer: string;
};

export type Test = Problem[];
