# ContractS CLM UI Doc Operating Guide

## 目的

このディレクトリは、ContractS CLM のコードベースのプロトタイプを、一貫した UI 定義にもとづいて生成・改善するための作業領域です。
ここでは foundations / components / patterns / tokens を基準に、画面を実装可能な粒度で定義します。

## 情報の優先順位

1. 既存の `tokens / foundations / components / patterns` に定義されたルール
2. 既存のサンプル実装や画面実装で確認できる構造
3. 実際のコンポーネント画像・画面画像
4. `contracts_clm_code_prototyping_context.md`

既存ルールと実装で確認できた事実が、暫定定義より優先されます。

## 更新ルール

- foundations は横断ルールだけを書く
- components は単体の見た目・状態・文言・レイアウト責務を書く
- patterns は複数コンポーネントの組み合わせ方を書く
- tokens は再利用可能な値だけを保持する
- 実装や既存ルールで確認できていない内容は、断定せず「暫定定義」または「別途検証が必要な項目」として残す
- プロトタイプ固有の場当たり的な調整は、原則としてローカル修正で閉じず、必要なら foundations / components / patterns に昇格する
- コード実装で成立しない曖昧な指示は残さず、寸法、順序、状態差分、分岐条件まで記述する

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

## コードプロトタイプへ定義を落とす手順

1. 対象画面の目的、主操作、主要状態、例外状態を整理する
2. 必要なコンポーネント責務とパターン構造を分解する
3. 余白、サイズ、色、状態差分、情報階層、文言ルールを定義する
4. 対応する `components/*.md` / `patterns/*.md` を更新する
5. 横断ルールに昇格する内容は `foundations/*.md` と `tokens/tokens.json` に反映する
6. 実装に必要な前提が不足している場合は、暫定定義ではなく不足点として明示する

## コードプロトタイプ前提

- 生成対象は実装可能な HTML / CSS / JS ベースのプロトタイプとする
- 単なるビジュアル模写ではなく、画面構造、状態、主要操作がコード上で確認できることを優先する
- ダミーデータでも、一覧、詳細、空状態、エラー、disabled など主要状態を再現できるようにする
- 実データ連携がなくても、UI上の遷移、表示切替、フォーム状態変化は説明可能にする
- 後から実装へ移し替えやすいように、コンポーネントの責務と再利用境界を崩さない
- 装飾のためだけの要素や、コード上の意味を持たない見た目専用構造を増やさない

## 記述方針

- 実装詳細ではなく、UI 定義として記述する
- 日本語 UI 文脈を優先する
- B2B SaaS の管理画面として説明できる粒度で書く
- 確認できた事実と根拠を優先し、未確認の内容は暫定定義として扱う
- B2B SaaS のシニア UI デザイナーとして、一般的な情報設計・視線誘導・状態設計のセオリーを前提にする
- 見た目だけでなく、「何を確認し、何を判断し、何を実行する画面か」が伝わる構造を優先する
- 必要に応じて「こういう機能や情報ブロックが必要では」という論点を、業務フロー起点で補う
- 重要情報、操作、補助情報が視覚的に競合しないように定義する
- 情報の重要度は、layout / spacing / typography / color の役割分担で表現する
- ラベル、値、状態、補助情報の役割を混在させない
- first glance で主目的と primary action が分かる構造を優先する
- コードに落とす際に解釈が割れないよう、状態、条件分岐、表示ルールを具体的に書く
- プロトタイプで省略してよい実装と、省略してはいけないUXを区別して書く
