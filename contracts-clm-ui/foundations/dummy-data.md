# Dummy Data

## Purpose

UI の精度に直結するダミーデータの粒度を揃える。

---

## List Data Minimum

- `id`
- `title`
- `status`
- `owner`
- `updatedAt`
- `primary meta`

---

## Detail Data Minimum

- `title`
- `status`
- `summary`
- `key dates`
- `owner / members`
- `related items`
- `files`
- `logs / comments`

---

## Rules

- ダミーデータは UI の state 差分が見えるように作る
- 正常系だけでなく、空、長文、多件数、disabled、error を再現できる値を含める
- 実在企業名や実在担当者を連想させる固有名詞は原則使わない
- 値の長短や件数差でレイアウトの破綻が分かるようにする

---

## Anti-patterns

- 正常系の短い値だけで画面を埋める
- すべて同じ長さ、同じ状態のデータを並べる
- 実案件を連想させる固有名詞を混ぜる
