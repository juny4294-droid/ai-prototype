# ContractS CLM 画像ベース・プロトタイピング用コンテキスト

Version: 1.0
用途: Nano Banana / Gemini系の画像生成・画像編集モデルで、ContractS CLM のUIモック・画面ラフ・高精度ビジュアルプロトタイプを生成する際の固定コンテキスト。

---

## 1. このコンテキストの目的

この文書は、**コード生成前の画像ベースUI試作**に使うための前提情報をまとめたものです。
対象は以下です。

- 既存デザインシステムに寄せた画面モック生成
- 画面ラフのバリエーション生成
- スクリーンショットやワイヤーからの見た目再構成
- 1画面単位の高精度なビジュアル試作

Googleは Nano Banana 2 / Gemini系画像モデルを、画像生成・編集・プロトタイプモック用途に位置づけており、Google AI Studio や Gemini アプリでも利用導線を案内しています。citeturn152245search2turn152245search6turn152245search8

---

## 2. この文書の使い方

### 固定コンテキストとして与えるもの

- このファイル
- `design_tokens.json`
- `component_schema.yaml`
- `screen_patterns.md`

### 毎回差し替えるもの

- 画面タイプ
- ユーザーの目的
- 表示する情報
- ユーザー操作
- データ構造
- 制約
- 参考画像（必要時）

### 想定ワークフロー

1. 固定コンテキストを読み込ませる
2. 画面ごとの指示を与える
3. 1画面ずつ生成する
4. 良い案を基準画像として再投入し、反復編集する

Nano Banana / Gemini系は、画像の編集・視点変更・雰囲気変更・参照画像ベースの反復調整を強みとして案内されているため、**一発生成よりも反復編集前提**の方が相性が良い。citeturn152245search0turn152245search2turn152245search6

---

## 3. このUIの設計原則

ContractS CLM のデザイン原則は以下。

1. シンプルであること
2. 文脈に沿っていること
3. 誠実であること

このため、生成される画面は以下を満たす必要がある。

- 装飾過多にしない
- 業務文脈に沿った情報密度を保つ
- 過度な演出や誇張を避ける
- 実務画面として説明可能な構造を保つ

根拠: Design System ルール本文。 fileciteturn4file0

---

## 4. 画像モデル向けの基本方針

### 4.1 何を生成させるか

画像モデルには、次の粒度で指示する。

- 単一画面のUIモック
- PCブラウザ想定のSaaS管理画面
- 実在プロダクトの画面に見える高精細モック
- コンポーネントの見た目整合を優先

### 4.2 何を生成させないか

- 実装コード
- 画面遷移全体
- 曖昧な抽象図
- 余計な装飾、3D表現、イラスト的演出
- マーケティングLP風の過剰なビジュアル

### 4.3 画像モデルで重要な指定

- 単一画面であること
- 情報の主従が明確であること
- 文字は日本語で可読であること
- 余白は規則的であること
- コンポーネントは繰り返し整合していること
- 実務SaaSの管理画面であること

Googleの公式説明でも、Nano Banana Pro / Gemini image 系は高品質画像生成、編集、モックアップ、複雑な図解や実世界知識を伴うビジュアル作成に向くと案内されている。citeturn152245search3turn152245search6turn152245search8

---

## 5. ブランド / ビジュアルトーン

### 5.1 全体トーン

- B2B SaaS / CLM / 管理画面
- 落ち着いた業務UI
- 情報密度は高め
- card-based layout
- 装飾より可読性を優先
- クリーンで理性的
- 法務・管理・承認ワークフローに耐える堅さ

### 5.2 禁止トーン

- ポップすぎる
- ネオン、グラスモーフィズム、強い立体感
- コンシューマ向けSNSアプリ風
- 過度なグラデーション
- ヒーロー画像中心のLP風

### 5.3 画面の空気感

- 白基調
- 薄いグレーの面分割
- 要所にグリーン系のアクション色
- 強い警告だけ赤
- 濃紺はナビゲーションや強い見出しで使用

根拠: カラートークン、レイアウト、実画面資料。 fileciteturn0file0 fileciteturn2file12turn2file14turn2file15turn2file16

---

## 6. 色の前提

### 6.1 主要色

- Primary Green: `#00AA9C`
- Dark Green: `#008479`
- Light Green: `#48C29B`
- Pale Green: `#DFF3F1`
- Ultra Pale Green: `#F1FAFB`

