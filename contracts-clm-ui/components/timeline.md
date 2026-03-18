# Timeline

- Status: draft
- Source: documented contract detail and lifecycle history baseline

## Purpose

契約の更新、承認、差し戻し、ファイル操作などの履歴を時系列で示す。

## When to use

- 契約ライフサイクルのイベント履歴を見せたいとき
- 監査や追跡のために時系列を整理したいとき
- 詳細画面や sidebar で履歴を補助表示したいとき

## When not to use

- 会話のやり取りが主で thread 構造が必要なとき
- 単なる状態一覧だけで十分なとき

## Anatomy

- Timeline container
- Event item
- Optional axis line
- Timestamp
- Event label
- Actor and details

## Layout

- 時系列順を画面単位で統一する
- 日時、イベント種別、実行者、要約の関係を明確にする
- 長文イベントでも軸が崩れないようにする

## Size

- 一覧性を優先した縦密度にする
- sidebar 内でも数件見渡せる高さ感を保つ

## Spacing

- イベント間の余白で区切りを作る
- 軸線やアイコンと本文の間隔を一定にする

## Typography

- イベント名は本文よりやや強くする
- timestamp や actor は補助階層にする
- 長文詳細は read more を併用できる

## Content guidelines

- ラベル、補助文、空状態文言のトーンをここで定義する
- 日本語の業務用語として短く自然にする
- event message は自然文 1〜2 行で要約する

## Icon rules

- アイコンは意味補強としてのみ使う
- 単独で意味を完結させない
- contract detail activity list variant では dot marker より avatar を優先する

## Color usage

- 状態種別に応じた accent は使えるが色だけに依存しない
- 軸線や補助情報は中立色にする

## Token references

- 適用する color、spacing、typography、state token をここに紐づける
- token が未整備でも contract detail variant の size / spacing を優先する

## Variants

- Standard timeline
- Compact sidebar timeline
- Grouped-by-date timeline
- Contract detail activity list

## States

- default
- highlighted event
- collapsed long detail
- loading

## Interaction rules

- 新しい順か古い順かを明示し、途中で混在させない
- 重要イベントは内容が一目で分かる要約を持たせる
- コメント領域と混同しない

## Keyboard interactions

- `Tab`: inline link や展開 action に移動
- `Enter / Space`: action 実行

## Responsive behavior

- 基本は PC ブラウザ向け定義を優先する
- 狭幅時も時系列の順序は維持し、message を折り返して表示する

## Composition rules

- avatar、badge、read more、sidebar、contract detail と組み合わせる
- thread comments の代替にしない

## Contract Detail Activity List Variant

- 契約書詳細の `ログ` tab では、この variant を優先する
- 縦軸 line や dot marker を主役にせず、`avatar + actor + timestamp + message` の activity row を基本にする
- 1 item の基本構造は `header row（avatar + actor / timestamp） + message row + divider`
- event message 内には契約名、承認フロー名、タスク名などの inline link を含めてよい
- item は card 化せず、白地の list と divider で連続表示する
- actor name は `16px / 700`、timestamp は `14px`、message は `18px / line-height 1.8` を基本とする
- avatar は `components/avatar.md` の md を基本とする

## Semantic role

- 可能な限りネイティブ HTML 要素を優先する
- 必要時のみ role を補足し、実装構造に合わせて状態を属性で表現する

## ARIA requirements

- 名称、状態、関係性を機械可読にする
- 必須属性と状態属性はコンポーネントごとに詳細化する
- expandable item がある場合は展開状態を属性で表現する

## Accessibility notes

- 日時とイベント内容の対応が読み上げで追えること
- 時系列順が視覚だけでなく構造でも分かること

## Anti-patterns

- 時系列順が不明瞭
- イベント種別とコメントが混在して意味が曖昧
- 長文詳細で一覧性を失う

## Example structure

```text
Timeline
├─ Event item
│  ├─ Timestamp
│  ├─ Event label
│  └─ Detail
└─ Event item
```
