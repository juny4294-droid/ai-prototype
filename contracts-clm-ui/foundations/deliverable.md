# Deliverable

## Purpose

プロトタイプを何をもって完成とみなすかを固定する。

---

## Required Files

- `samples/<prototype-name>/index.html`
- `samples/<prototype-name>/styles.css`
- `samples/<prototype-name>/app.js`

---

## Required Implementation

- 主操作が最低 1 つ動作する
- 主要表示切替が最低 1 つ動作する
- 主要 state が最低 3 種以上確認できる
- 使用した既存 component または pattern を説明可能にする
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

## Anti-patterns

- 静的 HTML だけ置いて操作がない
- state 差分が 1 つも確認できない
- sample 直下にファイルを直置きする
- sample 用の説明文や state 切替 UI が、実際の panel 本文や主要 list より目立つ
- タイトル、説明、必要なアイテムが横並びや極端な狭幅で崩れ、縦方向の読順が壊れる
- action や utility icon の余白が既存 baseline より大きく、tree / list / card の密度を壊す
- baseline 差分を local 調整で塞いだだけで、rule に昇格できる論点を放置する