### 6.2 ネイビー系

- Navy: `#314574`
- Dark Navy: `#141D3D`

### 6.3 危険色

- Danger: `#E64C5B`
- Bright Red: `#E30000`
- Dark Red: `#B9281C`

### 6.4 ニュートラル

- Background: `#F8FAFC`
- Input Border: `#E4E7ED`
- Subtle Border: `#F0F3FA`
- Muted Text: `#A8ADBA`
- Strong Text: `#353947`
- Section Gray: `#73767F`

### 6.5 色の使い分け

- 主要CTA: green fill
- secondary action: outline / light
- attention / unread / urgent: red
- resolved / existence: green
- body background: ultra pale gray
- header / strong text / structural emphasis: navy / dark navy

根拠: `color.pdf` とバッジ・ボタン・警告ルール。 fileciteturn0file0 fileciteturn4file0

---

## 7. タイポグラフィ前提

- Font Family: `Noto Sans CJK JP`
- Title: `20px bold`
- Body: `14px`
- Caption: `12px`
- XS text: `10px`

### 画像生成向け補足

- 日本語本文は 14px 前後の読みやすい管理画面サイズ感
- タイトルは 20px 前後
- キャプションや補足は 12px 前後
- 文字詰めしすぎない
- 過度に細いウェイトを避ける

根拠: Design System ルール本文。 fileciteturn4file0

---

## 8. 余白 / 密度ルール

### 8.1 基本ルール

- 4の倍数を基本とする
- 8 point grid ベース

### 8.2 主要スケール

`2 / 4 / 6 / 8 / 12 / 16 / 24 / 32 / 40`

### 8.3 画像生成向け解釈

- 要素内余白: 8–16px
- フォーム要素間: 12px
- カード内余白: 16px
- セクション間: 24px
- 大きいブロック間: 32–40px
- テーブルヘッダ内余白: 16px

根拠: `Spacings.pdf`、Design System ルール本文。 fileciteturn3file12 fileciteturn4file0

---

## 9. レイアウト前提

### 9.1 共通構造

標準的な画面構造は以下。

- Top Navbar
- Main Content
- 必要に応じて SideMenu / Filter Area / Sidebar

### 9.2 代表レイアウト

#### 一覧画面

- Navbar
- Filter Area
- Table
- Pagination

#### 詳細画面

- Navbar
- Tab or Side Menu
- Main Content
- Optional Sidebar

#### 設定画面

- Navbar
- SideMenu
- Settings Content

#### モーダル

- Title
- Description
- Form Fields
- Footer Actions

根拠: Page / Layout / Settings / Modal 資料。 fileciteturn3file4turn3file6turn3file11 fileciteturn2file14turn2file15turn2file16

---

## 10. コンポーネント表現ルール

### 10.1 ボタン

- primary は1画面1つ
- 保存など最重要アクションのみ green fill
- Cancel / Close は light
- Delete は danger
- 具体的な動詞ラベルを使う

### 10.2 テーブル

- 情報密度高め
- 行ごとのまとまりを明確にする
- 長文は折り返すか hover で全文確認
- ソート状態は見て分かる
- 行クリックで Sidebar が開く構造を許容

### 10.3 フォーム

- ほぼ全項目にラベル
- 必須は明示
- `HcMultiSelect` は単一選択でも優先利用
- 選択肢 4 以下なら `HcRadio` を優先可能
- 直接編集UIではなく保存アクションを伴う

### 10.4 フィードバック

- field < toast < dialog の順で強さを上げる
- トーストは重要エラー時は自動消去しない
- エラー文言は中立表現 + 次の行動

### 10.5 タグ / バッジ

- タグ: outline 基本
- タスクカテゴリ: fill + 白文字
- badge red: 未対応 / 要対応
- badge green: 完了 / 有無表示

根拠: Design System ルール本文、各コンポーネント資料。 fileciteturn4file0 fileciteturn0file10turn0file12turn1file6turn1file10turn2file4

---

## 11. 画像モデルに渡すと有効な画面品質ルール

以下は**このDesign Systemを画像モデルで崩さず再現するための運用ルール**。

