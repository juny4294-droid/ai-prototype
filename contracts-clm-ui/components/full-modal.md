# Full Modal

- Status: final

---

## Purpose

ページ遷移を発生させずに、大量情報・長時間操作を伴う編集や確認を完結させる。

---

## When to use

- フォームが1画面相当以上になる場合
- テーブル編集や複数セクション編集が必要な場合
- 編集前後で背景文脈を維持したい場合

---

## When not to use

- 単純確認（→ Dialog）
- 短いフォーム（→ Modal）
- 明確なナビゲーション文脈が必要（→ ページ遷移）

---

## Anatomy

- Overlay
- Full Modal Container
- Header
  - Title
  - Close action
- Main Content
- Footer Actions

---

## Layout（最重要）

### 構造

Header（固定）
↓
Scrollable Content
↓
Footer（固定）

---

### ルール

- Header / Footer は常に固定
- Content のみスクロール
- 背景はスクロールさせない（scroll lock）

---

## Size

### 幅

- max-width: 960–1200px（編集系）
- または full-width（複雑テーブル）

---

### 高さ

- viewport height の 90–100%

---

### 余白

- 左右 padding: 24–32px
- 上下 padding: 24px

---

## Spacing

- セクション間: 24px
- セクション内: 16px
- フォーム要素間: 8px

---

## Typography

### Header

- font-size: 18–20px
- font-weight: 600

---

### Body

- 標準フォームと同一（14px）

---

## Color

- 背景: #FFFFFF
- Overlay: rgba(0,0,0,0.4)
- Border: #E5E7EB（subtle）

---

## Header（固定仕様）

### 構成

- 左: Title
- 右: Close（×）

---

### ルール

- 常に上部固定
- スクロールしても消えない
- Closeは必ず配置

---

## Footer（最重要）

### 構成

- 左: 補助アクション（任意）
- 右: Primary / Secondary actions

---

### ボタン構成

- Primary: 1つのみ
- Secondary: cancel / close

---

### 固定

- 常に画面下部に固定
- スクロールしても見える

---

## Variants

### Standard Form

- 縦長フォーム

---

### Review

- 読み取り + 確認

---

### Split Layout

- 左: navigation / list
- 右: detail / form

---

## States

- open
- loading
- dirty（未保存）
- submitting
- error

---

## Interaction Rules（重要）

- 未保存状態で閉じる → 確認Dialog必須
- primary actionは1つ
- Escキーで閉じる（ただしdirty時は確認）
- 背景クリックでは閉じない（誤操作防止）

---

## Scroll Behavior（重要）

- Bodyのみscroll
- Header / Footer固定
- 二重スクロール禁止

---

## Keyboard Interaction

- Tab: modal内循環（focus trap）
- Esc: close（条件付き）
- Enter: primary action（フォーム時）

---

## Accessibility

- role="dialog"
- aria-modal="true"
- aria-labelledby（title紐付け）
- フォーカストラップ必須

---

## ARIA

- aria-describedby（説明がある場合）
- 初期フォーカスはtitle or first field

---

## Responsive

### Tablet

- width: 90%

---

### Mobile

- フルスクリーン
- Footer固定維持

---

## Composition Rules

- Form / Table / Sidebar を内包可能
- Dialogの代替として使わない
- ページ遷移の代替として乱用しない

---

## Anti-patterns（重要）

- Header / Footerがスクロールで消える
- Primaryが複数ある
- 背景スクロールが動く
- 長文でFooterが見えない
- Dialogで済む内容を使う
- ページの代替として無制限に使う

---

## Visual Constraint

- フラットUI
- 過剰な影・ガラス・3D禁止

---

## Example structure

Full Modal  
├─ Header（fixed）  
│  ├─ Title  
│  └─ Close  
├─ Scrollable Content  
└─ Footer（fixed）  
   ├─ Secondary  
   └─ Primary  