# ContractS CLM UI Doc Operating Guide

## 目的

このディレクトリは、ContractS CLM の画像ベース試作を、再利用可能な UI 定義へ分解するための作業領域です。
`contracts_clm_image_prototyping_context.md` をマスターコンテキストとし、ここでは foundations / components / patterns / tokens に落とし込みます。

## 情報の優先順位

1. 実際のコンポーネント画像・画面画像
2. `contracts_clm_image_prototyping_context.md`
3. 各 `foundations/*.md`
4. 各 `components/*.md`
5. 各 `patterns/*.md`

画像で確認できた事実が、暫定定義より優先されます。

## 更新ルール

- foundations は横断ルールだけを書く
- components は単体の見た目・状態・文言・レイアウト責務を書く
- patterns は複数コンポーネントの組み合わせ方を書く
- tokens は再利用可能な値だけを保持する
- 画像で確認できていない内容は、断定せず「暫定定義」または「画像で詰める項目」として残す

## Components Schema

各 `components/*.md` は以下の見出しを必ず含める。

- Purpose
- When to use
- When not to use
- Anatomy
- Layout
- Size
- Spacing
- Typography
- Content guidelines
- Icon rules
- Color usage
- Token references
- Variants
- States
- Interaction rules
- Keyboard interactions
- Responsive behavior
- Composition rules
- Semantic role
- ARIA requirements
- Accessibility notes
- Anti-patterns
- Example structure

## 画像から定義を詰める手順

1. 対象コンポーネント画像を確認する
2. 余白、サイズ、色、状態差分、アイコン位置、文言ルールを抽出する
3. 対応する `components/*.md` を更新する
4. 横断ルールに昇格する内容は `foundations/*.md` と `tokens/tokens.json` に反映する
5. 画面上での組み合わせに影響する場合は `patterns/*.md` も更新する

## 記述方針

- 実装詳細ではなく、UI 定義として記述する
- 日本語 UI 文脈を優先する
- B2B SaaS の管理画面として説明できる粒度で書く
- 過度に抽象化せず、画像から確認できる事実を残す
