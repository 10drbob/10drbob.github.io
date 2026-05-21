import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ProjectCard, {type ProjectCardProps} from '@site/src/components/ProjectCard';
import styles from './projects.module.css';

const repoPlaceholder = 'https://github.com/10drbob?tab=repositories';

const plannedProjects: ProjectCardProps[] = [
  {
    title: 'BERT Sentiment Analysis',
    description:
      'Planned project for practicing BERT fine-tuning, sentiment classification, evaluation, and error analysis.',
    tags: ['NLP', 'BERT', 'Classification', 'PyTorch'],
    status: 'Planned',
    repoUrl: repoPlaceholder,
    docsUrl: '/docs/projects/sentiment-analysis',
  },
  {
    title: 'Text Classification Pipeline',
    description:
      'Planned project for organizing a practical text classification workflow from preprocessing to model comparison.',
    tags: ['NLP', 'Machine Learning', 'Scikit-learn', 'PyTorch'],
    status: 'Planned',
    repoUrl: repoPlaceholder,
    docsUrl: '/docs/projects/text-classification',
  },
  {
    title: 'Machine Translation Demo',
    description:
      'Planned sequence modeling demo for comparing Seq2Seq and Transformer-style translation workflows.',
    tags: ['Seq2Seq', 'Transformer', 'NLP'],
    status: 'Planned',
    repoUrl: repoPlaceholder,
    docsUrl: '/docs/projects/machine-translation',
  },
  {
    title: 'RAG Question Answering System',
    description:
      'Planned RAG project for practicing document chunking, embeddings, vector search, retrieval, and answer generation.',
    tags: ['RAG', 'LLM', 'Embedding', 'Vector Search'],
    status: 'Planned',
    repoUrl: repoPlaceholder,
    docsUrl: '/docs/projects/rag-qa-system',
  },
];

const courseworkProjects: ProjectCardProps[] = [
  {
    title: 'Image Captioning with Attention',
    description:
      'Local learning-project archive with CNN encoder, RNN/attention decoder, and beam-search evaluation workflow notes.',
    tags: ['Deep Learning', 'Image Captioning', 'Attention', 'PyTorch'],
    status: 'Local archive',
    repoUrl: repoPlaceholder,
    docsUrl: '/docs/projects/image-captioning',
  },
  {
    title: 'SRGAN Super Resolution',
    description:
      'Local learning-project package for super-resolution practice, adapted from an open-source SRGAN baseline.',
    tags: ['Deep Learning', 'SRGAN', 'Super Resolution', 'PyTorch'],
    status: 'Local archive',
    repoUrl: repoPlaceholder,
    docsUrl: '/docs/projects/srgan-super-resolution',
  },
  {
    title: 'Decision Tree Game Outcome Prediction',
    description:
      'Machine learning practice around early-game League of Legends features, decision trees, feature processing, and evaluation.',
    tags: ['Machine Learning', 'Decision Tree', 'Classification', 'Scikit-learn'],
    status: 'Local archive',
    repoUrl: repoPlaceholder,
    docsUrl: '/docs/projects/decision-tree-lol',
  },
];

function ProjectSection({title, description, projects}: {title: string; description: string; projects: ProjectCardProps[]}) {
  return (
    <section className="container">
      <div className={styles.sectionHeader}>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default function Projects(): ReactNode {
  return (
    <Layout title="Projects" description="Deep Learning and NLP practical AI projects">
      <main>
        <header className={styles.pageHeader}>
          <div className="container">
            <Heading as="h1">Projects</Heading>
            <p>
              A practical AI portfolio for Deep Learning, NLP, LLM, and RAG work. Planned items are marked clearly, and
              completed results will only be added after code, logs, and evidence are ready.
            </p>
          </div>
        </header>
        <ProjectSection
          title="Planned AI Projects"
          description="These are the next portfolio projects to build and document. The GitHub links are placeholders until repositories are published."
          projects={plannedProjects}
        />
        <ProjectSection
          title="Learning Project Archive"
          description="Selected local learning-project materials, packaged as public-facing notes without uploading private course slides, datasets, model weights, or machine-specific files."
          projects={courseworkProjects}
        />
      </main>
    </Layout>
  );
}
