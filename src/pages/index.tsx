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
        <p className={styles.heroSubtitle}>Deep Learning / NLP / LLM Notes & Practical AI Projects</p>
        <p className={styles.heroText}>
          这里用于长期整理 Deep Learning、NLP、LLM 课程笔记、论文阅读和 practical AI projects。项目会先从可复查的文档和代码记录开始，再逐步扩展到 Hugging Face Spaces Demo。
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
