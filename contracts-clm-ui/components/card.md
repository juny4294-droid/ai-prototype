# Card

- Status: final

---

## Purpose

情報をまとまりとして区切り、画面の構造と階層を明確にする。

---

## When to use

- 詳細 / 設定 / 一覧のセクション分割
- 関連情報のグルーピング

---

## When not to use

- 単純なリスト（→ Table）
- 1行情報（→ List row）

---

## Anatomy

- Container
- Optional Header
- Body
- Optional Footer

---

## Size

- width: 可変（container依存）
- min-width: 320px推奨
- height: content依存

---

## Shape

- border-radius: 12px
- B2B SaaS の情報カードは、角を立てずに穏やかな角丸を既定とする
- 角丸を外すのは table、full-bleed panel、viewer frame など構造上の理由がある場合に限る

---

## Border

- 1px solid neutral.inputBorder (#E4E7ED)

---

## Background

- white (#FFFFFF)
- 背景面は単色のみ
- カード面へのグラデーションは使用しない

---

## Shadow

- 基本: ごく薄い shadow を許容
- 目安: `0 2px 8px rgba(20, 29, 61, 0.08)` 程度
- 影は下方向に短く落とし、広くぼかしすぎない
- modal / 浮上要素は card より強い shadow を使い分ける

---

## Spacing

### 内側

- padding: 16px

### 外側

- card間: 24px

---

## Header

### 構成

- Title
- Optional action（右側）

### ルール

- headerとbodyの間にdividerを入れても良い
- titleは1行

---

## Typography

- Title: 16px / bold
- Body: 14px

---

## Layout Rules

- 同一階層のカードは横幅揃える
- 1カラム or 2カラム構成
- 3カラム以上は避ける

---

## Variants

### Plain

- headerなし

### Header card

- headerあり

### Summary card

- 数値・ステータス中心

### Action card

- CTA含む

---

## States

### default

- 通常

### hover（clickableのみ）

- border強調 or bg subtle change

### selected

- border primary

### loading

- skeleton表示

### empty

- empty state表示

---

## Clickable Card

### ルール

- hoverで変化
- cursor: pointer
- CTAを内包しない

### 禁止

- primary actionをカード全体にする

---

## Interaction Rules

- カードは情報単位
- 操作は内部buttonに任せる

---

## Composition Rules

- page layoutの基本単位
- form / table wrapperとして使用

---

## Responsive

- mobile: 1カラム
- tablet以上: 2カラム可

---

## Accessibility

- 見出し構造を持つ
- clickable時はfocus可能

---

## Anti-patterns

- shadow多用
- card入れ子多層化
- 全要素カード化
- padding不足

---

## Visual Constraint（重要）

- 過度な立体表現禁止
- ガラス / グラデーション禁止
- カード背景へのグラデーション禁止
- ネオン表現禁止

---

## Example structure

```text
Card
├─ Header
│  ├─ Title
│  └─ Action
├─ Body
└─ Footer
