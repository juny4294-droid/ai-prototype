# Full Modal

- Status: final

---

## Purpose

ページ遷移を発生させずに、大量情報・長時間操作を伴う編集や確認を完結させる。

---

## When to use

- フォームが1画面相当以上になる場合
- テーブル編集や複数セクション編集が必要な場合
- 編集前後で背景文脈を維持したい場合

---

## When not to use

- 単純確認（→ Dialog）
- 短いフォーム（→ Modal）
- 明確なナビゲーション文脈が必要（→ ページ遷移）

---

## Anatomy

- Overlay
- Full Modal Container
- Header
- Main Content
- Footer Actions

---

## Layout

- `Header → Scrollable Content → Footer` の順で構成する
- `Content` のみスクロールさせる
- 共通ルールは `foundations/overlay-surface.md` を優先する

---

## Size

- max-width: 960–1200px（編集系）
- または full-width（複雑 table）
- viewport height の 90–100%

---

## Spacing

- 左右 padding: 24–32px
- 上下 padding: 24px
- セクション間: 24px
- セクション内: 16px
- フォーム要素間: 8px

---

## Typography

- Header: 18–20px / 600
- Body: 14px

---

## Color usage

- 背景: #FFFFFF
- Overlay: rgba(0,0,0,0.4)
- Border: #E5E7EB

---

## Variants

- Standard Form
- Review
- Split Layout

---

## States

- open
- loading
- dirty
- submitting
- error

---

## Interaction rules

- 未保存状態で閉じる → 確認Dialog必須
- primary action は 1 つ
- 背景クリックでは閉じない

---

## Keyboard interactions

- Tab: modal 内循環
- Esc: close（条件付き）
- Enter: primary action（フォーム時）

---

## ARIA requirements

- フォーカストラップ必須

---

## Responsive behavior

- tablet: width 90%
- mobile: フルスクリーン、footer 固定維持

---

## Composition rules

- Form / Table / Sidebar を内包可能
- Dialog の代替として使わない
- ページ遷移の代替として乱用しない

---

## Anti-patterns

- Header / Footer がスクロールで消える
- 背景スクロールが動く
- Dialog で済む内容を使う
- ページの代替として無制限に使う
