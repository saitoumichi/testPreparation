'use client';

import { useState, useEffect } from 'react';
import { LeaderboardEntry } from '@/types/quiz';
import { quizService } from '@/services/quizService';

interface LeaderboardProps {
  onClose: () => void;
}

export default function Leaderboard({ onClose }: LeaderboardProps) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await quizService.getLeaderboard();
      setLeaderboard(data);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
      setError(error instanceof Error ? error.message : 'リーダーボードの読み込みに失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center mb-6">
<<<<<<< HEAD
          <h2 className="text-2xl font-bold text-gray-800">🏆 リーダーボード</h2>
=======
          <h2 className="text-2xl font-bold text-gray-800">履歴を見る</h2>
>>>>>>> 0385e9f (初期コミット)
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
<<<<<<< HEAD
            ×
=======
            閉じる
>>>>>>> 0385e9f (初期コミット)
          </button>
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-700 rounded-lg mb-4">
            ❌ {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : leaderboard.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
<<<<<<< HEAD
            まだ記録がありません
=======
            まだ記録がないよ
>>>>>>> 0385e9f (初期コミット)
          </div>
        ) : (
          <div className="overflow-y-auto max-h-[60vh]">
            <div className="space-y-2">
              {leaderboard.map((entry) => (
                <div
                  key={entry.id}
                  className={`flex items-center p-4 rounded-lg border ${
                    entry.rank === 1 ? 'bg-yellow-50 border-yellow-200' :
                    entry.rank === 2 ? 'bg-gray-50 border-gray-200' :
                    entry.rank === 3 ? 'bg-orange-50 border-orange-200' :
                    'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-sm font-bold mr-4">
                    {entry.rank === 1 ? '🥇' : 
                     entry.rank === 2 ? '🥈' : 
                     entry.rank === 3 ? '🥉' : 
                     entry.rank}
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">{entry.player_name}</div>
                    <div className="text-sm text-gray-500">
                      {formatDate(entry.created_at)}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-lg text-gray-800">
                      {entry.score}点
                    </div>
                    <div className="text-sm text-gray-500">
                      {entry.percentage}% | {formatTime(entry.time_taken)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={loadLeaderboard}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            更新
          </button>
        </div>
      </div>
    </div>
  );
} 