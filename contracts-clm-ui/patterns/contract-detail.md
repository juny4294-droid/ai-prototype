# Contract Detail

- Status: refined
- Source: documented ContractS contract detail baseline

## Purpose

契約の主情報、契約本文、変更履歴、右側の補助情報 panel を、
固定の full detail shell を維持したまま扱う。

---

## Critical Rule（最重要）

- 指示された変更箇所以外は、本 pattern と component rule で定義した fixed shell を維持する
- full detail page を新しい visual language で再設計しない
- layout、密度、固定文言、固定順序を勝手に変えない
- 右 panel の機能追加があっても、header、viewer、rail などの固定領域は維持する
- sample / prototype では PDF 本文、契約名、ファイル名、担当者名を実在データ風にせず、常にダミー値で統一する

### Fixed Areas（変更禁止に近い扱い）

- Global navbar
- 契約書 header
- `契約書 / 変更履歴` の切り替え表示
- PDF 上部の helper link / action icon / embedded viewer toolbar
- viewer と right rail の間に置く resize gutter
- 右 section rail の表示、配置、文言、順序
- `Document Area | Resize Gutter | Right Section Rail | Right Detail Panel` の基本骨格

### Allowed Change Surface（変更してよい範囲）

- 指示された tab の detail panel 内部
- `関連契約書` panel の情報構造
- 各 section detail の中で必要な read-only / action / list の整理
- component 分解や責務整理。ただし固定領域の見た目は変えない

---

## Layout Structure

- HcNavbar
- Document Header Area
- Document Viewer Area
- Resize Gutter
- Right Section Navigation Rail
- Right Detail Panel

---

## Component Composition

Main Content:
- `components/document-header.md`
- `components/document-viewer.md`
- HcTab（contract detail fixed variant）
- PDF / document viewer

Right Support Rail:
- `components/section-rail.md`
- Single detail panel
- Accordion / definition list / timeline / thread comments / file list

Related Components:
- `components/navbar.md`
- `components/sidebar.md`
- `components/tab.md`
- `components/document-link.md`
- `components/file-link.md`
- `components/timeline.md`
- `components/thread-comments.md`

---

## Layout Rules

- 契約書詳細は `Navigation → Document Area → Resize Gutter → Right Section Rail → Right Detail Panel` の構造を守る
- desktop では `Document Area | Resize Gutter | Right Section Rail | Right Detail Panel` を同時表示する
- 右側は「icon rail + single panel」の 2 層を基本とし、icon rail を省略しない
- right section rail は desktop で必須とし、現在の選択 section を切り替える
- resize gutter は rail と一体化させず、viewer 側の独立レイヤーとして扱う
- right section rail の幅は `112px` 固定を基本とする
- right detail panel の幅は `380–440px` を基本とする
- right detail panel は viewport に対して独立スクロールできるようにする
- main content と right side の間は divider で分離し、広い card gap を作らない
- full detail page の右 panel は「1つの active module を表示する panel」とし、複数 module を同時表示しない
- full detail page の右 panel に主編集フォームを置かない
- main content の内容を right detail panel に重複表示しない

---

## Contract Detail Fixed Variant（最優先）

### Fixed Layout Order

1. Global navbar
2. Contract detail header
3. `契約書 / 変更履歴` tab
4. Viewer action strip + embedded document viewer
5. Resize gutter
6. Right section navigation rail
7. Right detail panel

### Preservation Rules

- full detail page では row detail drawer の簡略構成を流用しない
- full detail page を hero layout、card mosaic、dashboard 風 layout にしない
- header、viewer、rail は本ドキュメントで定義した fixed shell を維持し、差分は panel detail 側へ閉じ込める
- `関連契約書` の改善でも rail 全体や viewer shell を redesign しない

---

## Fixed Area Rules

### Contract Header

- `components/document-header.md` を優先する
- 契約書詳細の上端 shell は `identity block + 契約書 / 変更履歴 tab + viewer action` までを 1 枚の白地で連続させる
- 文書管理番号、契約書 icon、契約書名、`編集`、版情報、更新日時 / 更新者の並びを崩さない
- `編集` は title の直後に置き、header 右端へ離さない
- helper link や action icon は title block ではなく、下段の tab / action 帯へ送る
- identity block の右側を CTA 領域にしない
- 上記の shell に card border、shadow、gray strip を足さない
- tab 帯の上に横罫線を追加せず、viewer に入る直前の subtle divider だけを使う
- header を summary card 化しない
- header に workflow や large CTA を混ぜない

