-- クイズ記録テーブルの作成
CREATE TABLE quiz_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  player_name VARCHAR(50) NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  time_taken INTEGER NOT NULL,
  percentage INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- インデックスの作成（パフォーマンス向上のため）
CREATE INDEX idx_quiz_records_score ON quiz_records(score DESC);
CREATE INDEX idx_quiz_records_player_name ON quiz_records(player_name);
CREATE INDEX idx_quiz_records_created_at ON quiz_records(created_at DESC);

-- RLS（Row Level Security）の設定
ALTER TABLE quiz_records ENABLE ROW LEVEL SECURITY;

-- 全ユーザーが読み取り可能なポリシー
CREATE POLICY "Allow public read access" ON quiz_records
  FOR SELECT USING (true);

-- 全ユーザーが挿入可能なポリシー
CREATE POLICY "Allow public insert access" ON quiz_records
  FOR INSERT WITH CHECK (true);

-- サンプルデータの挿入（オプション）
INSERT INTO quiz_records (player_name, score, total_questions, correct_answers, time_taken, percentage) VALUES
('田中太郎', 80, 5, 4, 180, 80),
('佐藤花子', 100, 5, 5, 240, 100),
('鈴木一郎', 60, 5, 3, 300, 60),
('高橋美咲', 40, 5, 2, 280, 40),
('伊藤健太', 100, 5, 5, 200, 100); 