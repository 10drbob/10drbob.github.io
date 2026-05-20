import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className={styles.eyebrow}>Personal AI Learning Portfolio</p>
        <Heading as="h1" className={styles.heroTitle}>
          10drbob
        </Heading>
        <p className={styles.heroSubtitle}>
          Deep Learning / NLP / LLM Notes & Practical AI Projects
        </p>
        <p className={styles.heroText}>
          这里用于长期整理深度学习、自然语言处理、论文阅读和实战项目记录。内容会从课程笔记、复现实验和项目文档开始，逐步扩展到 Hugging Face Spaces Demo。
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Start Reading Notes
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/projects/intro">
            View Projects
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
