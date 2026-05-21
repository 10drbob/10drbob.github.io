import type {ReactNode} from 'react';
import styles from './SpaceEmbed.module.css';

export type SpaceEmbedProps = {
  title: string;
  spaceUrl?: string;
  height?: number;
};

export default function SpaceEmbed({
  title,
  spaceUrl,
  height = 600,
}: SpaceEmbedProps): ReactNode {
  if (!spaceUrl) {
    return (
      <section className={styles.placeholder} aria-label={`${title} demo placeholder`}>
        <p className={styles.eyebrow}>{title}</p>
        <p className={styles.placeholderTitle}>Demo coming soon</p>
        <p className={styles.placeholderText}>
          A real Hugging Face Space URL will be added after the demo is built and reviewed.
        </p>
      </section>
    );
  }

  return (
    <div className={styles.embed}>
      <iframe
        className={styles.frame}
        src={spaceUrl}
        title={`${title} Hugging Face Space`}
        height={height}
        loading="lazy"
      />
    </div>
  );
}
