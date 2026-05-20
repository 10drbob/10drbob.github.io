import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'fdghu | Deep Learning & NLP Notes',
  tagline: 'Learning Deep Learning, NLP, LLMs, and building practical AI projects.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://fdghu.github.io',
  baseUrl: '/',

  organizationName: 'fdghu',
  projectName: 'fdghu.github.io',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'fdghu',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'notesSidebar',
          position: 'left',
          label: 'Notes',
        },
        {to: '/docs/projects/intro', label: 'Projects', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/fdghu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Deep Learning',
              to: '/docs/deep-learning/intro',
            },
            {
              label: 'NLP',
              to: '/docs/nlp/intro',
            },
            {
              label: 'Paper Reading',
              to: '/docs/paper-reading/intro',
            },
          ],
        },
        {
          title: 'Portfolio',
          items: [
            {
              label: 'Projects',
              to: '/docs/projects/intro',
            },
            {
              label: 'About',
              to: '/about',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fdghu',
            },
            {
              label: 'Start Here',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} fdghu. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
