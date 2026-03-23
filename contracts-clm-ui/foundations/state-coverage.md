# State Coverage

## Purpose

各プロトタイプで最低限説明可能にすべき状態を固定し、
見た目だけ整って state が抜けることを防ぐ。

---

## Required States

- `default`
- `loading`
- `empty`
- `error`
- `disabled`
- `submitting`

---

## Conditional States

- `success`
- `dirty`
- `confirm destructive action`
- `no permission`
- `partial data`

---

## Rules

- 各画面または surface は `default / loading / empty / error` を説明可能にする
- form は `disabled / submitting / validation error` を省略しない
- destructive action がある場合は confirmation surface を必須とする
- async list は `loading / empty / error` の 3 状態を最低限持つ

---

## Anti-patterns

- default state しか定義しない
- loading が skeleton でも spinner でもなく無反応に見える
- empty と error を同じ見た目で済ませる
- destructive action に確認がない
