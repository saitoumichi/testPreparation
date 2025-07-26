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
  DocumentData,
} from 'firebase/firestore';
import { QuizRecord, LeaderboardEntry } from '@/types/quiz';

export const quizService = {
  async saveQuizRecord(
    record: Omit<QuizRecord, 'id' | 'created_at'>
  ): Promise<QuizRecord | null> {
    try {
      const docRef = await addDoc(collection(db, 'quiz_records'), {
        ...record,
        created_at: serverTimestamp(),
      });

      return {
        id: docRef.id,
        ...record,
        created_at: new Date().toISOString(), // serverTimestampはリアルタイム反映不可のため
      };
    } catch (error) {
      console.error('Firestore 保存エラー:', error);
      return null;
    }
  },

  async getLeaderboard(): Promise<LeaderboardEntry[]> {
    try {
      const q = query(
        collection(db, 'quiz_records'),
        orderBy('score', 'desc'),
        orderBy('percentage', 'desc'),
        orderBy('time_taken', 'asc'),
        limit(20)
      );
      const snapshot = await getDocs(q);

      const leaderboard: LeaderboardEntry[] = [];
      let rank = 1;

      snapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const data = doc.data() as LeaderboardEntry;
        leaderboard.push({ ...data, id: doc.id, rank });
        rank++;
      });

      return leaderboard;
    } catch (error) {
      console.error('Firestore 取得エラー:', error);
      return [];
    }
  },
};