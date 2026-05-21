import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  notesSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Examples',
      items: ['examples/technical-writing-demo'],
    },
    {
      type: 'category',
      label: 'Deep Learning',
      link: {
        type: 'doc',
        id: 'deep-learning/intro',
      },
      items: [
        'deep-learning/neural-network-basics',
        'deep-learning/backpropagation',
        'deep-learning/optimization',
        'deep-learning/cnn',
        'deep-learning/rnn-lstm-gru',
        'deep-learning/transformer',
      ],
    },
    {
      type: 'category',
      label: 'NLP',
      link: {
        type: 'doc',
        id: 'nlp/intro',
      },
      items: [
        'nlp/tokenization',
        'nlp/word-embedding',
        'nlp/attention',
        'nlp/bert',
        'nlp/gpt',
        'nlp/rag',
      ],
    },
    {
      type: 'category',
      label: 'Paper Reading',
      link: {
        type: 'doc',
        id: 'paper-reading/intro',
      },
      items: [
        'paper-reading/attention-is-all-you-need',
        'paper-reading/bert',
        'paper-reading/gpt-series',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      link: {
        type: 'doc',
        id: 'projects/intro',
      },
      items: [
        'projects/text-classification',
        'projects/sentiment-analysis',
        'projects/machine-translation',
        'projects/rag-qa-system',
        'projects/image-captioning',
        'projects/srgan-super-resolution',
        'projects/decision-tree-lol',
      ],
    },
  ],
};

export default sidebars;
