import { getPermalink, getBlogPermalink } from './utils/permalinks';

const extensionLinks = [
  {
    text: 'Advanced Round Robin',
    href: getPermalink('/extensions/advanced-round-robin'),
  },
  {
    text: 'Simple Round Robin',
    href: getPermalink('/extensions/simple-round-robin'),
  },
  {
    text: 'Human-in-the-Loop',
    href: getPermalink('/extensions/human-in-the-loop'),
  },
];

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Extensions',
      links: extensionLinks,
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get Started', href: getPermalink('/#extensions') }],
};

export const footerData = {
  links: [
    {
      title: 'Extensions',
      links: extensionLinks,
    },
    // {
    //   title: 'Guides',
    //   links: [
    //     {
    //       text: 'Advanced Round Robin in Zapier',
    //       href: getPermalink('/extensions/advanced-round-robin/guides/zapier/setup'),
    //     },
    //     { text: 'Simple Round Robin in Zapier', href: getPermalink('/guides/zapier/simple-round-robin') },
    //     { text: 'Human-in-the-Loop in Zapier', href: getPermalink('/guides/zapier/human-in-the-loop') },
    //   ],
    // },
    // {
    //   title: 'Resources',
    //   links: [
    //     { text: 'Blog', href: getBlogPermalink() },
    //     { text: 'Documentation', href: '#' },
    //     { text: 'API Reference', href: '#' },
    //   ],
    // },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'API', href: 'https://app.enforcedflow.com/docs/api' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    <a class="text-blue-600 underline dark:text-muted" href="https://enforcedflow.com">EnforcedFlow</a> · All rights reserved. · Proudly made in 🇳🇿
  `,
};
