# po-02-05-2019-11-23

## npmのプロジェクトの初期設定

```
npm init -y
```

を実行してnpmのプロジェクトの初期設定をします。

## express body-parser インストール

以下の通り、2通りあります。

### 手動インストール

```
npm i express body-parser
```

で express を使えるようにします。publicフォルダに静的データを入れれば、対応した階層で表示されます。

例）ローカル実行なら
public/index.html = http://localhost:8080/index.html

### 自動インストール

package.json にインストールされたものは登録されているので

```
npm i
```

でインストールすることも出来ます。