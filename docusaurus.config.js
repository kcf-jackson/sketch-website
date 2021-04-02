/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sketch',
  tagline: 'An R-to-JavaScript transpiler written in R',
  url: 'https://kcf-jackson.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kcf-jackson', // Usually your GitHub org/user name.
  projectName: 'sketch-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sketch',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          to: 'blog/', 
          label: 'News', 
          position: 'right'
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'tutorial/',
          label: 'Tutorial',
          position: 'right',
        },
        {
          to: 'showcase/',
          label: 'Showcase',
          position: 'right',
        },
        {
          to: 'api/',
          label: 'API',
          position: 'right',
        },
        {
          href: 'https://github.com/kcf-jackson/sketch',
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
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Guides',
              to: 'docs/guides',
            },
            {
              label: 'API',
              to: 'api/',
            },
            {
              label: 'About',
              to: 'docs/about',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Tutorial',
              to: "tutorial/"
            },
            {
              label: 'Showcase',
              to: "showcase/"
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kcf-jackson/sketch',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} Chun Fung Kwok, Kate Saunders | Apache-2.0 Licensed | Built with Docusaurus`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/kcf-jackson/sketch-website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kcf-jackson/sketch-website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
