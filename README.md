# RiftRover ドキュメント

[Docusaurus](https://docusaurus.io/) で構築したドキュメントサイトです。Bun 1.4.4 以上で実行できます。

## ローカル開発

```sh
bun install --frozen-lockfile
bun run start
```

## 検証とビルド

```sh
bun run typecheck
bun run build
bun run serve
```

静的ファイルは `build` に出力されます。

## GitHub Pages へのデプロイ

PowerShell で SSH を使用する場合は、次のコマンドを実行します。

```powershell
$env:USE_SSH = "true"
bun run deploy
```

HTTPS を使用する場合は、`USE_SSH` を設定せず、`GIT_USER` に自分の GitHub ユーザー名を設定して `bun run deploy` を実行します。
