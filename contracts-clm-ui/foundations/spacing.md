# Spacing

## Purpose

高密度UIでも視認性と構造理解を維持する。

---

## Token Mapping

- base: 4px
- grid: 8px
- scale: 2 / 4 / 6 / 8 / 12 / 16 / 24 / 32 / 40

---

## Base Rules

- 4の倍数を基本とする
- button xsmall のみ 22px を例外許容
- 同一コンポーネントは高さ統一

---

## Concrete Rules

### Component Size

- button:
  - large: 40px
  - medium: 32px
  - small: 24px
  - xsmall: 22px
- input: 32px
- textarea: 64px以上
- table row: 40px
- tag: 20px

### Padding

- card: 16px
- modal: 24px
- table cell: 8px 12px

### Layout

- label → input: 8px
- field → field: 12px
- section → section: 24px
- block → block: 32px

---

## State Mapping

- hover: spacing変化なし
- focus: spacing変化なし

---

## Component Application

- form: 12pxで統一
- table: 40px固定
- card: padding固定

---

## Anti-patterns

- 8px未満の余白
- 同種UIの高さ不一致
- section間のばらつき
