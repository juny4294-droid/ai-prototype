# Textarea

- Status: final

---

## Purpose

複数行の自由記述を扱い、文脈付きの長文入力を安定して保存する。

---

## When to use

- 契約備考
- コメント入力
- 説明文・理由入力
- 長文フィールド

---

## When not to use（重要）

- 1行入力（→ Input）
- 構造化データ（→ Select / Form）
- 短文（20文字程度）

---

## Anatomy

- Label
- Textarea field
- Optional helper text
- Optional character counter
- Optional error message

---

## Layout（最重要）

Label  
Textarea  
Helper / Error / Counter

---

### ルール

- Label必須
- placeholderは補助用途のみ
- 下部に補助情報を集約

---

## Size（規格固定）

### Height

- 初期: 80–120px（約3–5行）

---

### Min Height

- 80px

---

### Max Height

- 240–320px（スクロールに切替）

---

## Resize Behavior

### デフォルト

- verticalのみ許可

---

### 制御系フォーム

- resize禁止（auto expand）

---

## Auto Expand（推奨）

- 入力に応じて高さ拡張
- max到達で内部スクロール

---

## Typography

- font-size: 14px
- line-height: 1.6

---

### Placeholder

- muted color
- 通常テキストより弱い

---

## Spacing

- Label → Field: 4–8px
- Field → Helper: 4px
- Field → Error: 4px

---

## Color

### Default

- border: neutral
- background: white

---

### Focus

- border: primary
- outlineなし or subtle

---

### Error

- border: error
- message表示

---

### Disabled

- background: muted
- text: subdued

---

## States

- empty
- filled
- hover
- focus
- disabled
- error

---

## Input Behavior（最重要）

### Enter

- 改行（submitしない）

---

### Shift + Enter

- 改行（同一）

---

### Ctrl / Cmd + Enter

- submit（コメント系のみ）

---

## Text Rules

### 長文

- 改行前提
- 文章単位で読みやすく

---

### 禁止

- 自動整形
- 強制truncate

---

## Character Count

### 使用条件

- 制限がある場合のみ表示

---

### 表示位置

- 右下

---

### 表記

- 120 / 500

---

## Helper Text

- 入力意図を補足
- 最大1行

---

## Error

- field直下
- 具体的理由を明示

---

## Interaction Rules（重要）

- placeholderをラベル代替にしない
- 保存タイミングを明確にする
- 長文入力中にフォーカスを失わせない

---

## Save Behavior（重要）

### Form内

- 明示的submit

---

### コメント系

- 即時送信 or ボタン

---

### 自動保存

- 明示しない限り禁止

---

## Scroll Behavior

- max height到達で内部スクロール
- 外部スクロールと競合しない

---

## Keyboard Interaction

- Tab: 次フィールド
- Enter: 改行
- Cmd/Ctrl + Enter: submit（文脈依存）

---

## Accessibility

- `<label for>`必須
- 説明はaria-describedby

---

## ARIA

- aria-invalid
- aria-required
- aria-describedby

---

## Responsive

### Desktop

- 固定幅 or container依存

---

### Mobile

- full width
- auto expand優先

---

## Variants

### Standard

- 通常フォーム

---

### Comment Textarea

- 投稿用途
- submit連動

---

### With Counter

- 文字数制限あり

---

## Composition

- Form
- Modal
- Sidebar
- Comment thread

---

## Textarea / Input / Editorの境界（重要）

### Textarea

- 軽量長文

---

### Input

- 単一行

---

### Rich Editor

- 装飾・構造あり

---

## Anti-patterns（重要）

- placeholderのみでラベルなし
- 初期高さが低すぎる
- Enterで送信される
- 長文入力でresize不可
- 自動保存が不明確
- エラーがfieldから離れている

---

## Visual Constraint

- フラットUI
- 過剰装飾なし
- 入力内容を主役にする

---

## Example structure

Textarea  
├─ Label  
├─ Textarea field  
├─ Helper / Counter  
└─ Error message  