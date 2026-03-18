# Toast

- Status: draft
- Source: `contracts_clm_code_prototyping_context.md`

## Purpose

操作結果や軽い注意を即時に通知する。

## When to use

- 保存成功や軽い失敗を短く伝えるとき
- 現在画面を離れず結果だけを返したいとき
- field-level feedback より広いが dialog ほど重くない通知が必要なとき

## When not to use

- 画面内文脈と一緒に説明すべき重大エラーのとき
- 確認操作を求めるとき
- 長い説明文が必要なとき

## Anatomy

- Toast container
- Optional icon
- Message
- Optional action
- Optional dismiss control

## Layout

- 画面の一定位置に重ねて表示する
- 他 UI を大きく遮らない
- 複数 toast が出る場合でも順序を保つ

## Size

- 1 から 2 行程度の短い通知を基本にする
- 幅は読み切れるが大きすぎない範囲にする

## Spacing

- message と dismiss control の間に十分な距離を取る
- 複数 toast 間の余白を一定にする

## Typography

- 本文サイズを基準にし、短い文言で伝える
- action がある場合は本文と区別する

## Content guidelines

- ラベル、補助文、空状態文言のトーンをここで定義する
- 日本語の業務用語として短く自然にする
- 具体文言は画像比較で詰める

## Icon rules

- アイコンは意味補強としてのみ使う
- 単独で意味を完結させない
- 有無、配置、サイズ、線と塗りの使い分けは画像比較で確定する

## Color usage

- 成功は green 系、エラーは red 系を補助的に使う
- 重要エラーは自動消去せず、視認性を確保する

## Token references

- 適用する color、spacing、typography、state token をここに紐づける
- 具体 token 名は `tokens/tokens.json` と画像比較を元に確定する

## Variants

- Success toast
- Error toast
- Informational toast
- Persistent toast

## States

- appearing
- visible
- dismissing
- persistent

## Interaction rules

- 重要エラーは自動消去しない
- 本文は短く、必要なら次の行動を添える
- 同じ内容を alert と重複表示しない

## Keyboard interactions

- Tab 順、Enter、Space、Arrow、Escape など必要キーをここで定義する
- コンポーネント固有のキー操作は画像比較と実装要件を見て詰める

## Responsive behavior

- 基本は PC ブラウザ向け定義を優先する
- 狭幅時の折り返し、省略、固定解除、段組み変更をここで定義する
- 具体 breakpoint は画像比較で詰める

## Composition rules

- button、form submit、dialog result と組み合わせる
- field error や alert と役割を分ける

## Semantic role

- 可能な限りネイティブ HTML 要素を優先する
- 必要時のみ role を補足し、最終マッピングは実装構造と画像比較で確定する

## ARIA requirements

- 名称、状態、関係性を機械可読にする
- 必須属性と状態属性はコンポーネントごとに詳細化する
- 具体属性は画像比較と実装段階で確定する

## Accessibility notes

- 通知内容をテキストで明確にする
- 自動消去する場合は短すぎない表示時間にする

## Anti-patterns

- 長文説明を toast に詰める
- 重要エラーを数秒で消す
- 表示位置が不安定で見失う

## Example structure

```text
Toast
├─ Optional icon
├─ Message
└─ Optional action or dismiss
```
