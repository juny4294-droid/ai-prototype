# Document Link

- Status: final

---

## Purpose

契約書や関連文書への遷移を明確に提示する。

---

## When to use

- 契約詳細 / 一覧 / sidebar で文書リンクを表示

---

## When not to use

- 単なる表示テキスト（→ Text）
- ファイル情報（→ File Link）

---

## Anatomy

- Container（clickable）
- Optional icon
- Document title
- Optional metadata

---

## Size

- height: 32px（table row基準）
- inline時: 行高さに従う

---

## Spacing

- icon → title: 8px
- title → metadata: 8px

---

## Typography

- title:
  - font-size: 14px
  - font-weight: 500（medium）
- metadata:
  - font-size: 12px
  - color: muted

---

## Color（確定）

### default

- text: primary or navy
- underline: なし

---

### hover

- underline: あり
- color: primary強調

---

### visited（任意）

- color: slightly muted

---

### disabled

- text: muted
- pointer: none

---

## Icon

- size: 16px
- 色: textに準拠

---

## Layout Rules

### 基本

- 横並び
- 1行または2行まで許容

---

### metadata

- 原則：下に配置（2行目）
- table内：右側 or 非表示

---

## Truncation（重要）

- 1行時:
  - ellipsis（...）
- 2行時:
  - line-clamp: 2

---

## Interaction Rules

- 行全体をクリック可能にする
- icon単体クリック禁止
- hoverでリンクであることを明示

---

## Table Integration（重要）

### ルール

- 行hoverと連動
- text overflow必須
- denseでも可読性維持

---

## Keyboard Interaction

- Tab: focus
- Enter: 遷移

---

## Responsive

- mobile:
  - 2行表示許容
  - metadata省略可

---

## Composition Rules

- table / card / sidebar
- file linkと役割を分離

---

## Accessibility

- `<a>`要素を使用
- link textだけで意味が分かる

---

## ARIA

- aria-label（必要時）
- 外部リンクは明示

---

## Anti-patterns

- リンクなのにhover変化なし
- truncateで意味消失
- metadataが主役になる
- iconだけクリック可能

---

## Visual Constraint

- フラットUI
- 装飾的underline禁止（hoverのみ）

---

## Example structure

```text
Document Link
├─ Icon
├─ Title（ellipsis）
└─ Metadata（optional）