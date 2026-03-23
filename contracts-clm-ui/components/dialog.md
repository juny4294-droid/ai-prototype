# Dialog

- Status: final

---

## Purpose

重要操作の前にユーザーへ明示的な確認を求める。

---

## When to use

- 削除 / 確定 / 送信など不可逆操作
- 重大な影響がある判断

---

## When not to use

- 軽い通知（→ Toast）
- 補助説明（→ Tooltip / Alert）
- 長い作業（→ Modal）

---

## Anatomy

- Overlay
- Dialog container
- Title
- Description
- Action group
- Optional close button（×）

---

## Layout

- center 配置の overlay surface とする
- 構造順序は `Title → Description → Actions` で固定する
- 共通ルールは `foundations/overlay-surface.md` を優先する

---

## Size

- width: 400–480px
- max-width: 90vw

---

## Variants

- destructive confirm
- submit confirm
- leave confirm

---

## States

- open
- loading
- error

---

## Interaction rules

- primary action は 1 つに絞る
- 背景操作は完全にブロックする
- dirty state を持たない短い確認を基本とする

---

## Composition rules

- `button.md` と組み合わせて action を構成する
- 長い form や複数 section を内包しない

---

## Anti-patterns

- modal で扱うべき長い説明や入力を dialog に押し込む
- destructive action の確認なしに閉じる
- primary action を複数並べる
