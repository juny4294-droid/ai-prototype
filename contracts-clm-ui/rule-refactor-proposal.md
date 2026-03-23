# UI Rule Refactor Proposal

## 目的

Claude を使ったプロトタイプ生成の精度を上げつつ、
ルール群の重複と保守コストを下げるための具体案をまとめる。

この提案は以下を同時に満たすことを狙う。

- Claude が迷う分岐を減らす
- 生成時に必要な state / interaction / data の抜けを減らす
- 同じルールを複数ファイルに持つ状態を減らす
- components / patterns / foundations の責務を整理する

---

## 1. 追加する定義

### A. Surface Decision Matrix

配置先候補:
- `foundations/surface-selection.md` を新設

目的:
- `page / modal / full-modal / sidebar / dialog / drawer` の選択ミスを減らす

入れる内容:

| ケース | 採用 surface | 使う条件 | 使わない条件 |
| --- | --- | --- | --- |
| 不可逆操作の確認 | dialog | yes/no の短い確認、説明 1-3 行 | 長い説明、複数 field |
| 中規模入力 | modal | 3-8 field、短時間完結、背景文脈維持 | 長時間作業、複数 section |
| 大規模編集 | full-modal | 1 画面相当、複数 section、未保存管理あり | 単純確認、軽微な編集 |
| 補助詳細表示 | sidebar | main を維持したまま read-only detail | main task の中心作業 |
| 主要導線 | page | navigation 文脈が必要、継続作業 | 一時的な補助操作 |

Claude へのルール:
- 迷ったら `dialog < modal < full-modal < page` の順で拡張せず、最小 surface を選ぶ
- `sidebar` は補助情報専用とし、main form を複製しない
- `drawer` は mobile または contextual sidebar の表示形式としてのみ扱い、独立 surface として発明しない

---

### B. State Coverage Contract

配置先候補:
- `foundations/state-coverage.md` を新設

目的:
- 見た目だけ整って state が抜ける問題を防ぐ

必須 state:

- `default`
- `loading`
- `empty`
- `error`
- `disabled`
- `submitting`

条件付き state:

- `success`
- `dirty`
- `confirm destructive action`
- `no permission`
- `partial data`

Claude へのルール:
- 各画面 / surface は「最低 1 つの empty または no-data state」を持つ
- form は `default / error / disabled / submitting` を必須とする
- destructive action がある場合は confirmation surface を必須とする
- async list は `loading / empty / error` の 3 状態を省略しない

---

### C. Prototype Deliverable Contract

配置先候補:
- `foundations/deliverable.md` を新設

目的:
- 何を作れば「完成」かを固定する

必須成果物:

- `index.html`
- `styles.css`
- `app.js`
- `samples/<prototype-name>/` 配下に配置

必須実装条件:

- 主操作が最低 1 つ動く
- 主要表示切替が最低 1 つ動く
- 主要 state が最低 3 種以上確認できる
- 使用した既存 component をコード上またはコメントで追える

final answer で必ず触れること:

- 何を作ったか
- どの既存 component / pattern を使ったか
- 追加した state / interaction
- 未定義だったため暫定にした点

---

### D. Dummy Data Contract

配置先候補:
- `foundations/dummy-data.md` を新設

目的:
- UI の精度に直結する data の粒度を揃える

一覧の最低項目:

- id
- title
- status
- owner
- updatedAt
- primary meta

詳細の最低項目:

- title
- status
- summary
- key dates
- owner / members
- related items
- files
- logs / comments

Claude へのルール:
- ダミーデータは UI の state 差分が見えるように作る
- 正常系だけでなく、空 / 長文 / 多件数 / disabled / error を再現できる値を含める
- 実在企業名や実在担当者を連想させる固有名詞は使わない

---

### E. Interaction Fidelity Contract

配置先候補:
- `foundations/interaction-fidelity.md` を新設

目的:
- 「静的な見た目だけ完成」を防ぐ

最低限動作させる操作:

- open / close
- tab / section switch
- filter / sort / pagination のいずれか
- form validation
- destructive confirmation

条件付きで必要な操作:

- unsaved changes confirm
- accordion expand / collapse
- sidebar drawer open / close
- file attach / remove

Claude へのルール:
- 主要操作は見た目だけでなく state change を伴って動かす
- hover だけ作って click 後の結果がない UI を残さない
- row click と inline action が競合する場合は、優先イベントを定義する

---

### F. Evidence Level

配置先候補:
- `CLAUDE.md` に追加

目的:
- 固定仕様と推定仕様を混ぜない

レベル:

- `final`: 既存 UI または既存ルールで確定
- `derived`: 複数ルールから導ける
- `provisional`: 仮置き
- `missing`: 情報不足

Claude へのルール:
- `provisional` を `final` のように断定しない
- 実装時に補ったルールは、必要なら components / patterns に昇格候補として明示する

---

## 2. 統合して圧縮する定義

