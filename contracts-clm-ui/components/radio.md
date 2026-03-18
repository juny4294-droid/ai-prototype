# Radio

- Status: final

---

## Purpose

少数の選択肢から1件のみを明確に選択させる。

---

## When to use

- 選択肢が2〜4件
- 比較しながら選ばせたい
- 単一選択が前提

---

## When not to use

- 複数選択（→ Checkbox）
- 選択肢が多い（→ Dropdown）
- yes/no（→ Toggle / Checkbox）

---

## Anatomy

- Radio group
- Group label
- Radio item
  - Control
  - Label
  - Optional description

---

## Layout（最重要）

### 基本構造

Group Label  
↓  
Radio List（縦並び）

---

### Radio item構造

( ○ ) Label  
　　　Description（optional）

---

### ルール

- 縦並びを基本
- 横並びは短い選択肢のみ許容
- 説明はラベルの直下に揃える

---

## Size

### Control

- visual: 16px
- hit area: 32px以上

---

### 行高さ

- 最小: 32px
- descriptionあり: 48px以上

---

## Spacing

- item間: 8–12px
- control ↔ label: 8px
- label ↔ description: 4px

---

## Typography

### Label

- font-size: 14px
- font-weight: 500

---

### Description

- font-size: 12–13px
- color: muted

---

## Color

### Unselected

- border: neutral
- background: transparent

---

### Selected

- border: primary
- dot: primary

---

### Hover

- border: stronger neutral

---

### Focus

- outline or ringあり

---

### Disabled

- border: muted
- text: muted

---

### Error（group単位）

- border: error
- message表示

---

## States

- unselected
- selected
- hover
- focus
- disabled
- error（group）

---

## Selection Rules（最重要）

- 同時に選べるのは1つのみ
- 新しい選択で既存は解除
- deselect不可（常に1つ選択 or 未選択許容は明示）

---

## Group Rules

- 必ずグループ単位で扱う
- group labelは必須
- 単体radioの使用は禁止

---

## Interaction Rules

- controlまたはlabelクリックで選択
- descriptionクリックでも選択可
- hoverは行単位で反応

---

## Keyboard Interaction

- Tab: groupへフォーカス
- Arrow（↑↓）: 選択移動
- Space: 選択
- Enter: 文脈依存

---

## Accessibility

- `<input type="radio">` 使用
- 同一nameでグループ化

---

## ARIA

- groupに `role="radiogroup"`
- 各itemに `aria-checked`
- group labelと関連付け

---

## Responsive

### Desktop

- 縦並び維持

---

### Mobile

- タップ領域を拡大
- description折り返し

---

## Variants

### Standard

- ラベルのみ

---

### With Description

- 説明付き

---

### Horizontal

- 短文のみ横並び

---

## Composition Rules

- Form Labelとセット
- Modal / Form内で使用
- Checkbox / Dropdownと混在させない

---

## Radio / Checkbox / Dropdownの境界（重要）

### Radio

- 単一選択
- 比較前提

---

### Checkbox

- 複数選択

---

### Dropdown

- 選択肢が多い

---

## Anti-patterns（重要）

- 選択肢が多すぎる（5以上）
- 未選択状態が意図不明
- controlが小さすぎる
- labelクリックで選択できない
- group labelがない
- 複数選択できるように見える

---

## Visual Constraint

- フラットUI
- 過剰装飾禁止
- selectedのみ明確に強調

---

## Example structure

Radio Group  
├─ Group Label  
├─ ( ○ ) Option A  
│       Description  
├─ ( ● ) Option B  
│       Description  
└─ ( ○ ) Option C  