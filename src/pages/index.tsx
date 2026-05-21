import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className={styles.eyebrow}>Personal AI Technology Portfolio</p>
        <Heading as="h1" className={styles.heroTitle}>
          10drbob
        </Heading>
        <p className={styles.heroSubtitle}>Deep Learning / NLP / LLM Notes & Practical AI Projects</p>
        <p className={styles.heroText}>
          A compact home for study notes, paper reading, implementation records, and practical AI projects. The
          portfolio keeps planned work clearly separated from completed experiments.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Start Reading Notes
          </Link>
          <Link className="button button--secondary button--lg" to="/projects">
            View Projects
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="10drbob" description="Deep Learning, NLP, LLM notes, and practical AI projects">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
