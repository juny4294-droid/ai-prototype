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

## Size（確定）

- width: 400–480px
- max-width: 90vw

---

## Shape

- border-radius: 8px

---

## Background

- white

---

## Shadow

- modal shadow使用
- 例: 0 4px 12px rgba(0,0,0,0.1)

---

## Overlay

- bg: rgba(0,0,0,0.4)
- 背景操作は完全ブロック

---

## Layout

- center配置（縦横中央）
- 構造順序固定：

```text
Title
↓
Description
↓
Actions