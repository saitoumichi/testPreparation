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
//   {
//     id: 6,
//     question: "ネットワーク同士を相互接続したネットワークを「〜」と呼ぶ。",
//     options: ["NetworkまたはThe Network", "InternetまたはThe Internet", "InternetまたはThe Network", "NetworkまたはThe Internet"],
//     correctAnswer: 0,
//     explanation: "ネットワーク同士を相互接続したネットワークを「InternetまたはThe Internet」と呼びます。",
//     category: "ネットワーク基礎",
//     difficulty: "easy"
//   },
//   {
//     id: 7,
//     question: "The Internetは「〜」を採用して以降世界的なネットワークとなった。",
//     options: ["TCP/IPプロトコル", "CSMA/CDプロトコル", "IP/TCPプロトコル", "HTTPプロトコル"],
//     correctAnswer: 0,
//     explanation: "The Internetは「TCP/IPプロトコル」を採用して以降世界的なネットワークとなった。",
//     category: "ネットワークプロトコル",
//     difficulty: "medium"
//   },
//   {
//     id: 8,
//     question: "IPv4は何ビット？",
//     options: ["32ビット", "64ビット", "128ビット", "256ビット"],
//     correctAnswer: 0,
//     explanation: "IPv4は32ビットです。",
//     category: "ネットワークプロトコル",
//     difficulty: "medium"
//   },
//   {
//     id: 9,
//     question: "IPv6は何ビット？",
//     options: ["32ビット", "64ビット", "128ビット", "256ビット"],
//     correctAnswer: 2,
//     explanation: "IPv6は128ビットです。",
//     category: "ネットワークプロトコル",
//     difficulty: "medium"
//   },
//   {
//     id: 10,
//     question: "「〜」でマウスをクリックするだけで世界中のインターネット上の情報がマルチメディア表示される。",
//     options: ["WEBブラウザ", "ネットワーク", "マルチメディア", "マウス"],
//     correctAnswer: 0,
//     explanation: "「WEBブラウザ」でマウスをクリックするだけで世界中のインターネット上の情報がマルチメディア表示される。",
//     category: "Web技術",
//     difficulty: "easy"
//   },
//   {
//     id: 11,
//     question: "記述言語は「〜」を使ったHTMLで記述されている。",
//     options: ["CSS", "ハイパーテキスト", "ハイパーテキストマークアップ言語", "ハイパーテキスト言語"],
//     correctAnswer: 0,
//     explanation: "記述言語は「ハイパーテキスト」を使ったHTMLで記述されている。",
//     category: "Web技術",
//     difficulty: "medium"
//   },
//   {
//     id: 12,
//     question: "HTMLを通じて「〜」を辿ることで世界中のサーバーを渡り歩くことができる。",
//     options: ["ハイパーリンク", "ハイパーテキスト", "ハイパーテキストマークアップ言語", "ハイパーテキスト言語"],
//     correctAnswer: 0,
//     explanation: "HTMLを通じて「ハイパーリンク」を辿ることで世界中のサーバーを渡り歩くことができる。",
//     category: "Web技術",
//     difficulty: "easy"
//   },
//   {
//     id: 13,
//     question: "1973年にインターネットのサーバーとして使われるコンピュータを「〜」と呼ぶ。",
//     options: ["ネットワーク", "イーサネット", "ネットワークアドレス", "ネットワークアクセス"],
//     correctAnswer: 1,
//     explanation: "1973年にインターネットのサーバーとして使われるコンピュータを「イーサネット」と呼ぶ。",
//     category: "ネットワーク歴史",
//     difficulty: "medium"
//   },
//   {
//     id: 14,
//     question: "イーサネットが発明された時「〜」技術でプリンタを接続することができる。",
//     options: ["JPNIC", "CSMA/CD", "ARPANET", "JUNET"],
//     correctAnswer: 1,
//     explanation: "イーサネットが発明された時「CSMA/CD」技術でプリンタを接続することができる。",
//     category: "ネットワーク技術",
//     difficulty: "hard"
//   },
//   {
//     id: 15,
//     question: "無線の代わりに「〜」を利用したのがイーサネット",
//     options: ["クロスケーブル", "DNSルートサーバ", "同軸ケーブル", "ツイストペアケーブル"],
//     correctAnswer: 2,
//     explanation: "無線の代わりに「同軸ケーブル」を利用したのがイーサネット",
//     category: "ネットワーク技術",
//     difficulty: "medium"
//   },
//   {
//     id: 16,
//     question: "1983年の電装媒体は「〜」や光ファイバ",
//     options: ["クロスケーブル", "DNSルートサーバ", "同軸ケーブル", "ツイストペアケーブル"],
//     correctAnswer: 2,
//     explanation: "1983年の電装媒体は「ツイストペアケーブル」や光ファイバ",
//     category: "ネットワーク技術",
//     difficulty: "medium"
//   },
//   // プログラミング関連の問題
//   {
//     id: 17,
//     question: "JavaScriptで配列の最後の要素を削除するメソッドは？",
//     options: ["shift()", "pop()", "unshift()", "push()"],
//     correctAnswer: 1,
//     explanation: "pop()メソッドは配列の最後の要素を削除して返します。",
//     category: "JavaScript",
//     difficulty: "easy"
//   },
//   {
//     id: 18,
//     question: "Reactでコンポーネントの状態を管理するために使用するフックは？",
//     options: ["useEffect", "useState", "useContext", "useReducer"],
//     correctAnswer: 1,
//     explanation: "useStateフックはReactコンポーネントで状態を管理するために使用されます。",
//     category: "React",
//     difficulty: "medium"
//   },
//   {
//     id: 19,
//     question: "Pythonで文字列を数値に変換する関数は？",
//     options: ["str()", "int()", "float()", "bool()"],
//     correctAnswer: 1,
//     explanation: "int()関数は文字列を整数に変換します。",
//     category: "Python",
//     difficulty: "easy"
//   },
//   {
//     id: 20,
//     question: "CSSで要素を中央揃えにするプロパティは？",
//     options: ["text-align: center", "margin: auto", "align: center", "center: true"],
//     correctAnswer: 0,
//     explanation: "text-align: centerはテキストを中央揃えにします。",
//     category: "CSS",
//     difficulty: "easy"
//   },
//   {
//     id: 21,
//     question: "SQLでデータを取得するための基本コマンドは？",
//     options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
//     correctAnswer: 1,
//     explanation: "SELECTはSQLでデータを取得するための基本コマンドです。",
//     category: "SQL",
//     difficulty: "easy"
//   },
//   {
//     id: 22,
//     question: "Gitで変更をステージングエリアに追加するコマンドは？",
//     options: ["git add", "git commit", "git push", "git pull"],
//     correctAnswer: 0,
//     explanation: "git addコマンドは変更をステージングエリアに追加します。",
//     category: "Git",
//     difficulty: "easy"
//   },
//   {
//     id: 23,
//     question: "HTTPステータスコード200の意味は？",
//     options: ["エラー", "成功", "リダイレクト", "クライアントエラー"],
//     correctAnswer: 1,
//     explanation: "HTTPステータスコード200は「OK」を意味し、リクエストが成功したことを示します。",
//     category: "HTTP",
//     difficulty: "medium"
//   },
//   {
//     id: 24,
//     question: "JSONの略語は？",
//     options: ["JavaScript Object Notation", "Java Serial Object Notation", "JavaScript Online Network", "Java Standard Object Notation"],
//     correctAnswer: 0,
//     explanation: "JSONはJavaScript Object Notationの略です。",
//     category: "データ形式",
//     difficulty: "easy"
//   },
//   {
//     id: 25,
//     question: "データベースで主キー（Primary Key）の特徴は？",
//     options: ["重複可能", "NULL値を許可", "一意でNULL不可", "自動的に削除される"],
//     correctAnswer: 2,
//     explanation: "主キーは一意でNULL値を許可しない制約があります。",
//     category: "データベース",
//     difficulty: "medium"
//   },
//   {
//     id: 26,
//     question: "ドメイン名やIPアドレスの方針を決める団体は？",
//     options: ["JUNET", "JPNIC", "ICANN", "IANA"],
//     correctAnswer: 3,
//     explanation: "ドメイン名やIPアドレスの方針を決める団体はICANNです。",
//     category: "ICANN",
//     difficulty: "medium"
//   },
//   {
//     id: 27,
//     question: "LANケーブルを使わなくても無線LANアダプタや「〜」を使ってインターネットに接続できます。",
//     options: ["有線LANアダプタ", "無線インターフェース", "インターフェース", "モバイルルータ"],
//     correctAnswer: 4,
//     explanation: "LANケーブルを使わなくても無線LANアダプタやモバイルルータを使ってインターネットに接続できます。",
//     category: "モバイルルータ",
//     difficulty: "medium"
//   },
//   {
//     id: 28,
//     question: "「〜」はパソコンの中のすべての部品を制御する役割を果たします。",
//     options: ["CPU", "RAM", "NIC", "LSI"],
//     correctAnswer: 1,
//     explanation: "CPUはパソコンの中のすべての部品を制御する役割を果たします。",
//     category: "CPU",
//     difficulty: "medium"
//   },
//   {
//     id: 29,
//     question: "メモリに記録された命令を読み出して解読することを「〜」と呼びます。",
//     options: ["リンク", "アダプタ", "デコード", "メモリ"],
//     correctAnswer: 3,
//     explanation: "メモリに記録された命令を読み出して解読することをデコードと呼びます。",
//     category: "デコード",
//     difficulty: "medium"
//   },
//   {
//     id: 30,
//     question: "CPUの性能は「〜」と呼ばれる値で示されます。",
//     options: ["クロック", "クロック周期", "クロック信号", "クロック周波数"],
//     correctAnswer: 4,
//     explanation: "CPUの性能はクロック周波数と呼ばれる値で示されます。",
//     category: "クロック周波数",
//     difficulty: "medium"
//   },
//   {
//     id: 31,
//     question: "高速で小容量な記録装置を「〜」です。",
//     options: ["メインメモリ", "仮想メモリ", "データメモリ", "キャッシュメモリ"],
//     correctAnswer: 4,
//     explanation: "高速で小容量な記録装置をキャッシュメモリです。",
//     category: "キャッシュメモリ",
//     difficulty: "medium"
//   },
//   {
//     id: 32,
//     question: "インターネットの住所のように１つ１つ割り当てられるアドレスを「〜」と呼ばれます。",
//     options: ["ハードウェアアドレス", "MACアドレス", "物理アドレス", "ソフトウェアアドレス"],
//     correctAnswer: 2,
//     explanation: "インターネットの住所のように１つ１つ割り当てられるアドレスをMACアドレスと呼ばれます。",
//     category: "MACアドレス",
//     difficulty: "medium"
//   },
//   {
//     id: 33,
//     question: "「TCP/IPの決まり事」は「〜」に書かれています",
//     options: ["IANA", "RFC", "IESC", "REC"],
//     correctAnswer: 2,
//     explanation: "「TCP/IPの決まり事」はRFCに書かれています",
//     category: "RFC",
//     difficulty: "medium"
//   },
//   {
//     id: 34,
//     question: "新しいプロトコルが提案されるとInternet Draftとして「〜」のワーキンググループで検討されます。",
//     options: ["IEEE", "IESG", "IETF", "ICANN"],
//     correctAnswer: 3,
//     explanation: "新しいプロトコルが提案されるとInternet DraftとしてIETFのワーキンググループで検討されます。",
//     category: "IETF",
//     difficulty: "medium"
//   },
//   {
//     id: 35,
//     question: "ITUの日本バージョンとして「〜」が活動しています。",
//     options: ["JISC", "ANSI", "TTC", "ISO"],
//     correctAnswer: 3,
//     explanation: "ITUの日本バージョンとしてTTCが活動しています。",
//     category: "TTC",
//     difficulty: "medium"
//   },
//   {
//     id: 36,
//     question: "メーカーの機器同士でもネットワークの相互接続ができるように「〜」という階層化モデルを判定しました。",
//     options: ["プロトコルスタック", "OSI参照モデル", "プロトコル", "アプリケーション層"],
//     correctAnswer: 2,
//     explanation: "メーカーの機器同士でもネットワークの相互接続ができるようにOSI参照モデルという階層化モデルを判定しました。",
//     category: "OSI参照モデル",
//     difficulty: "medium"
//   },
//   {
//     id: 37,
//     question: "ビットの転送方法やコネクタの形状を規定している層は？",
//     options: ["ネットワーク層", "物理層", "データリンク層", "セッション層"],
//     correctAnswer: 2,
//     explanation: "ビットの転送方法やコネクタの形状を規定している層は物理層です。",
//     category: "物理層",
//     difficulty: "medium"
//   },
//   {
//     id: 38,
//     question: "直接接続された機器で通信の識別と転送をしている層は？",
//     options: ["ネットワーク層", "物理層", "データリンク層", "セッション層"],
//     correctAnswer: 3,
//     explanation: "直接接続された機器で通信の識別と転送をしている層はデータリンク層です。",
//     category: "データリンク層",
//     difficulty: "medium"
//   },
//   {
//     id: 39,
//     question: "ルーティングとパケットの断片化をしている層は？",
//     options: ["ネットワーク層", "プレゼンテーション層", "トランスポート層", "セッション層"],
//     correctAnswer: 1,
//     explanation: "ルーティングとパケットの断片化をしている層はネットワーク層です。",
//     category: "ネットワーク層",
//     difficulty: "medium"
//   },
//   {
//     id: 40,
//     question: "両端ノード間のデータ転送の管理、転送の信頼性を確保している層は？",
//     options: ["ネットワーク層", "プレゼンテーション層", "トランスポート層", "セッション層"],
//     correctAnswer: 3,
//     explanation: "両端ノード間のデータ転送の管理、転送の信頼性を確保している層はトランスポート層です。",
//     category: "トランスポート層",
//     difficulty: "medium"
//   },
//   {
//     id: 41,
//     question: "両端ノード間の会話を構成し、同期とデータ交換を管理している層は？",
//     options: ["ネットワーク層", "プレゼンテーション層", "トランスポート層", "セッション層"],
//     correctAnswer: 4,
//     explanation: "両端ノード間の会話を構成し、同期とデータ交換を管理している層はセッション層です。",
//     category: "セッション層",
//     difficulty: "medium"
//   },
//   {
//     id: 42,
//     question: "データの表現形式を管理している層は？",
//     options: ["ネットワーク層", "プレゼンテーション層", "トランスポート層", "セッション層"],
//     correctAnswer: 2,
//     explanation: "データの表現形式を管理している層はプレゼンテーション層です。",
//     category: "トランスポート層",
//     difficulty: "medium"
//   },
//   {
//     id: 43,
//     question: "人間とコンピュータとの間のインターフェースを構築、人間の五感と対応を図っている層は？",
//     options: ["ネットワーク層", "アプリケーション層", "トランスポート層", "セッション層"],
//     correctAnswer: 3,
//     explanation: "人間とコンピュータとの間のインターフェースを構築、人間の五感と対応を図っている層はアプリケーション層です。",
//     category: "アプリケーション層",
//     difficulty: "medium"
//   },
//   {
//     id: 44,
//     question: "ネットワーク機器で一般にハブと呼ばれているのは？",
//     options: ["スイッチングハブ", "リピータハブ", "セグメント", "スイッチ"],
//     correctAnswer: 2,
//     explanation: "ネットワーク機器で一般にハブと呼ばれているのはリピータハブです。。",
//     category: "リピータハブ",
//     difficulty: "medium"
//   },
//   {
//     id: 45,
//     question: "ハブと呼ばれている装置はOSI参照モデルの「〜」層で動作します。",
//     options: ["ネットワーク層", "物理層", "データリンク層", "セッション層"],
//     correctAnswer: 2,
//     explanation: "ハブと呼ばれている装置はOSI参照モデルの物理層で動作します。",
//     category: "物理層",
//     difficulty: "medium"
//   },
//   {
//     id: 46,
//     question: "データリンク層ではデータは「〜」と呼ばれています。",
//     options: ["ネットワーク層", "フレーム", "論理アドレス", "セッション層"],
//     correctAnswer: 2,
//     explanation: "ハブと呼ばれている装置はOSI参照モデルの物理層で動作します。",
//     category: "物理層",
//     difficulty: "medium"
//   },
//   {
//     id: 47,
//     question: "ハブと呼ばれている装置はOSI参照モデルの「〜」層で動作します。",
//     options: ["ネットワーク層", "物理層", "データリンク層", "セッション層"],
//     correctAnswer: 2,
//     explanation: "ハブと呼ばれている装置はOSI参照モデルの物理層で動作します。",
//     category: "物理層",
//     difficulty: "medium"
//   },
//   {
//     id: 48,
//     question: "ハブと呼ばれている装置はOSI参照モデルの「〜」層で動作します。",
//     options: ["ネットワーク層", "物理層", "データリンク層", "セッション層"],
//     correctAnswer: 2,
//     explanation: "ハブと呼ばれている装置はOSI参照モデルの物理層で動作します。",
//     category: "物理層",
//     difficulty: "medium"
//   },
]; 