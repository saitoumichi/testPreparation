export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: number[];
  isFinished: boolean;
  timeRemaining: number;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  timeTaken: number;
}

// データベース用の型定義
export interface QuizRecord {
  id?: string;
  player_name: string;
  score: number;
  total_questions: number;
  correct_answers: number;
  time_taken: number;
  percentage: number;
  created_at?: string;
}

export interface LeaderboardEntry {
  id: string;
  player_name: string;
  score: number;
  percentage: number;
  time_taken: number;
  created_at: string;
  rank?: number;
} 