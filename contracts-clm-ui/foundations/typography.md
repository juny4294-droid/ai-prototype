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
- 情報階層はサイズ乱用ではなく、役割の差で作る
- 1画面で見出しレベルを増やしすぎない

---

## Concrete Rules

- title: ページ見出しのみ
- section title: bodyより強い
- caption: 補助情報
- label: 値より弱く、補助情報よりは強く
- statusやmetaは本文と競合しない強さに抑える

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
- labelとvalueが同じ強さ
- 補助情報が本文より目立つ
