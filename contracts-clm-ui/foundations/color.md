# Color

## Purpose

業務UIとしての可読性・状態認識・操作誘導を担保する。

---

## Token Mapping

- primary: {color.brand.primary}
- primary-dark: {color.brand.dark}
- primary-light: {color.brand.light}

- background: {semanticColor.background.page}
- card: {semanticColor.background.card}
- input: {semanticColor.background.input}

- text-default: {semanticColor.text.default}
- text-muted: {semanticColor.text.muted}

- border-default: {semanticColor.border.default}
- border-focus: {semanticColor.border.focus}
- border-error: {semanticColor.border.error}

---

## Base Rules

- 白ベース + グレーで構造分離
- primaryはCTAのみに使用
- 色は構造ではなく意味に使う

---

## Concrete Rules

- page background: `#F8FAFC` を基本値とする
- page background token: {semanticColor.background.page}
- card: white
- input: white + border-default
- divider: subtle border

---

## State Mapping

default:
- bg: white
- border: default

hover:
- bg: subtle background

focus:
- border: primary

error:
- border: error

disabled:
- bg: background
- text: muted

---

## Component Application

- button: primary / outline / light を明確に分離
- input: focusでborder変化
- table: hoverは背景のみ変化

---

## Anti-patterns

- primary色の多用
- 背景に強い色を使用
- 色だけで意味を表現
- subtle背景の過剰使用
