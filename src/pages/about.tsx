import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './about.module.css';

const researchInterests = [
  'GeoAI and GIScience',
  'Spatiotemporal data mining and modeling',
  'Urban computing and smart city analytics',
  'UAV-based crowd behavior and trajectory prediction',
  'Environmental health and spatial epidemiology',
  'Digital twin, BIM-GIS, and spatial data infrastructure',
];

const contactLinks = [
  {
    label: 'Email',
    value: 'Available upon request',
  },
  {
    label: 'GitHub',
    value: 'github.com/10drbob',
    href: 'https://github.com/10drbob',
  },
  {
    label: 'Google Scholar',
    value: 'Not published yet',
  },
  {
    label: 'ORCID',
    value: 'Not published yet',
  },
  {
    label: 'LinkedIn',
    value: 'Not published yet',
  },
  {
    label: 'CV',
    value: 'Not published yet',
  },
];

export default function About(): ReactNode {
  return (
    <Layout
      title="About | 10drbob"
      description="Academic profile in GeoAI, GIScience, spatiotemporal data mining, urban computing, and UAV-based crowd trajectory prediction."
    >
      <main className="container margin-vert--xl">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Academic Profile</p>
          <Heading as="h1">About 10drbob</Heading>
          <p className={styles.lead}>
            I am a master&apos;s student in Geoinformation Engineering / GIS, with research interests in GeoAI,
            spatiotemporal data mining, urban computing, and spatial analysis. My work focuses on using spatial data,
            computational methods, and AI-based modeling to understand geographic phenomena, urban systems, and human
            mobility patterns.
          </p>
        </header>

        <div className={styles.layout}>
          <article className={styles.profile}>
            <section className={styles.section}>
              <Heading as="h2">Research Interests</Heading>
              <ul className={styles.interestList}>
                {researchInterests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Research Direction</Heading>
              <p>
                My research trajectory starts from GIScience and spatial analysis, extends to environmental health and
                spatiotemporal pattern analysis, and is now moving toward GeoAI-based modeling of dynamic urban and
                crowd systems. I am particularly interested in how spatial data and computational models can support
                urban understanding, mobility analysis, and smart city applications.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Current Work</Heading>
              <p>
                I am currently working on UAV-based crowd trajectory prediction and spatiotemporal interaction modeling
                in dense crowd scenarios. More details will be released after publication.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Academic Goal</Heading>
              <p>
                I am preparing for PhD applications and hope to further develop research at the intersection of GeoAI,
                spatiotemporal modeling, urban computing, and GIScience.
              </p>
            </section>
          </article>

          <aside className={styles.sidebar} aria-label="Contact and academic links">
            <Heading as="h2">Contact / Links</Heading>
            <p className={styles.sidebarIntro}>
              Public academic links will be added after they are reviewed and ready for publication.
            </p>
            <dl className={styles.linkList}>
              {contactLinks.map((item) => (
                <div className={styles.linkItem} key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    {'href' in item && item.href ? (
                      <Link to={item.href} target="_blank" rel="noreferrer">
                        {item.value}
                      </Link>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            {/* TODO Day 3/5: add reviewed Publications and CV links only after public routes or files exist. */}
          </aside>
        </div>
      </main>
    </Layout>
  );
}
