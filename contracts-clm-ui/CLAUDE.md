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
特定 pattern に対して sample PDF や tab content の基準資料がある場合は、その資料を当該 pattern の baseline evidence として優先してよい。

## 更新ルール

- foundations は横断ルールだけを書く
- components は単体の見た目・状態・文言・レイアウト責務を書く
- patterns は複数コンポーネントの組み合わせ方を書く
- tokens は再利用可能な値だけを保持する
- 実装や既存ルールで確認できていない内容は、断定せず「暫定定義」または「別途検証が必要な項目」として残す
- プロトタイプ固有の場当たり的な調整は、原則としてローカル修正で閉じず、必要なら foundations / components / patterns に昇格する
- コード実装で成立しない曖昧な指示は残さず、寸法、順序、状態差分、分岐条件まで記述する

## Components Schema

各 `components/*.md` は以下の `core required` を必ず含める。

- Purpose
- When to use
- When not to use
- Anatomy
- Layout
- Variants
- States
- Interaction rules
- Composition rules
- Anti-patterns

以下は `optional when relevant` とする。

- Size
- Spacing
- Typography
- Content guidelines
- Icon rules
- Color usage
- Token references
- Keyboard interactions
- Responsive behavior
- Semantic role
- ARIA requirements
- Accessibility notes
- Example structure

## Evidence Level

各ルール定義には、必要に応じて以下の根拠レベルを明示してよい。

- `final`: 既存 UI、既存コード、既存ルールで確定している
- `derived`: 複数の既存ルールや実装から導ける
- `provisional`: 妥当だが未確定の仮置き
- `missing`: 情報不足で定義できていない

未確定の内容を `final` と同じ強さで書かない。

## Surface Selection Rule

- UI surface は `dialog / modal / full-modal / sidebar / page` の既存選択肢から選ぶ
- 新しい surface を発明せず、既存の surface を最小限の責務で使い分ける
- 迷う場合は、ユーザーの主作業を最も小さい surface で完結できる案を優先する
- `sidebar` は補助情報専用とし、main form や主作業フローを複製しない
- `drawer` は mobile または contextual sidebar の表示形式として扱い、独立した surface として再定義しない

## State / Data Rule

- 各プロトタイプは少なくとも `default / loading / empty / error` の扱いを説明可能にする
- form を含む場合は `disabled / submitting / validation error` を省略しない
- ダミーデータは正常系だけでなく、空、長文、多件数、disabled、error を確認できる粒度で用意する
- 実在企業名や実在担当者を連想させる固有名詞は原則使わない

## Layout Stability Rule

- panel、card、tree、list は読めない幅まで縮めない
- title、description、action、content の読順を壊す折返しや極端な狭幅を許容しない
- 1文字ずつ縦落ちする崩れ方、action が title を押しつぶす配置、content が不自然な余白で痩せる配置を避ける
- 横幅不足は `min-width`、stacking、padding 調整で解決し、文字崩れで吸収しない
- debug / sample / state controls は補助領域に置き、主役 content より強く見せない
- 既存 sample や既存画面がある場合、まずその余白、密度、操作サイズ、整列を基準に合わせる
- support area や panel header では、右側だけに大きな死に余白を残したまま title / description / items を痩せさせない
- icon button、tree action、utility action は既存 baseline より大きい余白や hit area に膨らませず、compact な密度を維持する
- tree / list / card の左端、connector、action placement は既存 baseline と同系統の位置関係を保ち、理由なく別配置へ崩さない
- 契約書詳細の right rail / tab 順序は、特に指示がない限り `components/section-rail.md` の固定順を維持する
- screenshot baseline を使う場合は、契約書名や担当者名などのモック文言ではなく `色 / 形 / サイズ / 余白 / 配置` だけを参照する
- 契約書詳細では `viewer が主 / rail が細 / panel が狭く密度高め` の比率を崩さない
- 契約書詳細の panel header は原則 compact に保ち、画像基準にない説明文を自動追加しない
- 契約書詳細の support panel では、`薄い divider / 白面 / 最小限の影` を基本とし、カード影で面数を増やさない
- 契約書詳細の form / progress tab では、主要 action は本文中に散らさず、下端の action strip にまとめる

## Escalation Rule

- 既存 components / patterns で表現できない場合、独自 UI を先に増やさず、必要な新 component または pattern を定義候補として明示する
- local な見た目調整で吸収せず、再利用価値がある場合は foundations / components / patterns への昇格を検討する
- 詳細画面など既存 pattern に固定タブ構成がある場合、指示がない限りタブ数や順番を変えず、既存状態を再現する

## コードプロトタイプへ定義を落とす手順

1. 対象画面の目的、主操作、主要状態、例外状態を整理する
2. 必要なコンポーネント責務とパターン構造を分解する
3. 余白、サイズ、色、状態差分、情報階層、文言ルールを定義する
4. 対応する `components/*.md` / `patterns/*.md` を更新する
5. 横断ルールに昇格する内容は `foundations/*.md` と `tokens/tokens.json` に反映する
6. 実装に必要な前提が不足している場合は、暫定定義ではなく不足点として明示する

## Baseline Comparison Loop

契約書詳細のように screenshot baseline がある画面では、
生成後に以下の 5 pass を必ず順に確認する。

1. `構造比率`
2. `密度`
3. `panel / rail chrome`
4. `component primitive`
5. `色と強弱`

各 pass で差分が見つかった場合は、まず local 修正ではなく
再生成しても効く rule にできるかを検討する。

- 差分が pattern 固有なら `patterns/*.md` へ追加する
- 差分が横断品質なら `foundations/quality.md` または `foundations/checklist.md` へ追加する
- 差分が component 固有なら `components/*.md` へ追加する
- 5 pass を通す前に `だいたい似ている` で完了扱いにしない

## コードプロトタイプ前提

- 生成対象は実装可能な HTML / CSS / JS ベースのプロトタイプとする
- プロトタイプ作成時は、必ず既存の design tokens / foundations / components / patterns を参照し、再利用可能なコンポーネントやデザインシステムのルールを優先して使う
- 成果物の最小要件は `foundations/deliverable.md` を優先する
- sample や検証用の補助UIは、実際の画面責務より強く見せない
- state 切替や検証用 controls を置く場合も、primary content や主要 panel より目立つ位置や密度にしない
- panel や section の基本構造は `タイトル → 説明 → 必要なアイテム` の縦積みを崩さない
- 単なるビジュアル模写ではなく、画面構造、状態、主要操作がコード上で確認できることを優先する
- ダミーデータでも、一覧、詳細、空状態、エラー、disabled など主要状態を再現できるようにする
- 実データ連携がなくても、UI上の遷移、表示切替、フォーム状態変化は説明可能にする
- 後から実装へ移し替えやすいように、コンポーネントの責務と再利用境界を崩さない
- 装飾のためだけの要素や、コード上の意味を持たない見た目専用構造を増やさない
- 新しいプロトタイプは `samples/` 配下に案件ごとの新規フォルダを作成し、その中に `index.html` `styles.css` `app.js` などの成果物を配置する

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
