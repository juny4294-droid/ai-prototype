# Section Rail

- Status: draft
- Source: documented contract detail rail baseline

---

## Purpose

契約書詳細の右側で、
どの補助情報 panel を開いているかを固定順序で切り替える。

---

## Critical Rule（最重要）

- 契約書詳細 full page の right rail は narrow rail 1 列で固定し、文言・順序・密度を崩さない
- rail の項目順、ラベル、配置を機能追加のたびに変えない
- `関連契約書` を追加改善しても rail 全体を再設計しない

---

## When to use

- 契約書詳細 full page の右 support rail

---

## When not to use

- 一覧画面の drawer navigation
- 左ナビゲーション
- 主要導線の page navigation

---

## Anatomy

- Resize gutter
- Narrow vertical rail
- Section item
- Icon
- Label
- Active state
- Optional indicator
- Optional collapse control

---

## Fixed Items（順序固定）

1. `概要`
2. `項目`
3. `コメント`
4. `タスク`
5. `関連契約書`
6. `ファイル`
7. `編集ルーム`
8. `契約審査`
9. `承認`
10. `締結`
11. `ログ`

Optional:
- 最下部に rail utility / collapse control を置いてよい

### Fixed-order Rules

- 上記順序を契約書詳細画面の right tab の固定順とする
- 項目の追加・削除があっても既存項目の相対順は変えない
- detail panel の定義順もこの順に揃える

---

## Label Rules

- 上記の文言をそのまま使う
- `関連契約書` を `関連契約` のように短縮しない
- `ログ` を `履歴` に置き換えない
- rail 上だけ別名を使わない
- rail 幅は固定とし、ラベル長に応じて rail 自体を伸縮させない
- 現行固定項目では `関連契約書` が 1 行で読める幅を確保する
- label は rail 専用の `12px / 700 / line-height 1.3` を基本とする
- label は中央揃えで、icon の真下に置く
- label の左右位置を indicator や active 状態でずらさない

---

## Item Layout Rules

- section item は full-width の縦積みセルとして扱う
- `icon 上 / label 下` の 2 段構成を基本とする
- icon と label は item 内で中央揃えする
- label は固定項目では 1 行表示を基本とし、rail 幅を広げて逃がさない
- item 高さは均一に保ち、項目ごとに高さを変えない
- item の基本サイズは `min-height: 82px`, `padding: 10px 6px 12px` とする
- icon wrapper は item 中央に固定し、`32px x 32px` を基本とする
- icon size は `28px` を基本とする
- icon と label の縦 gap は `6px` を基本とする
- label は `12px / 700 / line-height 1.3` を基本とする
- rail item を pill button にしない
- rail と detail panel の境界には 1px の divider を置く
- icon は material symbols 系を基本とする
- icon を decorative に大きくしすぎず、cell 内で compact に収める

---

## Layout Rules

- icon rail と detail panel は 2 層で並べる
- viewer 側と rail の間には、rail とは別レイヤーの resize gutter を置く
- rail は detail panel の左に固定する
- item は縦一列で積む
- active item だけ淡い背景反転で示す
- rail の幅は narrow に保ち、main panel の幅を圧迫しない
- rail 幅は `96px` を基本とし、固定項目の見た目に合わせて可変にしない
- rail 幅には resize gutter を含めない
- rail を消して top tab 群に置き換えない
- rail 全体の背景は白基調とし、item 単位の矩形で切り替わる見え方を優先する
- active 背景は item 幅いっぱいに敷き、左線 indicator は使わない
- item 間は card gap を作らず、cell divider で区切る

---

## Resize Gutter Rules

- resize gutter は viewer と rail の間に置く
- resize gutter は rail item ではなく、navigation に数えない独立要素として扱う
- gutter 幅は `12px` を基本とする
- gutter 背景は薄い neutral 色とし、rail の白背景と 1 段低い面で見せる
- gutter 中央には draggable handle を置いてよい
- handle は縦向きの短い `2 本線` を基本とし、primary color を使って存在を示す
- handle は常時中央付近に固定し、rail item の active 表現と混同させない
- gutter 自体を太い border や濃色帯にしない

---

## Active Rules

- active は常に 1 項目
- active item は淡い green / teal 背景で示す
- active 時も icon と label の色は中立の濃色を保つ
- active にしても rail 幅や item 高さを変えない

---

## Indicator Rules

- task / comment など一部 item に dot や count を付けてよい
- indicator は item の位置関係を崩さない小ささに留める
- indicator がない通常状態でも icon と label の重心を変えない
- indicator は item 全体ではなく icon wrapper の右上に重ねて配置する
- indicator は icon wrapper の外周に半分だけはみ出す程度の位置に固定する
- indicator の基準点は `item edge` ではなく `icon wrapper edge` とする
- label 行の高さや横位置を indicator に合わせて変えない
- count badge は actionable backlog を示すときに使う
- dot indicator は unread / update の存在だけを示すときに使う
- 1 つの item に dot と count badge を同時表示しない
- count badge の 3 桁以上は `99+` を基本とする
- count badge は `24px` 円形、文字は `10px / 700` を基本とする
- count badge は icon wrapper の右上から `x: +6px / y: -4px` 程度ずらして重ねる
- dot indicator は `12px` 円形を基本とする
- dot indicator は icon wrapper の右上から `x: +5px / y: -1px` 程度ずらして重ねる

---

## Collapse Control Rules

- collapse control は最下部の utility item として分離する
- 通常の section item と異なり label を省略してよい
- collapse control に active 状態を持たせない
- collapse control と最終 section item の間には十分な余白または視覚分離を設ける
- collapse control の高さは `44px` を基本とする

---

## Interaction Rules

- 1 度に開く detail panel は 1 つだけとする
- rail click / keyboard で panel を切り替える
- rail 自体に section detail を詰め込まない
- collapse control は section item と見誤らない位置に置く
- indicator 自体を独立クリック対象にしない
- section item 全体を押下領域とする

---

## Responsive Rules

- desktop では常設 rail を優先する
- narrow width では panel 側を drawer 化してもよい
- ただし rail 項目の順序と文言は維持する

---

## Composition Rules

- `patterns/contract-detail.md` の right detail panel と組み合わせる
- generic `sidebar.md` の content section list とは役割を分離する
- rail は navigation、panel は content として責務を分ける
- indicator は `components/badge.md` の compact variant を使う
- icon は rail 専用に 1 色線形で扱い、badge と主従を逆転させない

---

## Accessibility

- section item は button か tab として操作可能にする
- active item を背景色だけに依存せず状態属性で示す
- icon only にせず label も併記する

---

## Anti-patterns

- rail 項目順を画面ごとに変える
- rail に長文説明を入れる
- active で rail 幅を可変にする
- section item と collapse control を同じ意味に見せる
- indicator を item 外に逃がして位置関係を崩す

---

## Example structure

```text
Section Rail
├─ 概要
├─ 項目
├─ コメント
├─ タスク
├─ 関連契約書
├─ ファイル
├─ 編集ルーム
├─ 契約審査
├─ 承認
├─ 締結
├─ ログ
└─ Collapse control (optional)
```
