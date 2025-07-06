import { supabase } from '@/lib/supabase';
import { QuizRecord, LeaderboardEntry } from '@/types/quiz';

// 環境変数のチェック
const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
};

export const quizService = {
  // クイズ記録を保存
  async saveQuizRecord(record: Omit<QuizRecord, 'id' | 'created_at'>): Promise<QuizRecord | null> {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabaseが設定されていません。環境変数を確認してください。');
    }

    try {
      console.log('Saving record:', record);
      
      const { data, error } = await supabase
        .from('quiz_records')
        .insert([record])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', JSON.stringify(error, null, 2));
        throw new Error(`データベースエラー: ${error.message}`);
      }

      console.log('Record saved successfully:', data);
      return data;
    } catch (error) {
      console.error('Error saving quiz record:', error);
      throw error;
    }
  },

  // リーダーボードを取得（上位10位）
  async getLeaderboard(): Promise<LeaderboardEntry[]> {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabaseが設定されていません。環境変数を確認してください。');
    }

    try {
      console.log('Fetching leaderboard...');
      
      const { data, error } = await supabase
        .from('quiz_records')
        .select('id, player_name, score, percentage, time_taken, created_at')
        .order('score', { ascending: false })
        .order('time_taken', { ascending: true })
        .limit(10);

      if (error) {
        console.error('Supabase error:', JSON.stringify(error, null, 2));
        throw new Error(`データベースエラー: ${error.message}`);
      }

      console.log('Leaderboard fetched:', data);
      return data.map((entry, index) => ({
        ...entry,
        rank: index + 1
      }));
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      throw error;
    }
  },

  // プレイヤーの最高記録を取得
  async getPlayerBestScore(playerName: string): Promise<QuizRecord | null> {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabaseが設定されていません。環境変数を確認してください。');
    }

    try {
      const { data, error } = await supabase
        .from('quiz_records')
        .select('*')
        .eq('player_name', playerName)
        .order('score', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        console.error('Supabase error:', JSON.stringify(error, null, 2));
        throw new Error(`データベースエラー: ${error.message}`);
      }

      return data;
    } catch (error) {
      console.error('Error fetching player best score:', error);
      throw error;
    }
  },

  // プレイヤーの全記録を取得
  async getPlayerHistory(playerName: string): Promise<QuizRecord[]> {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabaseが設定されていません。環境変数を確認してください。');
    }

    try {
      const { data, error } = await supabase
        .from('quiz_records')
        .select('*')
        .eq('player_name', playerName)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) {
        console.error('Supabase error:', JSON.stringify(error, null, 2));
        throw new Error(`データベースエラー: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching player history:', error);
      throw error;
    }
  }
}; 