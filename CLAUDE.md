# ai-proto 作業ルール

## 成果物の保存場所

- **プロトタイプは必ず `samples/` フォルダ配下に保存すること**
- テーマごとに `samples/<prototype-name>/` フォルダ（ケバブケース）を作成し、その中に成果物を配置する
- プロジェクトルート直下には成果物を置かない

```
ai-proto/
└── samples/
    └── home-customization/         ← テーマごとにフォルダを切る（ケバブケース）
        └── home-customization.html ← 内容がわかるケバブケースのファイル名
```

- **HTML / CSS / JS は1ファイルに統合する**。別ファイル（styles.css / app.js）に分けない
- ただし `<style>` と `<script>` は分離して記述し、HTML本文に直接混在させない
- ファイル名は `index.html` を使わず、内容がわかるケバブケースにする（例: `home-customization.html`）

## 参照すべきドキュメント

- UI設計ルール全般 → `contracts-clm-ui/CLAUDE.md`
- プロトタイプ作成の背景・プロンプト雛形 → `contracts_clm_code_prototyping_context.md`
- プロンプト雛形（利用方法） → `readme.md`
