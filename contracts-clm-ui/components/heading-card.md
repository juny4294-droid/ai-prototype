# Heading Card

- Status: draft
- Source: `contracts_clm_code_prototyping_context.md`

## Purpose

ページやセクションの導入として、見出し、要約、主要操作を整理する。

## When to use

- 詳細画面や設定画面の先頭で文脈をまとめたいとき
- タイトル、ステータス、主要操作を近接配置したいとき
- page title area をカード化して整理したいとき

## When not to use

- 単純な一覧でタイトルだけあれば十分なとき
- 過度な装飾カードにして主内容を圧迫するとき

## Anatomy

- Card container
- Title
- Optional subtitle or metadata
- Optional status
- Action area

## Layout

- タイトル群を左、操作群を右に置く構成を基本にする
- 要約や status はタイトル直下にまとめる
- primary action は 1 つに絞る

## Size

- ページ冒頭の導入領域として十分な幅を取る
- 高さは情報量に応じて伸縮する

## Spacing

- タイトルと補助情報の間隔を小さめにする
- 内容と action area の距離を取りすぎない

## Typography

- タイトルは `20px` 前後を基準にする
- 補助説明は caption または body で抑える

## Content guidelines

- ラベル、補助文、空状態文言のトーンをここで定義する
- 日本語の業務用語として短く自然にする
- 見出しは日本語だけで完結させ、英語表記を併記しない
- block 見出しを英語だけで表示しない
- 具体文言は画像比較で詰める

## Icon rules

- アイコンは意味補強としてのみ使う
- 単独で意味を完結させない
- 有無、配置、サイズ、線と塗りの使い分けは画像比較で確定する

## Color usage

- 面の強調は控えめにする
- status や primary action だけに強調色を使う

## Token references

- 適用する color、spacing、typography、state token をここに紐づける
- 具体 token 名は `tokens/tokens.json` と画像比較を元に確定する

## Variants

- Page heading card
- Summary heading card
- Heading card with actions

## States

- default
- loading
- with status emphasis

## Interaction rules

- 操作の優先度が見出し情報より先に見えすぎないようにする
- status と action を混同させない

## Keyboard interactions

- Tab 順、Enter、Space、Arrow、Escape など必要キーをここで定義する
- コンポーネント固有のキー操作は画像比較と実装要件を見て詰める

## Responsive behavior

- 基本は PC ブラウザ向け定義を優先する
- 狭幅時の折り返し、省略、固定解除、段組み変更をここで定義する
- 具体 breakpoint は画像比較で詰める

## Composition rules

- breadcrumb、button、badge、tag と組み合わせる
- card 内でさらに複雑なフォームを開始しない

## Semantic role

- 可能な限りネイティブ HTML 要素を優先する
- 必要時のみ role を補足し、最終マッピングは実装構造と画像比較で確定する

## ARIA requirements

- 名称、状態、関係性を機械可読にする
- 必須属性と状態属性はコンポーネントごとに詳細化する
- 具体属性は画像比較と実装段階で確定する

## Accessibility notes

- ページタイトルが最も見つけやすい要素になるようにする
- actions のラベルで操作内容を明確にする

## Anti-patterns

- タイトル領域に複数の主操作を並べる
- 補助情報が多すぎて見出しの役割を失う
- summary と本文の境界が曖昧になる

## Example structure

```text
Heading Card
├─ Title
├─ Optional subtitle or status
└─ Action area
```
