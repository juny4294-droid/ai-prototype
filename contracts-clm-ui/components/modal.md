# Modal

- Status: final

---

## Purpose

中規模までの入力・確認・補助操作を、現在画面の文脈を維持したまま短時間で完結させる。

---

## When to use

- フォーム（3〜8項目程度）
- 軽い設定変更
- 補助的な情報入力・確認

---

## When not to use

- 長いフォーム（→ Full Modal）
- 破壊操作の短い確認（→ Dialog）
- 複数ステップのワークフロー（→ ページ）

---

## Anatomy

- Overlay
- Modal Container
- Header
- Body（scrollable）
- Footer Actions

---

## Layout

- `Header → Scrollable Body → Footer` の順で構成する
- `Body` のみスクロールさせる
- 共通ルールは `foundations/overlay-surface.md` を優先する

---

## Size

- small: 400px
- medium: 520–640px（標準）
- large: 720–800px（上限）
- max-height: 80–90vh

---

## Spacing

- Header padding: 16px
- Body padding: 16–24px
- Footer padding: 16px
- 要素間: 8–16px

---

## Typography

- Title: 16–18px / 600
- Body: 14px

---

## Color usage

- Background: #FFFFFF
- Overlay: rgba(0,0,0,0.4)
- Border: #E5E7EB

---

## Variants

- Form Modal
- Informational Modal
- Confirmation Modal

---

## States

- open
- loading
- scrolling
- submitting
- error

---

## Interaction rules

- overlayクリックで閉じるかは用途次第（危険操作時は無効）
- 未保存変更 → 確認Dialog
- primary action は 1 つ

---

## Keyboard interactions

- Tab: modal 内で循環
- Enter: primary action（フォーム時）
- Esc: close（条件付き）

---

## ARIA requirements

- 初期フォーカスは最初の入力 or Title

---

## Responsive behavior

- tablet: width 90%
- mobile: フル幅、footer を視認可能に保つ

---

## Composition rules

- Form Label / Input / Dropdown / Button と組み合わせる
- Full Modal / Dialog と混同しない
- input / select / textarea は原則 single column の縦積みとする

---

## Anti-patterns

- 長いフォームを modal に押し込む
- body 以外もスクロールする
- primary action を複数並べる
