# Contract List

- Status: refined
- Source: contracts_clm_code_prototyping_context.md

## Purpose

契約を検索・絞り込み・一覧確認し、詳細または次の操作へ遷移する。

---

## Layout Structure

- HcNavbar
- Left Filter Sidebar
- Main Header（title + optional actions）
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
  - HcInputText / HcDropdown を table header に内包して table 上部に配置

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
- 一覧画面のレイアウトはフィルタ項目数に応じて以下 2 パターンを使い分ける
  - **パターン A（少数フィルタ: 1〜5項目）**: 左カラムを設けず全幅の主カラムのみ。フィルタは table 上部に inline で配置する
  - **パターン B（多数フィルタ: 6項目以上、または section 分けが必要）**: `左フィルタサイドバー（白背景）| 右の主カラム` の 2 カラム構造にする
- パターン A の主カラム順序は `ページヘッダー → インライン filter row → テーブル → ページネーション`
- パターン B の順序は `左フィルタサイドバー | （ページヘッダー → テーブル → ページネーション）`
- ページタイトルは、特段の指定がない限り `24px` 相当を基準とする
- 主カラム内の一覧 block は page header の直下に上詰めで配置し、table を縦方向の中央や下端へ送らない
- 主カラムに余剰な高さがある場合も、空きは table の下側へ逃がし、header と table の間に大きな空白を作らない
- ページタイトルがあり、ページ内の主コンテンツが単一テーブルのみの場合は、カード内に同じタイトルを重ねて置かない
- `6項目以上` または section 分けが必要な filter は左カラムに出す
- `1〜5項目` の軽量 filter は table header 部分へ近接配置する
- `1〜5項目` の軽量 filter は、特段の理由がない限り page header や独立 panel ではなく table header 内に置く
- 軽量 filter は `件数 / 補助説明 / table 操作` と同じ文脈で読める位置にまとめ、一覧本体から離さない
- left filter sidebar の背景は白を基本とする
- left filter sidebar はパターン B の場合のみ表示する。パターン A では表示しない
- left filter sidebar は page shell に接続した面として扱い、左端および上下に外側余白を作らない
- left filter sidebar は角丸や shadow を使わず、main content の block surface と見た目を分ける
- left filter sidebar はページ下部の button で閉じられるようにする
- 閉じた後は細い rail として残し、同じ位置から再展開できるようにする
- left filter sidebar を使う場合、page header は title 中心の最小構成にする
- search / reset / export のような絞り込み関連 UI を page header に重複配置しない
- 要件にない限り、一覧上部にダッシュボード型の summary card 群を置かない
- 詳細検索は左のページ分割領域として置き、独立カードとして浮かせない
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
- テーブル直上の補助見出しや件数表示は、ページタイトルより明確に小さいサイズに抑える
- hoverしなくても情報は読める
- sidebar は常設せず、行選択時の contextual drawer とする
- 一覧行の詳細情報は、一覧下部への展開ではなく右サイドバー表示を標準とする
- row detail drawer は、未選択時に空の右カラムを確保せず、選択時のみ一覧の上に overlay 表示する
- row detail drawer を開いても、table area の幅や header / pagination の整列を崩さない
- 絞り込み block や section の見出しは日本語のみとし、英語併記をしない
- ページタイトル、セクションタイトルの直上に英字アイブロウを置かない
- 一覧ページの主列では、タイトルと機能ボタンをテーブルより先に置く
- ページネーションはテーブル直下に配置し、別領域へ分離しない
- 一覧の table section は `header / controls / table / pagination` を上から下へ連続配置し、主カラム内で下寄せや等間隔配置にしない
- 軽量 filter を使う場合、table header controls の一部として扱い、一覧の上に別 card や debug bar を増やさない
- ボタン文言は、特段の指定がない限り `体言止め` を基本とする
- ボタン内テキストは1行固定とし、縦積みや途中改行を発生させない

---

## Anti-patterns

- row click と button click の競合
- 行選択時の詳細をテーブル下に常設表示して一覧を縦に伸ばす
- 行選択前から空の右 drawer 領域を常設し、main table より広い死に余白を作る
- page header と table の間に、内容上の意味を持たない大きな縦空白を作る
- 条件が多いのに横長 filter bar に押し込む
- 軽量 filter なのに別 panel として遠くへ分離する
- 軽量 filter（1〜5項目）なのに左 sidebar を常設し、一覧の読取幅を不必要に狭める（→ パターン A で処理する）
- left filter sidebar を card のように浮かせ、page shell から分離して見せる
- フィルタではない固定ナビゲーションを左カラムに常設し、left filter sidebar と混在させる
- primary button を複数配置
- ページタイトルがあるのに、単一コンテンツカード内で同名タイトルを大きく再掲する
- left filter sidebar があるのに同内容の search hero / action block を上部に置く
