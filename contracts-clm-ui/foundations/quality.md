# Quality

## Purpose

毎回のプロンプトで細かい見た目指定を繰り返さなくても、
B2B SaaS として十分に安定した UI 品質を維持する。

このファイルを foundations の正本とし、
他の foundations では同じ規範文を繰り返さず、
確認項目や禁止項目として必要最小限だけを持つ。

目標品質は以下に近い。

- Lightning Design System のような構造の一貫性
- PrimeVue のような component 完成度、状態差分、密度の安定感

---

## Quality Baseline

- まず `使いやすさ`、次に `一貫性`、最後に `見た目の洗練` を判断順とする
- UI は page ごとに発明せず、既存 shell / component / token の組み合わせで作る
- component 単体の見栄えではなく、隣接 component との整列と密度を優先する
- summary、table、form、sidebar、drawer、modal それぞれに期待される構造を崩さない
- 新規 block を追加する前に、その block が `状態把握 / 判断 / 実行 / 補助` のどれに属するかを明確にする

---

## Layout Fidelity

- 左右の column は「何を分けているか」が説明できる場合にだけ使う
- 説明できない場合は single column に戻す
- 画面内の主要な left edge を増やしすぎない
- title、meta、field、list、action row の左端基準は少数に保つ
- 近接する block 同士は「同じ塊」か「別の塊」かが 1 秒で分かるようにする
- 別の塊なら gap または divider を必ず与える
- 同じ塊なら card 分割を増やさない
- 面の上に面を重ねるときは、shadow ではなく構造と余白で階層を作る
- product screenshot や既存画面 capture がある場合、まず shell の密度とサイズ感を baseline とし、それより大きく膨らませない
- screenshot baseline からは、文言や固有名詞ではなく `色 / 形 / サイズ / 余白 / 配置` を抽出して再現する
- panel、card、tree、list は読めない幅まで縮めない
- title、description、actions、content は横方向で競合させず、狭幅でも読順が維持できるようにする
- 1文字ずつ縦落ちする崩れ方や、不自然な右余白だけが残る痩せた content 幅を許容しない
- contextual drawer / sidebar を閉じた状態で、将来表示用の空カラムや空面を残さない
- contextual drawer / sidebar は open 時も main list / table の可読幅を壊さず、必要以上の縮小や右側の死に余白を作らない
- right drawer / contextual sidebar の詳細情報は、面幅を前提に横分割せず、縦方向の読み順を優先する
- avatar 付き account row では、name だけが細い列に押し込まれて縦落ちする崩れ方を許容しない
- 既存 sample や既存画面がある場合、まずその padding、action size、block 幅、align を baseline とする
- support area や panel header では、title / description / items の領域を犠牲にして右側に大きな空白を作らない
- page header と main list / table / form の間は、意味のある最小間隔で連続させ、余剰高さによる下寄せや中央寄せを許容しない
- 主カラムの余白は content block の下側へ逃がすことを基本とし、header と本文の間に大きな空白を発生させない
- main content 内の独立 block surface は、厳密な card component でなくても `白背景 + 穏やかな角丸 + ごく薄い影` を基調としてよい
- 上記の block surface 表現は main content に限って適用し、global header、side menu、filter sidebar、rail には自動適用しない
- filter sidebar は shell の一部として page edge に接続し、左端や上下に外側余白を作らない
- 既存 baseline がある tree / list / card は、左端、connector、action placement の位置関係を理由なく変えない
- 既存 baseline が `row + divider` の領域では、box-shadow つき card へ置き換えない

---

## Component Quality

- button、input、select、tab、tag、table row は page ごとに別物へ見せない
- interactive component は hover / focus / active / disabled の違いが目視で分かる
- icon button と text button はサイズ感、基準線、hit area を揃える
- label、value、supporting text は typography の役割を固定する
- field は `label → control → hint / error` の順序を守る
- card は `title → content → actions` の順序を崩さない
- list item は「識別情報」「状態」「操作」を分離して並べる
- data-heavy な領域では decoration より scan しやすさを優先する
- prototype の interactive UI は見た目だけで終えず、主要操作が実際に動作することを smoke check してから返す
- utility icon や tree action の hit area を必要以上に大きくせず、既存 component の密度を無断で緩めない
- tree / list / card では左端基準、connector、action placement を揃える
- panel header の action は補助操作として扱い、title / description より広い占有領域を持たせない
- right drawer の summary / meta は 2 column の一覧化より、`label → value → supporting text` の縦反復を優先する
- 既存 sample に compact な action size がある場合、まずその寸法を baseline とし、大きくする場合は明確な理由を持つ
- 同じ画面内で `row / accordion / timeline / list` が baseline なのに、理由なく card 化しない
- rail icon、rail label、required chip、count badge は補助情報として扱い、title や primary action より強く見せない
- timeline、step flow、approval flow では `axis lane` と `content lane` を分け、axis line と円形 marker は左 lane、stage title と本文は右 lane へ分ける
- pill / badge / step marker / axis line を content card や avatar の上に重ねず、stage title と card を 2 段で読めるようにする
- marker、axis line、stage title、card start edge の整列は layout で解決し、負の margin や見た目上の食い込みで位置合わせしない
- avatar + actor / author / assignee row では、`avatar + text block` を最小単位として扱い、name だけを独立細列にしない
- avatar row が狭い場合は name と meta / timestamp / message をまとめて 2 段化し、name 単体の不自然な折返しを避ける

