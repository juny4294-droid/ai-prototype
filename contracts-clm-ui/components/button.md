# Button

## Label Rules

- ボタン文言は、特段の指定がない限り `体言止め` を基本とする
- `編集する` `保存する` `追加する` のような終止表現より、`編集` `保存` `追加` を優先する
- ラベルは1行で収め、縦書きや途中改行を発生させない
- button の text は `white-space: nowrap` を前提に設計する

- Status: final

---

## Purpose

ユーザーの操作を明確に提示し、実行させる。

---

## When to use

- 保存 / 作成 / 削除 / 確認など明示的操作

---

## When not to use

- 単なるリンク（→ Link）
- 状態表示（→ Badge / Tag）

---

## Anatomy

- Container
- Label
- Optional Icon（leading or trailing）
- Optional Loading Indicator

---

## Size（確定値）

### Large

- height: 40px
- min-width: 86px
- padding: 0 16px
- usage: 画面上部の主要操作 / dialog footer の主要操作

### Medium

- height: 32px
- min-width: 70px
- padding: 0 12px
- usage: section 内の通常操作 / 高密度画面の標準操作

### Small

- height: 24px
- min-width: 62px
- padding: 0 10px
- usage: compact area / 補助操作

### XSmall

- height: 22px
- min-width: 58px
- padding: 0 8px
- usage: かなり高密度な一覧内の限定操作のみ

---

## Shape

- pill shape を基本とする
- border-radius は固定 4px ではなく、高さの半分相当
- large: 20px
- medium: 16px
- small: 12px
- xsmall: 11px

---

## Typography

- large / medium: 12px
- small / xsmall: 10px
- font-weight: 600
- line-height: 1

---

## Icon

- size: 16px
- gap: 8px

### rules

- iconのみは禁止（例外: toolbar）
- label必須（基本）

---

## Layout

- primaryは1つのみ
- actionは右寄せ or 下部配置
- 同列配置時は高さ揃える
- 同一エリアでは size を混在させない

---

## Variants（確定）

### Primary

- bg: primary
- text: white
- border: primary

### Secondary（outline）

- bg: transparent
- text: primary
- border: primary
- elevation: none

### Light

- bg: subtle background
- text: default
- border: subtle

### Danger

- bg: danger
- text: white
- border: danger

---

## States（確定）

### default
- 通常状態

### hover

- Primary: darken
- Secondary: text強化
- Light: bg強化

### active

- 全variant: hoverより暗い

### focus

- border: primary

### disabled

- bg: neutral
- text: muted
- cursor: not-allowed

### loading

- label非表示 or opacity低下
- spinner表示

---

## Interaction Rules

- ラベルは動詞（例: 保存 / 作成）
- primaryは1画面1つ
- disabled時は理由を近くに表示

---

## Keyboard Interaction

- Tab: フォーカス
- Enter / Space: 実行

---

## Responsive

- モバイル時:
  - full-width可
  - 高さは維持

---

## Composition Rules

- form / dialog / modal
- heading card

---

## Contract Detail Mapping

- right panel header の主要補助操作は `Large + Secondary` を使う
- 例: `自動反映`、`次へ`
- panel 内の通常操作は `Medium + Primary` または `Medium + Secondary` を使う
- 例: `投稿`、`コメントする`、`タスクを作成`、`タスクを完了`
- `編集`、`関連契約書の追加` のような軽い遷移 / 補助導線は Button ではなく text link を使う
- `この契約書を削除` のような destructive 導線は塗り button にせず、赤い text link を基本とする
- 契約書詳細の sample では 4px 角丸 button を置かず、size ごとの pill radius を守る

---

## Accessibility

- icon-onlyはaria-label必須
- focusを視覚的に明示

---

## Anti-patterns

- primaryの多用
- 名詞ラベル（例: データ）
- 危険操作をlightで表現
- loadingとclick可能が同時
- 角丸 4px の矩形 button を契約書詳細の panel action に使う

---

## Component Boundary

- Button:
  - 操作
- Link:
  - 遷移
- Badge:
  - 状態

---

## Example Structure

```text
Button
├─ Icon (optional)
└─ Label (動詞)
