# astro-notionについて

## 前提条件

- Astro がインストールされていること（このパッケージをインストールすることでも自動的にインストールされます。

- Notion API Secret（NotionインテグレーションAPIキー）はこれを使用するプロジェクト内の環境変数として用意する。
  環境変数名は「NOTION_API_SECRET」とする。
  また、使用したいNotionのデータベース、またはページについてコネクトを設定しておくこと。

## 機能一覧

### astro-notion-cli

CLIコマンドを使ってastro-notionのファイルを生成、チェック、管理ができます。

#### helpコマンド

```bash
npm run astro-notion help
```

#### 初期化

`astro-notion-config.yml`を作成します。

```bash
npm run astro-notion init
```

#### 整合性チェック

`astro-notion-config.yml`の情報と実際のディレクトリ・ファイル構成の整合性があるか確認します。

```bash
npm run astro-notion check
```

#### Astroページを作成

標準のレイアウト（Layouts/Layout.astro）を使ってNotionページを作成します。
ファイル名を省略した場合、indexとして扱われます。
別なディレクトリに作成することもできます。
既に作ろうとしたファイルがある場合は失敗し、以前のファイルが

##### 現在のディレクトリにindex.astroを作成する

```bash
# いずれも同じ結果となります
npm run astro-notion make
npm run astro-notion make .
npm run astro-notion make ./
```

##### 現在のディレクトリにabout.astroを作成する

```bash
# いずれも同じ結果となります。
npm run astro-notion make about
npm run astro-notion make about.astro
npm run astro-notion make ./about
```

##### 別のディレクトリに作成

```bash
npm run astro-notion make profile/ # profile/index.astro
npm run astro-notion make profile/sns # profile/sns.astro
```

##### 挙動の注意点

最後が`/`かどうかでファイルかディレクトリかどうかが変わります。

```bash
npm run astro-notion make profile # profile.astro
npm run astro-notion make profile/ # profile/index.astro
```

##### astro-notion-config.ymlをもとに全て作成

```bash
npm run astro-notion make --all
```

### データベースをWebページにする

本家のastro-notion-blogと同じように、データベースの内容をそのままページにすることができます。
この方法を使う場合、本家のastro-notion-blogとほぼ同じ仕組みで、それ＋αの追加機能が使えます。
つまり、そのデータベースはSlugプロパティを含みPublishedにチェックが入っているデータのみが表示されることとなります。

例えば以下のような構成を取った場合

astro-notion-config.yml

```yml
- key: blog
  url: /blog/
  database_id: xxxxxxxxxxxxxxxxxxxxxxx
```

Notionデータベース（database_idで指定されているデータベース

| Title            | Slug           |
| ---------------- | -------------- |
| Notionとは？     | what_is_notion |
| ブログ始めました | hello_blog     |

上記の構成だと

- `https://ドメイン/blog/what_is_notion`
- `https://ドメイン/blog/hello_blog`

というページができあがります。

### NotionページをそのままWebページにする

本家には無い機能です。
Notionの任意のページをそのままWebの１ページとして表示できます。
こちらの場合はSlugプロパティは不要ですが、対象のURLに該当するpagesディレクトリにそのファイルを置く必要

```yml
- key: about-page
  url: /about
  page_id: xxxxxxxxxxxxxxxxxxxxxxx
```

### astro-notion-config.ymlをもとにAstroファイルを自動生成する

以下のコマンドを使うことで、不足しているAstroファイルを作成します。
既にある場合は上書きはせず元のファイルのまま残します。

```bash
npm run astro-notion make
```

また、Astroファイルが存在しているか（整合性が取れているか）を下記コマンドでチェックすることができます。

```bash
npm run astro-notion check
```

### 既にあるAstroページの一部にNotionコンポーネントを使う

Notionコンポーネントを呼び出せるようになっています。

### Notionを使わずMarkdownを使ってAstroページを作成する。（標準的なAstroページ）

特に何も設定はいりません。
普通のAstroプロジェクトとしてお使いいただけます。

## astro-notionの仕組み