### Document / History Tabs

- `components/document-viewer.md` を優先する
- ラベルは `契約書`、`変更履歴` で固定する
- 順序を変えない
- underline tab を基本とし、別 variant に変えない
- tab と viewer action は header の続きとして同一白面に載せる
- tab の上に独立した top border を置かない

### PDF Top Area

- viewer 上部の helper link は右端の最上段、action icon 3 点はその下段に右寄せで揃える
- download、refresh、preview などの補助 action を header の主情報に混ぜない
- embedded PDF toolbar を独自 UI に置き換えない
- action icon は material icon 系で統一する
- helper link / icon 群の背景だけを gray strip に変えない
- viewer の gray background は tab / action 帯の下の divider より下で始める

### Sample / Prototype Data

- contract detail sample の本文は常にダミー契約書を表示する
- sample 内の契約名、ファイル名、担当者名、契約先名はダミー値へ統一する
- 実案件や実在担当者を連想させる固有名詞を混在させない

### Right Section Rail

- `components/section-rail.md` を優先する
- label、配置、順序、active 表現を固定する
- rail 項目は panel の内容都合で増減・並び替えしない
- rail の左側には draggable resize gutter を固定で置く
- resize gutter を rail item や active indicator の一部に見せない

---

## Right Section Rail（固定）

### Fixed Items

1. `概要`
2. `項目`
3. `コメント`
4. `タスク`
5. `関連契約書`
6. `ファイル`
7. `編集ルーム`
8. `契約審査`
9. `承認`
10. `締結`
11. `ログ`

Rules:
- 上記の文言をそのまま使う
- right rail の 1 列縦積みを固定し、top tab や grid に変えない
- active 項目のみ淡い背景反転を行う
- collapse control を置く場合は最下部の utility として扱い、section item と混同させない
- indicator は rail item 全体ではなく icon wrapper の右上に重ねる
- count badge と dot indicator は同時表示しない

---

## Right Detail Panel Shell

- 右 panel は 1 section を選択して表示する単一 panel とする
- panel header には section title と optional action（編集 / help / create）を置ける
- panel 内で複数 block がある場合も top-level は常に縦一列で積む
- full detail page では independent card を何枚も並べず、1枚の panel 内で section / divider / list で整理する
- 値表示は definition list、accordion、timeline、thread comments を使い分ける
- section 見出しの下は divider 基本で区切り、heavy shadow に頼らない

### Reproduction Baseline

- panel 全体は白背景 1 面とし、rail との間は 1px divider で分離する
- panel header は `title block 左 / action 右` の 1 行を基本とし、header 下に 1px divider を置く
- panel header padding は `24px 24px 18px` を基本とする
- panel body padding は `20px 24px 32px` を基本とする
- panel title は左寄せ固定とし、中央揃えや hero 的な余白を作らない
- panel caption がある場合は title の直下に 1 行だけ置き、説明文を header に詰め込みすぎない
- top-level の panel block は 1 column stack とし、block 間は divider と縦余白で分離する
- top-level block を shadow card で多重に分割しない
- panel 内の既定本文サイズは `16px / line-height 1.75` を基本とする
- `field value 20px` は単独値や主値に限り、説明文や長文本文を 20px へ拡大しない
- member name は `16px / 700`、member role は `12px / line-height 1.6` を基本とする
- secondary meta や補助説明は `12–14px` 帯に収め、panel title や主値と競合させない

### Existing Component Mapping

- panel header action の塗り / 枠つき操作は `components/button.md` を使う
- text の補助導線は Button ではなく link 表現を使う
- 人物表示は `components/avatar.md` を使う
- コメントは `components/thread-comments.md` を使う
- 契約リンクは `components/document-link.md` を使う
- 実ファイルは `components/file-link.md` を使う
- 履歴は `components/timeline.md` の contract detail activity list variant を使う
- relation / project / status の軽い分類は `components/tag.md` を使う
- count / unread indicator は `components/badge.md` を使う

---

## Tab Detail Rules（言語化した基本）

### 共通ルール

