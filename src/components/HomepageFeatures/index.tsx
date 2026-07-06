import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type CardItem = {
  title: string;
  link?: string;
  description: ReactNode;
};

const researchFocus: CardItem[] = [
  {
    title: 'GeoAI & GIScience',
    description: 'Applying AI and spatial analysis methods to understand geographic phenomena and urban systems.',
  },
  {
    title: 'Spatiotemporal Data Mining',
    description: 'Modeling spatial-temporal patterns in trajectories, environmental data, and urban dynamics.',
  },
  {
    title: 'UAV-based Crowd Behavior & Trajectory Prediction',
    description:
      'Studying human mobility and interaction patterns in dense crowd scenes under UAV views. Details will be released after publication.',
  },
  {
    title: 'Urban Computing & Smart City',
    description:
      'Using spatial data, computational methods, and urban analytics to support smarter and more sustainable cities.',
  },
];

const siteSections: CardItem[] = [
  {
    title: 'Research Projects',
    link: '/projects',
    description:
      'Public-facing project entries, with ongoing work kept at a high level until code, data, and results are ready to release.',
  },
  {
    title: 'Technical Notes',
    link: '/docs/intro',
    description:
      'Selected technical notes that support my research preparation, including AI, spatial data methods, and reproducible practice.',
  },
  {
    title: 'About & Contact',
    link: '/about',
    description:
      'A concise profile page for education background, research interests, links, and future PhD application materials.',
  },
];

function InfoCard({title, link, description}: CardItem) {
  const cardContent = (
    <>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </>
  );

  if (link) {
    return (
      <Link className={clsx(styles.card, styles.cardLink)} to={link}>
        {cardContent}
      </Link>
    );
  }

  return <article className={styles.card}>{cardContent}</article>;
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
        title="Research Focus"
        description="My current academic direction connects GeoAI, GIScience, spatiotemporal modeling, and urban analytics."
        items={researchFocus}
      />
      <Section
        title="Site Sections"
        description="The existing notes, project pages, and blog remain available, but the homepage now centers the academic research identity."
        items={siteSections}
        columns={3}
      />
      <section className={styles.aboutSection}>
        <div className="container">
          <Heading as="h2">Academic Profile</Heading>
          <p>
            I am a master&apos;s student in Geoinformation Engineering / GIS, preparing this website as a concise academic
            portfolio for PhD applications. I am currently working on UAV-based crowd trajectory prediction and
            spatiotemporal interaction modeling in dense crowd scenarios. More details will be released after
            publication.
          </p>
          <div className={styles.aboutActions}>
            <Link className="button button--outline button--primary" to="/about">
              About
            </Link>
            <Link className="button button--primary" to="/projects">
              Research Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
