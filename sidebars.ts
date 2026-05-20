import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  notesSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Deep Learning',
      items: ['deep-learning/intro'],
    },
    {
      type: 'category',
      label: 'NLP',
      items: ['nlp/intro'],
    },
    {
      type: 'category',
      label: 'Paper Reading',
      items: ['paper-reading/intro'],
    },
    {
      type: 'category',
      label: 'Projects',
      items: ['projects/intro'],
    },
  ],
};

export default sidebars;
