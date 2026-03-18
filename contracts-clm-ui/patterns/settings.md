# Settings

- Status: refined

## Purpose

管理設定をカテゴリ単位で編集する。

---

## Layout Structure

- HcNavbar
- HcSideMenu
- Settings Content

---

## Component Composition

- HcSideMenu
- HcCard（設定ブロック）
- HcFormLabel + Input系
- HcButton（保存）

---

## Layout Rules

- HcNavbar は `components/navbar.md` の固定仕様をそのまま使う
- navbar の項目、順序、配色はページごとに変えない
- side menu width: 240px :contentReference[oaicite:5]{index=5}
- content padding: 24px
- card間: 24px

---

## Interaction

- カテゴリ切替 → side menu
- 保存 → section or page単位

---

## Rules

- SideMenu → Content 構造を固定 :contentReference[oaicite:6]{index=6}
- helper text は最小限

---

## Anti-patterns

- 設定粒度がバラバラ
- 保存位置が不明
