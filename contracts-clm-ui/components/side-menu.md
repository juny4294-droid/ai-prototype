# Side Menu

- Status: final

---

## Purpose

同一コンテキスト内のカテゴリ移動を安定的に提供し、現在位置を明確にする。

---

## When to use

- 設定画面（settings）
- 詳細画面のセクション分割
- 同一ページ内で複数カテゴリを扱う場合

---

## When not to use（重要）

- グローバルナビ（→ Navbar）
- 軽い切替（→ Tabs）
- 階層が浅い単一画面

---

## Anatomy

- Menu container
- Optional section label
- Menu item
- Active indicator
- Optional badge

---

## Layout（最重要）

### 基本構造

[ Side Menu ] | [ Main Content ]

---

### 配置ルール

- 常に左固定
- 縦スクロール可能
- 本文とは明確に分離
- Navbarの下に配置

### Contract Detail Right Tab Variant（例外）

- 契約書詳細の右タブは `components/section-rail.md` を優先する
- この variant では右側配置を許可する
- default side menu の幅広 label list ではなく、narrow rail を使う
- `icon 上 / label 下` の 2 段構成を使う
- active 表現は full-cell 背景反転を優先し、左インジケーター線は使わない
- dot / count badge は item の右上へ重ねてよい
- collapse control は最下部の utility item として分離する

---

## Size

### Width

- 固定: 200–240px
- 推奨: 220px

---

### Height

- 100%（viewport基準）
- 内部スクロール許容

---

## Spacing

- item間: 4–8px
- section間: 16px
- container padding: 12–16px

---

## Typography

### Menu Item

- font-size: 14px
- font-weight: 500

---

### Section Label

- font-size: 12px
- color: muted
- uppercaseは使用しない（日本語前提）

---

## Color

### Default

- text: primary text
- background: transparent

---

### Hover

- background: subtle neutral
- text: strong

---

### Active（最重要）

- background: subtle primary（薄い色）
- text: primary
- 左にインジケーター線（2–3px）

---

### Disabled

- text: muted
- pointer: none

---

## Active Rules（重要）

- activeは常に1つ
- 現在表示コンテンツと完全一致
- 視覚的に最も強い状態にする

---

## Hierarchy Rules（最重要）

### 階層

- 最大2階層まで
- 3階層以上は禁止

---

### 表現

- 子要素はインデント（+12–16px）
- 色やサイズで差をつけすぎない

---

## Menu Item

### 構成

- Label
- Optional badge

---

### ルール

- 1行で収める（原則）
- 長文は省略（…）

---

## Badge（任意）

### 用途

- 未処理件数
- 状態表示

---

### ルール

- 小さく補助的に表示
- activeより目立たない

---

## States

- default
- hover
- active
- disabled

---

## Interaction Rules

- クリックで即遷移
- hoverで背景変化
- activeは明確固定

---

## Scroll Behavior

- menuは独立スクロール可
- main contentとスクロールを分離

---

## Keyboard Interaction

- Tab: 上から順に移動
- Enter: 選択
- Arrow（↑↓）: 項目移動（任意）

---

## Accessibility

- `<nav>` または `<aside>`
- list構造推奨

---

## ARIA

- aria-current="page"（active）
- aria-label="Section navigation"

---

## Responsive

### Desktop

- 左固定
- ただし contract detail right tab variant は右固定を許可する

---

### Narrow Width

- collapsibleにする（アイコン or drawer）

---

### Mobile

- drawer形式に切替

---

## Composition Rules

- Navbarの下
- Breadcrumbと併用可
- Tabsと併用しない（役割衝突）
- 契約書詳細の右タブは `components/section-rail.md` の variant として扱う

---

## Navbar / Side Menu / Tabsの境界（重要）

### Navbar

- グローバル

---

### Side Menu

- セクション（中階層）

---

### Tabs

- 同一ビュー内切替

---

## Anti-patterns（重要）

- 3階層以上
- activeが分からない
- 幅が可変でレイアウトが崩れる
- 長文ラベルで折り返し多発
- badgeが主役になる
- main contentと視覚的に混ざる
- contract detail right tab を default の左 wide menu と同じ見た目で実装する

---

## Visual Constraint

- フラットUI
- 過剰装飾禁止
- activeのみ強調

---

## Example structure

Side Menu  
├─ Section Label  
├─ Item  
├─ Item（active）  
├─ Item  
└─ Item  
