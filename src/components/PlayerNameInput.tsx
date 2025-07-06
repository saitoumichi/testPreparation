'use client';

import { useState } from 'react';

interface PlayerNameInputProps {
  onSave: (name: string) => void;
  onCancel: () => void;
}

export default function PlayerNameInput({ onSave, onCancel }: PlayerNameInputProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    if (!name.trim()) {
      setError('名前を入力してください');
      return;
    }
    onSave(name.trim());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-bold text-gray-800 mb-4">記録を保存</h3>
        <p className="text-gray-600 mb-6">
          リーダーボードに表示する名前を入力してください。
        </p>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="名前"
        />
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
          >
            保存
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
} 