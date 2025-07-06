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
<<<<<<< HEAD
      <h1 className="text-3xl font-bold text-gray-800 mb-6">クイズアプリ</h1>
      
      <div className="mb-8 space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">クイズの説明</h2>
          <p className="text-blue-700 text-sm">
            様々な分野の問題に挑戦してください。正解するとポイントが加算されます。
=======
      <h1 className="text-3xl font-bold text-gray-800 mb-6">テスト対策アプリ</h1>
      
      <div className="mb-8 space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">テスト対策をするためのアプリです。</h2>
          <p className="text-blue-700 text-sm">
            正解するとポイントが加算されます。
>>>>>>> 0385e9f (初期コミット)
          </p>
        </div>
        
        <div className="space-y-2 text-left">
          <div className="flex justify-between">
            <span className="text-gray-600">問題数:</span>
            <span className="font-semibold">{totalQuestions}問</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">制限時間:</span>
            <span className="font-semibold">{Math.floor(timeLimit / 60)}分{timeLimit % 60}秒</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">配点:</span>
<<<<<<< HEAD
            <span className="font-semibold">1問につき20点</span>
=======
            <span className="font-semibold">1問につき10点</span>
>>>>>>> 0385e9f (初期コミット)
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={onStart}
          className="w-full bg-green-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200"
        >
          クイズを開始
        </button>

        <button
          onClick={() => setShowLeaderboard(true)}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
        >
<<<<<<< HEAD
          🏆 リーダーボードを見る
=======
          履歴を見る
>>>>>>> 0385e9f (初期コミット)
        </button>
      </div>

      {showLeaderboard && (
        <Leaderboard onClose={() => setShowLeaderboard(false)} />
      )}
    </div>
  );
} 