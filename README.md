# `React` Web Content Question-Answering

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

網站使用現代靜態網站產生器 [Docusaurus 2](https://docusaurus.io/) 建構。

### Installation

```
npm install
```

### Local Development

```
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

此命令啟動本機開發伺服器並開啟瀏覽器視窗。 大多數更改都會即時反映，無需重新啟動伺服器。

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

此命令將靜態內容產生到「build」目錄中，並且可以使用任何靜態內容託管服務提供服務。

### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
