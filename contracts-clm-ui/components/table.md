# Table

- Status: final

---

## Purpose

契約データを高密度で一覧・比較し、状態把握と操作を同時に成立させる。

---

## When to use

- 契約一覧
- 検索結果
- 状態比較・ソートが必要な一覧

---

## When not to use（重要）

- レコードが少ない（→ Card）
- 長文主体（→ Detail view）
- 編集主体（→ Form）

---

## Anatomy

- Optional section header
  - Title
  - Description
  - Optional top actions
- Optional filter sidebar
- Optional table header controls
- Optional inline filter row
- Table container
- Header row
- Data row
- Cell
- Optional selection
- Optional sort indicator
- Optional footer / pagination

---

## Layout（最重要）

### Standard Table Section

[ Section Header ]
[ Inline Filter Row ] (optional)
[ Table ]
[ Pagination ] (optional)

---

### Filter Pattern A: Detailed

[ Filter Sidebar ] | [ Table Area ]

---

### Filter Pattern B: Compact

[ Table Header Controls / Summary ]
[ Table ]

---

### Section Header Rules

- table の上に title と description を置ける
- title、description、top action は同じ table section に属する
- title / description を table から切り離した別 card にしない
- top action は header の右上に寄せる
- action が複数ある場合は `link action → primary / outline button` の順を基本とする
- action 群は filter row に混ぜない
- 一覧件数に依存する action は header 右側で補助表示してよい

---

### Inline Filter Row Rules

- filter が `1〜5項目` の軽量構成なら title / description の直下に横一列で置く
- inline filter row は table と同じ surface 内で扱う
- filter row を独立した card や toolbar に分離しない
- label + dropdown / input のセットを左から順に並べる
- label は control の左に近接させる
- filter row の下には table header または first row が続く
- `フィルタあり / フィルタなし` の両 variant を許容する
- filter がない variant でも table 上端の余白バランスは保つ

---

### Filter Placement Rules

- filter が `6項目以上` の場合は左カラムに分離する
- checkbox 群、階層条件、複数セクションに分かれる場合は左カラムを使う
- 詳細 filter はページ左に接続した sidebar / panel として配置し、table area と横並びにする
- 詳細 filter を独立した浮遊 card のように中央や上部へ持ち上げない
- filter が `1〜5項目` の軽量構成なら table header 上部に input / select を置く
- 条件が多いのに table 上部へ横並びで詰め込まない
- left sidebar 方式では、ページ下部の toggle button で filter panel を閉じられるようにする
- 閉じた後は細い rail として残し、同じ位置から再度開けるようにする
- inline filter row を使う場合も title / description / action と table 本体の文脈を切らない

---

### Table内部

Header  
Rows（繰り返し）

---

### 行構造（ContractS準拠）

- ID / コード
- 契約名（主情報）
- ステータス
- 当事者
- 担当者
- 日付群（開始 / 終了 / 契約日）

---

### Table Section Surface

- title、description、inline filter row、table、pagination は原則同じ section surface の中で扱う
- 上から下へ `header → filter row → table → pagination` の順を守る
- table 本体だけを別 card として浮かせない
- container は上下の区切りと余白で情報群を整理し、過度な shadow に頼らない

---

## Density

- 高密度（dense）
- 行高: 56–64px

---

## Row Structure（重要）

### Primary cell（契約名）

- 太字タイトル
- サブ情報（generalなど）
- 契約書アイコンあり
- 契約書アイコンは `word / pdf / template` のいずれかを使う
- 抽象的な汎用ドキュメントアイコンは使わない

---

### Secondary cells

- 単一情報 or 2行構造
- 例: 担当者 + 部署

---

## Header

### Typography

- font-size: 13–14px
- font-weight: 600

---

### Behavior

- 背景色は pure white ではなく `#FCFDFE` を基本とする
- ソート可能列のみアイコン表示
- sort icon は Material Symbols Rounded の `keyboard_arrow_up` / `keyboard_arrow_down` を使う
- up/down は縦に並べ、active direction のみ brand color を使う
- テキストの `↑ ↓ ↕` をそのまま使わない
- ヘッダクリックで `降順 → 昇順 → ソート指定なし` を循環する

---

## Column Rules（最重要）

- 最大7列程度
- 主情報は左
- 日付・状態は右寄せ

---

## Alignment

