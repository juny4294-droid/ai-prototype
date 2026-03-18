# Modal

- Status: final

---

## Purpose

中規模までの入力・確認・補助操作を、現在画面の文脈を維持したまま短時間で完結させる。

---

## When to use

- フォーム（3〜8項目程度）
- 軽い設定変更
- 補助的な情報入力・確認

---

## When not to use（重要）

- 長いフォーム（→ Full Modal）
- 破壊操作の短い確認（→ Dialog）
- 複数ステップのワークフロー（→ ページ）

---

## Anatomy

- Overlay
- Modal Container
- Header
  - Title
  - Close
- Body（scrollable）
- Footer Actions

---

## Layout（最重要）

### 構造

Header（固定 or 準固定）
↓  
Scrollable Body  
↓  
Footer（固定）

---

### ルール

- Bodyのみスクロール
- 背景スクロール禁止（scroll lock）
- TitleとActionsは常に認識可能

---

## Size

### Width

- small: 400px
- medium: 520–640px（標準）
- large: 720–800px（上限）

---

### Height

- max-height: 80–90vh
- 超過時はBodyスクロール

---

## Spacing

- Header padding: 16px
- Body padding: 16–24px
- Footer padding: 16px
- 要素間: 8–16px

---

## Typography

### Title

- font-size: 16–18px
- font-weight: 600

---

### Body

- 14px

---

## Color

- Background: #FFFFFF
- Overlay: rgba(0,0,0,0.4)
- Border: #E5E7EB

---

## Header

### 構成

- 左: Title
- 右: Close（×）

---

### ルール

- Closeは必須
- スクロールしても消えない配置が望ましい

---

## Footer Actions（重要）

### 配置

- 右寄せ

---

### 構成

- Primary: 1つ
- Secondary: cancel / close

---

### ルール

- Primaryは最も目立つ
- 誤操作を防ぐため間隔を確保

---

## Variants

### Form Modal

- 入力主体

---

### Informational Modal

- 説明主体

---

### Confirmation Modal

- Dialogに近いが情報量多め

---

## States

- open
- loading
- scrolling
- submitting
- error

---

## Interaction Rules（重要）

- Escで閉じる（dirty時は例外）
- overlayクリックで閉じるかは用途次第（危険操作時は無効）
- 未保存変更 → 確認Dialog
- primary actionは1つ

---

## Scroll Behavior（重要）

- Bodyのみscroll
- Header / Footerは固定または視認可能維持
- 二重スクロール禁止

---

## Keyboard Interaction

- Tab: modal内で循環（focus trap）
- Enter: primary action（フォーム時）
- Esc: close（条件付き）

---

## Accessibility

- role="dialog"
- aria-modal="true"
- aria-labelledby（title）

---

## ARIA

- aria-describedby（説明がある場合）
- 初期フォーカスは最初の入力 or Title

---

## Responsive

### Tablet

- width: 90%

---

### Mobile

- フル幅
- Footer固定維持

---

## Composition Rules

- Form Label / Input / Dropdown / Buttonと組み合わせる
- Full Modal / Dialogと混同しない

---

## Modal / Full Modal / Dialogの境界（重要）

### Dialog

- Yes / No 判断
- 1〜2行の確認

---

### Modal

- 中規模入力・確認（本コンポーネント）

---

### Full Modal

- 大量入力 / 長時間操作

---

## Anti-patterns（重要）

- 長すぎてスクロール地獄
- Primaryが複数ある
- 背景スクロールが動く
- Footerが見えない
- Dialog用途をModalで代替
- ページ遷移をModalで代替

---

## Visual Constraint

- フラットUI
- 過剰装飾禁止

---

## Example structure

Modal  
├─ Header  
│  ├─ Title  
│  └─ Close  
├─ Scrollable Body  
└─ Footer  
   ├─ Secondary  
   └─ Primary  