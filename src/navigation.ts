import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Extensions',
      links: [
        {
          text: 'Round Robin (Advanced)',
          href: getPermalink('/extensions/round-robin'),
        },
        {
          text: 'Simple Round Robin',
          href: getPermalink('/extensions/simple-round-robin'),
        },
        {
          text: 'Human-in-the-Loop',
          href: getPermalink('/extensions/human-in-the-loop'),
        },
      ],
    },
    {
      text: 'Guides',
      links: [
        {
          text: 'Zapier Guides',
          href: '#',
        },
        {
          text: 'Round Robin in Zapier',
          href: getPermalink('/guides/zapier/round-robin'),
        },
        {
          text: 'Simple Round Robin in Zapier',
          href: getPermalink('/guides/zapier/simple-round-robin'),
        },
        {
          text: 'Human-in-the-Loop in Zapier',
          href: getPermalink('/guides/zapier/human-in-the-loop'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Get Started', href: getPermalink('/#extensions') }],
};

export const footerData = {
  links: [
    {
      title: 'Extensions',
      links: [
        { text: 'Round Robin (Advanced)', href: getPermalink('/extensions/round-robin') },
        { text: 'Simple Round Robin', href: getPermalink('/extensions/simple-round-robin') },
        { text: 'Human-in-the-Loop', href: getPermalink('/extensions/human-in-the-loop') },
      ],
    },
    {
      title: 'Guides',
      links: [
        { text: 'Round Robin in Zapier', href: getPermalink('/guides/zapier/round-robin') },
        { text: 'Simple Round Robin in Zapier', href: getPermalink('/guides/zapier/simple-round-robin') },
        { text: 'Human-in-the-Loop in Zapier', href: getPermalink('/guides/zapier/human-in-the-loop') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Documentation', href: '#' },
        { text: 'API Reference', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <a class="text-blue-600 underline dark:text-muted" href="https://enforcedflow.com">EnforcedFlow</a> · All rights reserved. · Proudly made in 🇳🇿
  `,
};
