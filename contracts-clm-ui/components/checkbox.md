# Checkbox

- Status: final

---

## Purpose

複数選択および独立したオンオフ状態を明示的に扱う。

---

## When to use

- 複数選択
- 一括操作対象の選択
- boolean設定

---

## When not to use

- 単一選択（→ Radio）

---

## Anatomy

- Control（box）
- Check mark / Indeterminate mark
- Label
- Optional helper text

---

## Size（確定）

- control: 16px × 16px
- hit area: 最低 32px × 32px

---

## Shape

- border-radius: 4px

---

## Border

- 1px solid neutral.inputBorder (#E4E7ED)

---

## Icon（check）

- サイズ: 10–12px
- 中央配置

---

## Spacing

- control と label: 8px
- group間: 8–12px

---

## Typography

- label: 14px
- helper: 12px（muted）

---

## Layout Rules

- label全体をクリック可能にする
- 複数行ラベルは左揃え維持

---

## States（確定）

### unchecked

- bg: white
- border: default

---

### checked

- bg: primary (#00AA9C)
- border: primary
- icon: white check

---

### indeterminate

- bg: primary
- icon: 横線（dash）

---

### hover

- border強調 or subtle bg

---

### focus

- outline or border強調（primary）

---

### disabled

- bg: neutral
- text: muted
- cursor: not-allowed

---

### error（form連携時）

- border: danger
- helper: error message

---

## Table Integration（重要）

### 行選択

- checkboxは左固定
- 行hoverと連動

---

### header checkbox

- 全選択 / 部分選択（indeterminate）
- 子要素と状態同期

---

## Interaction Rules

- labelクリックでtoggle
- indeterminateは親選択のみ
- disabled時は変更不可

---

## Keyboard Interaction

- Tab: focus
- Space: toggle

---

## Responsive

- mobileでもhit area維持
- label折り返し可

---

## Composition Rules

- form / table / settings
- radioと混在禁止

---

## Accessibility

- labelと紐付け必須
- aria-checked（true / false / mixed）

---

## Anti-patterns

- controlのみ表示（labelなし）
- hit areaが小さい
- indeterminate乱用
- checkboxを主要操作に使う

---

## Visual Constraint

- フラットUI
- グラデーション禁止
- 立体表現禁止

---

## Example structure

```text
Checkbox Row
├─ Checkbox (16px)
├─ Label
└─ Helper text