import { Question } from '@/types/quiz';

export const questions: Question[] = [
  // ネットワーク・インターネット基礎
  {
    id: 1,
    question: "インターネットに接続することをなんと呼びますか？",
    options: ["ネットワークアクセス", "インターネットアクセス", "アクセスする", "ネットワーク接続"],
    correctAnswer: 2,
    explanation: "インターネットに接続することをインターネットにアクセスする、門司区は「インターネットアクセス」と呼びます。",
    category: "ネットワーク基礎",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "インターネットに接続しているコンピュータは一台一台に『〜』という番号が割り当てられます。",
    options: ["IPアドレス", "ネットワークアドレス", "ネットワークアクセス", "インターネットアクセス"],
    correctAnswer: 0,
    explanation: "インターネットに接続しているコンピュータは一台一台にIPアドレスという番号が割り当てられます。",
    category: "ネットワーク基礎",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "インターネットへ接続するサービスを提供する業者を一般に「〜」と呼びます",
    options: ["ネットワーク", "インターネット", "プロバイダ", "ネットワークアクセス"],
    correctAnswer: 2,
    explanation: "インターネットへ接続するサービスを提供する業者を一般に「プロバイダ」と呼びます。",
    category: "ネットワーク基礎",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "HTMLの略語は？",
    options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correctAnswer: 0,
    explanation: "HTMLはHyperText Markup Languageの略です。",
    category: "Web技術",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "インターネットの全身のネットワークで元々はアメリカの軍事ネットワークかつ世界最大のネットワークをなんと呼ぶか",
    options: ["ARPANET", "CSMA/CD", "TCP/IP", "HTTP"],
    correctAnswer: 0,
    explanation: "インターネットの全身のネットワークで元々はアメリカの軍事ネットワークかつ世界最大のネットワークをARPANETと呼びます。",
    category: "ネットワーク歴史",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "ネットワーク同士を相互接続したネットワークを「〜」と呼ぶ。",
    options: ["NetworkまたはThe Network", "InternetまたはThe Internet", "InternetまたはThe Network", "NetworkまたはThe Internet"],
    correctAnswer: 0,
    explanation: "ネットワーク同士を相互接続したネットワークを「InternetまたはThe Internet」と呼びます。",
    category: "ネットワーク基礎",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "The Internetは「〜」を採用して以降世界的なネットワークとなった。",
    options: ["TCP/IPプロトコル", "CSMA/CDプロトコル", "IP/TCPプロトコル", "HTTPプロトコル"],
    correctAnswer: 0,
    explanation: "The Internetは「TCP/IPプロトコル」を採用して以降世界的なネットワークとなった。",
    category: "ネットワークプロトコル",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "IPv4は何ビット？",
    options: ["32ビット", "64ビット", "128ビット", "256ビット"],
    correctAnswer: 0,
    explanation: "IPv4は32ビットです。",
    category: "ネットワークプロトコル",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "IPv6は何ビット？",
    options: ["32ビット", "64ビット", "128ビット", "256ビット"],
    correctAnswer: 2,
    explanation: "IPv6は128ビットです。",
    category: "ネットワークプロトコル",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "「〜」でマウスをクリックするだけで世界中のインターネット上の情報がマルチメディア表示される。",
    options: ["WEBブラウザ", "ネットワーク", "マルチメディア", "マウス"],
    correctAnswer: 0,
    explanation: "「WEBブラウザ」でマウスをクリックするだけで世界中のインターネット上の情報がマルチメディア表示される。",
    category: "Web技術",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "記述言語は「〜」を使ったHTMLで記述されている。",
    options: ["CSS", "ハイパーテキスト", "ハイパーテキストマークアップ言語", "ハイパーテキスト言語"],
    correctAnswer: 0,
    explanation: "記述言語は「ハイパーテキスト」を使ったHTMLで記述されている。",
    category: "Web技術",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "HTMLを通じて「〜」を辿ることで世界中のサーバーを渡り歩くことができる。",
    options: ["ハイパーリンク", "ハイパーテキスト", "ハイパーテキストマークアップ言語", "ハイパーテキスト言語"],
    correctAnswer: 0,
    explanation: "HTMLを通じて「ハイパーリンク」を辿ることで世界中のサーバーを渡り歩くことができる。",
    category: "Web技術",
    difficulty: "easy"
  },
  {
    id: 13,
    question: "1973年にインターネットのサーバーとして使われるコンピュータを「〜」と呼ぶ。",
    options: ["ネットワーク", "イーサネット", "ネットワークアドレス", "ネットワークアクセス"],
    correctAnswer: 1,
    explanation: "1973年にインターネットのサーバーとして使われるコンピュータを「イーサネット」と呼ぶ。",
    category: "ネットワーク歴史",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "イーサネットが発明された時「〜」技術でプリンタを接続することができる。",
    options: ["JPNIC", "CSMA/CD", "ARPANET", "JUNET"],
    correctAnswer: 1,
    explanation: "イーサネットが発明された時「CSMA/CD」技術でプリンタを接続することができる。",
    category: "ネットワーク技術",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "無線の代わりに「〜」を利用したのがイーサネット",
    options: ["クロスケーブル", "DNSルートサーバ", "同軸ケーブル", "ツイストペアケーブル"],
    correctAnswer: 2,
    explanation: "無線の代わりに「同軸ケーブル」を利用したのがイーサネット",
    category: "ネットワーク技術",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "1983年の電装媒体は「〜」や光ファイバ",
    options: ["クロスケーブル", "DNSルートサーバ", "同軸ケーブル", "ツイストペアケーブル"],
    correctAnswer: 2,
    explanation: "1983年の電装媒体は「ツイストペアケーブル」や光ファイバ",
    category: "ネットワーク技術",
    difficulty: "medium"
  },
  // プログラミング関連の問題
  {
    id: 17,
    question: "JavaScriptで配列の最後の要素を削除するメソッドは？",
    options: ["shift()", "pop()", "unshift()", "push()"],
    correctAnswer: 1,
    explanation: "pop()メソッドは配列の最後の要素を削除して返します。",
    category: "JavaScript",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "Reactでコンポーネントの状態を管理するために使用するフックは？",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: 1,
    explanation: "useStateフックはReactコンポーネントで状態を管理するために使用されます。",
    category: "React",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Pythonで文字列を数値に変換する関数は？",
    options: ["str()", "int()", "float()", "bool()"],
    correctAnswer: 1,
    explanation: "int()関数は文字列を整数に変換します。",
    category: "Python",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "CSSで要素を中央揃えにするプロパティは？",
    options: ["text-align: center", "margin: auto", "align: center", "center: true"],
    correctAnswer: 0,
    explanation: "text-align: centerはテキストを中央揃えにします。",
    category: "CSS",
    difficulty: "easy"
  },
  {
    id: 21,
    question: "SQLでデータを取得するための基本コマンドは？",
    options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
    correctAnswer: 1,
    explanation: "SELECTはSQLでデータを取得するための基本コマンドです。",
    category: "SQL",
    difficulty: "easy"
  },
  {
    id: 22,
    question: "Gitで変更をステージングエリアに追加するコマンドは？",
    options: ["git add", "git commit", "git push", "git pull"],
    correctAnswer: 0,
    explanation: "git addコマンドは変更をステージングエリアに追加します。",
    category: "Git",
    difficulty: "easy"
  },
  {
    id: 23,
    question: "HTTPステータスコード200の意味は？",
    options: ["エラー", "成功", "リダイレクト", "クライアントエラー"],
    correctAnswer: 1,
    explanation: "HTTPステータスコード200は「OK」を意味し、リクエストが成功したことを示します。",
    category: "HTTP",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "JSONの略語は？",
    options: ["JavaScript Object Notation", "Java Serial Object Notation", "JavaScript Online Network", "Java Standard Object Notation"],
    correctAnswer: 0,
    explanation: "JSONはJavaScript Object Notationの略です。",
    category: "データ形式",
    difficulty: "easy"
  },
  {
    id: 25,
    question: "データベースで主キー（Primary Key）の特徴は？",
    options: ["重複可能", "NULL値を許可", "一意でNULL不可", "自動的に削除される"],
    correctAnswer: 2,
    explanation: "主キーは一意でNULL値を許可しない制約があります。",
    category: "データベース",
    difficulty: "medium"
  }
]; 