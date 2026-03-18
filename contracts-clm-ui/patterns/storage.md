# Storage

- Status: refined

## Purpose

ファイルの一覧・管理・プレビューを行う。

---

## Layout Structure

- HcNavbar
- Search / Filter Area
- File Table or Card List
- Preview Area（optional）

---

## Component Composition

- HcFileLink
- HcDocumentLink
- HcFileUpload
- HcTable

---

## Layout Rules

- HcNavbar は `components/navbar.md` の固定仕様をそのまま使う
- navbar の項目、順序、配色はページごとに変えない
- 一覧とプレビューを分離 :contentReference[oaicite:9]{index=9}
- table row height: 40px

---

## States

- loading
- empty
- uploading
- error

---

## Interaction

- file click → preview
- upload → list追加
- delete → confirm dialog

---

## Rules

- 破壊操作は confirm 必須 :contentReference[oaicite:10]{index=10}
- メタ情報（容量・更新日）表示

---

## Anti-patterns

- preview が主導になる
- upload導線が不明確
