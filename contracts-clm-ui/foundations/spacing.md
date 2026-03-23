# Spacing

## Purpose

高密度UIでも視認性と構造理解を維持する。

---

## Token Mapping

- base: 4px
- grid: 8px
- scale: 2 / 4 / 6 / 8 / 12 / 16 / 24 / 32 / 40

---

## Base Rules

- 4の倍数を基本とする
- button xsmall のみ 22px を例外許容
- 同一コンポーネントは高さ統一
- 画面内で隣接する面同士を `0px` で密着させず、border / gap / padding のいずれかで境界を明示する
- section、card、panel、table、form は「外側余白」と「内側余白」を分けて定義し、同じ値に潰さない
- layout の判断に迷う場合は、横方向に詰めるより縦方向に積む
- LLM は独自の寸法を発明せず、既存の spacing token と component size を優先する

---

## Concrete Rules

### Component Size

- button:
  - large: 40px
  - medium: 32px
  - small: 24px
  - xsmall: 22px
- input: 32px
- textarea: 64px以上
- table row: 40px
- tag: 20px

### Padding

- card: 16px
- modal: 24px
- table cell: 8px 12px
- detail panel header: 24px
- detail panel body: 24px
- page section horizontal inset: 24–28px

### Layout

- label → input: 8px
- field → field: 12px
- section → section: 24px
- block → block: 32px
- card → card: 12–16px
- title → meta: 8px
- title block → next block: 16px
- panel header → first body block: 20–24px
- section heading / note / legend のような導入 block → 最初の card / tree / list: 16px
- divider / border の直後に card、tree node、list item を開始しない。最低 12–16px の breathing space を取る
- icon → label: 8px
- inline action 間: 8px
- divider を使う block 間は `16px + 1px divider + 16px` を基本とする

### Alignment

- 同一 column にある title、label、value、divider の左端は揃える
- 数値、日付、status のような scan 対象は縦方向の基準線を揃える
- form field は `label 上 / control 下` の 1 column を基本とし、特段の指定がない限り左右 2 カラムにしない
- card list や tree node の action row は本文と同じ left inset に揃える
- rail、panel、viewer など固定 shell の境界は 1px line で揃え、余計な中間 gap を作らない

### Density Guardrail

- 高密度UIでも `section → section` を 16px 未満にしない
- 異なる責務の block を 8px だけで連結しない
- card 内で title、meta、action、divider が 1 つの塊に見えるほど詰めない
- 迷う場合は `12px / 16px / 24px` のいずれかへ寄せ、10px や 18px のような中途半端な値を増やさない

---

## State Mapping

- hover: spacing変化なし
- focus: spacing変化なし

---

## Component Application

- form: 12pxで統一
- table: 40px固定
- card: padding固定

---

## Anti-patterns

- 8px未満の余白
- 同種UIの高さ不一致
- section間のばらつき
- panel の端と card の端が理由なく接し、面の境界が消える
- note、legend、badge row の直後に card や tree が密着し、導入文と本体が 1 つの塊に見える
- label と input の距離が field ごとに異なる
- 同じ一覧内で card padding が揃わない
- 2 カラム form と 1 カラム form が同一 modal 内で混在する
