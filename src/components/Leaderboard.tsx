'use client';

import { useEffect, useState } from 'react';
import { quizService } from '@/services/quizService';
import type { LeaderboardEntry } from '@/types/quiz';

interface LeaderboardProps {
  onClose: () => void;
}

export default function Leaderboard({ onClose }: LeaderboardProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await quizService.getLeaderboard();
        setEntries(data);
      } catch {
        setError('リーダーボードの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">リーダーボード</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl font-bold">×</button>
        </div>
        {loading ? (
          <div className="text-center text-gray-600 py-8">読み込み中...</div>
        ) : error ? (
          <div className="text-center text-red-600 py-8">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">順位</th>
                  <th className="px-4 py-2">名前</th>
                  <th className="px-4 py-2">スコア</th>
                  <th className="px-4 py-2">正答率</th>
                  <th className="px-4 py-2">時間</th>
                  <th className="px-4 py-2">日付</th>
                </tr>
              </thead>
              <tbody>
                {entries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-6 text-gray-500">記録がありません</td>
                  </tr>
                ) : (
                  entries.map((entry, i) => (
                    <tr key={entry.id} className={i < 3 ? 'bg-yellow-50' : ''}>
                      <td className="px-4 py-2 font-bold">{i + 1}</td>
                      <td className="px-4 py-2">{entry.player_name}</td>
                      <td className="px-4 py-2">{entry.score}</td>
                      <td className="px-4 py-2">{entry.percentage}%</td>
                      <td className="px-4 py-2">{Math.floor(entry.time_taken / 60)}分{entry.time_taken % 60}秒</td>
                      <td className="px-4 py-2">{entry.created_at ? entry.created_at.slice(0, 10) : ''}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 