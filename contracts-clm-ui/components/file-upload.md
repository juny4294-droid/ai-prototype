# File Upload

- Status: final

---

## Purpose

ファイルの追加・差し替え・登録を安全に行い、結果を即時に可視化する。

---

## When to use

- 契約書アップロード
- 添付ファイル登録

---

## When not to use

- 単なる参照（→ File Link）

---

## Component Boundary（重要）

- File Upload:
  - ファイル追加・状態管理
- File Link:
  - アップロード後の表示

---

## Anatomy

- Instruction text
- Upload trigger（Button）
- Optional drop zone
- File list（File Linkベース）
- Status indicator（progress / error）

---

# Upload Trigger

## Size

- Button準拠（height: 32px）

---

## Label

- 「ファイルを選択」
- 「アップロード」

---

# Drop Zone

## Size

- min-height: 80–120px

---

## Border

- 1px dashed neutral.border

---

## Background

- default: transparent
- drag-over: subtle background

---

## Layout

- center配置
- icon + text

---

# File List（重要）

- File Linkコンポーネントを使用
- 複数ファイル縦並び

---

# States（全体）

## idle

- 初期状態

---

## drag-over

- drop zone強調

---

## uploading

- fileごとに進捗表示

---

## success

- file listに追加

---

## error

- fileごとにエラー表示

---

## disabled

- 操作不可

---

# Progress UI（確定）

## 表現

- spinner or progress bar

---

## 位置

- 各ファイル行内

---

# File Item States

## uploading

- spinner表示
- action無効

---

## success

- File Linkへ変換

---

## error

- error message表示
- retry導線

---

# Interaction Rules

- clickまたはdragでアップロード
- 複数ファイル対応
- 同一ファイル重複防止

---

# Error Handling

- ファイル単位で表示
- 理由を明示（例: サイズ超過）

---

# Content Rules

- 許可形式（例: PDF, DOCX）
- サイズ制限（例: 10MBまで）

---

# Keyboard Interaction

- Tab: trigger focus
- Enter: ファイル選択

---

# Responsive

- mobile:
  - drop zone簡略化
  - button中心

---

# Composition Rules

- File Linkと必ず連携
- Error Messageと併用

---

# Accessibility

- `<input type="file">`を使用
- 状態変化をテキストで通知

---

# ARIA

- aria-busy（upload中）
- aria-live（進捗通知）

---

# Anti-patterns

- dropのみ（buttonなし）
- progress不明
- error非表示
- upload後UIが変わらない

---

# Visual Constraint

- フラットUI
- 過剰アニメーション禁止

---

# Example structure

```text
File Upload
├─ Instruction
├─ Upload Button
├─ Drop Zone
└─ File List
   └─ File Link（状態付き）