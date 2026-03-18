# Alert

- Status: final

---

## Purpose

画面内で注意・警告・エラー・成功を文脈付きで伝える。

---

## When to use

- toastでは情報量が不足する場合
- ブロック単位で注意喚起が必要な場合
- 次の行動を伴う通知

---

## When not to use

- 瞬間的な通知（→ Toast）
- フィールド単位のエラー（→ ErrorMessage）
- 確認操作（→ Dialog）

---

## Anatomy

- Container
- Status Icon（16px）
- Content
  - Title（optional）
  - Message
- Action（optional）
- Dismiss Button（optional）

---

## Layout

- 対象コンテンツの直上 or 直下
- 横幅は親コンテナに従う
- 最大幅: 100%

---

## Size（確定値）

- padding: 12px 16px
- icon size: 16px
- gap:
  - icon → content: 8px
  - title → message: 4px
  - content → action: 12px

---

## Typography

- message: 14px
- title:
  - 14px / bold
  - messageより強く

---

## Color Usage（確定）

### Info
- bg: subtle background
- border: default
- text: default

### Success
- bg: pale green
- border: primary
- icon: primary

### Warning
- bg: pale yellow（fallback）
- border: warning
- icon: warning

### Error
- bg: danger subtle
- border: danger
- icon: danger

---

## Variants

- info（default）
- success
- warning
- error
- dismissible
- with-action

---

## States

- default
- dismissible
- with-action
- multiline

---

## Interaction Rules

- actionは1つまで
- dismissは右上配置
- dismiss後は再表示しない（同一状態）

---

## Keyboard Interaction

- Tab: action / dismissに移動
- Enter / Space: action実行
- Escape: dismiss（dismissible時）

---

## Responsive

- 幅が狭い場合:
  - actionは下段へ折り返し
  - titleとmessageは縦積み

---

## Composition Rules

- formの上部 or section内に配置
- dialogの代替にしない
- error messageより広い文脈で使用

---

## Semantic Role

- role="alert"（error / warning）
- role="status"（info / success）

---

## Accessibility

- icon + textで状態を表現
- alertは読み上げ対象

---

## Anti-patterns

- alertの多用（1画面1〜2まで）
- 次の行動がないエラー
- toastと重複表示
- 色だけで状態表現

---

## Component Boundary

- ErrorMessage:
  - フィールド単位
- Alert:
  - セクション単位
- Toast:
  - 一時通知

---

## Example Structure

```text
Alert
├─ Icon (16px)
├─ Content
│   ├─ Title (optional)
│   └─ Message
├─ Action (optional)
└─ Dismiss (optional)