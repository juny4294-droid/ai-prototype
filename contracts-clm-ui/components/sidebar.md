# Sidebar

- Status: final

---

## Purpose

主コンテンツを維持したまま、関連情報や補助操作を一時的または常設で表示する。

---

## When to use

- テーブル行選択時の詳細表示
- 契約の関連情報（履歴・コメント・添付）
- 補助的な編集や参照

---

## When not to use（重要）

- 主作業の中心（→ Main Content）
- ナビゲーション（→ Navbar）
- 大規模編集（→ Full Modal）

---

## Anatomy

- Sidebar container
- Header
- Content sections
- Optional action area
- Close control

---

## Layout（最重要）

### 基本構造

[ Main Content ] + [ Right Slide-in Sidebar ]

---

### 配置ルール

- 右側配置を基本
- row click などのトリガーで開く
- 右から slide-in で表示する
- 一覧画面の contextual sidebar は overlay を基本とする
- 一覧画面で main content を押し縮める push layout は原則使わない

---

## Display Mode

### Persistent（常設）

- 常に表示
- 主に詳細画面
- 一覧画面では原則使わない
- 契約詳細では right support rail として使ってよい
- 契約書詳細の full page では `components/section-rail.md` + single detail panel の構成を優先する
- full page では単純な slide-in drawer 風 card stack にしない

---

### Contextual（推奨）

- トリガーで開閉
- 行選択・操作起点
- 右から slide-in する drawer 形式を基本とする
- 契約一覧の row detail はこの形式を使う
- closed 時は DOM 上に存在していても、main content のレイアウト幅を占有しない
- open 時は一覧や main content の上に重ねて表示し、一覧幅や table 可読幅を維持する
- right drawer に表示する詳細情報は、情報量が増えても横方向に列を増やさず、上から下への 1 column flow を維持する
- section 構成は `patterns/contract-detail.md` の right support rail を簡略化して踏襲する
- 複数の情報ブロックを出す場合、top-level は横並びにせず縦一列で積む
- 2枚以上の card を 2 column に分割しない

---

### Overlay

- mainの上に重ねる
- 背景クリックで閉じる（任意）
- overlay は一覧の読取を邪魔しない最小範囲に留め、不要に page 全体を再段組しない
- overlay 表示中も、背後の一覧に不自然な余白や空カラムを残さない

---

## Size

### Width

- 320–400px
- 推奨: 360px

---

### Height

- viewport full height
- 内部スクロール

---

## Spacing

- section間: 16–24px
- container padding: 16px
- header下: 12px

---

## Typography

### Header

- font-size: 16–18px
- font-weight: 600

---

### Section Title

- font-size: 14px
- font-weight: 600

---

### Body

- 通常本文サイズ

---

## Color

### Background

- subtle surface（薄いグレー系）

---

### Border

- 左に境界線（1px）

---

### Header

- 背景分離または区切り線

---

### 強調

- 内部要素のみで行う（Sidebar自体は強調しない）

---

## Sections

### 構成

- title
- content block

---

### ルール

- セクション単位で分割
- 情報の塊を明確にする
- 契約詳細系 sidebar では以下の順序を基本とする
- `Context Header → 契約概要 → 当事者 / 担当者 → 契約書 / 関連ファイル → 承認 / ワークフロー / 依頼 → ログ → コメント`
- ログとコメントは同じセクションに混在させない
- 契約書 / 関連ファイルの icon は `word / pdf / template` を使う

---

## Contract Detail Variant

### Purpose

- 契約詳細の右 support rail、または一覧から開く row detail drawer に使う
- ただし full detail page は `patterns/contract-detail.md` の fixed shell を優先する

### Layout Rules

- header で契約名、契約コード、status を示す
- 中身は read-only summary を基本とする
- main form と同じ入力群を sidebar に複製しない
- workflow、log、comments は独立 section に分ける
- 複数 section / card は top から bottom へ縦一列で配置する
- drawer 内で summary card、meta card、workflow card を横に並べない
- right drawer は常に 1 column stack を基本とし、内部の label / value も原則として縦積みで配置する
- 期限と担当者のような並列しやすい情報でも、right drawer では 2 column summary にせず `label → value → supporting text` を縦に反復する
- 詳細情報が増えたときは横に増やすのではなく、section 分割または縦積みの項目追加で処理する
- full detail page では card stack ではなく、`section-rail.md` と組み合わせた単一 panel を置く
- full detail page の fixed rail と resize gutter は `section-rail.md` を参照する
- full detail page の panel shell は本ファイルを正本とし、`patterns/contract-detail.md` では再定義しない

