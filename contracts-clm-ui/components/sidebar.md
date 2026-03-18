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
- ナビゲーション（→ Side Menu）
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
- overlayまたはpushで表示

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
- section 構成は `patterns/contract-detail.md` の right support rail を簡略化して踏襲する
- 複数の情報ブロックを出す場合、top-level は横並びにせず縦一列で積む
- 2枚以上の card を 2 column に分割しない

---

### Overlay

- mainの上に重ねる
- 背景クリックで閉じる（任意）

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

- width は `320–360px`
- header で契約名、契約コード、status を示す
- 中身は read-only summary を基本とする
- main form と同じ入力群を sidebar に複製しない
- workflow、log、comments は独立 section に分ける
- 複数 section / card は top から bottom へ縦一列で配置する
- drawer 内で summary card、meta card、workflow card を横に並べない
- 1 column stack を基本とし、内部の label / value だけ必要に応じて 2列化してよい
- full detail page では card stack ではなく、icon rail の右に単一 panel を置く
- full detail page の rail 自体の仕様は `components/section-rail.md` を参照する
- full detail page の panel 内は accordion / divider / list を基本とする
- full detail page では rail の左に `resize gutter` を固定で置く
- rail 幅は content に応じて可変にせず、contract detail fixed width を使う

### Full Detail Panel Typography

- panel title: `28px / 700 / line-height 1.35`
- panel caption: `13px / 500 / line-height 1.7`
- panel header link action: `14px / 700`
- accordion header: `18px / 700`, `min-height: 72px`
- field label: `14px / 700`
- field value: `20px / 400`, 強調値のみ `700`
- body copy / 長文 value / link-like value: `16px / line-height 1.75`
- activity actor name: `16px / 700`
- activity message: `18px / line-height 1.8`
- rail label は `components/section-rail.md` の `14px / 700 / line-height 1.35` を使う

### Full Detail Panel Shell

- panel は白背景 1 面で構成し、header と body の間にだけ 1px divider を置く
- panel header は `title / caption` を左、optional action を右に置く
- panel header padding は `24px 24px 18px` を基本とする
- panel body padding は `20px 24px 32px` を基本とする
- panel 内の top-level block は 1 column stack とし、block 間は divider と余白で区切る
- panel 内の複数情報群を 2 column card mosaic にしない

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
- full detail page の `概要` tab は `契約書の概要` accordion を起点にした single column stack を基本とする
- `契約書のステータス → 説明 → 担当者 → フォロー中のメンバー → 契約書の保存場所 → destructive action` の順を優先する
- `担当者` と `フォロー中のメンバー` は avatar + name + optional `編集` link を基本とする
- full detail page の `項目` tab は `契約期間` accordion を起点にした single column field stack を基本とする
- `項目` tab の header action は `Large Secondary button + text link` を基本とする
- `項目` tab の field は `契約日 → 開始日 → 終了日 → 契約期間 → 自動更新 → 自動更新の更新拒絶期限 → 更新に関する補足コメント` の順を優先する
- full detail page の `関連契約書` tab は `追加 action + related contract card list` を基本形とする
- related contract card は `document icon + contract id + contract name + tag row` の縦積みで構成する
- file list は compact card / list
- log は avatar + actor + timestamp + event message の activity list を基本とする
- comments は thread comments + input area

---

## States

- closed
- open
- loading
- empty

---

## Interaction Rules（重要）

- Sidebarを開いても主作業が見える状態を維持
- close操作は常に明確
- context（選択対象）を失わない
- 一覧画面では常時表示せず、行クリック時のみ表示する

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
- Side Menuと併用可能（左右分離）
- Modalとは同時表示しない

---

## Sidebar / Side Menu / Modalの境界（重要）

### Sidebar

- 補助情報

---

### Side Menu

- ナビゲーション

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
