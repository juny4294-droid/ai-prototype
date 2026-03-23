# Document Viewer

- Status: draft
- Source: current ContractS contract detail screens

---

## Purpose

契約書本文または変更履歴を、
固定の viewer shell を保ったまま切り替えて表示する。

---

## Critical Rule（最重要）

- 契約書詳細の viewer shell は `白い tab / action 帯 + dark PDF toolbar + gray viewer surface` の 3 層を維持する
- `契約書 / 変更履歴` の tab、viewer 上部の action icon、PDF toolbar は別 UI に置き換えない
- 画像 viewer や card preview 群に分解しない
- 右 panel を変更しても viewer shell の見た目や密度を変えない
- sample / prototype では viewer canvas に常にダミー契約書を表示する

---

## When to use

- 契約書詳細 full page の main content

---

## Anatomy

- Header tab list
- Optional helper link
- Viewer action strip
- Embedded PDF / document toolbar
- Document canvas or history canvas

---

## Header Tab Rules

### Fixed Labels

1. `契約書`
2. `変更履歴`

### Rules

- 順序を固定する
- 文言を短縮・言い換えしない
- underline tab を基本とし、active のみ明確に示す
- tab 自体を segmented button や pill に変えない
- tab は document header の直下、viewer の直上に置く
- tab は `width: 72px`, `height: 52px`, `font-size: 13px`, `font-weight: 700`, `gap: 28px`, `underline: 3px` を基本とする
- tab 帯の背景は document header と同じ白面で扱い、別 strip に分離しない
- tab 帯の上に追加の top border を置かない

---

## Viewer Action Strip

表示内容:
- optional helper link
- download
- refresh
- preview / eye

Rules:
- action は viewer 領域の右上に寄せる
- helper link は `13px / 500`、icon hit area は `28px`、icon glyph は `22px` を基本とする
- action 群を header 主体の CTA と混ぜない
- helper link がある場合も action strip 内で右寄せ配置を崩さない
- action icon は material icon / material symbols 系を使う
- action strip の背景は白を維持し、tab 帯の下だけを淡色帯にしない
- helper link と icon 群は header shell の下段右端に収め、title block へ持ち込まない

---

## Embedded PDF Toolbar

表示内容:
- page navigation
- zoom
- fit / auto zoom
- viewer native controls

Rules:
- toolbar は dark gray gradient を持つ 1 本の固定帯とする
- toolbar を白 card や独自の浮遊 toolbar に置き換えない
- zoom や page 数など viewer 固有の affordance を削らない
- canvas 上へ追加の独自 icon を重ねすぎない

---

## Sample Data Rules

- sample では viewer 本文に常にダミー契約書を表示する
- sample の page title、contract body、history 文言はダミー用途と分かる内容にする
- sample の契約名、ファイル名、担当者名は実在データ風にしない

---

## Layout Rules

- tab → action strip → embedded toolbar → canvas の順を崩さない
- viewer 本体は main content の主役として十分な面積を確保する
- canvas は中央 card ではなく、viewer shell の一部として扱う
- contract detail の本文面は `flat document surface` を基本とし、本文全体を余計な card border / shadow / large radius で囲わない
- sample で embedded toolbar を簡略化する場合も、本文面は `角丸カード` にせず product の document area に近いフラットさを保つ
- 契約書本文は section ごとに背景色を切り替えず、1 枚の連続した紙面として見せる
- 本文途中に gray strip や background break が見える構成を作らない
- narrow width でも tab と action strip の意味関係を維持する
- document header の identity block、tab、action strip までは同じ白い上部 shell として連続させる
- viewer の淡い gray 背景や PDF shell の始点は、tab / action strip の下にある 1px divider より下に限定する

---

## Change History Rules

- `変更履歴` を開いても outer shell は維持する
- history panel だけ別 page / 別 card layout にしない
- history は viewer shell 内で list / compare / metadata を表示してよい
- 契約書 tab と変更履歴 tab で header や rail を変えない

---

## Composition Rules

- document header の直下に置く
- `components/tab.md` の tab を contract detail fixed variant として使う
- right support rail とは独立してスクロール・閲覧できる構造にする

---

## Accessibility

- tab と panel の対応を明確にする
- icon only action には accessible name を付ける
- viewer native toolbar を覆って keyboard reachability を損なわない

---

## Anti-patterns

- `契約書 / 変更履歴` を dropdown に変える
- viewer 上部 action を header の primary CTA 群に混ぜる
- PDF toolbar を独自デザインで再構築する
- 本文 preview を複数 card に分解する
- 本文全体を白 card + 強い border + 大きな radius で浮かせる

---

## Example structure

```text
Document Viewer
├─ Header tabs
│  ├─ 契約書
│  └─ 変更履歴
├─ Viewer action strip
│  ├─ Helper link (optional)
│  ├─ Download
│  ├─ Refresh
│  └─ Preview
├─ Embedded PDF toolbar
└─ Viewer canvas
```
