# Navbar

- Status: final
- Source: provided navbar image + `contracts_clm_code_prototyping_context.md`

---

## Purpose

プロダクト全体の最上位ナビゲーションとして、
所属文脈、主要導線、補助操作を常に同じ見た目で提供する。

---

## Critical Rule（最重要）

- 全ページで同一の見た目、順序、配色、密度を使う
- 画面ごとの差分を作らない
- 文言、順序、項目数を勝手に変更しない
- active 表現は最小限にとどめる
- product image を参照できる場合は、header の密度をその水準より大きく膨らませない

---

## Base Visual Definition（固定）

### Background

- navbar background: `#141D3D`
- active nav background: `#314574`
- divider color: `rgba(255,255,255,0.16)`

### Text / Icon

- primary text: `#FFFFFF`
- utility icon: `rgba(255,255,255,0.84)`
- secondary company prefix: `rgba(255,255,255,0.88)`
- hover text / icon: `#FFFFFF`

### Accent

- notification dot: red accent
- user avatar ring: subtle white border
- logo area uses white stroke / icon on dark surface

---

## Fixed Navigation Content（固定）

### Product Area

- square logo button with Material rounded `domain` icon
- company label: `【社内】ContractS株式会社`
- dropdown caret

### Primary Navigation

1. `ホーム`
2. `契約管理`
3. `案件管理`

### Utility Area

1. Material rounded `help` icon
2. Material rounded `search` icon
3. Material rounded `alternate_email` or equivalent account icon
4. Material rounded `notifications` icon
5. circular user avatar with Material rounded `person` icon

---

## Fixed Order（変更禁止）

Left to Right:

1. Logo
2. Company Name
3. Caret
4. Divider
5. ホーム
6. 契約管理
7. 案件管理
8. Help
9. Search
10. Account
11. Notification
12. User Avatar

---

## Anatomy

- Navbar Container
- Product Context Area
- Logo Button
- Company Label
- Company Caret
- Divider
- Primary Navigation Group
- Utility Group
- Notification Dot
- User Avatar Button

---

## Layout（最重要）

### Basic Structure

[ Product Context ][ Divider ][ Primary Navigation ]                               [ Utility Area ]

### Alignment Rules

- 1 行固定
- 左右ブロック間は auto space
- 垂直方向は中央揃え
- utility は右端揃え
- 2 行化禁止

### Product Context Rules

- ロゴ、会社名、caret は 1 塊で扱う
- `【社内】` と会社名は分離せず 1 ラベルとして読む
- divider の左は product context、右は navigation とする

---

## Size（確定）

- navbar height: `48px`
- outer horizontal padding: `16px`
- logo button: `30px`
- utility icon hit area: `24px`
- utility icon visual size: `24px`
- avatar size: `32px`
- active nav item height: navbar full height 準拠

---

## Spacing（画像基準の固定方針）

- logo → company label: `12px`
- company label → caret: `8px`
- caret → divider: `16px`
- divider → first nav item: `0px`
- nav item horizontal padding: `20px`
- utility item gap: `16px`
- bell → avatar: `16px`
- nav group 間 gap や icon hit area を広げすぎず、48px bar の中で compact に収める

---

## Typography

### Company Label

- font-size: `14px`
- font-weight: `700`
- color: `#FFFFFF`

### Primary Navigation Item

- font-size: `14px`
- font-weight: `700`
- color: `#FFFFFF`

### Utility

- text labelは持たない
- icon中心

---

## Content Guidelines

- 会社名は `【社内】ContractS株式会社` を固定とする
- 主ナビ文言は `ホーム` `契約管理` `案件管理` の 3 つで固定する
- utility にテキストラベルを足さない
- 文言の短縮や言い換えを行わない

---

## Icon Rules

- Google Fonts の rounded Material icon family を基準に統一する
- 左の product icon は `domain` を使う
- person / user 系は `person` を使う
- help / search / account / bell は同一線幅・同一テイストで統一する
- ベルのみ notification dot を重ねてよい
- avatar は `person` アイコンを内包した円形ボタンとする

