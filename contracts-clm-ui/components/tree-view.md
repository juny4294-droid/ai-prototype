# Tree View

## Purpose

依存関係、親子関係、段階構造を、
list や card とは別の視覚ルールで安定表示する。

---

## Use Cases

- 関連契約の親子関係
- ドキュメントの依存ツリー
- 業務フローの段階構造

---

## Base Rules

- tree は `parent → child` の関係を示す用途に限定する
- tree node は summary card 化せず、`識別情報 / 状態 / relation 操作` に絞る
- connector は装飾ではなく構造表現として扱う
- node card と connector line を接触させない
- root node には不要な connector を描かない
- parent node の footer / action row と child branch を密着させない

---

## Layout Rules

- branch gutter は 24–28px を基本とする
- child branch の開始位置は parent node の末尾から 12–16px 空ける
- connector の終点と node card border の間には 8px 以上の gap を取る
- vertical connector は node card の padding 領域や border と重ねない
- sibling 間は card list と同等のリズムで並べる
- tree 内の title、meta、action は card 内の左端基準線に揃える

---

## Content Rules

- node に置くのは契約名、管理番号、relation 種別、状態までを基本とする
- tree 内で詳細説明を完結させず、必要なら詳細ページへ遷移させる
- badge を増やしすぎず、種類 badge と状態 badge を優先する
- relation を追加する UI では、既存契約を検索して選ぶ形式を基本とし、tree 内で契約自体の属性編集を始めない
- 既存契約の検索キーは `契約書名 / 当事者 / 文書管理番号` を基本とする
- 階層判断に不要な `紐づけ先`、`配下件数`、`未紐づけ` ラベルは常設しない
- parent を持たない node は top-level node として扱い、別の「未紐づけ一覧」へ分離しない
- ただし `解除` 操作は tree 内の parent だけを外す挙動ではなく、関連契約一覧からその node 自体を外す操作として扱ってよい
- 解除後に再度表示したい場合は、既存契約検索からあらためて紐づける

---

## Interaction Rules

- row 全体を click target にせず、action は明示ボタンに分離する
- 並び替え、追加、解除など relation 操作は node 単位で行う
- disabled の理由がある操作は視覚的に区別し、説明可能であること
- 追加 / 紐づけ modal では `対象契約の選択` と `parent の選択` を分離し、close / cancel / submit が確実に動作すること
- node の操作は row 上へ露出しすぎず、3点リーダー menu に集約してよい
- sibling の並び替えは button より drag and drop を優先してよい
- child を持つ parent node は折りたたみ可能であること
- 折りたたみ時も、配下に `子契約 / 覚書` があるかは 1 行の summary か badge で判別できること
- 閲覧中の node は border 変更だけで済ませず、outline か focus ring 相当で一目で判別できること
- drag and drop は `同階層の並び替え` だけでなく `parent の変更` にも使ってよい
- drop affordance は `前へ / 子として紐づけ / 後ろへ` が判別できること
- 3 点 menu、collapse、modal は視覚上だけでなく実際に close / toggle / submit まで動作確認すること
- 解除のような破壊的操作では confirm dialog を表示し、対象名と影響範囲が分かること

---

## Anti-patterns

- connector が card border に触れる
- connector が action divider や panel border にそのまま接続される
- tree node の情報量が多すぎて mini detail card になる
- root / child / sibling の違いが spacing だけで曖昧になる
- 線の都合で card や button の位置を無理に詰める