- 1回の生成対象は1画面のみ
- 画面サイズは PCブラウザの管理画面として解釈させる
- 余白と整列を優先し、派手さは抑える
- 同種コンポーネントはサイズ・高さ・角・内余白を揃える
- 日本語ラベルは短く、業務用語として自然にする
- テーブル列は詰め込みすぎず、主要列だけに絞る
- 主要CTAは1つに絞る
- 不可操作状態は非表示ではなく disabled + 理由説明を優先する
- 一覧画面では Filter / Table / Pagination の三層を崩さない
- 詳細画面では ナビゲーション / 本文 / 補助情報 の三層を崩さない

これらの大半は Design System の明文化ルールに基づく。 fileciteturn4file0

---

## 12. 画像生成時に追加すると良い記述

### 12.1 推奨記述

- high-fidelity enterprise SaaS admin UI
- desktop web app mockup
- Japanese text should be legible
- clean spacing based on 4px / 8pt grid
- card-based but minimal visual noise
- realistic product UI, not a marketing landing page
- consistent component sizing and alignment
- white and pale gray surfaces with green primary actions

### 12.2 避けたい記述

- futuristic
- glossy
- cinematic
- neon
- playful
- 3D UI
- glassmorphism
- mobile app style

Nano Banana / Gemini系は画像編集・参照画像編集・多段の反復修正に強みがあるため、最初から細部を詰めるより、**ラフ→改善→改善**で詰める方が成功率が高い。citeturn152245search0turn152245search2turn152245search10

---

## 13. 推奨プロンプト入力テンプレート（画像モデル向け）

以下の構造で、毎回この固定コンテキストに追加する。

### 入力

- 画面タイプ
- ユーザーの目的
- 表示する情報
- ユーザー操作
- データ構造
- 制約
- 参考画像（任意）

### 追記テンプレート

```text
画面タイプ:
{screen_type}

ユーザーの目的:
{user_goal}

表示する情報:
{display_fields}

ユーザー操作:
{user_actions}

データ構造:
{data_structure}

制約:
{constraints}

参考画像:
{reference_images_optional}
```

---

## 14. 画像モデル向け・出力指示テンプレート

```text
ContractS CLM の既存 Design System に沿った、PCブラウザ向けの業務SaaS管理画面のUIモックを1画面生成してください。

条件:
- B2B SaaS / CLM / 契約管理プロダクトの画面
- 日本語UI
- 高精細で可読性の高い実務画面
- white / pale gray base, green primary actions, navy structural accents
- spacing は 4px / 8pt grid に沿う
- card-based layout
- 一貫したコンポーネントサイズ
- 過度な装飾や演出は避ける
- 画像として完成したUIモックを出力する
- コードや注釈は描画しない
- 1画面のみ生成する

画面タイプ:
{screen_type}

ユーザーの目的:
{user_goal}

表示する情報:
{display_fields}

ユーザー操作:
{user_actions}

データ構造:
{data_structure}

制約:
{constraints}
```

---

## 15. スクリーン種別ごとの短い補助文

### 一覧画面

- filter area above a dense but readable data table
- table with sortable columns and subtle row separators
- pagination below the table
- one primary action only

### 詳細画面

- information-dense detail screen with tabs or side sections
- comments, timeline, and related information clearly separated
- operational side panel allowed

### 編集画面

- structured form layout with labels and required marks
- save as the only primary button
- cancel as light secondary action

### 設定画面

- side navigation for categories
- content area with cards and forms
- administrative configuration tone

根拠: 画面レイアウト資料と Screen Pattern の抽出。 fileciteturn2file14turn2file15turn2file16 fileciteturn3file11turn3file6

---

## 16. このファイルの位置づけ

このファイルは、コード生成用の `design_tokens.json` / `component_schema.yaml` / `screen_patterns.md` を置き換えるものではない。

役割は以下。

- 画像モデルに必要な**視覚的文脈**をまとめる
- LLM用の構造化仕様を、画像モデルでも使える言語に変換する
- 画像ベース試作でブレやすいトーン、密度、色、余白、画面種別を固定する

---

## 17. 実務上の推奨

- まず画像モデルで 1 画面モックを出す
- 良い案を参照画像として再投入する
- その後にコード系LLMへ渡して構造化・実装する

Nano Banana / Gemini image 系は、画像生成だけでなく画像編集・反復調整・モック用途が強いので、**画像で方向性を固めてからコードに落とす二段構成**が相性が良い。citeturn152245search2turn152245search3turn152245search6
