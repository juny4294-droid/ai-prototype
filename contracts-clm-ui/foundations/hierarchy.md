# Hierarchy

## Purpose

情報の主従を一貫して保つ。

---

## Layers

1. Navbar
2. Navigation
3. Summary
4. Content
5. Support
6. Feedback

---

## Base Rules

- primary actionは1つ
- main > support
- first glanceで重要情報が分かる
- 先に読む情報、次に判断する情報、最後に補助情報の順で置く
- shell を構成する固定領域と、task ごとに差し替える可変領域を分ける
- support は「確認・補助・履歴」に留め、内容理解の主役にしない
- summary は「現時点の判断に必要な最小情報」だけに限定し、全体像カードを自動追加しない
- 迷う場合は `一覧 = table 主体`、`詳細 = document / form 主体`、`support = compact read-only 主体` に戻す

---

## Concrete Rules

- 一覧（少数フィルタ: 1〜5項目）: Main Header → Inline Filter Row → Table → Pagination
- 一覧（多数フィルタ: 6項目以上 または section 分け必要）: Left Filter Sidebar | Main Header → Table → Pagination
- 詳細: Navigation → Content → Support
- 設定: Sidebar → Content
- 一覧の補助詳細: Right Sidebar
- summaryはmainの先頭で、状態把握に必要な情報だけを短く置く
- supportはmainの代替ではなく、履歴、補足、関連情報に限定する
- 右 panel / sidebar は `section title → compact state / link / action` を基本とし、main と同じ情報密度で再説明しない
- detail page の panel 内では「一覧で把握」「詳細へ遷移」の責務分離を保ち、1 つの panel に summary・詳細本文・操作フォームを混在させない
- relation、log、comment、task のような support 情報は、本文要約カードを上に差し込まず、対象 list / tree / thread を主役にする
- relation や dependency を階層表示する場合は ad hoc な card 連結ではなく `components/tree-view.md` の tree view を使う

### Quality Gate

- 主要タスクが first glance で読めるか
- どこが固定 shell で、どこが変更対象かが分かるか
- support を閉じても main task の理解が成立するか
- 補助領域が main より強く見えていないか
- 「要約したい欲求」で card を増やしていないか

---

## Anti-patterns

- 主従が同列
- supportがmain侵食
- 強調要素が多すぎて視線が散る
- 要約と詳細が同じ強さで並ぶ
- support 領域に KPI、hero、summary card を追加して main より先に目に入る
- 右 panel で遷移前提の詳細情報まで抱え込み、1 panel が mini page 化する
