# Tooltip

- Status: final

---

## Purpose

補助的な短文説明を、最小限の表示で補完する。

---

## When to use

- アイコンの意味補足
- 短い用語説明
- フォーム項目の軽い補助

---

## When not to use（重要）

- 主要情報（→ 常時表示）
- 長文説明（→ Read More / Inline）
- 操作説明（→ Help / Dialog）

---

## Anatomy

- Trigger
- Tooltip bubble
- Text
- Optional arrow

---

## Layout（最重要）

### 表示位置

優先順位で決定：

1. 上
2. 下
3. 右
4. 左

※ 画面端で反転

---

### 配置ルール

- Triggerに近接（4–8px）
- 重なりすぎない
- 主要UIを遮らない

---

## Size

- max-width: 240–320px
- 1〜2行前提

---

## Spacing

- padding: 8–12px
- trigger距離: 4–8px

---

## Typography

- font-size: 12–13px
- line-height: 1.4

---

## Color

### 基本

- 背景: dark / neutral
- 文字: white

---

### コントラスト

- WCAG AA以上

---

## Elevation

- shadow: small
- 浮いて見える程度

---

## Trigger Behavior（最重要）

### 発火条件

- hover
- focus（必須）
- click（モバイル）

---

### 遅延

- 表示: 300–500ms
- 非表示: 100–200ms

---

### hover領域

- trigger + tooltipを一体扱い

---

## States

- hidden
- appearing
- visible
- dismissing

---

## Interaction Rules（重要）

- hoverだけに依存しない
- triggerに元の意味があること
- tooltipがなくても理解できること

---

## Keyboard Interaction

- Tab: triggerへ
- focusで表示
- Escで閉じる

---

## Mobile Behavior（重要）

### 表示方法

- tapで表示
- 外側タップで閉じる

---

### 代替

- 必要なら inline表示にフォールバック

---

## Content Rules（重要）

- 1文で完結
- 専門用語は避ける
- 文頭から説明する

---

### 例

- 契約更新日を自動で計算します
- この値はAIで抽出されています

---

## Arrow

- 任意
- 位置の視覚補助

---

## Collision Handling（重要）

- viewport外に出さない
- 位置を自動反転

---

## Accessibility（重要）

### ARIA

- role="tooltip"
- triggerにaria-describedby

---

### 要件

- focusで到達可能
- 読み上げ可能

---

## Responsive

### Desktop

- hover + focus

---

### Mobile

- tap
- hover無効

---

## Variants

- Text tooltip
- Icon tooltip
- Form helper tooltip

---

## Composition

- Icon button
- Form label
- Table header
- Status icon

---

## Anti-patterns（重要）

- 重要情報をtooltipに隠す
- hover前提で設計する
- 長文を入れる
- triggerが意味を持たない
- tooltip内に操作を入れる

---

## Visual Constraint

- シンプル
- 装飾禁止（ネオン / ガラス / 強い影）

---

## Example structure

Tooltip  
├─ Trigger  
└─ Bubble  