# 10drbob | Deep Learning & NLP Notes

这是一个基于 Docusaurus + TypeScript 的个人技术网站，用来整理 Deep Learning / NLP 课程笔记、论文阅读、实战项目和未来的 Hugging Face Spaces Demo。

## 技术栈

- Docusaurus 3
- React + TypeScript
- Markdown / MDX
- GitHub Pages
- GitHub Actions

## 本地开发

安装依赖：

```bash
npm install
```

启动本地预览：

```bash
npm run start
```

构建静态网站：

```bash
npm run build
```

执行 TypeScript 检查：

```bash
npm run typecheck
```

构建结果会输出到 `build/` 目录。`build/`、`node_modules/` 和 `.docusaurus/` 不需要提交。

## 当前结构

```text
docs/
├── deep-learning/
├── nlp/
├── paper-reading/
└── projects/
```

首页入口在 `src/pages/index.tsx`，首页卡片组件在 `src/components/HomepageFeatures/`。

## 内容维护原则

1. 课程笔记和论文阅读优先写在 `docs/`。
2. 项目展示先写清楚问题、方法和计划，不要编造未完成的实验结果。
3. Blog 用于记录阶段性学习总结和网站维护日志。
4. 未来有交互 Demo 时，优先用 Hugging Face Spaces，再嵌入主站。

## 部署到 GitHub Pages

本项目使用 GitHub Actions 构建 Docusaurus，并通过 GitHub 官方 Pages artifact 部署方式发布 `build/` 目录。不使用 `gh-pages` 分支，也不提交构建产物。

### 1. 创建 GitHub 仓库

推荐创建用户主页仓库：

```text
<GITHUB_USERNAME>.github.io
```

如果使用用户主页仓库，部署后的地址通常是：

```text
https://<GITHUB_USERNAME>.github.io/
```

此时 Docusaurus 配置应保持：

```ts
baseUrl: '/'
projectName: '<GITHUB_USERNAME>.github.io'
```

如果使用普通项目仓库，例如 `personal-ai-site`，部署地址通常是：

```text
https://<GITHUB_USERNAME>.github.io/personal-ai-site/
```

这时需要把 `docusaurus.config.ts` 里的 `baseUrl` 改成：

```ts
baseUrl: '/personal-ai-site/'
```

### 2. 添加 remote 并推送

把 `<GITHUB_USERNAME>` 替换成你的 GitHub 用户名：

```bash
git remote add origin https://github.com/<GITHUB_USERNAME>/<GITHUB_USERNAME>.github.io.git
git push -u origin main
```

### 3. 设置 GitHub Pages Source

在 GitHub 网页端进入仓库：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

保存后，后续每次 push 到 `main` 分支都会触发 `.github/workflows/deploy.yml`。

### 4. 查看部署结果

第一次 push 后，进入仓库的 `Actions` 页面，打开 `Deploy to GitHub Pages` 工作流查看日志。

部署成功后，可以在 workflow 的 `Deploy to GitHub Pages` job 里看到 Pages URL。用户主页仓库的最终网站地址通常是：

```text
https://<GITHUB_USERNAME>.github.io/
```

## GitHub Actions 说明

`.github/workflows/deploy.yml` 的流程是：

1. checkout 当前仓库。
2. 使用 Node.js LTS 安装环境。
3. 通过 `npm ci` 安装依赖。
4. 执行 `npm run build` 生成静态网站。
5. 上传 `build/` 作为 GitHub Pages artifact。
6. 使用 GitHub 官方 `actions/deploy-pages` 部署。

## 常见问题

- 如果部署后样式丢失，先检查 `baseUrl` 是否和仓库类型匹配。
- 如果 Actions 没有运行，检查是否已经 push 到 `main` 分支。
- 如果 Pages 没有更新，检查 Settings → Pages 的 Source 是否为 GitHub Actions。
- 如果 Windows 同步盘出现 EPERM，可以考虑把项目移动到非同步目录。
