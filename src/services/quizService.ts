import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  serverTimestamp, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  QueryDocumentSnapshot, 
  DocumentData } from 'firebase/firestore';
import { QuizRecord, LeaderboardEntry } from '@/types/quiz';

export const quizService = {
  // クイズ記録を保存
  async saveQuizRecord(record: Omit<QuizRecord, 'id' | 'created_at'>): Promise<QuizRecord | null> {
    try {
      const docRef = await addDoc(collection(db, 'quiz_records'), {
        ...record,
        created_at: serverTimestamp(),
      });
      return {
        id: docRef.id,
        ...record,
        created_at: new Date().toISOString(), // FirestoreのserverTimestampは取得時に反映されるため仮値
      };
    } catch (error) {
      console.error('Firestore保存エラー:', error);
      return null;
    }
  },

  // リーダーボード取得
  async getLeaderboard(): Promise<LeaderboardEntry[]> {
    try {
      const q = query(
        collection(db, 'quiz_records'),
        orderBy('score', 'desc'),
        orderBy('percentage', 'desc'),
        orderBy('time_taken', 'asc'),
        limit(20)
      );
      const querySnapshot = await getDocs(q);
      const data: LeaderboardEntry[] = [];
      let rank = 1;
      querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const entry = doc.data() as LeaderboardEntry;
        data.push({ ...entry, id: doc.id, rank });
        rank++;
      });
      return data;
    } catch (error) {
      console.error('Firestore取得エラー:', error);
      return [];
    }
  },
}; 