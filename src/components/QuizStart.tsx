'use client';

import { useState } from 'react';
import Leaderboard from './Leaderboard';

interface QuizStartProps {
  onStart: () => void;
  totalQuestions: number;
  timeLimit: number;
}

export default function QuizStart({ onStart, totalQuestions, timeLimit }: QuizStartProps) {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">クイズアプリ</h1>
      <p className="text-gray-700 mb-6">
        全{totalQuestions}問・制限時間{Math.floor(timeLimit / 60)}分のクイズに挑戦しよう！
      </p>
      <button
        onClick={onStart}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mb-4"
      >
        スタート
      </button>
      <button
        onClick={() => setShowLeaderboard(true)}
        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
      >
        記録を見る
      </button>
      {showLeaderboard && (
        <Leaderboard onClose={() => setShowLeaderboard(false)} />
      )}
    </div>
  );
} 