- 各 tab の detail はこの pattern に定義した構造と typography を優先する
- tab ごとに generic card layout を流用せず、役割に合った情報構造を使う
- panel shell、余白、見出し階層、divider の作法は共通化する
- 各 tab detail で main content の document identity を重複表示しない
- panel title は `28px / 700 / line-height 1.35` を基本とする
- panel header link action は `14px / 700`、button action は `components/button.md` の size/variant を使う
- accordion header は `18px / 700`, `min-height: 72px` を基本とする
- field label は `14px / 700`、field value は `20px / 400` を基本とする
- 長文の本文値、説明文、コメント本文、保存場所 link などは `16px / line-height 1.75` を基本とする
- rail label は `14px / 700 / line-height 1.35` を基本とし、`12px` へ縮めない
- activity log の actor name は `16px / 700`、message は `18px / line-height 1.8` を基本とする

### Tab-by-Tab Component Mapping

- `概要`: `components/sidebar.md` の full detail panel shell + `components/avatar.md` + text link + status tag
- `項目`: `components/sidebar.md` の full detail panel shell + `components/button.md` + text link
- `コメント`: `components/thread-comments.md` + `components/avatar.md` + `components/file-link.md` + `components/textarea.md` + `components/button.md`
- `タスク`: `components/button.md` + `components/tag.md` + compact list / detail rows
- `関連契約書`: `components/document-link.md` + `components/tag.md` + optional `components/button.md`
- `ファイル`: `components/file-link.md` + optional `components/file-upload.md`
- `編集ルーム`: `components/avatar.md` + compact list / card
- `契約審査`: `components/button.md` + `components/dropdown.md` + `components/input-text.md` + `components/textarea.md` + `components/checkbox.md` + `components/datepicker.md` + `components/thread-comments.md`
- `承認`: `components/timeline.md` または step list + `components/badge.md`
- `締結`: `components/tab.md` + `components/radio.md` + `components/button.md` + `components/file-link.md`
- `ログ`: `components/timeline.md` の contract detail activity list variant + `components/avatar.md` + `components/document-link.md`

### 1. 概要

表示内容:
- panel title としての `概要`
- 最上段の accordion section `契約書の概要`
- 契約書のステータス
- 契約期間に関する short badge
- 終了日
- 自動更新有無
- 自動更新の更新拒絶期限
- 説明
- 担当者
- フォロー中のメンバー
- 契約書の保存場所
- 下端の destructive action

Rules:
- panel の先頭は `概要` 見出しとし、その下に `契約書の概要` accordion を置く
- `契約書の概要` accordion は default open を基本とする
- 概要 tab は summary card 群ではなく、single column の section stack で構成する
- 大枠は `accordion header → section body → divider-separated subsections` の順で組む
- 値表示は 2 column definition grid よりも、縦方向の label / value stack を優先する
- `契約書のステータス` は label、主要ステータス文字列、補助 badge の順で見せる
- `終了日`、`自動更新`、`自動更新の更新拒絶期限` は status block に続けて縦積みする
- `説明`、`担当者`、`フォロー中のメンバー`、`契約書の保存場所` はそれぞれ独立 subsection とし、1px divider で区切る
- `担当者` と `フォロー中のメンバー` は avatar + name を基本とし、必要に応じて inline の `編集` link を添える
- `契約書の保存場所` は link 的な見せ方を優先し、必要なら folder / building icon を併記してよい
- destructive action は最下部に十分な余白を取って分離し、通常の情報 section に混ぜない
- workflow、log、comments、関連契約情報は概要 tab に混ぜない

Basic structure:
- `概要`
- `契約書の概要` accordion
- `契約書のステータス`
- `説明`
- `担当者`
- `フォロー中のメンバー`
- `契約書の保存場所`
- `この契約書を削除`

### 2. 項目

表示内容:
- panel title としての `項目`
- 右上の optional action
- 最上段の accordion section `契約期間`
- 契約日
- 開始日
- 終了日
- 契約期間
- 自動更新
- 自動更新の更新拒絶期限
- 更新に関する補足コメント
- product 固有の追加 field group
- 後続の accordion section

