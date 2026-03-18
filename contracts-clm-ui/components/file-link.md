# File Link

- Status: final

---

## Purpose

ファイル実体へのアクセスおよび操作（閲覧・ダウンロード）を提供する。

---

## When to use

- 添付ファイル一覧
- アップロード後の結果表示
- ストレージ / 契約ファイル表示

---

## When not to use

- 文書概念の遷移（→ Document Link）

---

## Component Boundary（重要）

- File Link:
  - ファイル実体（PDF / Word / 画像）
- Document Link:
  - 契約・文書概念

---

## Anatomy

- Container（row）
- File icon
- File name
- Metadata
- Optional action（download / open）

---

## Size

- height: 40px（table row準拠）
- compact: 32px（dense）

---

## Spacing

- icon → name: 8px
- name → metadata: 8px
- metadata → action: 12px

---

## Typography

- name:
  - font-size: 14px
  - font-weight: 500

- metadata:
  - font-size: 12px
  - color: muted

---

## Icon

- size: 16px
- ファイル種別に応じて変化（PDF / DOCなど）

---

## Layout Rules

### 基本

- 横並び
- 左: icon + name
- 右: action

---

### metadata

- name下 or 横に配置
- tableでは省略可

---

## Truncation（重要）

- name:
  - ellipsis（1行）
  - max: 2行（detail時）

---

## Click Behavior（重要）

### 基本

- nameクリック → プレビュー or 詳細

---

### action

- download icon → ダウンロード

---

### 禁止

- 行全体をクリックにしない（actionと競合）

---

## States

### default

- 通常表示

---

### hover

- name underline
- bg subtle（row時）

---

### downloading

- spinner表示
- action無効

---

### processing（upload直後）

- 状態表示（例: アップロード中）

---

### unavailable

- text muted
- action無効

---

## Interaction Rules

- nameとactionを分離
- hoverで操作可能性を明示

---

## Table Integration（重要）

- row hoverと連動
- actionは右固定
- overflow対応必須

---

## Keyboard Interaction

- Tab: name → action
- Enter: nameクリック

---

## Responsive

- mobile:
  - actionをicon化
  - metadata省略可

---

## Composition Rules

- file upload
- storage pattern
- detail sidebar

---

## Accessibility

- `<a>`またはbutton適切使用
- ファイル種別を読み上げ可能に

---

## ARIA

- aria-label（download）
- 状態（processing）を通知

---

## Anti-patterns

- Document Linkと混同
- 行全体クリック
- actionが見つからない
- truncateで意味消失

---

## Visual Constraint

- フラットUI
- グラデーション禁止
- 過剰装飾禁止

---

## Example structure

```text
File Link Row
├─ Icon
├─ File name（ellipsis）
├─ Metadata
└─ Action（download）