# Error Message

- Status: final

---

## Purpose

入力エラーや処理失敗を、修正行動とセットで明確に伝える。

---

## When to use

- field validation
- フォーム送信エラー

---

## When not to use

- 成功通知（→ Toast）
- 全体警告（→ Alert）

---

## Anatomy

- Error text
- Optional icon

---

## Size（確定）

- font-size: 12px
- line-height: 1.4

---

## Color

- text: danger (#E64C5B)
- icon: danger

---

## Spacing

- fieldとの距離: 4–8px
- 複数行間: 4px

---

## Layout（重要）

### 基本

- field直下に配置（必須）

```text
Input
↓
Error Message