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
      throw new Error('Supabaseの環境変数が設定されていません');
    }
    const { data, error } = await supabase
      .from('quiz_records')
      .insert([record])
      .select()
      .single();
    if (error) throw error;
    return data as QuizRecord;
  },

  // リーダーボード取得
  async getLeaderboard(): Promise<LeaderboardEntry[]> {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabaseの環境変数が設定されていません');
    }
    const { data, error } = await supabase
      .from('quiz_records')
      .select('*')
      .order('score', { ascending: false })
      .order('percentage', { ascending: false })
      .order('time_taken', { ascending: true })
      .limit(20);
    if (error) throw error;
    return (data as LeaderboardEntry[]).map((entry, i) => ({ ...entry, rank: i + 1 }));
  }
}; 