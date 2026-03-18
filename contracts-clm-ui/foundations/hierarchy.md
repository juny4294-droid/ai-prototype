# Hierarchy

## Purpose

情報の主従を一貫して保つ。

---

## Layers

1. Navbar
2. Navigation
3. Summary
4. Content
5. Support
6. Feedback

---

## Base Rules

- primary actionは1つ
- main > support

---

## Concrete Rules

- 一覧: Filter → Table → Pagination
- 詳細: Navigation → Content → Support
- 設定: Sidebar → Content

---

## Component Application

- sidebarは補助
- commentsはsupport
- 契約詳細の右 rail は support とし、main form を複製しない

---

## Anti-patterns

- 主従が同列
- supportがmain侵食
