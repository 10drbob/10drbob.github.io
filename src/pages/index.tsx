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
        <p className={styles.eyebrow}>Academic Portfolio for PhD Applications</p>
        <Heading as="h1" className={styles.heroTitle}>
          GeoAI · Spatiotemporal Data · Urban Computing
        </Heading>
        <p className={styles.heroSubtitle}>
          I am a GIS master&apos;s student working on GeoAI, spatiotemporal data mining, urban computing, and UAV-based
          crowd behavior / trajectory prediction.
        </p>
        <p className={styles.heroText}>
          This website presents my academic interests, research-oriented projects, and technical notes with a focus on
          GIScience, spatial analysis, smart city research, and responsible public documentation.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/projects">
            Research
          </Link>
          {/* TODO Day 3/5: add Publications and CV links after those pages or reviewed files exist. */}
          <a className="button button--secondary button--lg" href="https://github.com/10drbob" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="GeoAI & Spatiotemporal Research"
      description="Personal academic website for GeoAI, spatiotemporal data mining, urban computing, and UAV-based crowd trajectory prediction."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
