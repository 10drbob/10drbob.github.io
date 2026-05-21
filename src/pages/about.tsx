import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About(): ReactNode {
  return (
    <Layout title="About" description="About 10drbob and this AI learning portfolio">
      <main className="container margin-vert--xl">
        <Heading as="h1">About</Heading>
        <p>
          This is 10drbob&apos;s personal AI learning portfolio for Deep Learning, NLP, LLM application notes, paper
          reading, and practical projects.
        </p>
        <p>
          The current stage focuses on a clean information architecture and maintainable Docusaurus pages. Project pages
          will be expanded only when real code, experiment records, and reviewable artifacts are ready.
        </p>
        <p>
          Personal biography details can be updated after confirming the preferred name, education background, research
          interests, contact links, and public-facing tone.
        </p>
      </main>
    </Layout>
  );
}
