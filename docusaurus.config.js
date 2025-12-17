import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI Book',
  tagline: 'A Hands-On Guide to Building Intelligent Systems',
  favicon: 'img/favicon.ico',
  customFields: {
    description: 'An educational technical book on Physical AI and Humanoid Robotics for AI engineers, robotics developers, and students, covering ROS 2, Gazebo, NVIDIA Isaac, and Vision-Language-Action.',
  },

  future: {
    v4: true,
  },

  // ===============================
  // GitHub Pages Deployment Config
  // ===============================
  url: 'https://haramain-talat.github.io',
  baseUrl: '/ai-book/',

  organizationName: 'Haramain-Talat',
  projectName: 'ai-book',

  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Haramain-Talat/ai-book/edit/main/',
        },
        blog: false, // Blog disabled (clean book-style docs)
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI Book',
      logo: {
        alt: 'Physical AI Book Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/Haramain-Talat/ai-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Haramain-Talat/ai-book',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI Book.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
