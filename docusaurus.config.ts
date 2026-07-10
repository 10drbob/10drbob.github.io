import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const config: Config = {
  title: '10drbob | GeoAI & Spatiotemporal Research',
  tagline: 'Academic portfolio in GeoAI, GIScience, spatiotemporal data, and urban computing',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://10drbob.github.io',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: '10drbob',
  projectName: '10drbob.github.io',

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
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
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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

  themes: ['@docusaurus/theme-mermaid'],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.47/dist/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '10drbob',
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/publications', label: 'Publications', position: 'left'},
        {to: '/projects', label: 'Research', position: 'left'},
        {to: '/cv', label: 'CV', position: 'left'},
        {
          type: 'dropdown',
          position: 'left',
          label: 'Technical Notes',
          items: [
            {
              label: 'Notes Overview',
              to: '/docs/intro',
            },
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
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/10drbob',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Technical Notes',
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
          title: 'Academic Portfolio',
          items: [
            {
              label: 'Publications',
              to: '/publications',
            },
            {
              label: 'Research',
              to: '/projects',
            },
            {
              label: 'CV',
              to: '/cv',
            },
            {
              label: 'Research Docs',
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
              href: 'https://github.com/10drbob',
            },
            {
              label: 'Start Here',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 10drbob. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
