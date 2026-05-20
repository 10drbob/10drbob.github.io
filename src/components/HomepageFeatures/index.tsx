import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type CardItem = {
  title: string;
  link?: string;
  description: ReactNode;
};

const learningFocus: CardItem[] = [
  {
    title: 'Deep Learning',
    link: '/docs/deep-learning/intro',
    description: '记录 neural networks、optimization、CNN、RNN、Transformer 等基础主题。',
  },
  {
    title: 'Natural Language Processing',
    link: '/docs/nlp/intro',
    description: '整理 tokenization、embedding、attention、BERT、GPT 和 RAG 的学习笔记。',
  },
  {
    title: 'Paper Reading',
    link: '/docs/paper-reading/intro',
    description: '沉淀论文阅读摘要、方法拆解、实验设置和可复现问题。',
  },
  {
    title: 'AI Projects',
    link: '/docs/projects/intro',
    description: '为文本分类、情感分析、机器翻译和 RAG QA 等项目保留展示入口。',
  },
];

const featuredProjects: CardItem[] = [
  {
    title: 'BERT Sentiment Analysis',
    link: '/docs/projects/intro',
    description: '计划实现基于 BERT 的 sentiment analysis 项目，并记录数据、训练和误差分析。',
  },
  {
    title: 'Text Classification Pipeline',
    link: '/docs/projects/intro',
    description: '计划整理从数据清洗、baseline、模型训练到评估报告的文本分类流程。',
  },
  {
    title: 'RAG Question Answering System',
    link: '/docs/projects/intro',
    description: '计划构建 embedding、retrieval 和 LLM response 组合的问答系统。',
  },
];

const latestNotes: CardItem[] = [
  {
    title: 'Deep Learning Notes',
    link: '/docs/deep-learning/intro',
    description: '从核心概念和数学公式开始，逐步补充 PyTorch 示例。',
  },
  {
    title: 'NLP Notes',
    link: '/docs/nlp/intro',
    description: '围绕语言表示、序列建模、预训练模型和应用系统持续更新。',
  },
  {
    title: 'Paper Reading',
    link: '/docs/paper-reading/intro',
    description: '用固定模板记录论文问题、方法、实验和可迁移经验。',
  },
];

function InfoCard({title, link, description}: CardItem) {
  const content = (
    <>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </>
  );

  return (
    <div className={clsx('col', styles.cardColumn)}>
      {link ? (
        <Link className={styles.card} to={link}>
          {content}
        </Link>
      ) : (
        <div className={styles.card}>{content}</div>
      )}
    </div>
  );
}

function Section({
  title,
  description,
  items,
  columns = 4,
}: {
  title: string;
  description: string;
  items: CardItem[];
  columns?: 3 | 4;
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">{title}</Heading>
          <p>{description}</p>
        </div>
        <div className="row">
          {items.map((item) => (
            <div className={clsx(columns === 3 ? 'col col--4' : 'col col--3')} key={item.title}>
              <InfoCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <Section
        title="Learning Focus"
        description="用稳定的文档结构长期积累课程笔记、论文阅读和项目复盘。"
        items={learningFocus}
      />
      <Section
        title="Featured Projects"
        description="先建立项目入口和文档位置，后续再补充真实代码仓库、实验结果和在线 Demo。"
        items={featuredProjects}
        columns={3}
      />
      <Section
        title="Latest Notes"
        description="当前先放置学习目录入口，后续每篇笔记会逐步补全。"
        items={latestNotes}
        columns={3}
      />
      <section className={styles.aboutSection}>
        <div className="container">
          <Heading as="h2">About Me</Heading>
          <p>
            我正在系统学习 Deep Learning、NLP 和 LLM 应用开发，希望把课程知识、论文方法和项目实践都沉淀成可以复查、可以展示、也可以继续扩展的技术作品集。
          </p>
          <Link className="button button--outline button--primary" to="/about">
            More About This Site
          </Link>
        </div>
      </section>
    </>
  );
}
