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
    description: 'Neural networks, optimization, CNNs, RNNs, Transformers, and reproducible training practice.',
  },
  {
    title: 'Natural Language Processing',
    link: '/docs/nlp/intro',
    description: 'Tokenization, embeddings, attention, BERT, GPT-style models, and text classification workflows.',
  },
  {
    title: 'Large Language Models',
    link: '/docs/nlp/gpt',
    description: 'LLM fundamentals, prompting patterns, generation behavior, and practical application notes.',
  },
  {
    title: 'Retrieval-Augmented Generation',
    link: '/docs/nlp/rag',
    description: 'Chunking, embeddings, vector search, retrieval quality, reranking, and grounded answer generation.',
  },
];

const featuredProjects: CardItem[] = [
  {
    title: 'BERT Sentiment Analysis',
    link: '/docs/projects/sentiment-analysis',
    description: 'Planned BERT fine-tuning project for sentiment classification and error analysis.',
  },
  {
    title: 'Text Classification Pipeline',
    link: '/docs/projects/text-classification',
    description: 'Planned end-to-end pipeline from preprocessing to baseline comparison and evaluation.',
  },
  {
    title: 'RAG Question Answering System',
    link: '/docs/projects/rag-qa-system',
    description: 'Planned document QA system combining embeddings, vector retrieval, and LLM answer generation.',
  },
];

const latestNotes: CardItem[] = [
  {
    title: 'Transformer',
    link: '/docs/deep-learning/transformer',
    description: 'Self-attention, multi-head attention, positional encoding, and Transformer blocks.',
  },
  {
    title: 'BERT',
    link: '/docs/nlp/bert',
    description: 'Encoder-only Transformers, masked language modeling, and fine-tuning tasks.',
  },
  {
    title: 'Attention',
    link: '/docs/nlp/attention',
    description: 'Query, key, value, attention weights, and how attention supports sequence modeling.',
  },
  {
    title: 'RAG',
    link: '/docs/nlp/rag',
    description: 'The basic retrieval-augmented generation workflow and project implementation entry point.',
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
        description="Core learning tracks that connect course notes, paper reading, and implementation practice."
        items={learningFocus}
      />
      <Section
        title="Featured Projects"
        description="Project entries are intentionally conservative: planned work stays planned until code, logs, and results exist."
        items={featuredProjects}
        columns={3}
      />
      <Section
        title="Latest Notes"
        description="Starting points for the main AI learning threads currently being organized."
        items={latestNotes}
      />
      <section className={styles.aboutSection}>
        <div className="container">
          <Heading as="h2">About Me</Heading>
          <p>
            I am building this site as a long-term AI learning portfolio. It collects Deep Learning, NLP, LLM,
            paper-reading, and project documentation in one maintainable Docusaurus workspace.
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
