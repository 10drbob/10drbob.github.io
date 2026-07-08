import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './publications.module.css';

type PublicationItem = {
  title: string;
  status: string;
  description: string;
  keywords: string[];
};

const publishedPlaceholders: PublicationItem[] = [
  {
    title: 'Published papers will be listed here after bibliographic details are finalized',
    status: 'Published / accepted work',
    description:
      'Selected spatial analysis and GIScience-related work will be added with full citation information, DOI, and public links when those details are available and safe to disclose.',
    keywords: ['GIScience', 'Spatial analysis', 'Academic portfolio'],
  },
];

const underReviewItems: PublicationItem[] = [
  {
    title: 'Global spatiotemporal patterns of female early-onset cancers',
    status: 'Manuscript under review / in revision',
    description:
      'This work studies global spatiotemporal patterns of all cancers and selected early-onset cancers among females using population-based data. Full citation details will be added after publication.',
    keywords: ['Environmental health', 'Spatial epidemiology', 'Spatiotemporal analysis'],
  },
];

const preparationItems: PublicationItem[] = [
  {
    title: 'Environmental exposure and early-onset colorectal cancer',
    status: 'Work in preparation',
    description:
      'This study investigates associations between environmental exposure factors and early-onset colorectal cancer burden using spatial and epidemiological analysis. Details will be added after manuscript submission or publication.',
    keywords: ['Environmental exposure', 'Early-onset colorectal cancer', 'Spatial analysis'],
  },
  {
    title: 'UAV-based crowd trajectory prediction',
    status: 'Ongoing work',
    description:
      'This project focuses on UAV-based crowd trajectory prediction and spatiotemporal interaction modeling in dense crowd scenarios. More details will be released after publication.',
    keywords: ['UAV-based trajectory prediction', 'Urban computing', 'Spatiotemporal modeling'],
  },
];

function PublicationCard({item}: {item: PublicationItem}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <Heading as="h3">{item.title}</Heading>
        <span>{item.status}</span>
      </div>
      <p>{item.description}</p>
      <ul className={styles.keywords} aria-label={`Keywords for ${item.title}`}>
        {item.keywords.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>
    </article>
  );
}

function PublicationSection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: PublicationItem[];
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.cardList}>
        {items.map((item) => (
          <PublicationCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}

export default function Publications(): ReactNode {
  return (
    <Layout
      title="Publications | 10drbob"
      description="Published work, manuscripts under review, and selected ongoing research in GIScience, GeoAI, spatiotemporal analysis, environmental health, and UAV-based crowd trajectory prediction."
    >
      <main className="container margin-vert--xl">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Academic Output</p>
          <Heading as="h1">Publications</Heading>
          <p className={styles.lead}>
            This page summarizes my published work, manuscripts under review, and selected ongoing research. For
            unpublished projects, only high-level and non-confidential information is shown.
          </p>
        </header>

        <PublicationSection
          title="Published / Accepted"
          description="Only work that is already published, accepted, or otherwise safe to disclose publicly will be listed here."
          items={publishedPlaceholders}
        />

        <PublicationSection
          title="Manuscripts Under Review / In Revision"
          description="Entries in this section use cautious, high-level wording and avoid confidential review or submission details."
          items={underReviewItems}
        />

        <PublicationSection
          title="Work in Preparation"
          description="Ongoing work is represented with topic-level descriptions only. Detailed methods and results will be added after public release."
          items={preparationItems}
        />

        <section className={styles.disclosure}>
          <Heading as="h2">Disclosure Note</Heading>
          <p>
            For manuscripts that are under review or in preparation, this page only provides high-level topic
            descriptions. Detailed methods, experimental results, manuscript identifiers, reviewer comments, and
            confidential collaboration materials are not disclosed before publication.
          </p>
        </section>
      </main>
    </Layout>
  );
}
