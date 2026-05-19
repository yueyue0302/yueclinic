<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# yueclinic — 運用ルール・AGENTS.md

> yueclinic.com（ユエクリニック）の公式サイト。
> Next.js (App Router) + Cloudflare Workers でホスティング。

---

## 技術スタック

| 項目 | 値 |
|------|-----|
| フレームワーク | Next.js 16 (App Router) |
| ホスティング | Cloudflare Workers (`@opennextjs/cloudflare`) |
| Node.js | v22（`.nvmrc` / CI ともに `22`） |
| リポジトリ | `https://github.com/yueyue0302/yueclinic.git` |
| ブランチ | `main` のみ使用 |
| 本番URL | https://yueclinic.com |
| 言語 | 日本語サイト（UI・コンテンツすべて日本語） |

---

## ディレクトリ構成

```
yueclinic/
├── .github/workflows/deploy.yml   # CI: main push → Cloudflare自動デプロイ
├── data/
│   ├── prices.json                # 料金表データ（トップページ料金セクション）
│   ├── menuDetails.json           # メニュー詳細ページのすべてのコンテンツ
│   └── columns.json               # コラム記事データ
├── content/columns/               # コラム記事 Markdown ソース
├── scripts/
│   └── generate-columns.mjs       # Markdown → JSON 変換（prebuild で自動実行）
├── src/
│   ├── app/                       # Next.js App Router ページ
│   │   ├── page.tsx               # トップページ
│   │   ├── layout.tsx             # 共通レイアウト（SEO, Header, Footer, 予約ボタン）
│   │   ├── globals.css            # 全体CSS（デザインシステム）
│   │   ├── menus/[id]/page.tsx    # メニュー詳細ページ（動的ルート）
│   │   ├── faq/page.tsx           # FAQ
│   │   ├── cancel/page.tsx        # キャンセルポリシー
│   │   ├── cases/[id]/page.tsx    # 症例詳細ページ
│   │   ├── columns/               # コラム一覧・詳細
│   │   ├── doctors/               # 医師紹介
│   │   ├── legal/                 # 特定商取引法
│   │   └── privacy/               # プライバシーポリシー
│   ├── components/
│   │   └── Header.tsx             # ヘッダー（ハンバーガーメニュー含む）
│   └── lib/                       # ユーティリティ
├── public/                        # 静的アセット（画像等）
├── wrangler.jsonc                 # Cloudflare Workers 設定
├── open-next.config.ts            # OpenNext for Cloudflare 設定
└── package.json
```

---

## デプロイフロー

```
git push origin main
  → GitHub Actions (.github/workflows/deploy.yml)
    → npm ci
    → npm run deploy (= opennextjs-cloudflare build && deploy)
    → Cloudflare Workers に自動反映
    → https://yueclinic.com に公開（約1〜2分）
```

### 必要なGitHub Secrets

| Secret名 | 用途 |
|-----------|------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API トークン |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare アカウント ID |

---

## コンテンツ編集ルール

### 料金・メニューの変更

- **料金表（トップページ）**: `data/prices.json` を編集
- **メニュー詳細ページ**: `data/menuDetails.json` を編集
  - 各メニューのキー（`futae_maibotsu` 等）が `prices.json` の `id` と対応
  - `priceSimulation` フィールドはインラインHTMLで記述
- **新メニュー追加時**: `prices.json` にアイテム追加 + `menuDetails.json` にエントリ追加

### コラム記事

- `content/columns/` に Markdown ファイルを追加
- `data/columns.json` にメタデータを追加
- ビルド時に `scripts/generate-columns.mjs` が自動変換

### 予約リンク

- **すべての予約リンクは公式LINE**: `https://lin.ee/VqhBREq`
- `layout.tsx` のフローティングボタン、`Header.tsx`、各メニューページのCTA、FAQ等すべて統一済み
- 新しいページを作る際も予約リンクは必ずこのURLを使用すること

---

## 開発コマンド

```bash
# ローカル開発サーバー起動
npm run dev

# ビルド確認（Cloudflare用）
npm run build

# Cloudflareプレビュー
npm run preview

# lint
npm run lint

# 手動デプロイ（通常はCIに任せる）
npm run deploy
```

---

## コミット・プッシュのルール

1. **コミットメッセージは日本語OK**。prefix は `feat:` `fix:` `update:` 等を使用
2. **`main` ブランチに直接 push**（ブランチ運用なし）
3. push 後、約1〜2分で本番に自動反映される
4. **デプロイ確認**: GitHub Actions タブでワークフローの成否を確認

```bash
# 変更をまとめてpush
git add -A
git commit -m "feat: 変更内容の説明"
git push origin main
```

---

## CSS・デザインルール

- **全体CSS**: `src/app/globals.css` に集約（コンポーネントCSS Modules は未使用）
- **カラーパレット**: CSS変数で管理（`--color-primary`, `--color-button`, `--color-accent` 等）
- **フォント**: Noto Sans JP（layout.tsx で Google Fonts から読み込み）
- **スクロール**: `scroll-margin-top: 5rem` がアンカーリンク用に設定済み

