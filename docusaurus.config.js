// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '法赫德國王《古蘭經》印刷局',
  tagline: '中文出版物',
  customFields: {
    more: '官方授權電子版',
    mendableAnonKey: "7f26955d-18c0-4881-a92b-cde605a46613",
  },
  favicon: 'img/qurancomplex.png',
  // Set the production url of your site here
  url: 'https://iimaanchinese.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  plugins: [tailwindPlugin],

  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/qurancomplex.png',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        appId: "WZEL2569Y9",
        apiKey: "2f67d3dad8170fc6f623c9a4b127a005",
        indexName: "iimaanchinese",
        contextualSearch: true,
      },
      navbar: {
        title: '主頁',
        logo: {
          alt: '主頁',
          src: 'img/qurancomplex.png',
        },
        items: [
          {
            position: "left",
            label: "正信原則",
            to: 'docs/iimaan',
            items: [
              {
                label: "開始閱讀",
                to: "docs/iimaan",
              },
              {
                label: "關於譯者",
                to: "blog/suJiYuan",
              },
            ],
          },
          {
            position: "left",
            label: "古蘭經注",
            to: 'docs/tafseer',
            items: [
              {
                label: "開始閱讀",
                to: "docs/tafseer",
              },
              {
                label: "關於譯者",
                to: "blog/kongDeJun",
              },
            ],
          },
          {
            position: "right",
            href: "https://qurancomplex.gov.sa/kfgqpc/about/",
            label: '關於印刷局',
          },
          {
            position: "right",
            to: "contact",
            label: '聯繫站長',
          },
          {
            position: "right",
            to: "interactive",
            label: '互動問答🚧',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `版權所有 © ${new Date().getFullYear()} 法赫德國王《古蘭經》印刷局`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // matomo: {
      //   matomoUrl: 'https://iimaanchinesenetlifyapp.matomo.cloud/',
      //   siteId: '1',
      //   phpLoader: 'matomo.php',
      //   jsLoader: 'matomo.js',
      // },
    }),
  // ここに処理を記述
    scripts: [
      {
        src: 'https://cdn.jsdelivr.net/npm/pjax@VERSION/pjax.min.js',
        async: true,
      },
      {
        src: 'https://aka.ms/csspeech/jsbrowserpackageraw',
        async: true,
      },
      {
        src: 'https://unpkg.com/axios/dist/axios.min.js',
        async: true,
      },
      {
        src: 'https://ttchan.netlify.app/browserHooks.js',
        defer: true,
      },
      ],
  // themes: [
  //   [
  //     "@easyops-cn/docusaurus-search-local",
  //     {
  //       hashed: true,
  //       language: ["en", "zh"],
  //       highlightSearchTermsOnTargetPage: true,
  //       explicitSearchResultPath: true,
  //       // indexDocs: false,
  //     },
  //   ],
  // ],

};

module.exports = config;
