# Component / Pattern Boundary Table

## 目的

Claude が高精度で UI を生成できるように、
`components` と `patterns` の責務境界をこのリポジトリ向けに固定する。

判断基準は以下の通り。

- 単体の見た目、状態、寸法、相互作用は `components`
- 画面全体の構造、順序、責務分離、組み合わせは `patterns`
- 1 つの値に正本は 1 箇所だけ持つ

---

## 1. Component に寄せる項目一覧

以下は原則として `components/*.md` に置く。

| 項目 | 置き先 | 理由 | 例 |
| --- | --- | --- | --- |
| 単体責務 | component | その UI が何者かを定義するため | `Sidebar は補助情報を出す` |
| Anatomy | component | 単体構造の正本になるため | `Header / Body / Footer` |
| 固定寸法 | component | 値の正本を 1 箇所に寄せるため | rail 幅、item 高さ、badge size |
| spacing 基本値 | component | 隣接要素の基本間隔は単体仕様だから | modal padding、rail item gap |
| typography 基本値 | component | 表記の強さと役割は単体で決めるため | panel title, rail label |
| color / state 表現 | component | active / hover / disabled は単体挙動だから | tab active, rail active |
| keyboard / aria | component | semantic と interaction は単体仕様だから | dialog role, tab keyboard |
| variant ごとの差分 | component | 再利用可能な差分だから | overlay indicator, removable tag |
| boundary 定義 | component | 混同防止に効くため | badge vs tag, sidebar vs side-menu |
| 単体 anti-pattern | component | 誤用を局所で止められるため | dialog に長文 form を入れない |

### この repo で component に置くべき代表値

- `section-rail.md`
  - rail 幅
  - rail item 高さ
  - icon / label サイズ
  - active 表現
  - indicator の載せ方
- `sidebar.md`
  - generic sidebar width
  - full detail panel の単体 shell
  - top-level block は縦積み
  - header / body divider
- `dialog.md` / `modal.md` / `full-modal.md`
  - overlay family の差分
  - close 手段
  - body scroll
  - focus / aria
- `badge.md`
  - dot / count のサイズ
  - overlay indicator の位置

---

## 2. Pattern に残す項目一覧

以下は原則として `patterns/*.md` に置く。

| 項目 | 置き先 | 理由 | 例 |
| --- | --- | --- | --- |
| 画面全体の構造 | pattern | 複数 component の関係だから | `Navigation → Content → Support` |
| 領域の順序 | pattern | 情報設計そのものだから | header → viewer → rail → panel |
| main / support の責務分離 | pattern | 画面レベルの設計判断だから | support に主編集を置かない |
| section order | pattern | その画面の読み順だから | `概要 → 項目 → 契約審査 ...` |
| tab ごとの表示責務 | pattern | 画面固有の意味づけだから | `関連契約書` は階層把握が責務 |
| 使用 component の組み合わせ | pattern | orchestration 情報だから | avatar + timeline + file-link |
| 何を載せてよく何を載せないか | pattern | 画面文脈の制約だから | summary card を混ぜない |
| 画面固有の例外 | pattern | 再利用より画面都合が強いため | contract detail の fixed shell |
| 領域配分など画面契約 | pattern | component 単体では決めにくいため | right detail panel 幅 |

### この repo で pattern に残してよい代表値

- `contract-detail.md`
  - `Document Area | Resize Gutter | Right Section Rail | Right Detail Panel`
  - right detail panel 幅 `380–440px`
  - tab ごとの責務
  - どの tab で何の component を使うか
- `contract-list.md`
  - filter → table → pagination の順
  - row click で sidebar を開くかどうか
- `search.md`
  - 検索条件と一覧の関係
  - 詳細検索を page 構造として扱うルール

### pattern に書かない方がよいもの

- rail item の `width / height`
- panel title の font-size
- badge の x / y offset
- modal の aria
- sidebar の generic width
- tab underline の thickness

これらは component の正本へ寄せる。

---

## 3. 現在ファイルごとの移管候補

### A. `components/section-rail.md`

このまま component 正本に置く:

- fixed items の visual rule
- rail 幅
- item 高さ
- icon / label サイズ
- active state
- indicator rule
- gutter rule

pattern へ戻さない:

- `68px`
- indicator 位置
- label size
- item size

備考:

- 固定項目の文言自体は `contract-detail` 専用だが、right rail の単体仕様としてここに置いてよい
- `contract-detail.md` では「この rail を使う」だけに留める

### B. `components/sidebar.md`

このまま component 正本に置く:

- generic sidebar / drawer の責務
- contextual / persistent の違い
- full detail panel の単体 shell
- top-level は縦積み
- divider ベースで整理する

pattern へ戻さない:

- panel shell の構造定義
- panel title の置き方のような単体ルール

移管候補:

- もし今後 panel title や panel body の詳細 typography を固定したくなったら、`sidebar.md` にだけ書く
- `contract-detail.md` には再掲しない

### C. `patterns/contract-detail.md`

ここに残す:

- fixed shell の順序
- viewer / rail / panel の関係
- tab ごとの責務
- component mapping
- `関連契約書` に何を載せないか
- right detail panel 幅 `380–440px`

ここから削る候補:

- rail 幅や rail item size の再掲
- panel title / accordion / field value の typography 再掲
- badge offset のような visual micro rule

備考:

- `right detail panel 幅 380–440px` は画面全体の layout contract なので pattern に残してよい
- 将来 reusable な `detail-panel` component を切り出すなら、その時点で component 側へ移管する

### D. `components/dialog.md`

このまま component 正本に置く:

- dialog の責務
- dialog の size
- action 構成
- destructive confirm / submit confirm の差分

foundation へ寄せたままでよい:

- focus trap
- background scroll lock
- role / aria baseline

備考:

- 今の `overlay-surface.md` 参照方式は妥当
- ただし dialog 固有の close rule や destructive confirm は component 側に残す

### E. `components/modal.md`

このまま component 正本に置く:

- modal の size range
- body scroll
- footer action 構成
- single column form 基本

foundation へ寄せたままでよい:

- overlay family の共通ルール

### F. `components/full-modal.md`

このまま component 正本に置く:

- full-modal の size range
- content scroll
- background click 不可
- dirty state 前提

pattern へ渡さない:

- generic close / aria / focus trap

### G. `foundations/overlay-surface.md`

ここに残す:

- dialog / modal / full-modal 共通 rule
- role / aria の共通 baseline
- focus / close / scroll lock

component へ戻さない:

- 同じ文言の再掲

### H. `foundations/quality.md`

ここに残す:

- 横断原則
- single column form
- main / support の考え方
- summary card 抑制

component / pattern に戻さない:

- 同一文言の再掲

### I. `foundations/checklist.md`

ここに残す:

- 実装後チェック項目

ここに残さない:

- 原則そのもの
- 理由の長文説明

---

## 4. この repo での推奨ルール

運用を安定させるなら、以下で固定するのがよい。

1. `見た目の値` は component に置く
2. `画面の意味と順序` は pattern に置く
3. `横断原則` は foundations に置く
4. pattern は component の値を再掲しない
5. component は pattern の表示順を持たない

---

## 5. 次に整理すると効果が高い箇所

1. `contract-detail.md` に残る panel 幅以外の固定値再掲をゼロにする
2. `section-rail.md` と `sidebar.md` の正本性を冒頭に短く明記する
3. `contract-list.md` と `search.md` でも同じ仕分け方に揃える
