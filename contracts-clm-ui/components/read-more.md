# Read More

- Status: final

---

## Purpose

長文コンテンツを初期表示で圧縮し、必要に応じて全文を展開できるようにする。

---

## When to use

- テーブルセル内の長文
- コメント・タイムライン
- 詳細説明テキスト

---

## When not to use（重要）

- 重要な意思決定情報（初期表示必須）
- 1〜2行で収まるテキスト
- フォーム入力補助

---

## Anatomy

- Content container
- Preview text（collapsed）
- Expand trigger
- Expanded content
- Optional collapse trigger

---

## Layout（最重要）

### 基本構造

Preview Text  
↓  
Expand Trigger  

---

### 展開後

Full Text  
↓  
Collapse Trigger（任意）

---

### ルール

- トリガーは本文直下
- 本文とトリガーは視覚的に分離しすぎない
- 展開前後で横幅は変えない

---

## Truncation Rules（最重要）

### 行数制御

- デフォルト: 2〜3行
- 最大: 3行

---

### 切り方

- 単語途中で切らない
- 文の途中でも不自然にならない位置で調整
- 省略は `…` を使用

---

### 例

これは契約に関する重要な説明文です。複数の条件があり…  

---

## Expand Trigger

### 文言（固定）

- 「続きを読む」
- 展開後: 「閉じる」

---

### 表示

- テキストリンク形式
- ボタンにしない（軽操作扱い）

---

### 位置

- 常に本文直下
- 右寄せしない（本文文脈に紐づける）

---

## Size

- preview高さ: 2〜3行分
- expanded: 制限なし（自然高さ）

---

## Spacing

- text → trigger: 4–8px
- block間: 通常テキストと同等

---

## Typography

### Text

- 通常本文と同一

---

### Trigger

- font-size: 14px
- color: link color
- underline: 任意（hoverで表示でも可）

---

## Color

### Text

- 通常本文色

---

### Trigger

- link color（例: primary系）
- hover時は明確に変化

---

## States

- collapsed
- expanded
- hover（trigger）
- focus

---

## Interaction Rules（重要）

- クリックで展開 / 折りたたみ
- hoverのみで展開しない（禁止）
- トリガーは常に可視
- 展開後にレイアウトが大きく崩れない

---

## Animation（任意）

- 展開: 高さアニメーション（150–250ms）
- easing: ease-out
- 必須ではない（静的でも可）

---

## Keyboard Interaction

- Tab: triggerへ移動
- Enter / Space: toggle
- Esc: 閉じる（任意）

---

## Accessibility

- button または a 要素で実装
- 状態変化を明示

---

## ARIA

- aria-expanded="true/false"
- aria-controls="content-id"

---

## Responsive

### Desktop

- 2〜3行 truncation維持

---

### Mobile

- 行数制限は同様
- タップ領域を広くする

---

## Variants

### Inline Read More

- テキスト内に自然に配置

---

### Block Expansion

- セクション単位

---

### Table Cell Expansion

- セル内で省略表示

---

## Composition Rules

- Table / Detail / Timeline と組み合わせる
- Tooltipの代替にしない
- Modalの代替にしない

---

## Read More / Tooltip / Modalの境界（重要）

### Read More

- 同一文脈内で全文表示

---

### Tooltip

- 補足情報（短文）

---

### Modal

- 詳細情報（別コンテキスト）

---

## Anti-patterns（重要）

- 重要情報を隠す
- どこまで続くか分からない
- hoverでしか展開できない
- トリガーが見えない
- 展開後にページジャンプが発生する
- 「続きを読む」が多すぎる（乱用）

---

## Visual Constraint

- フラットUI
- 本文と一体感を持たせる
- トリガーだけを軽く強調

---

## Example structure

Read More  
├─ Preview Text（2–3 lines）  
├─ 続きを読む  
└─ Expanded Content（full text）  