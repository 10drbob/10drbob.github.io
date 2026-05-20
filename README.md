# fdghu | Deep Learning & NLP Notes

这是一个基于 Docusaurus + TypeScript 的个人技术网站，用来整理 Deep Learning / NLP 课程笔记、论文阅读、实战项目和未来的 Hugging Face Spaces Demo。

## 技术栈

- Docusaurus 3
- React + TypeScript
- Markdown / MDX
- GitHub Pages

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

构建结果会输出到 `build/` 目录。

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

## 本地预览

运行下面命令后，在浏览器打开终端显示的本地地址，通常是 `http://localhost:3000/`。

```bash
npm run start
```

## 部署说明

后续会使用 GitHub Actions 自动部署到 GitHub Pages。当前 Issue 1 只完成本地站点初始化和基础内容搭建。
