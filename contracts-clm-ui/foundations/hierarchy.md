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
- first glanceで重要情報が分かる
- 先に読む情報、次に判断する情報、最後に補助情報の順で置く

---

## Concrete Rules

- 一覧: Left Filter Sidebar → Main Header → Table → Pagination
- 詳細: Navigation → Content → Support
- 設定: Sidebar → Content
- 一覧の補助詳細: Right Sidebar
- summaryはmainの先頭で、状態把握に必要な情報だけを短く置く
- supportはmainの代替ではなく、履歴、補足、関連情報に限定する

---

## Component Application

- sidebarは補助
- commentsはsupport
- 契約詳細の右 rail は support とし、main form を複製しない

---

## Anti-patterns

- 主従が同列
- supportがmain侵食
- 強調要素が多すぎて視線が散る
- 要約と詳細が同じ強さで並ぶ
