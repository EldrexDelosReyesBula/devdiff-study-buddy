import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'DevDiff Study Buddy',
  description: 'Universal Code Explanation Engine — Explains ANY code across 5 progressive levels',
  base: '/devdiff-study-buddy/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'DevDiff Study Buddy Documentation' }],
    ['meta', { property: 'og:description', content: 'Your patient senior developer in the terminal and editor. Explains ANY code in ANY language across 5 levels.' }],
  ],

  themeConfig: {
    siteTitle: '🎓 DevDiff Study Buddy',
    
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: '5 Levels', link: '/guide/levels' },
      { text: 'Languages', link: '/guide/languages' },
      { text: 'CLI Reference', link: '/guide/cli' },
      { text: 'AI Router', link: '/guide/ai-routing' },
      { text: 'Troubleshooting', link: '/guide/troubleshooting' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction & Setup', link: '/guide/getting-started' },
          { text: 'The 5 Learning Levels', link: '/guide/levels' },
        ],
      },
      {
        text: 'Language Explainers',
        items: [
          { text: 'Languages Overview', link: '/guide/languages' },
          { text: 'CSS & SCSS Explainer', link: '/guide/languages/css' },
          { text: 'TypeScript & JavaScript', link: '/guide/languages/typescript' },
          { text: 'Python Explainer', link: '/guide/languages/python' },
          { text: 'Rust & Go Explainer', link: '/guide/languages/rust-go' },
          { text: 'Universal Fallback Engine', link: '/guide/languages/universal' },
        ],
      },
      {
        text: 'CLI & Architecture',
        items: [
          { text: 'CLI Commands Reference', link: '/guide/cli' },
          { text: 'Smart AI Routing', link: '/guide/ai-routing' },
        ],
      },
      {
        text: 'Help & Support',
        items: [
          { text: 'Troubleshooting & FAQ', link: '/guide/troubleshooting' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EldrexDelosReyesBula/devdiff-study-buddy' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Eldrex Delos Reyes Bula and Contributors',
    },

    search: {
      provider: 'local',
    },
  },
});