Rules:
- panel 先頭は `項目` 見出しとし、右上に optional action を置ける
- action は `Large Secondary button + text link` の軽い組み合わせを基本とし、large CTA 群にしない
- 最初の section は `契約期間` accordion を default open で置く
- `契約期間` section の基本順は `契約日 → 開始日 → 終了日 → 契約期間 → 自動更新 → 自動更新の更新拒絶期限 → 更新に関する補足コメント` とする
- 項目 tab は form card 群ではなく、single column の field stack と accordion の組み合わせで構成する
- 各 field は `label 上 / value 下` の縦積みを基本とし、field 間を 1px divider で区切る
- 読み取り状態では input control を並べず、plain text value を十分な縦余白で見せる
- 複数の field group がある場合も横並び card にせず、accordion を縦に積む
- 当事者、金額、更新条件、管理項目などの追加 group も `group title accordion → divider-separated fields` の構造へ揃える
- badge や status は補助情報として使ってよいが、概要 tab の status summary と同じ見せ方へ寄せすぎない
- workflow、log、comments、関連契約情報は項目 tab に混ぜない

Basic structure:
- `項目`
- `自動反映` button
- `編集` link
- `契約期間` accordion
- `契約日`
- `開始日`
- `終了日`
- `契約期間`
- `自動更新`
- `自動更新の更新拒絶期限`
- `更新に関する補足コメント`
- optional additional accordions

### 3. コメント

表示内容:
- `公開 / 限定公開` などの comment scope 切り替え
- thread comments
- 投稿者 avatar
- timestamp
- attachment
- comment input area

Rules:
- `components/thread-comments.md` を使う
- panel 上部に scope 切り替えを置く場合は panel 内の二次 tab として扱い、right rail の active と競合させない
- ログとコメントを同じ section に入れない
- 入力欄は thread の末尾に置く
- コメント row は `avatar 左 / author + timestamp 上 / body 下` を基本とする
- 添付がある場合は本文直下に `components/file-link.md` で分離表示する
- 公開範囲 tab がある場合も section rail とは別レイヤーとして扱う

### 4. タスク

表示内容:
- `タスクを作成` action
- filter / status 切り替え
- task card list
- 依頼日、完了日、依頼者、完了者、担当者、内容、ステータス、期限

Rules:
- task 一覧と task detail を同じ panel shell の中で扱う
- タスク card は縦積みを基本とする
- filter は section header 近傍に置いてよい
- task list item は `カテゴリ tag / title / meta / body` の縦積みを基本とする
- detail state では `依頼日 / 完了日 / 依頼者 / 完了者 / 担当者 / 内容 / ステータス / 期限` を 1 column stack で整理する
- comment thread を持つ task は task detail の文脈内で扱う

### 5. 関連契約書

表示内容:
- panel title としての `関連契約書`
- 右上の `関連契約書の追加`
- 関連契約カード list
- 文書 icon
- 文書管理番号や契約ID
- 契約名
- relation / project などの tag
- optional expanded relationship metadata

Rules:
- 関連契約書 tab の基本形は flat card list とする
- panel 先頭は `関連契約書` 見出し、その右上に `+ 関連契約書の追加` link / action を置く
- 各 item は `document icon + 契約ID + 契約名 + tag row` の 1 枚カードとして縦積みする
- card は白地、薄い border、控えめな shadow を持つ compact card とし、階層ツリーを前提にしない
- relation を示す場合は `元契約` のような outline tag を使い、project や案件名も同じ tag row に並べてよい
- 文書 icon は `word / pdf / template` 系を使う
- rail label は `関連契約書` のまま維持する
- panel shell 自体は他 tab と同じルールに従う

Extended rules:
- 親子関係、原契約、覚書、閲覧中契約の区別や並び順変更が明示的に求められた場合のみ、flat card list から hierarchy variant へ拡張してよい
- hierarchy variant では `原契約 / 親契約 / 子契約 / 覚書 / 閲覧中` を視覚的に区別する
- 並び順変更は同一親配下の siblings に対して行う
- 覚書の追加・変更は panel 内 action または modal で行ってよい

Basic structure:
- `関連契約書`
- `+ 関連契約書の追加`
- related contract card
- document icon
- contract id
- contract name
- relation tag
- project tag
- rail label は `関連契約書` のまま維持する
- panel shell 自体は他 tab と同じルールに従う

### 6. ファイル

表示内容:
- 主契約書
- 添付資料
- 締結後書類
- 関連ドキュメント

Rules:
- file list は縦積みする
- 各 item は `icon + file name + metadata + optional action` を 1 行または 2 行で見せる
- icon は `word / pdf / template` を使う
- file name の下に更新日や版情報などの metadata を置ける
- upload area がある場合も panel shell の中で扱う

