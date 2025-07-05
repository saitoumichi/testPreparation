import { Question } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "日本の首都は？",
    options: ["大阪", "京都", "東京", "横浜"],
    correctAnswer: 2,
    explanation: "日本の首都は東京です。"
  },
  {
    id: 2,
    question: "1 + 1 = ?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "1 + 1 = 2 です。"
  },
  {
    id: 3,
    question: "太陽系で最も大きな惑星は？",
    options: ["地球", "火星", "木星", "土星"],
    correctAnswer: 2,
    explanation: "木星は太陽系で最も大きな惑星です。"
  },
  {
    id: 4,
    question: "HTMLの略語は？",
    options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correctAnswer: 0,
    explanation: "HTMLはHyperText Markup Languageの略です。"
  },
  {
    id: 5,
    question: "Reactはどの会社が開発しましたか？",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correctAnswer: 1,
    explanation: "ReactはFacebook（現在のMeta）が開発しました。"
  }
]; 