---

## Color Usage

- 背景は常に `#141D3D`
- active nav 背景のみ `#314574`
- 文字は白固定
- utility icon は白寄りグレーを基準にする
- notification dot のみ red を許可
- navbar 本体に primary green を使わない

---

## Token References

- background: `color.navy.strong`
- active background: `color.navy.default`
- text: `semanticColor.text.inverse`
- utility icon: navbar専用 token として追加推奨
- divider: navbar専用 token として追加推奨

---

## Variants

### Standard

- 全ページ共通の唯一の variant

### Active Item Change

- active page のみ nav item 背景を変える
- それ以外の variant は持たない

---

## States

### default

- background: `#141D3D`
- text: white
- icon: white / light gray

### hover

- text: `#FFFFFF`
- icon: `#FFFFFF`
- 背景色は原則変えない

### active item

- background: `#314574`
- text: `#FFFFFF`
- font-weight は維持

### focus

- keyboard focus ring を表示
- 濃色背景上でも見える ring にする

---

## Navigation Rules

- 主ナビ項目数は固定 3 項目
- 項目追加をしない
- `ホーム` `契約管理` `案件管理` は常に表示する
- active は 1 項目のみ
- 画面タイトルで現在地を補完しても、navbar 自体は変えない

---

## Utility Rules

- utility 内に主要 CTA を置かない
- utility は補助操作のみ
- notification bell は badge / dot 表示を許可
- avatar はユーザーメニューの起点とする
- utility icon の hit area は統一する

---

## Logo Rules

- 左端に固定配置
- 角丸正方形ボタンの中に Material rounded `domain` を置く
- 背景は navbar よりわずかに明るい濃色面
- 会社名より強く主張しすぎない

---

## Interaction Rules

- ロゴクリックでホーム相当へ遷移
- 主ナビは即時遷移
- utility は各機能の開口部
- navbar 自体にはスクロールを持たせない
- company area は組織切替や会社選択の起点にできる

---

## Keyboard Interactions

- Tab で product area、主ナビ、utility を左から順に移動する
- Enter / Space で各 button / link を開く
- active item は link として到達可能にする

---

## Responsive Behavior

- PC 幅を優先し、まずは 1 行固定を守る
- 狭幅でも高さは増やさない
- 横幅が不足する場合は utility を省略表示する前に主ナビ文言を維持する
- モバイル変形を作る場合も PC variant を勝手に崩さない

---

## Composition Rules

- 全パターンの最上部に配置する
- breadcrumb、page header、tab、side menu は navbar の下に置く
- ページごとのローカルヘッダーで代替しない

---

## Semantic Role

- container: `header`
- primary navigation: `nav`
- utility icons: `button`
- active page item: `aria-current=\"page\"` を許容

---

## ARIA Requirements

- logo、company switcher、utility icon に `aria-label` を付ける
- notification dot だけで未読を伝えず、読み上げ用ラベルを補う
- avatar button はユーザーメニュー起点だと分かる名称にする

---

## Accessibility Notes

- 白文字と背景のコントラストを維持する
- icon only button は必ず accessible name を持たせる
- active 項目を背景色だけでなく構造でも示す

---

## Anti-patterns

- navbar height を 56px 以上へ拡張する
- nav item の font-size や gap を product baseline より大きくして header 全体を間延びさせる
- utility button を pill / large icon button にして密度を崩す

- ページごとに nav 項目数が変わる
- navbar に green primary button を置く
- active 項目を目立たせすぎる
- utility icon の順序を変える
- 会社名ラベルを別表記に変える

---

## Example Structure

```text
Navbar
├─ Product Context
│  ├─ Logo button
│  ├─ Company label
│  └─ Caret
├─ Divider
├─ Primary Navigation
│  ├─ ホーム
│  ├─ 契約管理
│  └─ 案件管理
└─ Utility Area
   ├─ Help
   ├─ Search
   ├─ Account
   ├─ Notification
   └─ User Avatar
```