| 種類 | 揃え |
|------|------|
| テキスト | 左 |
| 数値 | 右 |
| 日付 | 右 |
| ステータス | 左 |

---

## Spacing

- cell padding: 12–16px
- row gap: border区切り
- section header → description: 8px 前後
- description → inline filter row: 12–16px
- inline filter row → table: 12–16px
- table → pagination: 16px
- table section の左右 padding は header / filter / table / footer で揃える

---

## Typography

### Primary

- 14px
- weight: 600

---

### Secondary

- 12–13px
- muted color

---

## Color

### Row

- default: white
- hover: subtle background
- selected: slightly darker

---

### Border

- 1px subtle divider

---

### Status

- badge or textで表現
- 色依存しすぎない
- 契約書ステータスは `作成中 / 共同編集中 / 締結差戻し / 承認進行中 / 承認完了 / 締結進行中 / 送信エラー / 締結済み / 契約満了` を正式語彙とする
- table cell、row detail、filter option の表記はこの集合に統一する

---

## States

- default
- hover
- selected
- sorted
- loading（Skeleton）
- empty

---

## Interaction Rules（最重要）

### Filter Interaction

- 詳細 filter は左カラムで section ごとに区切る
- 詳細 filter はページ左端側に固定した文脈で扱い、結果一覧から離れた card 群にしない
- filter block の見出しは日本語で簡潔に記載し、英語表記を使わない
- 軽量 filter は table header area に近接配置する
- filter と結果を離しすぎない
- sort は header click を基本とする
- 左 detailed filter を採用した場合、同じ検索条件や reset/export を table 上部に重複配置しない
- inline filter row の dropdown / input は table の検索条件として扱い、別 toolbar と二重化しない

### Header Action

- export、register、download などの action は table section header の右上に置いてよい
- top action は row action や pagination action と混同しない
- 件数付き export link と primary button を併置する場合も、右上のまとまりを維持する
- top action を table row の操作列へ分散しない

### Row Click

- 行全体クリックで詳細表示
- 例: Sidebar or Detail画面

---

### Cell Action

- リンクやボタンは優先
- row clickと競合しない

---

### Selection

- checkbox列（必要時のみ）

---

## Sort

- 単一列ソート（基本）
- icon で状態表示する
- icon は `keyboard_arrow_up` / `keyboard_arrow_down` の組み合わせを使う
- ヘッダクリック時は `降順 → 昇順 → 指定なし` を切り替える
- 指定なしでは元の一覧順へ戻す

---

## Text Handling

### 長文

- 1–2行でtruncate
- tooltip or read more

---

### 禁止

- 無制限折り返し

---

## Loading

- Skeleton（row単位）

---

## Empty

- 空状態UIを別途表示

---

## Keyboard

- Tabでセル移動
- Enterでrow action

---

## Accessibility

- `<table>`使用
- `<th scope="col">`
- header controls を置く場合も label を省略しない

---

## ARIA

- aria-sort
- row selection状態

---

## Responsive（重要）

### Desktop前提

- 横スクロール許容

---

### Narrow

- 列削減 or scroll

---

### Mobile

- table非推奨（list化）

---

## Variants

### Table with Section Header

- title、description、top action あり

### Table with Inline Filters

- compact filter row あり

### Table without Inline Filters

- filter row なし

### Dense Table（標準）

- 契約一覧

---

### Selectable Table

- checkbox付き

---

### Sortable Table

- header操作

---

### Table + Sidebar

- 行選択で右詳細

---

## Composition

- Filter Sidebar（左、ページ一体）
- Section Header（上）
- Inline Filter Row（任意）
- Pagination（下）
- Action Button（右上）

---

## Table / Card / Listの境界（重要）

### Table

- 比較・一覧

---

### Card

- 個別理解

---

### List

- 軽量列挙

---

## Anti-patterns（重要）

- 列過多（>8）
- 行が高すぎる
- hoverとselectedが同じ
- row clickと内部リンク競合
- 長文折り返し
- 状態が色依存
- 詳細 filter を浮遊 card や独立した search panel として table から分離する

---

## Visual Constraint

- フラットUI
- 低コントラスト境界
- 情報優先

---

## Example structure

Table Section
├─ Section Header
│  ├─ Title
│  ├─ Description
│  └─ Top Actions
├─ Inline Filter Row (optional)
├─ Table
│  ├─ Header row
│  ├─ Data row
│  └─ Data row
└─ Pagination
