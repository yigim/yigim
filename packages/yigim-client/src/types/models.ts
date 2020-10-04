export type Question = {
  question: string;
  examples: string[];
  score: number;
};

export type Problem = Question & {
  answer: string;
};

export type Test = {
  id: string;
  name: string;
  problems: Problem[];
};

export type Result = {
  testId: string;
  id: string;
  name: string;
  data: number[];
};