### 7. 編集ルーム

表示内容:
- room 名
- 参加者
- 最新 activity
- room ごとの件数や状態

Rules:
- room 情報は compact list / card で扱う
- room detail を panel 全体の主役にしすぎない
- 参加者 avatar は補助情報として使う
- room item は `room 名 / 参加者 / 最新 activity / 件数 or 状態` の順に縦積みする
- 参加者は `components/avatar.md` の group 表現を使ってよいが、主情報より目立たせない

### 8. 契約審査

表示内容:
- empty state
- 審査の種類
- 審査依頼フォーム
- 依頼詳細
- 関係者
- コメント
- 補助 action

Rules:
- 契約審査 tab は `empty → 作成 flow → 依頼詳細` の 3 状態を基本形として持つ
- empty state では中央寄せの短い説明と単一 CTA `契約審査` を置き、ダミー summary を先に見せない
- 作成 flow の最初の step は `審査の種類` の選択を基本とする
- 次の step では `件名 / 期限 / 担当者 / 内容` を上から順に縦積みし、必要に応じて `担当者または依頼者のみ編集を許可する` のような option を置く
- 契約審査フォームには、契約日、開始日、終了日、自動更新、金額など契約スナップショットを read-only で含めてよい
- 関連契約がある場合は `作成中の関連契約書` section を置き、同時依頼対象を list 選択できるようにしてよい
- 作成 flow は `種類選択 → 依頼内容入力 → 確認 / 依頼` の段階を single column form として扱う
- 依頼詳細 state は task detail に近い構造とし、`依頼日 / 依頼者 / 内容 / ステータス / 期限 / 担当者 / 審査項目セット名` を縦方向に整理する
- reviewer や依頼先は人物 card ではなく compact row / list で扱う
- コメント thread は依頼詳細の末尾に置き、global `コメント` tab と混ぜない
- detail state の action は `削除`、`完了`、`編集` など task-like な軽い操作を基本とする

Basic structure:
- `契約審査`
- empty state or back link
- `審査の種類`
- `件名`
- `期限`
- `担当者`
- `内容`
- `タスクの編集`
- contract snapshot fields
- `作成中の関連契約書`
- `依頼`
- detail metadata
- comment thread

### 9. 承認

表示内容:
- 承認フロー
- 現在ステップ
- 承認者
- step ごとの状態
- 補助 action

Rules:
- flow は縦 timeline または step list を基本とする
- 現在位置、完了、保留、差戻しを区別する
- 現在ステップを視認できるが、過度に大きくしない
- step item は `step title / owner + at / status badge` の順で縦に読める構造を基本とする

### 10. 締結

表示内容:
- 締結依頼 flow
- 依頼元の切り替え
- 契約手段の選択
- 締結ステータス
- 署名 / 送付 / 回収の進行
- 締結済みファイル
- 補助 action

Rules:
- rail label は `締結` のまま固定し、panel 内 heading は phase に応じて `締結依頼` を使ってよい
- 締結 tab は `締結依頼` の作成 state と、依頼後の進行管理 state の両方を扱ってよい
- 締結依頼の初期画面では inner tab として `こちらからの締結依頼`、`相手からの締結依頼` を置いてよい
- inner tab は underline tab を基本とし、rail の section 切り替えとは別レイヤーとして扱う
- `契約手段を選択` sectionでは、`ContractS SIGN / クラウドサイン / DocuSign / その他電子契約サービス / 紙` のような候補を full-width selectable row として縦積みする
- 各候補 row は `radio + service icon / logo + service name` を基本構成とし、small card を並べる grid にはしない
- 締結依頼 flow の主要 action は画面右下寄せの `次へ` を基本とする
- inner tab は `components/tab.md` の underline variant、契約手段選択は `components/radio.md` の row variant を基本とする
- 契約手段選択 step では、締結済みファイルや進行 timeline を同画面に混在させない
- 依頼後の state では、送付、署名、回収、締結済みファイル登録を step flow または timeline で整理する
- `承認` と混ぜず、締結フェーズ固有の情報として扱う
- file upload や締結確認 action を置く場合も 1 column stack を維持する

Basic structure:
- `締結依頼` or `締結`
- `こちらからの締結依頼`
- `相手からの締結依頼`
- `契約手段を選択`
- selectable service rows
- `次へ`
- post-request step flow
- 締結済みファイル

