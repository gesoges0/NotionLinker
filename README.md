# NotionLinker

この Chrome 拡張機能は、現在閲覧中のウェブページを Notion のデータベースに簡単に保存することができます。

https://github.com/user-attachments/assets/a9409a02-6c36-4dde-8527-7b62cd592842


## 機能

- ワンクリックで現在のページ情報を Notion に保存
- 保存される情報：
  - ページタイトル
  - URL
  - 保存時刻
  - FROM (どの端末から投稿したか)
- Notion API Key と Database ID の設定機能

## インストール方法

1. このリポジトリをクローンまたはダウンロード
2. Chrome ブラウザで `chrome://extensions` を開く
3. 右上の「デベロッパーモード」を有効にする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. ダウンロードしたフォルダを選択

## 初期設定

1. Chrome ツールバーの拡張機能アイコンをクリック
2. 「Setting」ボタンをクリック
3. 以下の情報を入力：
   - Notion API Key: Notion インテグレーションの API キー
   - Database ID: 保存先の Notion データベースの ID
4. 「Save Settings」をクリックして設定を保存

## Notion側の準備

1. [Notion Developers](https://developers.notion.com/) でインテグレーションを作成
2. 発行された API キーをコピー
3. 保存先のデータベースを作成し、以下のプロパティを設定：
   - タイトル（title型）
   - URL（url型）
   - 時刻（date型）
   - カテゴリ（multi-select型）
4. データベースの共有設定でインテグレーションを追加

## 使用方法

1. 保存したいウェブページを開く
2. Chrome ツールバーの拡張機能アイコンをクリック
3. 「Save」ボタンをクリック
4. 成功メッセージが表示されたら完了

## トラブルシューティング

### 保存に失敗する場合

1. Notion API Key が正しいか確認
2. Database ID が正しいか確認
3. データベースのプロパティ名が正確か確認
4. インテグレーションがデータベースに追加されているか確認

### 設定が保存されない場合

1. Chrome の設定で拡張機能のストレージ権限が有効になっているか確認
2. Chrome を再起動して再度試す

## ファイル構造

```
notion-article-saver/
├── manifest.json
├── popup.html
├── popup.js
├── background.js
├── settings.html
└── settings.js
```