---

## ⚠️ 注意事項

### やってはいけないこと

1. **`vercel.json` は不要** — Vercelは使っていない。Cloudflare Workers でデプロイしている
2. **`pages/` ディレクトリを作らない** — App Router (`src/app/`) のみ使用
3. **予約リンクを `#reserve` や他のURLにしない** — 必ず `https://lin.ee/VqhBREq` を使う
4. **`data/` のJSONを編集したら必ずバリデーションする** — 壊れたJSONはビルドエラーになる
5. **`npm install` で新しい依存を追加する際は慎重に** — Cloudflare Workers の互換性に注意

### 気をつけること

1. **`menuDetails.json` の `priceSimulation` はインラインHTML** — JSONエスケープに注意
2. **画像は `/public/` に配置** — パスは `/filename.png` で参照
3. **コラム追加時は `prebuild` スクリプトが走ることを確認** — `npm run dev` で自動実行される
4. **Cloudflare Workers の制限** — `fs` モジュール等 Node.js ネイティブAPIは使えない場合がある

---

## クリニック基本情報（コンテンツ参照用）

| 項目 | 値 |
|------|-----|
| 正式名称 | yueclinic（ユエクリニック） |
| 院長 | 小林佑紀 |
| 住所 | 〒272-0815 千葉県市川市北方1-9-14-2F |
| 最寄り駅 | 京成線 鬼越駅 |
| 公式LINE | https://lin.ee/VqhBREq |
| Instagram | @yueclinic |
| 診療内容 | 美容外科（目元専門） |

---

## 🤖 Codex向け：HP自動更新ガイド

### 基本原則

**`main` ブランチに push するだけで本番サイトが自動更新される。**
Vercel は使っていない。GitHub Actions → Cloudflare Workers の自動デプロイ。

### ステップバイステップ：コード変更 → 本番反映

```bash
# 1. 変更を加える（ファイル編集）

# 2. JSONを編集した場合はバリデーション（必須）
node -e "JSON.parse(require('fs').readFileSync('data/prices.json','utf8')); JSON.parse(require('fs').readFileSync('data/menuDetails.json','utf8')); console.log('JSON OK')"

# 3. ビルド確認（推奨だが省略可）
npm run build

# 4. コミット＆プッシュ（これだけで本番に反映される）
git add -A
git commit -m "feat: 変更内容の説明"
git push origin main

# 5. デプロイ確認（1〜2分後に反映）
#    GitHub Actions のログで確認可能
#    https://github.com/yueyue0302/yueclinic/actions
```

### 更新パターン別ガイド

#### パターン1: 料金変更

**編集ファイル**: `data/prices.json` + `data/menuDetails.json`

```bash
# prices.json の該当メニューの price を変更
# menuDetails.json の該当メニューの priceSimulation 内の金額を変更
# 両方を必ず同時に変更すること（不整合に注意）
```

#### パターン2: 新メニュー追加

1. `data/prices.json` の `items` 配列に新アイテムを追加
2. `data/menuDetails.json` にメニューキーを追加（既存メニューの構造をコピーして修正）
3. `prices.json` の `id` と `menuDetails.json` のキー名が一致していること

```json
// prices.json のアイテム例
{
  "id": "menu_id_here",
  "name": "メニュー名",
  "price": 100000,
  "description": "簡単な説明"
}
```

#### パターン3: FAQの追加・修正

**編集ファイル**: `src/app/faq/page.tsx`

```tsx
{/* FAQアイテムの追加テンプレート */}
<details className="faq-item">
  <summary className="faq-question">質問テキスト</summary>
  <div className="faq-answer">
    回答テキスト
  </div>
</details>
```

#### パターン4: コラム記事追加

1. `content/columns/` に新しいMarkdownファイルを作成
2. `data/columns.json` にメタデータを追加
3. ビルド時に自動変換される（`scripts/generate-columns.mjs`）

#### パターン5: テキスト・文言の修正

- 該当の `.tsx` ファイルを直接編集
- 共通レイアウト（Header, Footer, 予約ボタン）: `src/app/layout.tsx`
- メニュー詳細ページの文言: `data/menuDetails.json`

### JSON編集時の重要ルール

`menuDetails.json` の `priceSimulation` フィールドはインラインHTMLが含まれる。

```
⚠️ ダブルクォートは \" でエスケープ
⚠️ 改行は \n で表記
⚠️ < > は そのまま使用可能（JSONの値内では問題ない）
⚠️ 編集後は必ず node -e "JSON.parse(...)" でバリデーション
```

### 予約リンクの統一ルール

サイト内のすべての予約・LINE関連リンクは以下に統一：

```
https://lin.ee/VqhBREq
```

target="_blank" rel="noopener noreferrer" を必ず付与。

### デプロイが失敗した場合

1. GitHub Actions のログを確認: https://github.com/yueyue0302/yueclinic/actions
2. よくある原因:
   - JSONの構文エラー → `node -e` でバリデーション
   - TypeScriptの型エラー → `npm run build` で事前チェック
   - Cloudflare API の一時障害 → 再push or 手動re-run

