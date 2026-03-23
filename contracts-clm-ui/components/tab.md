# Tab

- Status: draft
- Source: documented contract detail and support panel baseline

## Purpose

同一ページ内の大きな情報群を切り替える。

## When to use

- 契約詳細で概要、コメント、履歴などを切り替えるとき
- 同一階層の内容群を横断したいとき
- ページ遷移を増やさず情報を整理したいとき

## When not to use

- 階層の深い設定カテゴリを扱うとき
- 少数の補助切り替えだけで section anchor で十分なとき

## Anatomy

- Tab list
- Tab item
- Active indicator
- Tab panel
- Optional badge

## Layout

- コンテンツ直上に配置する
- active tab と panel の関係を明確にする
- ラベルが増えすぎる場合は構造を再検討する

## Size

- ラベルが短く読める高さと幅にする
- 件数 badge を付けても窮屈にならないサイズにする

## Spacing

- tab 間の余白を一定にする
- tab list と panel の間に短い区切り余白を設ける

## Typography

- ラベルは本文サイズを基準にする
- active tab はウェイトや色で一段強くする

## Content guidelines

- ラベル、補助文、空状態文言のトーンをここで定義する
- 日本語の業務用語として短く自然にする
- tab label は 2〜8 文字程度の短い名詞句を基本とする

## Icon rules

- アイコンは意味補強としてのみ使う
- 単独で意味を完結させない
- icon を使う場合は leading に置き、label と 8px gap を取る
- contract detail fixed variant では icon を使わない

## Color usage

- active 状態は下線、背景、文字色などで明確に示す
- 非 active は主張しすぎない

## Token references

- 適用する color、spacing、typography、state token をここに紐づける
- 具体 token 名が未整備でも、本ファイルの size / spacing / state 値を優先する

## Variants

- Underline tab
- Segmented tab
- Tab with badge
- Compact inner underline tab

### Contract Detail Fixed Variant

- `契約書 / 変更履歴` の 2 項目を固定で使う
- 順序は `契約書` → `変更履歴`
- tab list は白背景、下辺 1px border を基本とする
- tab item は `width: 72px`, `height: 52px`, `font-size: 13px`, `font-weight: 700` を基本とする
- tab 間 gap は `28px` を基本とする
- active underline は `3px` を基本とする
- top border は置かない
- pill 化や dropdown 化を行わない

### Compact Inner Underline Tab

- right panel 内の scope 切り替えや締結依頼の source 切り替えに使う
- tab item は `min-height: 44px`, `font-size: 14px`, `font-weight: 700` を基本とする
- tab list 下に 1px border を置き、active underline は `3px`
- rail と競合しない二次切り替えとして扱う

## States

- default
- active
- hover
- focus
- disabled

## Interaction rules

- ラベルは短くする
- tab で切り替える内容は同階層に保つ
- current panel が即座に分かるようにする

## Keyboard interactions

- `Tab`: tab list にフォーカス移動
- `ArrowLeft / ArrowRight`: 同一 tab list 内を移動
- `Enter / Space`: 現在フォーカス中の tab を選択

## Responsive behavior

- 基本は PC ブラウザ向け定義を優先する
- 狭幅時は横スクロールを許可し、2 段折り返しは避ける
- tab item の高さは維持し、label だけを必要に応じて省略する

## Composition rules

- contract detail、heading card、badge、thread comments、timeline と組み合わせる
- side menu と同時使用する場合は役割分担を明確にする

## Semantic role

- 可能な限りネイティブ HTML 要素を優先する
- `button` ベースで実装する場合は `aria-selected` と panel の関連付けを持たせる

## ARIA requirements

- 名称、状態、関係性を機械可読にする
- 必須属性と状態属性はコンポーネントごとに詳細化する
- tab には対応 panel を示す属性を持たせ、active 状態を属性で表現する

## Accessibility notes

- キーボードで tab 間移動ができること
- active tab と対応 panel が関連付くこと

## Anti-patterns

- 長いラベルを並べすぎる
- active 状態が不明瞭
- 異なる階層の情報を同一 tab に混ぜる

## Example structure

```text
Tab
├─ Tab list
│  ├─ Tab item
│  ├─ Active tab
│  └─ Tab item
└─ Tab panel
```
