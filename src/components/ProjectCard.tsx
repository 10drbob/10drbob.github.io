import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './ProjectCard.module.css';

export type ProjectCardProps = {
  title: string;
  description: ReactNode;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  docsUrl: string;
  status: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  repoUrl,
  demoUrl,
  docsUrl,
  status,
}: ProjectCardProps): ReactNode {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <Heading as="h2" className={styles.title}>
          {title}
        </Heading>
        <span className={styles.status}>{status}</span>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags} aria-label={`${title} tags`}>
        {tags.map((tag) => (
          <span className={styles.tag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.actions}>
        <a
          className="button button--primary button--sm"
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} GitHub repository placeholder`}
        >
          GitHub Repo
        </a>
        <Link className="button button--secondary button--sm" to={docsUrl}>
          Docs
        </Link>
        {demoUrl ? (
          <a className="button button--outline button--primary button--sm" href={demoUrl} target="_blank" rel="noreferrer">
            Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
