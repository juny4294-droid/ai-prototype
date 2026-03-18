# Settings

- Status: refined

## Purpose

管理設定をカテゴリ単位で編集する。

---

## Layout Structure

- HcNavbar
- HcSideMenu
- Settings List
- Right Detail Drawer

---

## Component Composition

- HcSideMenu
- HcTable or List
- Right Detail Drawer
- HcFormLabel + Input系
- HcButton（編集 / 保存）

---

## Layout Rules

- HcNavbar は `components/navbar.md` の固定仕様をそのまま使う
- navbar の項目、順序、配色はページごとに変えない
- side menu width: 240px :contentReference[oaicite:5]{index=5}
- content padding: 24px
- card間: 24px
- 設定系の一覧は、行選択後に右ドロワーで内容を表示する
- 右ドロワーは `プレビュー状態` を初期表示とし、明示操作で `編集状態` に切り替える
- ページ内で直接インライン編集を広げず、編集UIは右ドロワー内に集約する
- 保存 / キャンセルは右ドロワー下部に固定配置する

---

## Interaction

- カテゴリ切替 → side menu
- 一覧 row click → right drawer preview
- preview → edit 切替
- 保存 → drawer内で完結

---

## Rules

- SideMenu → Content 構造を固定 :contentReference[oaicite:6]{index=6}
- helper text は最小限
- 設定系一覧では、詳細の初期状態を編集フォームではなく確認用プレビューにする
- 編集可能な設定値は、preview と edit の情報構造を揃えて切替時の文脈を失わせない
- ドロワー内ボタン文言は `編集` `保存` `キャンセル` のような体言止めを基本とする
- ドロワー内ボタンは1行固定とし、狭い幅でも縦書きや改行を発生させない
- ドロワー内では同じ意味の情報を重複表示しない
- 左右に並べる要約カードは、要件で明示された場合のみ使う
- 設定対象の主情報は、太字で最も目立つ位置に置く
- 主情報は preview でも edit でも同じ位置関係を保ち、切替時に情報の軸がぶれないようにする

---

## Anti-patterns

- 設定粒度がバラバラ
- 保存位置が不明
- 一覧下部に編集フォームを展開して主列を押し下げる
- row click 直後から編集フォームを全面表示して確認ステップを飛ばす
- 要約カードと詳細リストで同じ値を重複表示する
- 指定がないのに2カラムの要約カード群を差し込む
