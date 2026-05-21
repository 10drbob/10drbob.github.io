# Codex 项目维护规则

本文档记录 Codex 或其他自动化助手以后维护本项目时必须遵守的规则。开始改动前，先阅读本文件，再阅读 `README.md`。

## 1. 项目目标

本项目是 10drbob 的个人 AI 技术作品集网站，目标是：

- 整理 Deep Learning、NLP、LLM、RAG 学习笔记。
- 展示实践项目计划和项目文档。
- 在真实 Demo 完成并复核后，嵌入 Hugging Face Spaces。
- 保持静态站点结构，使用 GitHub Pages 发布。

不要把本项目扩展成后端应用、数据库应用或实验仓库。

## 2. 技术栈

- Docusaurus 3
- React + TypeScript
- Markdown / MDX
- KaTeX
- Prism
- Mermaid
- GitHub Pages
- GitHub Actions
- Hugging Face Spaces iframe embed
- Gradio Demo template

## 3. 目录结构说明

```text
docs/
├─ examples/
├─ deep-learning/
├─ nlp/
├─ paper-reading/
└─ projects/

src/
├─ components/
└─ pages/

examples/
└─ hf-spaces/
```

维护边界：

- `docs/`：笔记、论文阅读、项目文档。
- `src/pages/`：首页、Projects 页面、About 页面。
- `src/components/`：可复用 React 组件。
- `examples/hf-spaces/`：Hugging Face Spaces 模板，不存放真实模型权重或大数据。

## 4. 新增笔记规则

- Deep Learning 笔记放在 `docs/deep-learning/`。
- NLP 笔记放在 `docs/nlp/`。
- 论文阅读放在 `docs/paper-reading/`。
- 示例页面放在 `docs/examples/`。
- 新页面要同步加入 `sidebars.ts`。
- 需要 React 组件时使用 `.mdx`。
- 内容未完成时使用 `TODO` 标记。
- 不要大段编造课程内容。
- 数学公式使用 LaTeX，代码块标明语言。

课程笔记优先沿用以下结构：

1. 核心问题
2. 关键概念
3. 数学公式
4. 直观理解
5. PyTorch / Python 示例
6. 常见误区
7. 和其他概念的联系
8. 我的总结
9. 参考资料

## 5. 新增项目规则

- 项目卡片维护在 `src/pages/projects.tsx`。
- 项目详细文档维护在 `docs/projects/`。
- 新项目必须同步检查 Projects 页面、项目文档和 sidebar。
- 不要把计划项目写成已完成项目。
- 不要写未经复核的 benchmark 数字、loss、accuracy、F1 或在线 Demo。
- 没有真实 repo 时，GitHub Repo 区域写 TODO。
- 没有真实 Demo 时，在线 Demo 区域写暂无 Demo 或使用 `SpaceEmbed` 占位。

项目文档优先沿用以下结构：

1. 项目简介
2. 问题定义
3. 数据集 / 输入输出
4. 方法概览
5. 模型或算法结构
6. 训练 / 实验流程
7. 实验结果
8. 错误分析
9. 改进方向
10. GitHub Repo
11. 在线 Demo
12. 我学到了什么
13. 公开边界说明

## 6. 样式规则

- 保持简洁、清晰、技术作品集风格。
- 支持浅色和深色模式。
- 移动端必须正常阅读。
- 不引入大型 UI 框架。
- 优先使用 Docusaurus 默认样式变量。
- 新组件样式使用 CSS Module。
- 卡片、按钮和占位区域要避免过度装饰。
- 不要重写首页或大面积改版，除非任务明确要求。

## 7. 部署规则

- 当前站点部署到 `https://10drbob.github.io/`。
- GitHub Pages 和 GitHub Actions 已经打通。
- 不要修改 GitHub Pages / GitHub Actions 配置，除非任务明确要求。
- 不要修改 `baseUrl`、`url`、`organizationName`、`projectName` 等部署相关配置，除非任务明确要求。
- 完成改动后运行：

```bash
npm run build
npm run typecheck
```

## 8. Hugging Face Demo 规则

- `src/components/SpaceEmbed.tsx` 用于嵌入 Hugging Face Spaces。
- 没有真实 `spaceUrl` 时，只显示 `Demo coming soon`。
- 不要使用假的 Hugging Face Space URL。
- 不要显示假的 Demo 按钮。
- Gradio 模板可以放在 `examples/hf-spaces/`。
- 模板里的 placeholder `predict()` 不代表真实模型效果。
- 真实 Demo 接入前，需要确认模型来源、数据 license、公开边界和测试结果。

## 9. 公开发布安全规则

提交前必须检查：

- 是否包含课程课件原文、内部资料、老师或同学信息。
- 是否包含原始数据、模型权重、大文件、私有路径。
- 是否包含 API key、token、邮箱密码或其他 secrets。
- 是否把未完成项目写成已完成。
- 是否伪造实验结果、指标或在线 Demo。
- 是否有失效链接或死链接。
- 是否有不适合公开展示的内容。

如果发现问题，直接改成更适合公开展示的表达。

## 10. 禁止事项

- 不要引入后端。
- 不要引入数据库。
- 不要修改 GitHub Pages / GitHub Actions 配置，除非任务明确要求。
- 不要提交 `node_modules/`、`build/`、`.docusaurus/`。
- 不要伪造实验结果。
- 不要编造项目已经完成。
- 不要添加真实 API key、token、密码。
- 不要把大模型权重或大型数据集放进仓库。
- 不要上传课程课件原文、内部资料、老师或同学信息。
- 不要把 placeholder Demo 写成真实 Demo。
- 不要运行 `npm audit fix`，除非任务明确要求。
