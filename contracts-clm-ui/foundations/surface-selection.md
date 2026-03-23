# Surface Selection

## Purpose

`page / dialog / modal / full-modal / sidebar` の選択基準を固定し、
Claude が surface を迷って発明しないようにする。

---

## Selection Matrix

### Dialog

- 用途: 不可逆操作や重大判断の確認
- 使う条件: yes / no の短い確認、説明 1〜3 行、action 数が少ない
- 使わない条件: 長文説明、複数 field、長時間作業

### Modal

- 用途: 中規模入力、短時間の確認、補助操作
- 使う条件: 3〜8 field 程度、現在ページ文脈を維持したい
- 使わない条件: 複数 section、長時間編集、複雑 table 編集

### Full Modal

- 用途: 大規模編集、複数 section の確認・更新
- 使う条件: 1 画面相当以上、未保存管理が必要、背景文脈を維持したい
- 使わない条件: 単純確認、軽微な入力

### Sidebar

- 用途: 主コンテンツを保ったまま補助詳細や補助操作を見せる
- 使う条件: read-only detail、contextual drawer、履歴、コメント、関連情報
- 使わない条件: main task の中心作業、長い form、主要 navigation

### Page

- 用途: 継続作業、主要導線、複数ステップの主作業
- 使う条件: navigation 文脈が必要、画面単位で責務が独立している
- 使わない条件: 一時的な補助操作、短い確認

---

## Decision Rules

- 迷ったら最小 surface を選ぶ
- `dialog < modal < full-modal < page` の順に拡張し、最初から大きい surface を選ばない
- `sidebar` は補助情報専用とし、main form を複製しない
- `drawer` は `sidebar` の表示形式であり、独立 surface として再定義しない

---

## Anti-patterns

- 長い form を dialog に押し込む
- 単純確認を full-modal で出す
- sidebar を mini page にする
- page で解くべき主作業を一時 surface に押し込む
