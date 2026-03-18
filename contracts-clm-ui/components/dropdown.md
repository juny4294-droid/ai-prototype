# Dropdown

- Status: final

---

## Purpose

単一選択またはコンパクトなアクション選択を提供する。

---

## When to use

- 単一選択（form / filter）
- 行アクションの集約

---

## When not to use

- 複数選択（→ Multi Select）
- 4件以下で比較が必要（→ Radio）
- 主要操作（→ Button）

---

## Anatomy

- Trigger
  - Value
  - Caret icon
- Panel
  - Option list

---

# Trigger（Input型）

## Size

- height: 32px
- padding: 0 12px

---

## Shape

- radius: 4px

---

## Border

- 1px solid neutral.inputBorder

---

## Layout

- 左: value
- 右: caret（16px）

---

## States

### default

- bg: white

---

### hover

- border強調

---

### focus

- border: primary

---

### disabled

- bg: neutral
- text: muted

---

### error（form時）

- border: danger

---

# Panel（Option List）

## Size

- min-width: triggerと同じ
- max-height: 240px（scroll）

---

## Background

- white

---

## Shadow

- modal系shadow（軽め）

---

## Option（1行）

### Size

- height: 32px
- padding: 0 12px

---

### Typography

- font-size: 14px

---

## Option States

### default

- bg: transparent

---

### hover

- bg: subtle background

---

### selected

- bg: primary pale
- text: strong

---

### active（keyboard）

- bg: subtle

---

### disabled

- text: muted
- pointer: none

---

## Selected Indication

- 背景変化（必須）
- optional: check icon（右）

---

# Interaction Rules

- clickで開閉
- option選択で閉じる
- outside clickで閉じる

---

# Keyboard Interaction

- Tab: focus
- Enter: open/select
- Arrow ↑↓: option移動
- Esc: close

---

# Positioning（重要）

- default: 下に開く
- 下に余白不足 → 上に反転
- viewportからはみ出さない

---

# Variants

### Form dropdown

- labelあり

---

### Filter dropdown

- compact

---

### Action menu

- icon-only trigger可

---

# Composition Rules

- form / filter / table action
- radio / multi-selectと混同禁止

---

# Accessibility

- role="combobox" or "menu"
- aria-expanded
- aria-selected

---

# Responsive

- mobile:
  - full-width panel
  - タップ領域拡張

---

# Anti-patterns

- triggerがbuttonっぽくなる
- selectedが分からない
- hoverなし
- panelが画面外に出る

---

# Visual Constraint

- フラットUI
- グラデーション禁止
- 過剰shadow禁止

---

# Example structure

```text
Dropdown
├─ Trigger
│  ├─ Value
│  └─ Caret
└─ Panel
   └─ Option list