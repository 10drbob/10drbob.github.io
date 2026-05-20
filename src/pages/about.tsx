import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About(): ReactNode {
  return (
    <Layout title="About" description="About fdghu and this AI learning portfolio">
      <main className="container margin-vert--xl">
        <Heading as="h1">About</Heading>
        <p>
          这是 fdghu 的个人 Deep Learning / NLP 技术网站，用来长期整理课程笔记、论文阅读、项目实践和未来的模型 Demo。
        </p>
        <p>
          当前阶段先搭建清晰的信息结构和可维护的 Docusaurus 站点。后续会逐步补充真实项目代码、实验记录、论文总结和 Hugging Face Spaces 嵌入 Demo。
        </p>
        <p>
          这个网站不会使用复杂后端或数据库，内容会尽量通过 Markdown / MDX 管理，方便持续更新。
        </p>
      </main>
    </Layout>
  );
}
