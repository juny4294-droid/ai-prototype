# Tag

- Status: draft
- Source: documented detail panel and list baseline

## Purpose

分類情報や軽いラベルを、badge より弱い強度で示す。

## When to use

- 契約種別、カテゴリ、属性などの分類ラベル
- 一覧や詳細で補助的な分類を見せたいとき
- 選択済み値を軽く表示したいとき

## When not to use

- 件数や緊急状態を強く示したいとき
- 長文や説明文を入れたいとき

## Anatomy

- Tag container
- Short label
- Optional remove control

## Layout

- 行内で複数並べても読みやすい配置にする
- 長文を入れず短い分類軸を示す
- remove 可能な場合は操作とラベルを混同させない

## Size

- 小型要素として扱う
- 複数並びでも行高を乱しすぎない

## Spacing

- 左右 padding を一定にする
- tag 間に短い余白を置く

## Typography

- 本文よりわずかに小さめでも可読性を保つ
- ラベルは短く保つ

## Content guidelines

- ラベル、補助文、空状態文言のトーンをここで定義する
- 日本語の業務用語として短く自然にする
- ラベルは 2〜10 文字程度の短い分類語を基本とする

## Icon rules

- アイコンは意味補強としてのみ使う
- 単独で意味を完結させない
- contract detail の relation / project tag では icon なしを基本とする

## Color usage

- 基本は outline を使う
- タスクカテゴリなど一部は fill + 白文字を許容する
- 状態色は badge ほど強くしない

## Token references

- 適用する color、spacing、typography、state token をここに紐づける
- token が未整備でも、本ファイルの variant 定義を優先する

## Variants

- Outline tag
- Filled category tag
- Removable tag

## States

- default
- hover
- selected if used as filter
- removable
- disabled

## Interaction rules

- 色意味は画面内で統一する
- filter としてクリック可能な場合は通常表示と区別する

## Keyboard interactions

- `Tab`: focusable な tag に移動
- `Enter / Space`: filter / remove のような action 付き tag のみ実行

## Responsive behavior

- 基本は PC ブラウザ向け定義を優先する
- 狭幅時は折り返しを許可し、1 個ごとの高さは維持する

## Composition rules

- table、card、multi select、detail sections と組み合わせる
- badge と役割を混同しない

## Semantic role

- 可能な限りネイティブ HTML 要素を優先する
- 必要時のみ role を補足し、静的表示と操作可能 tag を分離する

## ARIA requirements

- 名称、状態、関係性を機械可読にする
- 必須属性と状態属性はコンポーネントごとに詳細化する
- removable や selected 状態がある場合は属性で明示する

## Accessibility notes

- 色だけで分類を表さない
- remove 操作には明確なラベルを持たせる

## Contract Detail Variants

### Related Contract Outline Tag

- `元契約`、`親契約`、`子契約`、`覚書`、project 名のような軽い分類に使う
- min-height: `28px`
- padding: `0 12px`
- border: `2px solid primary`
- radius: `8px`
- font-size: `12px`
- font-weight: `700`

## Anti-patterns

- 長文ラベルを入れる
- 緊急状態を tag だけで表す
- removable なのか静的表示なのか分からない

## Example structure

```text
Tag
├─ Label
└─ Optional remove control
```