### Full Detail Panel Rules

- panel は白背景 1 面で構成し、header と body を divider で分離する
- panel 内の top-level block は常に縦一列で積む
- independent card を何枚も並べず、section / divider / list で整理する
- panel title は左寄せ固定とし、中央揃えや hero 的な余白を作らない
- panel title の下では最初の major section を連続配置し、見出し直後に card gap を作らない
- typography や spacing の詳細値は関連 component の正本を優先し、pattern では再掲しない

### Existing Component Usage

- header action の主要操作は `components/button.md`
- text link action は button 化せず link 表現
- 人物 row は `components/avatar.md`
- 契約リンクは `components/document-link.md`
- ファイル row は `components/file-link.md`
- コメントは `components/thread-comments.md`
- ログや承認の時系列は `components/timeline.md`
- 関連分類は `components/tag.md`

### Content Rules

- 契約概要は label / value で表示
- right drawer の label / value 群は、2列 grid より縦方向の definition list に近い読み順を優先する
- file list は compact card / list
- log は avatar + actor + timestamp + event message の activity list を基本とする
- comments は thread comments + input area を基本とする
- contract detail の tab ごとの内容順と情報構造は `patterns/contract-detail.md` を優先する

---

## States

- closed
- open
- loading
- empty

### Closed State Rules

- closed 時は sidebar の面、border、shadow を見せない
- closed 時の placeholder column や空 panel を残さない
- 一覧画面では `未選択時の常設右カラム` を作らず、選択前は一覧本体を最大幅で使う

---

## Interaction Rules（重要）

- Sidebarを開いても主作業が見える状態を維持
- close操作は常に明確
- context（選択対象）を失わない
- 一覧画面では常時表示せず、行クリック時のみ表示する
- 行選択前に右側の空面を予約しない
- open / closed の切替で main table の left edge、column 幅、header の整列を不必要に揺らさない
- right drawer 内で詳細を見せるために、情報 block を multi-column 化しない

---

## Close Behavior

### 方法

- closeボタン（必須）
- overlayクリック（任意）
- Escキー

---

### ルール

- 未保存状態がある場合は確認

---

## Scroll Behavior

- Sidebar内部のみスクロール
- main contentとは独立

---

## Keyboard Interaction

- Tab: Sidebar内移動
- Esc: close
- Enter: action実行

---

## Accessibility

- `<aside>` 使用
- landmarkとして定義

---

## ARIA

- aria-expanded（開閉）
- aria-labelledby（header）

---

## Responsive

### Desktop

- 右固定 or overlay

---

### Narrow Width

- overlay優先

---

### Mobile

- full screenに近いdrawer化

---

## Composition Rules

- Table / Detail / Timelineと組み合わせる
- Left Filter Sidebar（パターン B）と右側 Contextual Sidebar は左右に共存できる
- Modalとは同時表示しない

---

## Sidebar / Left Filter Sidebar / Modalの境界（重要）

### Contextual Sidebar（本コンポーネント）

- 補助情報・行詳細・支援操作（トリガーで開閉）

---

### Left Filter Sidebar

- 検索条件の絞り込み専用（一覧画面のパターン B のみ）
- ナビゲーションとして使わない

---

### Navbar

- プロダクト全体のナビゲーション（最上部固定、全画面共通）
- Sidebar の代替として使わない

---

### Modal

- 一時的な集中操作

---

## Anti-patterns（重要）

- 主作業を押し込む
- 幅が広すぎる（>400px）
- contextが分からない
- close導線がない
- main contentを完全に隠す
- Sidebar内でさらに複雑なナビを持つ

---

## Visual Constraint

- フラットUI
- 装飾は最小限
- 主役にならない

---

## Example structure

Sidebar  
├─ Header  
├─ Section  
├─ Section  
└─ Optional Actions  
