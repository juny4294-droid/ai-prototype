# Overlay Surface

## Purpose

dialog / modal / full-modal に共通する overlay 系ルールをまとめ、
各 component では差分だけ定義する。

---

## Shared Rules

- overlay を持つ surface では背景スクロールを止める
- close 可能な surface では close 手段を 2 つ以上持つ
- keyboard 操作では `Tab` を surface 内に留める
- `Esc` は close に割り当ててよいが、dirty 時は確認を優先する
- primary action は 1 つに絞る
- role と aria を省略しない

---

## Shared Accessibility

- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- 説明がある場合は `aria-describedby`
- 初期 focus の置き場を定義する

---

## Family Split

- `dialog`: 短い確認
- `modal`: 中規模入力
- `full-modal`: 大規模編集

---

## Anti-patterns

- overlay surface ごとに close ルールが変わる
- focus trap がない
- 背景スクロールが残る
- primary action が複数ある
