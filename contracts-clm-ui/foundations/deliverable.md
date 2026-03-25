# Deliverable

## Purpose

プロトタイプを何をもって完成とみなすかを固定する。

---

## Required Files

すべてのプロトタイプは以下の構成で保存する:
- `samples/<prototype-name>/<descriptive-name>.html`

- `<prototype-name>` はケバブケース（例: `task-list`、`contract-detail`）
- `<descriptive-name>` はファイルの内容が分かるケバブケース（例: `task-list.html`、`contract-detail.html`）。`index.html` は使わない
- `samples/` ディレクトリが存在しない場合は作成する
- HTML / CSS / JS は1ファイルに統合する。ただし `<style>` と `<script>` は分離して記述し、混在させない

---

## Required Implementation

- 主操作が最低 1 つ動作する
- 主要表示切替が最低 1 つ動作する
- 主要 state が最低 3 種以上確認できる
- 使用した既存 component または pattern を説明可能にする
- 検証用 controls や sample 用注記は、明示的な指示がある場合にのみ置く
- 検証用 controls や sample 用注記を置く場合も、主要コンテンツの視覚階層を壊さない
- panel や section では `タイトル → 説明 → 必要なアイテム` の基本順序が視覚的に成立している
- 既存 sample がある画面では、余白、操作サイズ、tree / list の整列が既存品質を下回らない
- support area や panel header で、action や補助UIのために content 幅が痩せたり右側に不自然な空白が残らない
- screenshot baseline がある画面では、`構造比率 / 密度 / panel / rail chrome / component primitive / 色と強弱` の 5 pass を通してから完了扱いにする

---

## Final Answer Rule

- 何を作ったかを述べる
- どの既存 component / pattern を使ったかを述べる
- 追加した state / interaction を述べる
- 未定義だったため暫定にした点があれば述べる

---

## Right Panel Tab Implementation Scope

- 契約書詳細の right panel タブは、明示指示がないかぎり `概要` タブの内容のみを実装する
- rail の項目（全11タブ）は固定の shell として必ず表示するが、他タブのパネル内容は指示されたタブのみ実装する
- 指示されていないタブをクリックした際は、最低限のプレースホルダー（例: 「このタブは未実装です」）を表示すれば十分とする

---

## Anti-patterns

- 静的 HTML だけ置いて操作がない
- state 差分が 1 つも確認できない
- `samples/` ディレクトリを作らずルート直下にファイルを置く
- ファイル名を `index.html` にする
- `<style>` と `<script>` を HTML 本文に直接混在させ、構造が追えない状態にする
- 指示がないのに `Sample state`、debug bar、状態切替 chip を本画面に常設表示する
- sample 用の説明文や state 切替 UI が、実際の panel 本文や主要 list より目立つ
- タイトル、説明、必要なアイテムが横並びや極端な狭幅で崩れ、縦方向の読順が壊れる
- action や utility icon の余白が既存 baseline より大きく、tree / list / card の密度を壊す
- baseline 差分を local 調整で塞いだだけで、rule に昇格できる論点を放置する
