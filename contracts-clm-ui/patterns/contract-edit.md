# Contract Edit

- Status: refined

## Purpose

契約情報を安全に作成・更新する。

---

## Layout Structure

- HcNavbar
- Page Header
- Structured Form
- Footer Actions

---

## Component Composition

- HcFormLabel
- HcInputText / HcTextarea
- HcDropdown / HcMultiSelect
- HcDatePicker
- HcFileUpload
- HcErrorMessage

---

## Layout Rules

- HcNavbar は `components/navbar.md` の固定仕様をそのまま使う
- navbar の項目、順序、配色はページごとに変えない
- field間: 12px
- section間: 24px
- label → input: 8px :contentReference[oaicite:3]{index=3}

---

## States

- default
- focus
- error
- disabled
- submitting

---

## Interaction

- save → primary
- cancel → light button
- error → field単位表示

---

## Rules

- 保存を唯一の primary にする :contentReference[oaicite:4]{index=4}
- required は明示
- 直接保存を強制しない

---

## Anti-patterns

- 自動保存と手動保存の混在
- error を上部だけに表示
