# Pagination

- Status: final

---

## Purpose

一覧・検索結果・テーブル下部で、現在位置の把握とページ移動を提供する。

---

## When to use

- テーブルや検索結果が複数ページにまたがる場合
- 現在ページと総件数を明示したい場合

---

## When not to use

- 1ページで収まる場合
- 無限スクロール採用時
- 単純な「もっと見る」だけで十分な場合

---

## Anatomy

- Pagination container
- Edge controls (`最初`, `前へ`, `次へ`, `最後`)
- Previous control
- Page number list
- Next control
- Optional page size selector
- Page size label
- Total count summary

---

## Layout（最重要）

### 基本構造

[ 最初 ][ 前へ ][ Page Numbers ][ 次へ ][ 最後 ][ Page Size Selector ][ 項目 / ページ ][ Total Count ]

---

### 配置ルール

- table の直下に配置する
- left filter sidebar がある場合も、pagination は table area の直下に置く
- ページ移動、1ページ件数、総件数は同じ左寄せ行にまとめる
- `最初 / 前へ / ページ番号 / 次へ / 最後` を基本セットとする
- page size selector はページ移動群の右隣に置く
- `項目 / ページ` ラベルは selector の直後に置く
- `項目 / ページ` ラベルは page size selector と同一グループとして扱い、常に selector の右側に配置する
- `項目 / ページ` ラベルだけを下段に折り返さない
- 総件数は selector 群の右隣に置く
- コンテナ全体は1行を基本とする
- 横幅不足時のみ左から順に折り返す
- page size selector や総件数を右端へ分離しない
- pagination 内の情報を別 toolbar として分けない

---

## Size

### Container

- min-height: 32px

### Control

- previous / next / page number のクリック領域: 最低 32px × 32px

### Page Number

- min-width: 32px
- height: 32px

---

## Spacing

- table → pagination: 16px
- edge control / page number ↔ edge control / page number: 6px
- navigation group ↔ page size selector: 16px 以上
- page size selector ↔ label: 12px
- label ↔ total count: 16px
- page number ↔ page number: 4px
- previous / next ↔ page numbers: 8px

---

## Typography

### Page Number

- font-size: 14px
- font-weight: 500

### Summary

- font-size: 14px
- color: default
- font-weight: 600

---

## Color

### Default

- text: strongText
- background: transparent
- border: none or subtle

### Hover

- background: subtle background
- text: strongText

### Current Page

- background: subtle primary or pale neutral
- text: strongText
- weight: 600

### Disabled Edge Control

- text: muted
- background: subtle background
- pointer: none

---

## Variants

### Numbered Pagination

- Previous / Numbers / Next

### Pagination with Summary

- 件数表示あり

### Pagination with Page Size Selector

- 1ページ件数変更あり

### Full Pagination

- `最初 / 前へ / ページ番号 / 次へ / 最後 / 件数 selector / 項目 / ページ / 総件数`

### Compact Pagination

- ページ番号を最小限表示

---

## States

- default
- current page
- hover
- disabled edge controls

---

## Current Page Rules（重要）

- 現在ページは必ず強調する
- current はクリック不可
- active と hover の見た目は明確に分ける

---

## Page Number Rules

### 少ページ数

- すべて表示

### 多ページ数

- 省略記号 `...` を使用

例:

1 2 3 4 5  
または  
1 ... 8 9 10 ... 20

### ルール

- current の前後は優先表示
- 先頭・末尾は可能な限り保持

---

## Previous / Next Rules

- 先頭ページでは Previous disabled
- 最終ページでは Next disabled
- disabledでも存在は見せる

---

## Result Summary

### Purpose

- 現在の件数文脈を示す

### 例

- 11件
- 21378件

### Rules

- selector 群の右隣に置く
- 総件数だけを簡潔に表示してよい
- 左寄せ配置を崩さない

---

## Page Size Selector（ある場合）

### Purpose

- 1ページあたり件数変更

### Rules

- 主導線を邪魔しない位置に置く
- ページ移動群の右隣、total count の左に置く
- pagination本体より強く見せない

---

## Interaction Rules

- current page が一目で分かること

---

## Anti-patterns

- ページ移動群だけ左、件数 selector と総件数だけ右に離す
- 総件数を table 上部や別 block に逃がす
- pagination の下にさらに件数 toolbar を重ねる
- page size selector がある場合も pagination の主役を奪わない
- `項目 / ページ` ラベルだけを selector の下に落とす
- 省略記号はクリック対象にしない

---

## Keyboard Interaction

- Tab: previous → page numbers → next → page size selector
- Enter / Space: ページ移動
- Arrow 左右: 実装要件に応じてページ番号移動を許容可

---

## Accessibility

- `<nav aria-label="Pagination">`
- current page に `aria-current="page"`
- previous / next は意味が分かるラベルを持つ

---

## ARIA

- previous: `aria-label="前のページ"`
- next: `aria-label="次のページ"`
- page item: `aria-label="3ページ目"` のように読み上げ可能にする

---

## Responsive

### Desktop

- 操作左、summary右の1行構成

### Narrow Width

- summaryを上段
- pagination操作を下段
- page numbersは省略優先で維持
- 折り返しで current が見失われないようにする

### Mobile

- compact variant推奨
- page number表示数を減らす

---

## Composition Rules

- Table / Search Results / Contract List Pattern の直下
- Filter Area より上には置かない
- Empty State では原則非表示

---

## Pagination / Infinite Scroll Boundary

### Pagination

- 現在位置と総件数を明示したい場合

### Infinite Scroll

- 流し見中心、位置把握を重視しない場合

---

## Anti-patterns（重要）

- current page が目立たない
- previous / next が小さすぎる
- summary が遠すぎる
- 1ページしかないのに表示する
- 省略記号がクリック可能に見える
- disabled control が消えて位置関係が崩れる

---

## Visual Constraint

- フラットUI
- 過剰装飾禁止
- current page のみ明確に強調し、他は中立的に保つ

---

## Example structure

Pagination
├─ Result Summary
├─ Previous
├─ Page Numbers
│  ├─ 1
│  ├─ 2
│  ├─ 3 (current)
│  ├─ ...
│  └─ 10
└─ Next
