'use client';

import { Question } from '@/types/quiz';

interface QuizCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
<<<<<<< HEAD
  showResult: boolean;
=======
>>>>>>> 0385e9f (初期コミット)
}

export default function QuizCard({ 
  question, 
  selectedAnswer, 
<<<<<<< HEAD
  onAnswerSelect, 
  showResult 
}: QuizCardProps) {
  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index
        ? "bg-blue-500 text-white border-blue-500"
        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50";
    }

=======
  onAnswerSelect 
}: QuizCardProps) {
  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.correctAnswer;

  const getOptionStyle = (index: number) => {
    if (!isAnswered) {
      return "bg-white text-gray-700 border-gray-300 hover:bg-gray-50";
    }

    // 正解の選択肢は常に緑色
>>>>>>> 0385e9f (初期コミット)
    if (index === question.correctAnswer) {
      return "bg-green-500 text-white border-green-500";
    }
    
<<<<<<< HEAD
=======
    // 選択した選択肢が間違っている場合は赤色
>>>>>>> 0385e9f (初期コミット)
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return "bg-red-500 text-white border-red-500";
    }

<<<<<<< HEAD
    return "bg-white text-gray-700 border-gray-300";
=======
    // 選択していない間違った選択肢はグレー
    return "bg-gray-200 text-gray-500 border-gray-300";
  };

  const getOptionIcon = (index: number) => {
    if (!isAnswered) return null;
    
    if (index === question.correctAnswer) {
      return "✓";
    }
    
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return "✗";
    }
    
    return null;
>>>>>>> 0385e9f (初期コミット)
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
<<<<<<< HEAD
            onClick={() => !showResult && onAnswerSelect(index)}
            disabled={showResult}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${getOptionStyle(index)} ${
              !showResult ? 'cursor-pointer' : 'cursor-default'
            }`}
=======
            onClick={() => !isAnswered && onAnswerSelect(index)}
            disabled={isAnswered}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${getOptionStyle(index)} ${
              !isAnswered ? 'cursor-pointer' : 'cursor-default'
            } relative`}
>>>>>>> 0385e9f (初期コミット)
          >
            <span className="font-medium">
              {String.fromCharCode(65 + index)}. {option}
            </span>
<<<<<<< HEAD
=======
            {getOptionIcon(index) && (
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl font-bold">
                {getOptionIcon(index)}
              </span>
            )}
>>>>>>> 0385e9f (初期コミット)
          </button>
        ))}
      </div>

<<<<<<< HEAD
      {showResult && question.explanation && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">解説</h3>
          <p className="text-blue-700">{question.explanation}</p>
=======
      {isAnswered && (
        <div className="mt-6 p-4 rounded-lg border-2">
          <div className="flex items-center mb-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 ${
              isCorrect ? 'bg-green-500' : 'bg-red-500'
            }`}>
              {isCorrect ? '✓' : '✗'}
            </div>
            <div>
              <h3 className={`font-semibold text-lg ${
                isCorrect ? 'text-green-700' : 'text-red-700'
              }`}>
                {isCorrect ? '正解！' : '不正解'}
              </h3>
              <p className="text-sm text-gray-600">
                正解: {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
              </p>
            </div>
          </div>
          
          {question.explanation && (
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-1">解説</h4>
              <p className="text-blue-700 text-sm">{question.explanation}</p>
            </div>
          )}
>>>>>>> 0385e9f (初期コミット)
        </div>
      )}
    </div>
  );
} 