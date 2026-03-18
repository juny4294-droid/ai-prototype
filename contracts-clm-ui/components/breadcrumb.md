# Breadcrumb

- Status: final

---

## Purpose

階層構造における現在地を示し、上位階層へ戻る導線を提供する。

---

## When to use

- 詳細画面
- 設定階層
- 2階層以上の遷移がある画面

---

## When not to use

- 1階層のみ
- ナビゲーション代替

---

## Anatomy

- Container
- Item（link or current）
- Separator

---

## Layout

- navbar直下 or title上
- 1行固定（折り返し禁止）

---

## Size（確定値）

- height: 24px
- item gap: 8px
- separator gap: 4px

---

## Typography

- font-size: 12px
- line-height: 24px

---

## Color Usage（確定）

### link
- text: mutedText

### hover
- text: strongText

### current
- text: strongText
- weight: 600

---

## Separator

- symbol: "/"
- color: mutedText
- サイズはテキストと同一

---

## Truncation Rules（重要）

- 最大表示: 4階層
- 超過時は中間省略を行う

例：

Home / ... / Parent / Current

- currentは必ず表示
- 省略は中央のみ（先頭と末尾は保持）

---

## Variants

- standard
- truncated

---

## States

- link
- hover
- current
- disabled（不可遷移）

---

## Interaction Rules

- currentはリンク化しない
- hoverでのみ強調
- linkはクリック可能と明確にする

---

## Keyboard Interaction

- Tabで各link移動
- Enterで遷移

---

## Responsive

- 横幅不足時は中間省略を優先
- 折り返しは禁止

---

## Composition Rules

- page titleとセットで使用
- sidebarと併用可
- tableやcard内部では使用しない

---

## Semantic Role

- nav要素 + リスト構造

---

## Accessibility

- currentに aria-current="page" を付与
- 各linkは意味のあるラベルを持つ

---

## Anti-patterns

- 1階層で使用
- 折り返し表示
- currentがクリック可能に見える
- 長文をそのまま表示

---

## Component Boundary

- Breadcrumb:
  - 階層ナビゲーション
- Page Title:
  - 現在の主情報

---

## Example Structure

```text
Breadcrumb
├─ Home (link)
├─ /
├─ Contract List (link)
├─ /
└─ Contract Detail (current)