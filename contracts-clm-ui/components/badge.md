# Badge

- Status: final

---

## Purpose

状態または件数を短いラベルで強く示す。

---

## When to use

- 未対応 / 完了などの状態表示
- 件数表示（通知・タブ）
- table / card の補助情報

---

## When not to use

- 分類用途（→ Tag）
- 長文説明
- 操作要素

---

## Component Boundary

- Badge:
  - 状態 / 数値
- Tag:
  - 分類ラベル
- Alert:
  - 説明付き通知

---

## Anatomy

- Container
- Label or Number
- Optional dot or icon

---

## Layout

- inline配置（テキスト横）
- baselineを揃える
- 単体で行を占有しない

### Overlay Indicator Variant

- nav / rail / icon item の右上へ重ねて配置してよい
- overlay時は baseline 揃えを前提にしない
- host 要素の押下領域を侵食しない位置に留める
- indicator 単体を primary action にしない
- contract detail の rail では item 全体ではなく icon wrapper を host にする
- contract detail の rail では label 行の位置補正に badge を使わない
- contract detail の rail では count badge を `24px / 10px` とし、`icon wrapper 右上 + x: 6px / y: -4px` を基本位置とする
- contract detail の rail では dot を `12px` とし、`icon wrapper 右上 + x: 5px / y: -1px` を基本位置とする

---

## Size（確定値）

- height: 20px
- min-width: 20px
- padding: 0 8px

---

## Shape

- radius: 10px（pill）
- border: none

---

## Typography

- font-size: 12px
- font-weight: 600
- line-height: 20px

---

## Color Usage（確定）

### Neutral（default）
- bg: subtle background
- text: default

### Success
- bg: pale green
- text: primary

### Warning
- bg: pale yellow（fallback）
- text: warning

### Error
- bg: danger subtle
- text: danger

---

## Count Rules

- 1〜2桁: そのまま表示
- 3桁以上: "99+" 表示
- 数値は中央揃え

---

## Variants

- status badge
- count badge
- dot badge（省略型）
- overlay rail indicator

---

## States

- default
- active（強調色）
- disabled（muted）

---

## Interaction Rules

- clickable時のみhover
- primary actionにはしない

---

## Keyboard Interaction

- clickable時のみfocus対象

---

## Responsive

- サイズ固定
- overflow時は省略（99+）

---

## Composition Rules

- table / tab / navbar / card
- avatarと併用可（小サイズ）
- section rail では overlay indicator として使ってよい

---

## Accessibility

- 色 + テキストで意味を伝える
- 数値の意味が文脈で分かる位置に配置

---

## Anti-patterns

- 長文を入れる
- Tag用途で使う
- 色の意味が画面ごとに変わる
- ボタン代わりに使う

---

## Example Structure

```text
Badge
└─ Label or Count
