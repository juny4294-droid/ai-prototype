# Document Header

- Status: draft
- Source: current ContractS contract detail screens

---

## Purpose

契約書詳細画面の先頭で、
文書管理番号、契約書名、版情報、更新情報を、
白地のフラットな shell の中で、固定の余白と文字サイズで示す。

---

## Critical Rule（最重要）

- 契約書詳細の header は pure white のフラットな面で構成し、card 化しない
- 文書 identity block と下段の tab / action 帯は同じ白い shell の一部として連続させる
- title 行の右側に large CTA や icon 群を置かず、identity block の右側は基本的に空ける
- header 直下の罫線は 1 本の subtle divider のみとし、tab 帯の上に余計な横罫線を足さない
- 右 panel や関連契約機能を拡張しても header を別デザインに置き換えない
- hero card、large summary card、marketing 的な強調表現を入れない
- 文書 identity の見せ方を page ごとに変えない

---

## When to use

- 契約書詳細 full page の document area 先頭

---

## When not to use

- 一覧 row の簡易 header
- drawer 内の context header
- 契約編集 form の section title

---

## Anatomy

- Document management number
- Document type icon
- Contract title
- Inline edit link
- Version label
- Updated timestamp
- Updated by / editor
- Bottom handoff to `契約書 / 変更履歴` area

---

## Layout

### Fixed Structure

1. 文書管理番号
2. `icon + 契約書名 + 編集`
3. `版情報 + 更新日時 + 更新者`
4. 下段の tab / action 帯へ連続して接続
5. viewer 直前の bottom divider

### Rules

- 文書管理番号は title より上に置く
- 契約書名を最も強く見せる
- 編集 link は title 行に近接させる
- 版情報と更新情報は 1 行の補助情報として扱う
- 左揃えを基本とし、内容を中央寄せしない
- 文書管理番号、title 行、meta 行は左の同じ基準線に揃える
- title 行の右側に helper link や action icon を混在させない
- identity block と tab 帯の間に別 background の strip を挟まない
- header の下に大きな余白帯や card gap を作らない

---

## Reproduction Baseline

現状画面を画像なしでも再現できるよう、以下を固定する。

### Background

- header 全体の背景色は `#FFFFFF` を基準とする
- 文書管理番号、title、meta、tab / action 帯を別 card に分けず、同じ白面に載せる
- tab の下だけを淡い gray strip にしない
- gradient、panel tint、hero 背景を使わない

### Layout

- 文書管理番号は header 左上の最初の行に置く
- title 行は `icon → 契約書名 → 編集` の順で 1 行に並べる
- `編集` は title のすぐ右隣に置き、右端へ追い出さない
- meta 行は title 行の直下に置き、`第1版` と `更新日`、更新者を同じ補助行にまとめる
- identity block の右側は広く空け、action 類は下段帯まで持ち込まない
- header の横幅は main viewer の上端と同じ基準線で揃え、中央 card のように狭めない

### Borders / Dividers

- identity block を囲う外枠 border は付けない
- tab / action 帯の上に separator line を追加しない
- viewer 開始位置の直前にだけ、薄い 1px divider を 1 本引く
- thick border、shadow edge、二重線で section を区切らない

---

## Content Rules

- 文書管理番号は `文書管理番号: xxxxx` の語順を維持する
- 契約書名の表記を rail や panel 側で別名にしない
- `編集` のような補助導線は短い文言を使う
- 版情報は `第1版` の形式を使う
- 更新情報は `更新日` と更新者を同じ行で扱う

---

## Typography

- 文書管理番号: `13px / 500`
- 契約書名: `20px / 700 / line-height 1.35`
- `編集` link: `14px / 700`
- 版情報 / 更新情報: `13px / 500`

---

## Icon Rules

- 契約書タイプを示す icon は `word / pdf / template` 系を使う
- icon は title の補助であり、単独で意味を完結させない
- icon size や位置は title 行の基線を壊さない範囲に留める

---

## Visual Rules

- 背景は白 1 面で見せ、色面の切り替えで block を分離しない
- shadow や gradient に頼らず、必要なら最下段の subtle divider だけで区切る
- dense だが読める高さを維持する
- title を `20px` より大きくしすぎない
- 厚い badge、大きなボタン群を置かない
- 上段の identity block と下段帯で padding rhythm を揃え、別 component を継ぎ足した印象にしない

---

## Interaction Rules

- `編集` は title の文脈に紐づく link / button とする
- header 全体を clickable にしない
- title や meta を rail 側と二重表示しない

---

## Composition Rules

- `patterns/contract-detail.md` の full detail layout で使う
- navbar の直下ではなく、document area の先頭に置く
- 直下には `契約書 / 変更履歴` tab と viewer action が同じ白い shell の続きとして並ぶ

---

## Accessibility

- title は page 内の主要 heading とする
- `編集` は icon only にせず text を持たせる
- 文書管理番号、版情報、更新情報の順序関係が読み取り可能であること

---

## Anti-patterns

- header を独立した大型 card にする
- 契約概要や workflow を header に混ぜ込む
- title 右側へ primary CTA を多数並べる
- 文書管理番号を title より強く見せる
- tab 帯の上に余計な横罫線を入れる
- tab と action 群の背景だけを gray に変える

---

## Example structure

```text
Document Header
├─ Document management number
├─ Title row
│  ├─ Document type icon
│  ├─ Contract title
│  └─ Edit link
└─ Meta row
   ├─ Version
   ├─ Updated timestamp
   └─ Updated by
```
