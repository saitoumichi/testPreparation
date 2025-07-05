'use client';

import { Question } from '@/types/quiz';

interface QuizCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  showResult: boolean;
}

export default function QuizCard({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  showResult 
}: QuizCardProps) {
  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index
        ? "bg-blue-500 text-white border-blue-500"
        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50";
    }

    if (index === question.correctAnswer) {
      return "bg-green-500 text-white border-green-500";
    }
    
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return "bg-red-500 text-white border-red-500";
    }

    return "bg-white text-gray-700 border-gray-300";
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          問題 {question.id}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {question.question}
        </p>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && onAnswerSelect(index)}
            disabled={showResult}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${getOptionStyle(index)} ${
              !showResult ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            <span className="font-medium">
              {String.fromCharCode(65 + index)}. {option}
            </span>
          </button>
        ))}
      </div>

      {showResult && question.explanation && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">解説</h3>
          <p className="text-blue-700">{question.explanation}</p>
        </div>
      )}
    </div>
  );
} 