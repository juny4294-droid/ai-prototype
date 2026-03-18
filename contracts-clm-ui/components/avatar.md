# Avatar

- Status: final

---

## Purpose

人物情報を視覚的に識別し、コメント・履歴・担当者を認識しやすくする。

---

## When to use

- thread comments
- timeline
- 承認者 / 担当者表示

---

## When not to use

- 装飾用途
- 名前だけで十分な場合
- 重要情報をavatarに依存する場合

---

## Anatomy

- Container（circle）
- Image or Initial
- Optional Status Dot
- Optional Name / Meta

---

## Layout

- 左配置 + テキスト横並び
- コメント・履歴の先頭に配置
- 複数時は横並び or 重なり

---

## Size（確定値）

- sm: 24px（table / dense list）
- md: 32px（comments / timeline）

---

## Shape

- circle（radius: 50%）
- borderなし（default）
- 背景: fallback時のみ表示

---

## Spacing（確定値）

- avatar → text: 8px
- avatar group overlap: -8px
- row内間隔: 12px

---

## Typography

- initials:
  - size: 12px
  - weight: bold
- name:
  - size: 14px

---

## Color Usage

- fallback bg: subtle neutral or pale brand
- text: strongText

---

## Fallback Rules

- imageがない場合:
  - イニシャル表示（最大2文字）
  - 背景色はランダムではなく固定トーン

---

## Status Indicator

- size: 6px
- position: bottom-right
- border: white outline

### states

- active: green
- offline: muted

---

## Variants

- photo
- initials
- with-name
- group
- contract-detail-person-row

### Contract Detail Person Row

- 契約書詳細の `担当者`、`フォロー中のメンバー`、類似の人物 row に使う
- avatar size は `40px` を基本とする
- glyph / initials は `20–22px` 帯に収める
- 名前より avatar が目立たない密度を保つ
- name は `14px / 700`、meta は `12px / line-height 1.6` を基本とする
- `comments / timeline` 用の `md: 32px` をそのまま拡大流用しない
- 48px 以上の大きい avatar を summary row に置かない

---

## Avatar Group

### Rules

- 最大表示: 3
- 4人以上: +N表示
- 重なり順: 左→右

---

## States

- default
- fallback
- active（dot）
- disabled（muted）

---

## Interaction Rules

- clickable時のみhover表示
- primary actionにはしない

---

## Keyboard Interaction

- focus可能（clickable時）
- Enter: 詳細遷移

---

## Responsive

- サイズは維持
- textは省略可

---

## Composition Rules

- comments / timeline / table / sidebar
- badgeとの併用は最小限

---

## Semantic Role

- img or div + label

---

## Accessibility

- altに名前を設定
- initialsだけに依存しない

---

## Anti-patterns

- avatarが本文より目立つ
- サイズが統一されていない
- 色だけで役割差
- group詰め込みすぎ

---

## Component Boundary

- Avatar:
  - 識別
- Badge:
  - 状態
- UserRow:
  - 表示ユニット

---

## Example Structure

```text
Avatar Row
├─ Avatar (32px)
├─ Name (14px)
└─ Meta