### A. foundations の役割を固定する

推奨する責務:

- `quality.md`
  - 正本。設計原則と品質基準だけを書く
- `checklist.md`
  - 実装後の確認項目だけを書く
- `prohibited.md`
  - 禁止カタログだけを書く
- `hierarchy.md`
  - 画面構造と main/support の原則だけを書く
- `states.md`
  - 状態の共通 vocabulary と視覚マッピングだけを書く

削る重複例:

- `primary action は1つ`
- `single column form`
- `summary card / KPI card を足さない`
- `hover / focus / active / disabled を定義する`
- `label → control → hint / error`

この種のルールは `quality.md` を正本にして、
他ファイルでは再掲せず参照だけにする。

---

### B. modal family を共通化する

対象:

- `components/dialog.md`
- `components/modal.md`
- `components/full-modal.md`

新しい整理方針:

- 共通ルールを `foundations/overlay-surface.md` に集約
- 各 component には差分だけ残す

共通化する内容:

- overlay
- scroll lock
- focus trap
- escape key
- primary action count
- close rule
- accessibility baseline

個別に残す内容:

- dialog: 確認専用、短文、操作数最小
- modal: 中規模入力
- full-modal: 複数 section、長時間作業

---

### C. contract-detail の重複を分離する

対象:

- `components/sidebar.md`
- `components/section-rail.md`
- `patterns/contract-detail.md`

新しい整理方針:

- `section-rail.md`
  - right rail の fixed items、active、indicator、resize gutter
- `sidebar.md`
  - generic sidebar / drawer の共通仕様
- `contract-detail.md`
  - tab ごとの責務、表示順、どの component を組み合わせるか

pattern から削る内容:

- rail の固定寸法
- badge 位置の細かい値
- panel shell の typography の再掲

pattern に残す内容:

- section 順序
- tab ごとの役割
- detail panel の情報構造
- 使用 component の組み合わせ

---

## 3. 削除または弱める定義

### A. Components Schema の必須見出しを減らす

現状の問題:
- 全 component に 23 見出しを必須化すると、軽量 component まで過剰になる

提案:

`core required`
- Purpose
- When to use
- When not to use
- Anatomy
- Layout
- Variants
- States
- Interaction rules
- Composition rules
- Anti-patterns

`optional when relevant`
- Size
- Spacing
- Typography
- Content guidelines
- Icon rules
- Color usage
- Token references
- Keyboard interactions
- Responsive behavior
- Semantic role
- ARIA requirements
- Accessibility notes
- Example structure

これにより:
- badge や tag のような軽量 component を短く保てる
- navbar や rail のような特殊 component も自然に書ける

---

### B. 理由付き禁止事項の長文化を圧縮する

現状の問題:
- `prohibited.md` は正しいが、理由説明が長く、似た禁止が分散している

提案:

- `禁止`
- `なぜダメか`
- `代わりに何を使うか`

の 3 列テーブルで整理する。

例:

| 禁止 | 理由 | 代替 |
| --- | --- | --- |
| 無根拠な 2 カラム form | 読み順が壊れる | single column form |
| support area の summary card 乱立 | main/support が逆転する | compact list / thread / timeline |
| decorative gradient | 情報より装飾が勝つ | neutral background + divider |

---

## 4. Claude 向けの追記文案

`CLAUDE.md` に追加する短い文案:

### Decision Rule

- UI surface は `dialog / modal / full-modal / sidebar / page` の既存選択肢から選び、新しい surface を発明しない
- 迷う場合は、ユーザーの主作業を最も小さい surface で完結できる案を優先する

### State Rule

- 各プロトタイプは少なくとも `default / loading / empty / error` の扱いを説明可能にする
- form を含む場合は `disabled / submitting / validation error` を省略しない

### Data Rule

- ダミーデータは UI の差分と状態を確認できる粒度で用意し、正常系だけで埋めない

### Escalation Rule

- 既存 components / patterns で表現できない場合、独自 UI を先に増やさず、必要な新 component または pattern を定義候補として明示する

---

## 5. 実施順序

### Phase 1

- `CLAUDE.md` の schema を `core required / optional` に変更
- `quality.md` を正本と明記
- `checklist.md` から規範文を削り、確認項目に絞る

### Phase 2

- `surface-selection.md`
- `state-coverage.md`
- `deliverable.md`
- `dummy-data.md`
- `interaction-fidelity.md`

を追加

### Phase 3

- `dialog / modal / full-modal` の共通ルールを集約
- `contract-detail` 周辺の重複を削減

---

## 6. 最小実行案

まず着手するなら、以下の 4 つが最も効果が高い。

1. `CLAUDE.md` の schema 緩和
2. `foundations/surface-selection.md` 追加
3. `foundations/state-coverage.md` 追加
4. `foundations/checklist.md` の簡潔化

この 4 点だけでも、
Claude の判断精度とルールの保守性はかなり改善する。
