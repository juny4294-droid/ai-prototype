# States

## Purpose

状態差分を一貫して伝える。

---

## Core States

default / hover / focus / active / selected / disabled / error / success / warning

---

## Visual Mapping

default:
- border: default

hover:
- bg: subtle

focus:
- border: primary

error:
- border: error
- message: visible

disabled:
- bg: background
- text: muted

---

## Feedback

field < toast < dialog

---

## Rules

- disabledは非表示にしない
- errorは行動を示す

---

## Component Application

- input: border変化
- button: bg変化
- table: bg変化のみ

---

## Anti-patterns

- hoverとfocusが同じ
- errorが色のみ
- disabled非表示