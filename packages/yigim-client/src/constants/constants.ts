export type Question = {
  question: string;
  examples: string[];
  score: number;
};

export type Problem = {
  question: string;
  examples: string[];
  answer: string;
  score: number;
};

export const BACKEND_URL = 'https://2y0mfq1cmc.execute-api.ap-northeast-2.amazonaws.com/prod';

export const DefaultQuestions = (name: string): Question[] => [
  {
    question: name + '의 주량은?',
    examples: ['1병', '2병', '3병', '반 병병병병병병'],
    score: 3,
  },
  {
    question: name + '의 입대 날짜는?',
    examples: ['17년 2월', '18년 2월', '19년 2월', '미필'],
    score: 3,
  },
  {
    question: name + '의 나이는?',
    examples: ['10살', '20살', '22살', '30살'],
    score: 3,
  },
  {
    question: name + '의 가족관계는?',
    examples: ['외동', '누나', '여동생', '누나, 여동생'],
    score: 3,
  },
  {
    question: name + '이 좋아하는 숫자는?',
    examples: ['1', '2', '3', '4'],
    score: 3,
  },
  {
    question: name + '이 싫어하는 숫자는??',
    examples: ['1', '2', '3', '4'],
    score: 3,
  },
  {
    question: name + '이 좋아하는 알파벳은?',
    examples: ['a', 'b', 'c', 'd'],
    score: 3,
  },
  {
    question: name + '이 싫어하는 알파벳은?',
    examples: ['a', 'b', 'c', 'd'],
    score: 3,
  },
  {
    question: name + '은 남자인가?',
    examples: ['O', 'X'],
    score: 3,
  },
  {
    question: name + '은 사람인가?',
    examples: ['O', 'X'],
    score: 3,
  },
  {
    question: name + '의 연애 상태는?',
    examples: ['연애하는 중', '연애하지 않는 중', '썸타는 중'],
    score: 3,
  },
  {
    question: name + '가 좋아하는 활동은?',
    examples: ['야외 활동', '실내 활동'],
    score: 3,
  },
  {
    question: name + '가 다닌 고등학교는?',
    examples: ['영재고', '과학고', '자사고', '외고'],
    score: 3,
  },
  {
    question: name + '는?',
    examples: ['첫째', '둘째', '막내', '외동'],
    score: 3,
  },
  {
    question: name + '의 연령대는?',
    examples: ['청년층', '장년층', '노년층'],
    score: 3,
  },
  {
    question: name + '의 연애 상태는?',
    examples: ['연애하는 중', '연애하지 않는 중', '썸타는 중'],
    score: 3,
  },
  {
    question: name + '의 연애 상태는?',
    examples: ['연애하는 중', '연애하지 않는 중', '썸타는 중'],
    score: 3,
  },
  {
    question: name + '의 연애 상태는?',
    examples: ['연애하는 중', '연애하지 않는 중', '썸타는 중'],
    score: 3,
  },
  {
    question: name + '의 연애 상태는?',
    examples: ['연애하는 중', '연애하지 않는 중', '썸타는 중'],
    score: 3,
  },
  {
    question: name + '가 가장 좋아하는 생선은?',
    examples: ['고등어', '갈치', '생일선물'],
    score: 3,
  },
];
