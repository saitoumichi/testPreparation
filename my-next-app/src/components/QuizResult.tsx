'use client';

import { useState } from 'react';
import type { QuizResult } from '@/types/quiz';
import { quizService } from '@/services/quizService';
import PlayerNameInput from './PlayerNameInput';
import Leaderboard from './Leaderboard';

interface QuizResultProps {
  result: QuizResult;
  onRestart: () => void;
}

export default function QuizResult({ result, onRestart }: QuizResultProps) {
  const [showPlayerNameInput, setShowPlayerNameInput] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 80) return "いいね！";
    if (percentage >= 60) return "よくできました！";
    if (percentage >= 40) return "もうちょっと！";
    return "勉強しよ";
  };

  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const handleSaveRecord = async (playerName: string) => {
    setError(null);
    try {
      const record = {
        player_name: playerName,
        score: result.score,
        total_questions: result.totalQuestions,
        correct_answers: result.correctAnswers,
        time_taken: result.timeTaken,
        percentage: percentage
      };

      const savedRecord = await quizService.saveQuizRecord(record);
      if (savedRecord) {
        setSaved(true);
        setShowPlayerNameInput(false);
      }
    } catch (error) {
      console.error('Error saving record:', error);
      setError(error instanceof Error ? error.message : '記録の保存に失敗しました');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">終わり！</h2>
      
      <div className="mb-8">
        <div className={`text-6xl font-bold ${getScoreColor()} mb-2`}>
          {percentage}%
        </div>
        <p className="text-lg text-gray-600 mb-4">{getScoreMessage()}</p>
        
        <div className="space-y-3 text-left">
          <div className="flex justify-between">
            <span className="text-gray-600">正解数:</span>
            <span className="font-semibold">{result.correctAnswers} / {result.totalQuestions}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">スコア:</span>
            <span className="font-semibold">{result.score}点</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">所要時間:</span>
            <span className="font-semibold">{Math.floor(result.timeTaken / 60)}分{result.timeTaken % 60}秒</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-700 rounded-lg mb-3">
          ❌ {error}
        </div>
      )}

      <div className="space-y-3">
        {!saved && (
          <button
            onClick={() => setShowPlayerNameInput(true)}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            記録を保存
          </button>
        )}
        
        {saved && (
          <div className="p-3 bg-green-50 text-green-700 rounded-lg mb-3">
            ✓ 記録保存できた！
          </div>
        )}

        <button
          onClick={() => setShowLeaderboard(true)}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
        >
          履歴を確認する
        </button>

        <button
          onClick={onRestart}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          もう一度挑戦！
        </button>
      </div>

      {showPlayerNameInput && (
        <PlayerNameInput
          onSave={handleSaveRecord}
          onCancel={() => setShowPlayerNameInput(false)}
        />
      )}

      {showLeaderboard && (
        <Leaderboard onClose={() => setShowLeaderboard(false)} />
      )}
    </div>
  );
} 