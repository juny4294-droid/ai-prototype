# Interaction Fidelity

## Purpose

「見た目だけ完成」を防ぎ、主要操作が state change を伴って確認できるようにする。

---

## Minimum Interaction Set

- open / close
- tab または section switch
- filter / sort / pagination のいずれか
- form validation
- destructive confirmation

---

## Conditional Interaction Set

- unsaved changes confirm
- accordion expand / collapse
- sidebar drawer open / close
- file attach / remove

---

## Rules

- 主要操作は見た目だけでなく state change を伴って動かす
- hover だけ作って click 後の結果がない UI を残さない
- row click と inline action が競合する場合は優先イベントを定義する
- open / close / submit / cancel は最低 1 回 smoke check する

---

## Anti-patterns

- クリックできそうに見えるが何も変わらない
- validation がなく submit だけ存在する
- destructive action の結果や確認が曖昧