---

## Content Restraint

- 要約したいだけで card を追加しない
- 本文を再説明する support summary を自動生成しない
- sidebar / panel には、その場で判断に必要な最小情報だけを置く
- 詳細説明が必要なら inline 展開より詳細ページ遷移を優先する
- explanation は UI で解決できないときだけ text で補う
- sample や検証用の説明文を panel 本文の主役にしない
- state 切替や debug control は補助要素として扱い、主要 list / tree / form より先に目に入れない
- panel 内では `タイトル → 説明 → 必要なアイテム` の順を基本とし、1文字ずつ縦に崩れるようなレイアウトを許容しない

---

## Density Control

- 高密度でも窮屈に見えないことを優先する
- compact と cramped を混同しない
- 余白を削る前に、不要な情報と不要な block を削る
- 1 画面で typography の種類を増やしすぎない
- 1 つの面に badge、tag、helper、icon、action を載せすぎない
- scan したい一覧では line-height と alignment を優先し、装飾で差を付けない

---

## Form Quality

- form は既定で single column
- multi column は比較や同時入力の必然性がある場合だけ使う
- placeholder を label の代わりにしない
- 必須、disabled、error は field 単位で解釈できるようにする
- 保存の単位が曖昧な form を作らない
- primary action までの読み順を上から下へ自然につなげる

---

## Support Area Rules

- support area は mini page にしない
- support area に hero、KPI、大型 summary card を入れない
- support area の action は補助操作に留める
- support area の内容だけで main content を代替しようとしない
- rail / sidebar / panel は「切り替えて見る」前提で、同時に全部説明しない
- support area でも `タイトル → 説明 → 必要なアイテム` の基本構造を保ち、説明や補助 controls が配置崩れの原因にならないようにする
- support area の item は panel 幅いっぱいに安定して読めることを優先し、右側だけに大きな余白が残る構成を避ける
- support area の panel は「本文より細い補助カラム」ではなく、「内容が成立する最小幅を持つ補助面」として扱う
- support area で tree や list を使う場合、item 本体より action 群や debug UI が先に目に入る密度を避ける
- support area の timeline / approval block では、axis line と marker の lane 幅、および stage title と card が成立する content 幅を先に確保する
- 一覧画面の contextual drawer は support area の常設カラムとして扱わず、必要時だけ現れる overlay surface として扱う

---

## Visual Stability

- neutral background + subtle border + restrained shadow を基本とする
- main content の白面 block では、角丸と薄い shadow を使って page background から穏やかに分離してよい
- header、sidebar、rail、navigation strip は block surface と同じ角丸面にせず、shell の一部としてフラットに扱う
- filter sidebar は flat な shell surface として扱い、main content block と同じ card chrome を与えない
- gradient、強い色面、装飾 shape で完成度を稼がない
- 日本語UIでは英字 kicker を自動追加しない
- 角丸、border、focus ring は page ごとに変えない
- component の見た目の差より、state の差の方を明確にする
- B2B SaaS の detail panel では、`navy header / teal accent / light gray divider / white surface / dark viewer chrome` のような役割分担を崩さない
- contract detail の support panel では、teal は `active / link / primary action / required` の役割に限定し、面積の大きい色面にしない

---

## Accessibility Baseline

- text contrast は WCAG AA を下回らない前提で設計する
- focus ring は常に視認可能とする
- color 以外でも state を識別できるようにする
- tab、accordion、dialog、menu は semantic role と keyboard 操作を持つ前提で作る
- error は色だけでなく文言でも示す

---

## LLM Enforcement

- 迷ったら新しい visual idea ではなく既存 rule へ戻る
- page の完成度を上げたいときは、装飾追加ではなく alignment / spacing / density を点検する
- 品質改善の優先順は `責務整理 → 情報削減 → 整列 → spacing → state → visual polish`
- ユーザーが見た目だけを依頼していても、B2B SaaS としての責務が曖昧なら構造改善を優先する
- UI surface の選択は `foundations/surface-selection.md` を優先する
- state の最低網羅は `foundations/state-coverage.md` を優先する
- 主要操作の完成条件は `foundations/interaction-fidelity.md` を優先する
- 成果物の最低条件は `foundations/deliverable.md` を優先する
- 実装後は `foundations/checklist.md` を使って self-review を実行し、違反があれば final answer 前に修正する
