# Datepicker

- Status: final

---

## Purpose

日付入力を正確かつ一貫した方法で扱う。

---

## When to use

- 契約日 / 締切 / 更新日
- フィルタ条件

---

## When not to use

- 表示専用
- 年月のみ（→ Select）

---

## Anatomy

- Input field
- Calendar trigger icon
- Calendar panel
  - Header（年月 + navigation）
  - Weekday row
  - Date grid（7列）
  - Optional range highlight

---

## Input Field

### Size

- height: 32px（Button / Inputと統一）

### Format（日本語）

- yyyy/MM/dd（例: 2026/03/17）

---

## Calendar Panel

### Width

- 約 240–280px

---

## Grid

### 構造

- 7列（Sun–Sat）
- 5〜6行

---

## Date Cell（確定）

- size: 32px × 32px
- align: center

---

## Header

- 表示: yyyy年 M月
- navigation:
  - ← 前月
  - → 次月

---

## States（Date Cell）

### default

- text: strongText

---

### today

- border: primary

---

### selected（単日）

- bg: primary
- text: white

---

### range

- start:
  - bg: primary
- middle:
  - bg: pale primary
- end:
  - bg: primary

---

### disabled（日付）

- text: muted
- pointer: none

---

### hover

- bg: subtle

---

## Range Selection

### ルール

- hover中は仮選択を表示
- start → endの方向を明確に

### Layout（幅に応じたレイアウト）

- **通常幅**（filter bar など）: start input `〜` end input を1行横並びで表示
- **狭幅**（left filter sidebar など）: start input と end input を縦2段に積み、`〜` は2段の間または省略して label で代替する
  - 縦積みの場合、上段 = 開始日、下段 = 終了日の順を固定する
  - input 幅はコンテナ全幅に合わせて広げてよい
- 横並びか縦積みかの切り替え基準: コンテナ幅が input 2本 + `〜` を収められない場合は縦積みを選ぶ

---

## Interaction Rules

- inputクリックで開く
- 日付選択で閉じる（rangeは例外）
- outside clickで閉じる

---

## Keyboard Interaction

- Tab: focus
- Enter: open
- Arrow: 日付移動
- Enter: 選択
- Esc: close

---

## Icon

- size: 16px
- 右端配置

---

## Spacing

- cell gap: 4px
- panel padding: 8–12px

---

## Typography

- date: 12–14px
- header: 14px bold

---

## Variants

- Single date
- Range date
- Filter（compact）

---

## States（Field）

- empty
- filled
- focus
- error
- disabled

---

## Composition Rules

- form / filter bar: 横並びレイアウトを基本とする
- left filter sidebar: 狭幅のため縦積みレイアウトを使う
- modal: コンテナ幅に応じて横並び / 縦積みを選ぶ

---

## Accessibility

- keyboard操作必須
- aria-selected / aria-disabled

---

## Responsive

- mobile:
  - full-width panel
  - 1カラム

---

## Anti-patterns

- 日付形式不明
- rangeが視覚的に不明
- disabled日付が押せる
- panelが画面外に出る

---

## Visual Constraint

- フラットUI
- グラデーション禁止
- shadow最小

---

## Example structure

```text
Datepicker
├─ Input
├─ Icon
└─ Panel
   ├─ Header
   ├─ Week row
   └─ Date grid (7x6)