# Form Label

- Status: final

---

## Purpose

入力項目の意味・必須性・補助情報を明確に伝える。

---

## When to use

- すべての入力項目

---

## When not to use

- 表示専用テキスト

---

## Anatomy

- Label text
- Required marker
- Optional helper text

---

## Layout（最重要）

### 基本（固定）

Label  
↓  
Input  
↓  
Error / Helper  

---

### ルール

- labelは必ずfieldの上に配置する
- 横並びは禁止（例外: table内compact form）
- fieldとの対応関係が1対1で明確であること

---

## Size

- font-size: 14px

---

## Typography

- font-weight: 500（medium）
- line-height: 1.4

---

## Color

- label: #353947（strongText）
- helper: #A8ADBA（muted）

---

## Required Marker（確定）

### 表現

- `*` を使用

### 色

- #E64C5B（danger）

### 位置

- label末尾

例:  
契約日 *  

---

## Spacing

- label → field: 4px
- field → helper/error: 4–8px
- helper複数行間: 4px

---

## Helper Text

### Size

- 12px

### Color

- muted

### ルール

- 簡潔にする（1〜2行）
- エラー時は非表示

---

## Errorとの関係（最重要）

### 優先順位

Error > Helper  

---

### 表示ルール

- エラー発生時はhelperを非表示にする
- error messageが同位置に表示される

---

## Variants

### Standard

- labelのみ

---

### Required

- label + `*`

---

### With helper

- label + helper

---

### With tooltip

- label横に補助アイコン

---

## States

### default

- 通常

---

### required

- 必須マークあり

---

### disabled

- label: muted

---

### error-associated

- labelは変化なし（基本）
- fieldとerror messageで状態表現

---

## Interaction Rules

- labelクリックでfieldにフォーカス
- label省略は禁止

---

## Keyboard Interaction

- Tab: fieldにフォーカス
- label自体はフォーカス対象外

---

## Composition Rules

- Input / Textarea / Dropdown / Datepicker / Checkbox / Radio と組み合わせる
- helperとerrorは同時表示しない

---

## Accessibility

- `<label for>` を必ず使用
- requiredはaria-requiredで補完

---

## ARIA

- aria-labelledby
- aria-describedby（helperまたはerror）

---

## Responsive

- モバイルでも縦構造を維持する
- 折り返し時もlabelとfieldの関係を崩さない

---

## Anti-patterns

- labelなし（placeholder依存）
- required表現が画面ごとに異なる
- helperとerrorの同時表示
- labelとfieldの距離がバラバラ

---

## Visual Constraint

- フラットUI
- 過剰装飾禁止

---

## Example structure

Form Field  
├─ Label（14px）  
│  └─ Required *  
├─ Input  
└─ Helper / Error  