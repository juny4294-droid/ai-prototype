# Checklist

## Purpose

生成した UI を返す前に、
最低限の品質チェックを機械的に通し、
問題があればその場で修正するための確認項目を定義する。

この checklist は `foundations/quality.md` の規範を実装後に点検するための
self-review / self-repair ループとして使う。

---

## Execution Rule

- 画面実装を終えたら、そのまま返さずに checklist を順に確認する
- 問題が 1 つでも見つかったら、final answer の前に修正する
- `たぶん大丈夫` では通さず、DOM / CSS / state / interaction の観点で確認する
- checklist に違反するが意図的に残す場合は、その理由を説明できる必要がある
- `foundations/interaction-fidelity.md` にある主要操作を最低 1 回 smoke check する
- screenshot baseline がある画面では、以下の 5 pass を追加で実行する
  - 構造比率
  - 密度
  - panel / rail chrome
  - component primitive
  - 色と強弱
- 各 pass で差分が見つかった場合、再生成しても再発するなら rule へ昇格する

---

## 1. Layout Check

- 固定 shell の順序が崩れていないか
- main と support の責務が逆転していないか
- 主要な left edge が増えすぎていないか
- card、panel、table、viewer が理由なく密着していないか
- section 間に最低限の gap または divider があるか
- note、legend、badge row の直後に card / tree / list が始まり、導入と本体がくっついて見えていないか
- 一覧、form、detail、sidebar が page 内で別レイアウト言語になっていないか
- title、description、actions、content が横方向で競合していないか
- 不自然な右余白だけが残り、card や tree が痩せて見えていないか
- 狭幅時に 1文字ずつ縦落ちする崩れ方が起きていないか
- support area や panel header で、action のために本文領域が細くなっていないか
- 既存 baseline がある画面で、panel 幅や body padding が baseline 未満に落ちていないか

---

## 2. Hierarchy Check

- first glance で主目的が分かるか
- タイトル、値、状態、補助情報が同じ強さで並んでいないか
- support が main の再説明になっていないか
- 詳細が必要な情報を遷移で逃がせているか

---

## 3. Component Check

- button、input、tab、tag、icon button の高さや基準線が揃っているか
- 共通 component の状態差分と役割分離が見えるか
- icon only control に accessible name があるか
- text link と button の役割が混ざっていないか
- tree を使う場合、collapse、3 点 menu、drag and drop の主要操作が破綻していないか
- utility icon や tree action のサイズが既存 sample より不自然に大きくなっていないか
- tree の connector、card 幅、action placement が不自然にずれていないか
- action button や icon button の余白が本体 content より強く見えていないか
- avatar 付き account row で、name だけが細い列に落ちて 1 文字ずつ縦並びになっていないか
- actor / author row が狭い場合、name 単体ではなく row 全体が 2 段化して読める状態になっているか
- timeline / approval flow を使う場合、axis line と marker が card、avatar、timestamp に重なっていないか
- timeline / approval flow の stage title が marker lane に落ちず、card の前段見出しとして読める位置にあるか
- timeline / approval flow の card が reserved axis lane より左に食い込んでいないか

---

## 4. Density Check

- compact だが cramped ではないか
- 余白を削る前に、不要情報を削れているか
- 1 つの面に badge、tag、helper、action を載せすぎていないか
- title と meta、meta と action の距離が不自然に詰まっていないか
- scan 対象の行高と整列が安定しているか

---

## 5. Form Check

- placeholder が label の代わりになっていないか
- 必須、disabled、error の解釈が field 単位でできるか
- 保存単位と submit action が分かるか
- modal / dialog のタイトルが単一言語で表示されているか

---

## 6. Content Restraint Check

- 責務外の情報を追加していないか
- relation panel で契約 summary を始めていないか
- sidebar で本文の説明を完結させようとしていないか
- 説明文で UI の欠陥を補っていないか
- `見栄えを良くするためだけの block` がないか
- sample 用の説明文や state 切替 controls が、本来主役の list / tree / form より強く出ていないか
- panel 内で `タイトル → 説明 → 必要なアイテム` の縦方向の基本順序が崩れていないか
- sample / debug UI が tree / list / form の本体より大きな面積や強い位置を占めていないか

---

## 7. Accessibility Check

- 色以外でも状態を識別できるか
- フォーカスが見えるか
- 日本語 text が小さすぎないか
- tab、accordion、dialog、menu に必要な role / aria があるか
- エラーが色だけでなく文言でも示されているか

## 8. Repair Priority

問題が複数ある場合は、以下の順に直す。

1. 責務違反
2. 情報過多
3. 段組・整列崩れ
4. 余白・divider 不足
5. state / interaction 不足
6. visual polish

## 9. Baseline-Specific Check

- viewer / rail / panel の比率が baseline と同系統か
- rail の高さ、icon、label 密度が baseline より緩んでいないか
- panel header が長い説明文や余計な helper で膨らんでいないか
- baseline が divider 主体の tab で、不要な card shadow を足していないか
- primary action が本文中に散らず、baseline どおり footer strip または既定位置に収まっているか
- teal accent が link / active / primary / required を超えて広がっていないか
