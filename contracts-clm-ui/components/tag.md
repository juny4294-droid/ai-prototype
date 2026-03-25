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

## Variant Classification（3種類の使い分け・最重要）

Tag は用途によって以下の3種類に分類する。種類ごとに形状・色・アイコン有無が異なり、同一画面で混在させる場合は種類を統一するか、明確に区別する。

---

### Type 1: Category Tag（カテゴリタグ）

管理者が固定したカテゴリ・種別の分類。ユーザーが値を変更できない固定リストから選ぶ。

**形状・サイズ:**
- height: `28px`
- padding: `0 10px 0 8px`
- border-radius: `6px`
- font-size: `12px` / font-weight: `700`
- color: `#FFFFFF`（白文字固定）
- アイコン: 左端に Material Icons Round を置く（icon-size: `14px`、icon と label の gap: `4px`）

**タスクカテゴリ カラーマップ（固定）:**

| カテゴリ   | 背景色    | Material Icon     |
|------------|-----------|-------------------|
| 承認       | `#00AA9C` | `how_to_reg`      |
| 依頼・相談 | `#314574` | `contact_support` |
| 契約審査   | `#7C3AED` | `rate_review`     |
| その他     | `#52525B` | `check_box`       |
| 締結       | `#3B82F6` | `draw`            |

- カテゴリを追加する場合は上記テーブルに色と icon を追記してから使用する
- 既存カテゴリの色や icon を画面ごとに変えない

---

### Type 2: Status Tag（ステータスタグ）

レコードや作業の現在状態を示す。ユーザーが選択するが、値は固定リスト。

**形状・サイズ:**
- height: `22px`
- padding: `0 10px`
- border-radius: `11px`（pill）
- font-size: `12px` / font-weight: `700`
- color: `#FFFFFF`（白文字固定）
- アイコン: なし

**ステータス カラーマップ（固定）:**

| ステータス | 背景色    |
|------------|-----------|
| 完了       | `#00AA9C` |
| 未完了     | `#6B7280` |
| 必須       | `#F59E0B` |

- ステータスを追加する場合は上記テーブルに色を追記してから使用する
- 既存ステータスの色を画面ごとに変えない

---

### Type 3: Label Tag（ラベルタグ）

ユーザーが契約書・レコードに自由付与する分類ラベル。固定リストなし・自由入力。

**形状・サイズ:**
- height: `22px`
- padding: `0 8px`
- border-radius: `6px`
- border: `1.5px solid #00AA9C`
- background: `transparent`
- color: `#00AA9C`
- font-size: `12px` / font-weight: `500`
- アイコン: なし
- × ボタン（Removable）を基本とし、削除可能であることを明示する

**Hover state:**
- border-color: `#008F83`（brand-dark）
- color: `#008F83`

**Remove ボタン（× ）:**
- color: `#00AA9C`（通常）→ `#E64C5B`（hover）
- background: transparent → `#FEE2E2`（hover）

---

### Type 選択フローチャート

```
固定カテゴリか？
  ├─ Yes → アイコンが必要か？
  │          ├─ Yes → Type 1: Category Tag
  │          └─ No  → Type 2: Status Tag
  └─ No（自由入力）→ Type 3: Label Tag
```

---

## Color usage（概要）

- Type 1 / Type 2 は上記カラーマップに従い、独自の色を作らない
- Type 3 は `#00AA9C` 単色の outline のみ
- 色だけで種別を表現せず、形状（pill / rect）と icon 有無も組み合わせて識別する

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

### Related Contract Outline Tag（関連契約書の関係種別）

- `元契約`、`親契約`、`子契約`、`覚書`、project 名のような軽い分類に使う
- Type 3（Label Tag）の太枠強調版として位置づける
- min-height: `28px`
- padding: `0 12px`
- border: `2px solid #00AA9C`
- border-radius: `8px`
- font-size: `12px` / font-weight: `700`
- color: `#00AA9C`
- background: `transparent`

### Contract Detail タグ行（契約書タイトル付近）

- 契約書タイトル付近に表示するユーザー自由付与タグは **Type 3: Label Tag** を使う
- メタ行（版情報・更新日・更新者）とタブ帯の間に配置する
- Removable variant を基本とし、`+ タグを追加` トリガーでインライン入力を展開する

## Anti-patterns

- 長文ラベルを入れる
- 緊急状態を tag だけで表す
- removable なのか静的表示なのか分からない
- Type 1 / Type 2 のカラーマップ外の色を独自追加する
- Type 1（Category）に icon をつけ忘れ、Type 2（Status）と見た目が区別できない
- Type 3（Label）に fill 色をつけ、固定カテゴリと混同させる
- 同一画面で3種のタグを無秩序に混在させ、種別が読めなくなる

## Example structure

```text
Tag
├─ Label
└─ Optional remove control
```
