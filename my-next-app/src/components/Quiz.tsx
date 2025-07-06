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
const AUTO_NEXT_DELAY = 3000; // 3秒後に自動で次の問題へ

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
  const [answerTime, setAnswerTime] = useState<number | null>(null);
  const [progressPercent, setProgressPercent] = useState(0);

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

  // 答えを選択した後の自動進行
  useEffect(() => {
    const currentAnswer = quizState.answers[quizState.currentQuestionIndex];
    if (currentAnswer !== undefined && !quizState.isFinished) {
      const timer = setTimeout(() => {
        if (quizState.currentQuestionIndex < questions.length - 1) {
          setQuizState(prev => ({
            ...prev,
            currentQuestionIndex: prev.currentQuestionIndex + 1
          }));
        } else {
          setQuizState(prev => ({ ...prev, isFinished: true }));
        }
        setAnswerTime(null);
        setProgressPercent(0);
      }, AUTO_NEXT_DELAY);

      return () => clearTimeout(timer);
    }
  }, [quizState.answers, quizState.currentQuestionIndex, quizState.isFinished]);

  // プログレスバーの更新
  useEffect(() => {
    if (!answerTime) return;

    const interval = setInterval(() => {
      const elapsed = Date.now() - answerTime;
      const percent = Math.max(0, 100 - (elapsed / AUTO_NEXT_DELAY) * 100);
      setProgressPercent(percent);
    }, 100);

    return () => clearInterval(interval);
  }, [answerTime]);

  const handleStart = () => {
    setIsStarted(true);
    setStartTime(Date.now());
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setAnswerTime(Date.now());
    setProgressPercent(100);
    
    setQuizState(prev => {
      const newAnswers = [...prev.answers];
      newAnswers[prev.currentQuestionIndex] = answerIndex;
      
      const newScore = isCorrect ? prev.score + POINTS_PER_QUESTION : prev.score;
      
      return {
        ...prev,
        answers: newAnswers,
        score: newScore
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
    setAnswerTime(null);
    setProgressPercent(0);
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
  const isAnswered = selectedAnswer !== null;

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
        
        {isAnswered && (
          <div className="mt-6 text-center">
            <div className="text-sm text-gray-600 mb-2">
              {quizState.currentQuestionIndex < questions.length - 1 
                ? `${AUTO_NEXT_DELAY / 1000}秒後に次の問題に進みます...`
                : `${AUTO_NEXT_DELAY / 1000}秒後に結果を表示します...`
              }
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-100"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 