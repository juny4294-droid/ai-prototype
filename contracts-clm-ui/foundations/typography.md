# Typography

## Purpose

日本語UIでの情報階層を明確にする。

---

## Token Mapping

- title: 20 / bold / line-height 28
- body: 14 / regular / line-height 20
- caption: 12 / regular / line-height 16
- xs: 10 / regular / line-height 14

---

## Base Rules

- 本文は14px固定
- ラベルより値を強く

---

## Concrete Rules

- title: ページ見出しのみ
- section title: bodyより強い
- caption: 補助情報

---

## State Mapping

- disabled: muted text
- error: 通常サイズで表示

---

## Component Application

- table:
  - header: bold
  - cell: body
  - subtext: caption

- form:
  - label: caption
  - value: body

---

## Anti-patterns

- font-size乱用
- weightだけで階層
- 10px未満使用