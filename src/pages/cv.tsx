import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './cv.module.css';

type Experience = {
  title: string;
  description: string;
};

type SkillGroup = {
  title: string;
  skills: string[];
};

const researchExperience: Experience[] = [
  {
    title: 'Environmental health and spatial analysis',
    description: 'Spatial analysis and spatiotemporal pattern analysis in environmental health research.',
  },
  {
    title: 'UAV-based crowd trajectory prediction',
    description: 'UAV-based crowd trajectory prediction and spatiotemporal interaction modeling in dense crowd scenarios.',
  },
  {
    title: 'GeoAI and urban computing',
    description: 'GIScience, GeoAI, and urban computing-oriented research preparation for PhD applications.',
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: 'GIScience and Spatial Analysis',
    skills: [
      'GIScience foundations',
      'Spatial analysis',
      'Spatiotemporal data processing',
      'Spatial epidemiology',
      'Urban spatial analytics',
    ],
  },
  {
    title: 'GeoAI and Data Modeling',
    skills: [
      'GeoAI-oriented modeling',
      'Spatiotemporal data mining',
      'Trajectory analysis',
      'Crowd behavior analysis',
      'Predictive modeling',
    ],
  },
  {
    title: 'Programming and Data Tools',
    skills: ['Python', 'Data preprocessing', 'Statistical analysis', 'Visualization', 'Reproducible research workflows'],
  },
  {
    title: 'Web and Documentation',
    skills: ['GitHub Pages', 'Git / GitHub', 'Markdown / MDX', 'Academic website maintenance', 'Research documentation'],
  },
];

function SkillGroupCard({group}: {group: SkillGroup}) {
  return (
    <section className={styles.skillCard}>
      <Heading as="h3">{group.title}</Heading>
      <ul>
        {group.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default function Cv(): ReactNode {
  return (
    <Layout
      title="CV | 10drbob"
      description="Academic CV and skills overview in GIScience, GeoAI, spatiotemporal analysis, urban computing, environmental health, and UAV-based crowd trajectory prediction."
    >
      <main className="container margin-vert--xl">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Academic Profile</p>
          <Heading as="h1">CV</Heading>
          <p className={styles.lead}>
            A full academic CV will be added here after final review. For now, this page summarizes my research
            direction, technical background, and selected skills relevant to PhD applications in GIScience, GeoAI,
            spatiotemporal modeling, urban computing, and spatial analysis.
          </p>
        </header>

        <div className={styles.layout}>
          <article className={styles.content}>
            <section className={styles.section}>
              <Heading as="h2">Research Direction</Heading>
              <p>
                I am a master&apos;s student in Geoinformation Engineering / GIS, with interests in GeoAI, GIScience,
                spatiotemporal data mining, urban computing, spatial analysis, environmental health, and UAV-based
                crowd trajectory prediction.
              </p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Education</Heading>
              <p>Education details will be added after final confirmation.</p>
            </section>

            <section className={styles.section}>
              <Heading as="h2">Research Experience</Heading>
              <div className={styles.experienceList}>
                {researchExperience.map((item) => (
                  <article className={styles.experience} key={item.title}>
                    <Heading as="h3">{item.title}</Heading>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <div>
                  <Heading as="h2">Skills / Toolbox</Heading>
                  <p>Selected research and technical capabilities presented at a practical, high-level scope.</p>
                </div>
              </div>
              <div className={styles.skillGrid}>
                {skillGroups.map((group) => (
                  <SkillGroupCard group={group} key={group.title} />
                ))}
              </div>
            </section>
          </article>

          <aside className={styles.sidebar} aria-label="CV links">
            <Heading as="h2">CV PDF</Heading>
            <p>
              A downloadable academic CV is not available yet. A reviewed PDF version will be added after final
              confirmation.
            </p>
            <Link className={styles.aboutLink} to="/about">
              View academic profile
            </Link>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
