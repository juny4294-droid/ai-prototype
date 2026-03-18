# Thread Comments

- Status: final

---

## Purpose

複数人の会話を、時系列と返信関係を保持したまま可読性高く表示する。

---

## When to use

- 契約レビューコメント
- 差し戻し・確認依頼
- 複数人の非同期コミュニケーション

---

## When not to use（重要）

- 単純ログ（→ Timeline）
- 単発メモ
- 状態履歴のみ

---

## Anatomy

- Thread container
- Comment item
- Avatar
- Author
- Timestamp
- Message body
- Reply action
- Optional attachment

---

## Layout（最重要）

### 基本構造

Comment  
↓  
Reply（インデント）

---

### 配置ルール

- 左：Avatar
- 右：本文ブロック

---

### 本文ブロック

Author + Timestamp  
Message  
Actions

---

## Thread Structure（最重要）

### 表現方法

- インデント（16–24px）
- 左ボーダー or ガイドライン（任意）

---

### 深さ制限

- 最大2階層（推奨）

---

### NG

- 無限ネスト

---

## Comment Item

### Width

- 最大600–720px（可読性優先）

---

### Sidebar内

- full width使用

---

## Spacing

### コメント間

- 12–16px

---

### スレッド間

- 16–24px

---

### Avatarと本文

- 8–12px

---

## Typography

### Author

- font-size: 13–14px
- font-weight: 600

---

### Timestamp

- font-size: 12px
- color: muted

---

### Message

- font-size: 14px
- line-height: 1.6

---

## Color

### 基本

- 背景: transparent

---

### 未読

- subtle highlight（背景 or 左線）

---

### 自分の投稿

- 軽い区別（任意）

---

## Message Body

### 表示

- 改行維持
- 長文対応

---

### 長文

- Read More併用

---

## Attachments

### 表示

- 本文下に分離

---

### 種類

- ファイルリンク
- ドキュメント

---

## States

- read
- unread
- replied
- collapsed
- loading

---

## Interaction Rules（最重要）

### Reply

- 各コメントに紐づく
- 対象が明確

---

### Quote（任意）

- 一部引用可能

---

### 編集 / 削除

- 投稿者のみ

---

## Input Area（重要）

### 配置

- スレッド末尾 or 各コメント下

---

### 構成

- Textarea
- Submitボタン

---

### 挙動

- Ctrl / Cmd + Enterで送信

---

## Unread Handling

### 表示

- 未読マーカー
- 新着区切り線

---

### ルール

- 既読操作で解除

---

## Scroll Behavior

- 新着時は自動スクロール（任意）
- 手動スクロール優先

---

## Keyboard Interaction

- Tab: 操作移動
- Enter: 改行
- Cmd/Ctrl + Enter: 送信

---

## Accessibility

- 投稿順序が読み上げで追える
- Author / Time / Bodyの関係明確

---

## ARIA

- role="list"
- role="listitem"

---

## Responsive

### Desktop

- 横2カラム（Avatar + Body）

---

### Mobile

- Avatar上 / 本文下

---

## Variants

### Flat List

- 時系列のみ

---

### Nested Thread

- 返信構造あり

---

### Sidebar Thread

- 狭幅用

---

## Composition

- Sidebar（推奨）
- Contract Detail
- File / Attachment
- Read More
- Textarea（入力）

---

## Thread / Timeline / Activityの境界（重要）

### Thread

- 会話（人ベース）

---

### Timeline

- イベント（システム）

---

### Activity

- 操作履歴

---

## Anti-patterns（重要）

- 返信関係が見えない
- 無限ネスト
- Avatarなし
- timestampが目立ちすぎる
- 長文で区切り不明
- 入力導線が遠い

---

## Visual Constraint

- フラット
- 低装飾
- 本文優先

---

## Example structure

Thread Comments  
├─ Comment item  
│  ├─ Avatar  
│  ├─ Author + Timestamp  
│  ├─ Message  
│  └─ Actions  
└─ Reply thread  