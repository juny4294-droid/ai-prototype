# Multi Select

- Status: final

---

## Purpose

複数の候補から1件以上を選択し、選択状態を可視化しながら管理する。

---

## When to use

- 担当者、タグ、カテゴリなど複数選択
- 候補数が多く検索が必要な場合
- 将来的に複数選択へ拡張可能性がある場合

---

## When not to use

- 4件以下の単一選択（→ Radio）
- 単純な単一選択（→ Dropdown）
- boolean（→ Checkbox）

---

## Anatomy

- Input container（Trigger）
- Selected value display
- Optional chips
- Dropdown panel
- Optional search input

---

## Layout（最重要）

### 基本構造

Label  
↓  
Trigger Field  
↓  
Dropdown Panel  

---

### Trigger内部

[ Chips / Summary ][ Caret ]

---

### ルール

- Inputと同じ高さ基準
- chipsが増えても破綻しない
- caretは右端固定

---

## Size

### Height

- 最小: 36–40px
- 可変（最大制御あり）

---

### Width

- 通常inputと同等
- 長文対応

---

## Spacing

- Chip間: 4–8px
- Input内padding: 8–12px
- Option間: 8px

---

## Typography

- 選択値: 14px
- Option: 14px
- 補助情報: 12px

---

## Color

### Default

- border: #E5E7EB
- background: #FFFFFF

---

### Selected Chip

- background: 薄い中立 or ブランド薄色
- text: 強調

---

### Focus

- border: primary
- ringあり

---

### Error

- border: #E64C5B

---

## Selected Value表示（重要）

### 少数（1–3件）

- chip表示

---

### 多数（4件以上）

- 「+N」サマリ表示

例:  
田中 / 佐藤 / 他3件  

---

### ルール

- 高さ無制限拡張は禁止
- 最大2行まで
- それ以上は省略

---

## Chips

### 構成

- Label
- Remove（×）

---

### 挙動

- ×で即削除
- hoverで削除可能表示

---

## Dropdown Panel

### 構造

- Optional search
- Option list

---

### ルール

- 最大高さ制限（スクロール）
- 選択状態を明確表示

---

## Option

### 表示

- Checkbox付き

---

### 状態

- selected
- hover
- disabled

---

### ルール

- 選択中はチェック明示
- クリックでtoggle

---

## Search（重要）

### 表示条件

- 候補10件以上

---

### 挙動

- インクリメンタル検索
- 入力中も選択状態保持

---

## Variants

### Multi Select（標準）

---

### Searchable

- 検索あり

---

### Compact（Table用）

- chip非表示
- summaryのみ

---

## States

- empty
- selected
- open
- searching
- focus
- disabled
- error

---

## Interaction Rules（重要）

- 選択はtoggle式
- dropdownは閉じない（複数選択のため）
- Enterで選択
- Escで閉じる

---

## Keyboard Interaction

- Tab: フォーカス移動
- Arrow: option移動
- Enter: 選択
- Backspace: 最後のchip削除
- Esc: 閉じる

---

## Accessibility

- role="combobox"（multi対応）
- aria-expanded
- aria-controls

---

## ARIA

- aria-multiselectable
- aria-selected（option）

---

## Responsive

### Mobile

- chipsは1行＋省略
- dropdownはフル幅

---

## Composition Rules

- Form Label必須
- Inputと同列扱い
- Dropdownと役割分離

---

## Multi Select / Dropdownの境界（重要）

### Dropdown

- 単一選択

---

### Multi Select

- 複数選択
- 状態保持あり

---

## Anti-patterns（重要）

- 選択数増加で高さ無制限拡張
- 選択状態が視認できない
- 検索なしで大量候補
- dropdownが選択ごとに閉じる
- chipが操作できない

---

## Visual Constraint

- フラットUI
- 過剰装飾禁止

---

## Example structure

Multi Select  
├─ Label  
├─ Input Container  
│  ├─ Chips / Summary  
│  └─ Caret  
└─ Dropdown Panel  
   ├─ Search  
   └─ Option List（Checkbox付き）  