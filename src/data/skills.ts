export type Skill = {
  name: string;
  description: string;
};

export const skills: Skill[] = [
  {
    name: "HTML / CSS",
    description:
      "セマンティックなマークアップとレスポンシブレイアウト。CSS変数・Flexbox・Gridを活用した保守性の高いコーディング。",
  },
  {
    name: "JavaScript",
    description:
      "バニラJSによるDOM操作・非同期処理。フレームワークを使わない素のJSでの実装経験も豊富。",
  },
  {
    name: "WordPress",
    description:
      "オリジナルテーマの設計・構築。カスタム投稿タイプ・ACFを活用した運用しやすい管理画面の設計。",
  },
  {
    name: "Figma / Adobe XD",
    description:
      "ワイヤーフレームからデザインカンプ、操作可能なプロトタイプまで対応。",
  },
  {
    name: "Photoshop / Illustrator",
    description:
      "バナー・アイコン・画像加工など。制作物に応じて適切なツールを選択。",
  },
  {
    name: "AI Tools",
    description:
      "Claude・Cursorを制作フローに組み込み、仕様整理・コーディング・デバッグの効率化を実践。",
  },
];