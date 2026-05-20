import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type CardItem = {
  title: string;
  link: string;
  description: ReactNode;
};

const learningFocus: CardItem[] = [
  {
    title: 'Deep Learning',
    link: '/docs/deep-learning/intro',
    description: '整理 neural networks、optimization、CNN、RNN 和 Transformer 等基础主题。',
  },
  {
    title: 'Natural Language Processing',
    link: '/docs/nlp/intro',
    description: '记录 tokenization、embedding、attention、BERT、GPT 和 NLP applications。',
  },
  {
    title: 'Large Language Models',
    link: '/docs/nlp/gpt',
    description: '围绕 GPT、prompting、generation 和 LLM application workflow 持续积累。',
  },
  {
    title: 'Retrieval-Augmented Generation',
    link: '/docs/nlp/rag',
    description: '记录 document chunking、embedding、retrieval、reranking 和 answer generation。',
  },
];

const featuredProjects: CardItem[] = [
  {
    title: 'BERT Sentiment Analysis',
    link: '/docs/projects/sentiment-analysis',
    description: 'Planned: 基于 BERT fine-tuning 的 sentiment classification 项目。',
  },
  {
    title: 'Text Classification Pipeline',
    link: '/docs/projects/text-classification',
    description: 'Planned: 从 preprocessing、baseline 到 evaluation 的文本分类流程。',
  },
  {
    title: 'RAG Question Answering System',
    link: '/docs/projects/rag-qa-system',
    description: 'Planned: 结合 embedding、vector search 和 LLM generation 的 QA system。',
  },
];

const latestNotes: CardItem[] = [
  {
    title: 'Transformer',
    link: '/docs/deep-learning/transformer',
    description: 'Self-attention、multi-head attention、positional encoding 和 Transformer block。',
  },
  {
    title: 'BERT',
    link: '/docs/nlp/bert',
    description: 'Encoder-only Transformer、masked language modeling 和 fine-tuning。',
  },
  {
    title: 'Attention',
    link: '/docs/nlp/attention',
    description: 'Query、key、value、attention weight 和 sequence modeling 中的作用。',
  },
  {
    title: 'RAG',
    link: '/docs/nlp/rag',
    description: 'Retrieval-Augmented Generation 的基本流程和项目实践入口。',
  },
];

function InfoCard({title, link, description}: CardItem) {
  return (
    <Link className={styles.card} to={link}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </Link>
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
            <div className={clsx(columns === 3 ? 'col col--4' : 'col col--3', styles.cardColumn)} key={item.title}>
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
        description="把课程笔记、论文阅读和项目实践放在同一套长期可维护的知识结构里。"
        items={learningFocus}
      />
      <Section
        title="Featured Projects"
        description="先建立清晰的项目入口，后续只补充真实完成的代码、实验记录和 Demo。"
        items={featuredProjects}
        columns={3}
      />
      <Section
        title="Latest Notes"
        description="优先从 Transformer、BERT、Attention 和 RAG 这些主线内容开始扩展。"
        items={latestNotes}
      />
      <section className={styles.aboutSection}>
        <div className="container">
          <Heading as="h2">About Me</Heading>
          <p>
            我正在系统学习 Deep Learning、NLP 和 LLM 应用开发。这个网站会作为个人技术作品集，沉淀笔记、论文阅读、项目文档和未来的 Hugging Face Spaces Demo。
          </p>
          <div className={styles.aboutActions}>
            <Link className="button button--outline button--primary" to="/about">
              More About This Site
            </Link>
            <Link className="button button--primary" to="/projects">
              View Project Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
