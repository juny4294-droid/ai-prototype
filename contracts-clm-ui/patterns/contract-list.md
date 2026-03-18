# Contract List

- Status: refined
- Source: contracts_clm_image_prototyping_context.md

## Purpose

契約を検索・絞り込み・一覧確認し、詳細または次の操作へ遷移する。

---

## Layout Structure

- HcNavbar
- Page Header（title + optional actions）
- Filter Area
- HcTable
- HcPagination
- Optional HcSidebar（row click）

---

## Component Composition

Filter Area:
- 条件が多い場合:
  - left filter sidebar
  - HcInputText（検索）
  - HcDropdown / HcMultiSelect（条件）
  - HcButton（検索 or リセット）
- 条件が少ない場合:
  - table header controls
  - HcInputText / HcDropdown を table 上部に配置

Table:
- HcTable
  - Header
  - Row
  - Cell（text / subtext / tag / action）
  - 契約名セル先頭のアイコンは `word / pdf / template`
  - sort icon は Material Symbols Rounded の `keyboard_arrow_up / keyboard_arrow_down`

---

## Layout Rules

- HcNavbar は `components/navbar.md` の固定仕様をそのまま使う
- navbar の項目、順序、配色はページごとに変えない
- 条件が多い場合は `Filter Sidebar | Table | Pagination` の順序
- 条件が少ない場合は `Table Header Controls → Table → Pagination` の順序
- `4項目以上` または section 分けが必要な filter は左カラムに出す
- `1〜3項目` の軽量 filter は table header 部分へ近接配置する
- left filter sidebar はページ下部の button で閉じられるようにする
- 閉じた後は細い rail として残し、同じ位置から再展開できるようにする
- left filter sidebar を使う場合、page header は title 中心の最小構成にする
- search / reset / export のような絞り込み関連 UI を page header に重複配置しない
- Filter Area と Table の間隔: 16px
- Table row height: 40px
- Table cell padding: 8px 12px

---

## Data Priority

1. 契約名（primary）
2. ステータス（tag）
3. 契約先 / 金額 / 日付
4. 更新情報（subtext）

---

## Contract Status Vocabulary

- 契約書ステータスは以下を正式語彙とする
- `作成中`
- `共同編集中`
- `締結差戻し`
- `承認進行中`
- `承認完了`
- `締結進行中`
- `送信エラー`
- `締結済み`
- `契約満了`
- 一覧の status tag、filter、detail header はこの集合に揃える
- `有効`、`レビュー中`、`更新待ち`、`失効予定`、`差戻し`、`ドラフト` など別語彙を混在させない

---

## States

- loading: skeleton table
- empty: empty state block（検索条件とセット）
- error: toast または inline message

---

## Interaction

- row click → right sidebar slide-in open
- sorting → header click で `降順 → 昇順 → 指定なし`
- filter変更 → 即時 or 明示的検索

---

## Rules

- primary action は 1つのみ
- table は高密度だが主要列に絞る :contentReference[oaicite:1]{index=1}
- hoverしなくても情報は読める
- sidebar は常設せず、行選択時の contextual drawer とする
- 絞り込み block や section の見出しは日本語のみとし、英語併記をしない

---

## Anti-patterns

- row click と button click の競合
- 条件が多いのに横長 filter bar に押し込む
- 軽量 filter なのに別 panel として遠くへ分離する
- primary button を複数配置
- left filter sidebar があるのに同内容の search hero / action block を上部に置く