### 11. ログ

表示内容:
- 更新履歴
- 承認 / 差戻し履歴
- ファイル操作履歴
- 実行者
- timestamp
- event message
- optional inline entity link

Rules:
- full detail page の `ログ` tab は縦軸 timeline ではなく、avatar つき activity list を基本形とする
- `components/timeline.md` の contract detail activity list variant を使う
- 各 log item は `avatar + 実行者名` を左、timestamp を右、その下に event message を置く
- item 間は 1px divider で区切り、独立 card に分割しない
- event message は自然文で記述し、必要に応じて契約名、承認フロー名、タスク名などを inline link として埋め込んでよい
- コメントとは混ぜず、純粋な履歴として扱う
- 新しい順か古い順かを画面内で統一する
- actor、timestamp、message の 3 層が一目で追える密度を優先する
- 長文 event は read more を併用してよいが、基本は 1〜2 行程度で読める要約を優先する

Basic structure:
- `ログ`
- log item
- avatar
- actor name
- timestamp
- event message
- divider

---

## Simplified Right Support Rail / Drawer Variant

### Purpose

- 一覧画面の row click で開く contextual drawer など、簡略化した右 rail に適用する
- full detail page は上記 `Contract Detail Fixed Variant` を優先する

### Rules

- `components/sidebar.md` の contextual drawer 構成を使う
- full detail page の fixed shell を簡略 drawer に持ち込まない
- section 順序は `Context Header → 契約概要 → 当事者 / 担当者 → 契約書 / 関連ファイル → 承認 / ワークフロー / 依頼 → ログ → コメント`

---

## Component Split Guidance

- `components/document-header.md`
  - 契約書 header の固定ルールを担当
- `components/document-viewer.md`
  - `契約書 / 変更履歴` tab、viewer 上部 action、PDF shell を担当
- `components/section-rail.md`
  - 右 rail の固定文言、順序、active state を担当
- `components/button.md`
  - panel header action と section action の size / variant を担当
- `components/avatar.md`
  - 担当者、フォロー中メンバー、コメント、ログ、編集ルームの人物表示を担当
- `components/document-link.md`
  - 関連契約書や契約名リンクの表示を担当
- `components/file-link.md`
  - ファイル tab、コメント添付、締結済みファイルの表示を担当
- `components/tag.md`
  - relation / project / category の軽い分類表示を担当
- `components/timeline.md`
  - ログ tab と承認 flow の時系列表現を担当
- `components/thread-comments.md`
  - コメント tab と契約審査 detail 内のコメントを担当
- `patterns/contract-detail.md`
  - 各 tab detail の情報構造と cross-section rule を担当

---

## Data Priority

1. 契約名 / ステータス
2. 契約本文または変更履歴
3. 現在選択中 tab の detail
4. 補助 action

---

## States

- loading: section 単位 skeleton
- empty: comment / file / related contract / room ごとに empty state
- error: section 内 error message or toast
- drawer mode: closeable
- persistent rail mode: close button なし

---

## Responsive

- narrow width では right detail panel を drawer 化してよい
- mobile でも header、viewer、rail の責務は保つ
- drawer 化しても section 順序と文言は変えない
- ただし full detail desktop variant を primary とする

---

## Anti-patterns

- 指示箇所以外まで fixed shell を作り変える
- 契約書 header を大型 hero card にする
- `契約書 / 変更履歴` を dropdown や segmented control に変える
- PDF toolbar を独自 UI に置き換える
- right rail の項目順や文言を変える
- 現状基準が flat card list の画面に対して、要件なしで hierarchy tree へ作り替える
- 各 tab detail をすべて同じ generic card stack に寄せる

---

## Example structure

```text
Contract Detail
├─ Navbar
├─ Document Header
├─ Document Viewer
│  ├─ 契約書 / 変更履歴
│  ├─ Viewer action strip
│  ├─ Embedded PDF toolbar
│  └─ Canvas
└─ Right Support Area
   ├─ Section Rail
   │  ├─ 概要
   │  ├─ 項目
   │  ├─ コメント
   │  ├─ タスク
   │  ├─ 関連契約書
   │  ├─ ファイル
   │  ├─ 編集ルーム
   │  ├─ 契約審査
   │  ├─ 承認
   │  ├─ 締結
   │  └─ ログ
   └─ Single Detail Panel
      └─ Active section detail
```
