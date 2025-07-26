# クイズアプリ

TypeScript、React、TailwindCSS、Firebaseを使用したインタラクティブなクイズアプリケーションです。

## 機能

- 🎯 4択クイズ問題
- ⏱️ 制限時間機能（5分）
- 📊 リアルタイムスコア表示
- 🏆 リーダーボード
- 💾 記録保存機能
- 📱 レスポンシブデザイン

## 技術スタック

- **フロントエンド**: Next.js 15, React, TypeScript
- **スタイリング**: TailwindCSS
- **バックエンド**: Firebase
- **データベース**: PostgreSQL (Firebase)

## セットアップ手順

### 1. Firebaseプロジェクトの作成

1. [Firebase](https://firebase.com)にアクセスしてアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトの設定から以下を取得：
   - Project URL
   - anon/public key

### 2. データベースの設定

1. Firebaseダッシュボードで「SQL Editor」を開く
2. `firebase-setup.sql`の内容をコピーして実行
3. これにより`quiz_records`テーブルが作成されます

### 3. 環境変数の設定

プロジェクトルートに`.env.local`ファイルを作成し、以下を設定：

```env


### 4. 依存関係のインストール

```bash
npm install
```

### 5. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスしてアプリを確認してください。

## プロジェクト構造

```
src/
├── app/                 # Next.js App Router
├── components/          # Reactコンポーネント
│   ├── Quiz.tsx        # メインクイズコンポーネント
│   ├── QuizCard.tsx    # 問題表示カード
│   ├── QuizProgress.tsx # 進捗表示
│   ├── QuizResult.tsx  # 結果表示
│   ├── QuizStart.tsx   # 開始画面
│   ├── Leaderboard.tsx # リーダーボード
│   └── PlayerNameInput.tsx # プレイヤー名入力
├── data/               # データファイル
│   └── questions.ts    # クイズ問題データ
├── lib/                # ライブラリ設定
│   └── firebase.ts     # firebaseクライアント
├── services/           # サービス層
│   └── quizService.ts  # クイズ関連API
└── types/              # TypeScript型定義
    └── quiz.ts         # クイズ関連の型
```

## データベーススキーマ

### quiz_records テーブル

| カラム名 | 型 | 説明 |
|---------|----|----|
| id | UUID | 主キー |
| player_name | VARCHAR(50) | プレイヤー名 |
| score | INTEGER | スコア |
| total_questions | INTEGER | 総問題数 |
| correct_answers | INTEGER | 正解数 |
| time_taken | INTEGER | 所要時間（秒） |
| percentage | INTEGER | 正解率（%） |
| created_at | TIMESTAMP | 作成日時 |

## カスタマイズ

### 問題の追加

`src/data/questions.ts`を編集して新しい問題を追加できます：

```typescript
{
  id: 6,
  question: "新しい問題",
  options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
  correctAnswer: 0, // 0-3のインデックス
  explanation: "解説文"
}
```

### 制限時間の変更

`src/components/Quiz.tsx`の`TIME_LIMIT`定数を変更してください。

## デプロイ

### Vercelでのデプロイ

1. GitHubにリポジトリをプッシュ
2. [Vercel](https://vercel.com)でプロジェクトをインポート
3. 環境変数を設定
4. デプロイ

### その他のプラットフォーム

環境変数を適切に設定すれば、Netlify、Railway、その他のプラットフォームでもデプロイ可能です。

## ライセンス

MIT License
