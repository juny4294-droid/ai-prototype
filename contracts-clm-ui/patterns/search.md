# Search

- Status: refined

## Purpose

条件指定により対象データを高速に絞り込む。

---

## Layout Structure

- Left Filter Sidebar（optional）
- Main Header
- Result List / Table
- Pagination

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
- 一覧検索の基本構造は `左の検索メニュー（白背景） | 右の主カラム` とする
- 右の主カラムは `タイトル → 機能ボタン → 結果テーブル → ページネーション` を基本順序とする
- ページタイトルは、特段の指定がない限り `24px` 相当を基準とする
- filter が多い場合は left sidebar で詳細絞り込みを行う
- left sidebar の詳細検索はページ分割の一部として配置し、独立した装飾カードにしない
- left sidebar の背景は白を基本とし、ページの検索メニューとして扱う
- left sidebar の内側余白は `上下16〜20px / 左右12〜16px` を基準とする
- left sidebar の見出しは `28〜32px` 前後、太字で開始する
- left sidebar の先頭には説明文を置かず、見出しだけで開始する
- left sidebar の見出しは1行で収め、改行させない
- left sidebar 内の section 見出しは `12〜14px`、太字を基準とする
- left sidebar の label は `12px` 前後、control 間の縦余白は `12〜16px` を基準とする
- left sidebar の input / select / datepicker は `40〜44px` 高さを基準とする
- left sidebar の入力欄内部 padding は `左右12〜14px` を基準とする
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
- 一覧画面にダッシュボード要約を入れるのは、要件に明記された場合のみ
- 見出しの正式表記は日本語とし、英字のアイブロウや補助見出しを自動追加しない
- 一覧の詳細確認は、結果領域の下ではなく右サイドバーで行う
- 検索エリアの文字サイズと余白は、一覧本体より1段階だけコンパクトにし、過密にも疎にも振らない
- ページタイトルが主見出しとして存在する場合、結果カード内で同名の大見出しを再掲しない
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
- 要件にない summary card を一覧の前に差し込む
- 詳細検索を独立カード化して page split を崩す
- タイトルや機能ボタンより先にテーブルを置いて主列の順序を崩す
