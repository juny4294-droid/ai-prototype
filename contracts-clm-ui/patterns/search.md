# Search

- Status: refined

## Purpose

条件指定により対象データを高速に絞り込む。

---

## Layout Structure

- Search Input
- Filter Area（optional）
- Result Summary
- Result List / Table

---

## Component Composition

- HcInputText
- HcDropdown / MultiSelect
- HcTable or Card List
- HcPagination

---

## Layout Rules

- HcNavbar は `components/navbar.md` の固定仕様をそのまま使う
- navbar の項目、順序、配色はページごとに変えない
- search と result を近接配置 :contentReference[oaicite:7]{index=7}
- summary → result の順序
- filter が多い場合は left sidebar で詳細絞り込みを行う
- filter が少ない場合は table header area に input / select を配置する
- `4項目以上`、checkbox 群、複数 section がある場合は left sidebar を優先する
- `1〜3項目` の軽量条件は table 近傍に置く
- left sidebar を使う場合は、ページ下部の button で閉じられるようにする
- 閉じた状態でも細い rail を残し、同位置から再度開けるようにする
- filter 入力、reset、export など検索関連操作は1箇所にまとめる
- left sidebar を使う場合、上部に同内容の検索ブロックを重複配置しない

---

## States

- loading
- empty
- error

---

## Interaction

- input → debounce検索
- filter → 条件更新
- result click → right sidebar slide-in detail

---

## Rules

- 条件と結果を分離しすぎない :contentReference[oaicite:8]{index=8}
- 件数を常に表示
- Search Input の icon は右配置を基本とする
- 多条件なのに横一列 filter bar に押し込まない
- 条件入力と action の置き場を複数作らない
- 契約書ステータス filter は以下を正式な選択肢とする
- `作成中 / 共同編集中 / 締結差戻し / 承認進行中 / 承認完了 / 締結進行中 / 送信エラー / 締結済み / 契約満了`
- filter UI が checkbox 群でも select でも、文言はこの語彙から増減させない
- 表示順は `作成中 → 共同編集中 → 締結差戻し → 承認進行中 → 承認完了 → 締結進行中 → 送信エラー → 締結済み → 契約満了` を基本とする

---

## Anti-patterns

- 検索条件が深い階層に隠れる
- empty state 不明確
- left sidebar と page 上部の両方に検索 block を置く
- reset / export を filter area と unrelated な header card に二重配置する
