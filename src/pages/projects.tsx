import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ProjectCard, {type ProjectCardProps} from '@site/src/components/ProjectCard';
import styles from './projects.module.css';

const projects: ProjectCardProps[] = [
  {
    title: 'BERT Sentiment Analysis',
    description:
      'Planned project for practicing BERT fine-tuning, sentiment classification, evaluation, and error analysis.',
    tags: ['NLP', 'BERT', 'Classification', 'PyTorch'],
    status: 'Planned',
    repoUrl: 'https://github.com/10drbob/bert-sentiment-analysis',
    docsUrl: '/docs/projects/sentiment-analysis',
  },
  {
    title: 'Text Classification Pipeline',
    description:
      'Planned project for organizing a practical text classification workflow from preprocessing to model comparison.',
    tags: ['NLP', 'Machine Learning', 'Scikit-learn', 'PyTorch'],
    status: 'Planned',
    repoUrl: 'https://github.com/10drbob/text-classification-pipeline',
    docsUrl: '/docs/projects/text-classification',
  },
  {
    title: 'Machine Translation Demo',
    description:
      'Planned sequence modeling demo for comparing Seq2Seq and Transformer-style translation workflows.',
    tags: ['Seq2Seq', 'Transformer', 'NLP'],
    status: 'Planned',
    repoUrl: 'https://github.com/10drbob/machine-translation-demo',
    docsUrl: '/docs/projects/machine-translation',
  },
  {
    title: 'RAG Question Answering System',
    description:
      'Planned RAG project for practicing document chunking, embeddings, vector search, retrieval, and answer generation.',
    tags: ['RAG', 'LLM', 'Embedding', 'Vector Search'],
    status: 'Planned',
    repoUrl: 'https://github.com/10drbob/rag-qa-system',
    docsUrl: '/docs/projects/rag-qa-system',
  },
];

export default function Projects(): ReactNode {
  return (
    <Layout title="Projects" description="Deep Learning and NLP practical AI projects">
      <main>
        <header className={styles.pageHeader}>
          <div className="container">
            <Heading as="h1">Projects</Heading>
            <p>
              A practical AI portfolio for Deep Learning, NLP, LLM, and RAG projects. Current items are planned
              project entries, and results will only be added after real experiments are completed.
            </p>
          </div>
        </header>
        <section className="container">
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
