'use client';

import { useState, useEffect } from 'react';
import { questions } from '@/data/questions';
import { QuizState } from '@/types/quiz';
import type { QuizResult } from '@/types/quiz';
import QuizStart from './QuizStart';
import QuizProgress from './QuizProgress';
import QuizCard from './QuizCard';
import QuizResultComponent from './QuizResult';

const TIME_LIMIT = 300; // 5分
const POINTS_PER_QUESTION = 20;

export default function Quiz() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isFinished: false,
    timeRemaining: TIME_LIMIT
  });
  
  const [isStarted, setIsStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  // タイマーの処理
  useEffect(() => {
    if (!isStarted || quizState.isFinished) return;

    const timer = setInterval(() => {
      setQuizState(prev => {
        if (prev.timeRemaining <= 1) {
          clearInterval(timer);
          return { ...prev, isFinished: true, timeRemaining: 0 };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, quizState.isFinished]);

  // クイズ終了時の処理
  useEffect(() => {
    if (quizState.isFinished) {
      setShowResult(true);
    }
  }, [quizState.isFinished]);

  const handleStart = () => {
    setIsStarted(true);
    setStartTime(Date.now());
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setQuizState(prev => {
      const newAnswers = [...prev.answers];
      newAnswers[prev.currentQuestionIndex] = answerIndex;
      
      const newScore = isCorrect ? prev.score + POINTS_PER_QUESTION : prev.score;
      const isLastQuestion = prev.currentQuestionIndex === questions.length - 1;
      
      return {
        ...prev,
        answers: newAnswers,
        score: newScore,
        currentQuestionIndex: isLastQuestion ? prev.currentQuestionIndex : prev.currentQuestionIndex + 1,
        isFinished: isLastQuestion
      };
    });
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isFinished: false,
      timeRemaining: TIME_LIMIT
    });
    setIsStarted(false);
    setShowResult(false);
    setStartTime(null);
  };

  const getCurrentResult = (): QuizResult => {
    const correctAnswers = quizState.answers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    
    const timeTaken = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    
    return {
      totalQuestions: questions.length,
      correctAnswers,
      score: quizState.score,
      timeTaken
    };
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <QuizStart 
          onStart={handleStart}
          totalQuestions={questions.length}
          timeLimit={TIME_LIMIT}
        />
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <QuizResultComponent 
          result={getCurrentResult()}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const selectedAnswer = quizState.answers[quizState.currentQuestionIndex] ?? null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <QuizProgress
          currentQuestion={quizState.currentQuestionIndex + 1}
          totalQuestions={questions.length}
          score={quizState.score}
          timeRemaining={quizState.timeRemaining}
        />
        
        <QuizCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          showResult={false}
        />
        
        {selectedAnswer !== null && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                if (quizState.currentQuestionIndex < questions.length - 1) {
                  setQuizState(prev => ({
                    ...prev,
                    currentQuestionIndex: prev.currentQuestionIndex + 1
                  }));
                } else {
                  setQuizState(prev => ({ ...prev, isFinished: true }));
                }
              }}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              {quizState.currentQuestionIndex < questions.length - 1 ? '次の問題' : '結果を見る'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 