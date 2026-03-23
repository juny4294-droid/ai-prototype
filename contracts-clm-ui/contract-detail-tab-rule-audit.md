# Contract Detail Tab Rule Audit

Source baseline:
- `samples/tab-content.pdf`
- `patterns/contract-detail.md`

## Purpose

契約書詳細画面の各 tab について、
PDF で確認できる基準デザインと現行ルールの差分を整理し、
Claude が高精度で再現できる rule へ落とす。

---

## 共通で追加すべき基準

- `samples/tab-content.pdf` を契約書詳細の right panel tab content baseline として扱う
- 明示指示がない限り、tab ごとの `title / section order / primary action placement / state transition` は baseline を維持する
- right panel は `タイトル → 説明または状態説明 → 必要な section` の読順を維持する
- empty / create / detail / progress のような state が PDF に存在する tab は、状態数を勝手に減らさない
- section title、inline action、footer action の位置関係を baseline からずらさない

---

## Tab-by-Tab Gaps

### 概要

不足していた点:
- accordion 基準があるが、section 順と destructive action の分離がまだ弱い
- avatar を使う section と text/value section の切り替え基準が薄い

追加すべき rule:
- `契約書の概要` accordion を最上段固定とする
- status 群、説明、担当者、フォロー中、保存場所、destructive action の順を固定する
- destructive action は情報 section と同列に置かず、panel 最下部に独立配置する

### 項目

不足していた点:
- read-only field stack の順序と group 構造はあるが、実際の長い項目群を再現する state contract が弱い
- top action の配置と field group の継続表示ルールが薄い

追加すべき rule:
- `自動反映` のような補助 action は panel title の右上に 1 つまでとする
- 各 group は accordion 単位で縦積みし、group 内は `label 上 / value 下` の field row を繰り返す
- 長い項目 tab でも 2 column へ逃がさず single column を維持する

### コメント

不足していた点:
- composer の baseline が弱く、scope tab の有無に引きずられやすい
- blank state と comment list state の両方の下限が曖昧

追加すべき rule:
- composer は panel 上部に default visible で置く
- 投稿済み comment が 0 件でも composer を消さない
- comment list がある場合は composer の下に card / row を縦積みする

### タスク

不足していた点:
- list / create / detail の state 差分が弱い
- task metadata の優先順が曖昧

追加すべき rule:
- `empty / list / create / detail` を基本 state とする
- list item は `カテゴリ / title / status / meta` を compact に縦積みする
- detail では `依頼日 / 依頼者 / 内容 / ステータス / 期限 / 担当者 / コメント` を single column に固定する

### 関連契約書

不足していた点:
- flat baseline と hierarchy extension の切替条件はあるが、flat baseline の card 密度と action 位置が弱い

追加すべき rule:
- baseline は flat card list とし、`追加` は panel header 右上固定
- card は `契約ID / 契約名 / tag row` を compact card で縦積みする
- hierarchy は明示指示時だけ許可する

### ファイル

不足していた点:
- section 分割と file row baseline が弱い

追加すべき rule:
- `主契約書 / 添付資料 / 締結後書類 / 関連ドキュメント` の section group を優先する
- file row は `icon / file name / metadata / optional action` の 1 行または 2 行構成とする
- upload がある場合も section の末尾に置き、hero block 化しない

### 編集ルーム

不足していた点:
- current room と finished room の分離が未定義
- room card の中身が曖昧

追加すべき rule:
- `ルームのカード` と `完了したルーム` を別 section にする
- current room card は `作成日時 / ルームメンバー / URL / ルームを開く` を持つ
- finished room は compact row/card とし、current room より弱く見せる

### 契約審査

不足していた点:
- empty / create / detail はあるが、PDF ベースの step sequence と detail metadata の順が弱い
- related contract section と comments の位置が未固定

追加すべき rule:
- `empty → 種類選択 → 依頼内容入力 → detail` の state を固定する
- create では `審査の種類 → 件名 → 内容 → task edit option → contract snapshot → 関連契約 → footer action` の順を優先する
- detail では status、依頼者、担当者、内容、期限、snapshot、comments の順で読む

### 承認

不足していた点:
- empty / create / progress detail の state contract がまだ薄い
- timeline 内の current approver と comment の扱いが曖昧

追加すべき rule:
- `empty / 作成 flow / progress detail` を基本 state とする
- 作成 flow では `承認フロー選択 → 承認者 preview → 件名 → 内容 → 関連契約 → footer action` の順を優先する
- progress detail では縦 timeline を使い、current approver を強調し、step comment を item 内に持つ

### 締結

不足していた点:
- request source、method select、request detail、progress の分離はあるが、phase ごとの section order が弱い
- upload/comment/confirm の位置が未固定

追加すべき rule:
- `依頼元切り替え → 契約手段選択 → 依頼内容入力 → progress` を基本 phase とする
- method select は full-width row の縦積みを固定する
- progress state は `締結フロー` timeline を panel 本文の主軸にする
- upload、comment、confirm は timeline や service card と混在させず下段に置く

### ログ

不足していた点:
- activity list 基準はあるが、log row の情報順と密度 rule が弱い

追加すべき rule:
- log row は `avatar + actor / timestamp / message` の 3 層を固定する
- item は card 化せず divider 区切りの連続 list とする
- linkable entity がある場合だけ inline link を使う

---

## Rule Placement

- fixed shell と tab baseline source:
  - `patterns/contract-detail.md`
- 横断品質:
  - `foundations/quality.md`
  - `foundations/checklist.md`
- component 固有の見た目:
  - 各 `components/*.md`
