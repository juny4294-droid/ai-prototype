# Skeleton

- Status: final

---

## Purpose

読み込み中でもレイアウトを維持し、layout shiftを防ぎながら待機状態を示す。

---

## When to use

- 初回ロード時
- table / card / formのデータ取得中
- 非同期描画でレイアウトを固定したい場合

---

## When not to use（重要）

- 即時表示（100ms未満）
- 空状態やエラー状態
- 処理状況を明示すべきケース（→ Progress / Message）

---

## Anatomy

- Skeleton container
- Placeholder blocks
- Optional shimmer animation

---

## Layout（最重要）

### 原則

- 実UIと1:1で構造を合わせる

---

### NG

- 適当な灰色ブロック
- 実際と異なるレイアウト

---

### 例

Table → row構造再現  
Card → header / body再現  
Form → label / input再現  

---

## Shape Rules

### Text placeholder

- 高さ: 12–16px
- 行数: 実際に近い
- 最終行は短くする（70–80%）

---

### Block placeholder

- 角丸: 4–8px
- 実要素に近いサイズ

---

### Avatar / Icon

- 円形 or 正方形で再現

---

## Size

- 実コンポーネントと同等
- 高さズレを発生させない

---

## Spacing

- 実UIと同一spacingを使用
- placeholder間の余白も揃える

---

## Color

### Base

- neutral-100〜200（薄いグレー）

---

### Highlight（animation時）

- slightly lighter tone

---

### 禁止

- 彩度のある色
- 強いコントラスト

---

## Animation（任意）

### Shimmer

- 左→右
- duration: 1.2–1.6s
- easing: linear

---

### ルール

- 必須ではない
- 静的でも可

---

## States

- static
- animated
- partial loading

---

## Partial Loading（重要）

- 一部データのみSkeleton表示
- 既存データは維持

---

## Interaction Rules（最重要）

- クリック不可
- hover反応なし
- フォーカス不可

---

## Loading Duration Rules（重要）

### 短時間（<300ms）

- 表示しない or delay表示

---

### 中時間（300ms〜2s）

- Skeleton表示

---

### 長時間（>2s）

- Skeleton + 補足メッセージ

---

## Transition Rules

- Skeleton → Contentは即時切替
- フェードは軽微（100–150ms）

---

## Keyboard Interaction

- フォーカス対象にしない

---

## Accessibility

- Skeleton自体は読み上げ対象外

---

## ARIA

- aria-busy="true"（親コンテナ）
- aria-hidden="true"（Skeleton）

---

## Responsive

- レイアウトは実UIに準拠
- breakpointごとに再現

---

## Variants

### Table Skeleton

- 行単位で再現

---

### Card Skeleton

- image / title / body

---

### Form Skeleton

- label / input構造

---

### Sidebar Skeleton

- section構造

---

## Composition Rules

- Table / Card / Sidebarとセット
- Empty / Errorと混同しない

---

## Skeleton / Spinner / Progressの境界（重要）

### Skeleton

- レイアウトが決まっている

---

### Spinner

- 不確定な待機

---

### Progress

- 進捗が測定可能

---

## Anti-patterns（重要）

- 実レイアウトと異なる
- 長時間Skeletonのみ
- 操作できそうに見える
- 過剰アニメーション
- Skeletonが主役になる

---

## Visual Constraint

- フラット
- 低コントラスト
- 補助的存在

---

## Example structure

Skeleton  
├─ Header placeholder  
├─ Line placeholder  
├─ Line placeholder  
└─ Block placeholder  