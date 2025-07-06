'use client';

import { useState } from 'react';

interface PlayerNameInputProps {
  onSave: (playerName: string) => void;
  onCancel: () => void;
}

export default function PlayerNameInput({ onSave, onCancel }: PlayerNameInputProps) {
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      onSave(playerName.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-bold text-gray-800 mb-4">記録を保存</h3>
        <p className="text-gray-600 mb-6">
<<<<<<< HEAD
          あなたの名前を入力して、スコアを記録に保存しましょう！
=======
          名前ちょうだい
>>>>>>> 0385e9f (初期コミット)
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="playerName" className="block text-sm font-medium text-gray-700 mb-2">
<<<<<<< HEAD
              プレイヤー名
=======
              名前
>>>>>>> 0385e9f (初期コミット)
            </label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
<<<<<<< HEAD
              placeholder="あなたの名前を入力"
=======
              placeholder="名前を入力してね"
>>>>>>> 0385e9f (初期コミット)
              maxLength={20}
              required
              autoFocus
            />
          </div>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200"
            >
<<<<<<< HEAD
              キャンセル
=======
              やめとく
>>>>>>> 0385e9f (初期コミット)
            </button>
            <button
              type="submit"
              disabled={!playerName.trim()}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 