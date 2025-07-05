'use client';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  timeRemaining: number;
}

export default function QuizProgress({
  currentQuestion,
  totalQuestions,
  score,
  timeRemaining
}: QuizProgressProps) {
  const progress = (currentQuestion / totalQuestions) * 100;
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600">
          問題 {currentQuestion} / {totalQuestions}
        </div>
        <div className="text-sm text-gray-600">
          スコア: {score}
        </div>
        <div className={`text-sm font-medium ${
          timeRemaining <= 30 ? 'text-red-600' : 'text-gray-600'
        }`}>
          残り時間: {minutes}:{seconds.toString().padStart(2, '0')}
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
} 