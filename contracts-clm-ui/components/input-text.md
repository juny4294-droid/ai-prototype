# Input Text

- Status: final

---

## Purpose

短いテキスト（1行）の入力を正確かつ一貫したUIで扱う。

---

## When to use

- 契約名、取引先名、識別子
- 検索・フィルタ入力
- 保存前提のフォーム入力

---

## When not to use

- 長文（→ Textarea）
- 選択形式（→ Dropdown / Checkbox）
- 日付（→ Datepicker）

---

## Anatomy

- Input container
- Input field
- Optional placeholder
- Optional prefix
- Optional suffix
- Optional right icon
- Optional clear button

---

## Layout（最重要）

### 基本構造

Label  
↓  
Input Field  
↓  
Helper / Error  

---

### 内部構造

[ Prefix ][ Input ][ Suffix / Clear ]

---

### ルール

- 高さは他controlと統一
- prefix/suffixを入れても高さは変えない
- clearは右端固定
- 検索 input の icon は右配置を基本とする

---

## Size

### Height

- 36–40px（基準）

---

### Width

- フィールド内容に応じる
- 最低でも8〜12文字分確保

---

## Spacing

- Label → Input: 4px
- Input → Helper/Error: 4–8px
- 内部 padding: 8–12px

---

## Typography

### Input text

- font-size: 14px
- line-height: 1.4

---

### Placeholder

- 同サイズ
- color: muted (#A8ADBA)

---

## Color

### Default

- border: #E5E7EB
- background: #FFFFFF

---

### Hover

- border: わずかに強調

---

### Focus（重要）

- border: primary color
- outline or ringあり（視認性確保）

---

### Error

- border: #E64C5B
- error messageと統一

---

### Disabled

- background: #F5F6F8
- text: muted

---

## Prefix / Suffix

### 用途

- 単位（円、%）
- 固定フォーマット
- 検索アイコンなど

---

### ルール

- 入力値と明確に分離
- 編集不可領域として扱う
- paddingを圧迫しない
- 特に指定がない場合、icon は Material icons を使う
- 検索 icon は placeholder 左ではなく右端配置を基本とする

---

## Clear Button

### 表示条件

- 入力値あり + hover or focus

---

### 挙動

- クリックで即時クリア
- フォーカスは維持

---

## Variants

### Standard

- 通常入力

---

### Search

- right icon: search
- clearあり

---

### With prefix/suffix

- 単位・記号付き

---

## States

- empty
- filled
- hover
- focus
- disabled
- error

---

## Interaction Rules（重要）

- placeholderは補助でありラベルの代替不可
- 入力制約（文字数・形式）はhelperで事前提示
- エラー時は即時 or submit時に明示

---

## Validation

### 表示タイミング

- blur または submit

---

### 内容

- 何がダメか
- どう直すか

---

## Keyboard Interaction

- Tab: フォーカス移動
- Enter: form submit（文脈依存）
- Esc: clear（search系のみ）

---

## Accessibility

- `<input>`を使用
- `<label for>`で関連付け

---

## ARIA

- aria-invalid（error時）
- aria-describedby（helper / error）

---

## Responsive

- 幅100%可
- 狭幅でも高さ維持

---

## Composition Rules

- Form Label必須
- Error Messageとセット
- Dropdown / Textareaと混同しない

---

## Anti-patterns（重要）

- placeholderのみで意味を伝える
- prefix/suffixが入力値と混在
- エラーがfieldから離れる
- 横幅不足で入力内容が読めない
- フォーカス状態が見えない

---

## Visual Constraint

- フラットUI
- 過剰装飾禁止

---

## Example structure

Form Field  
├─ Label  
├─ Input Container  
│  ├─ Prefix  
│  ├─ Input  
│  └─ Suffix / Clear  
└─ Helper / Error  
