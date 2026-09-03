export const siteConfig = {
  name: 'Developers Need',
  tagline: 'Developer tools, made simple.',
  description: 'Fast, free online developer tools for JSON, encoding, text processing, and more.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  email: 'support@developersneed.com',
  social: {
    github: 'https://github.com',
    twitter: 'https://twitter.com',
  },
  author: 'Developers Need',
  ogImage: '/og-image.png',
};

export const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Tools', href: '/tools' },
  { name: 'Categories', href: '/tools' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const footerLinks = {
  Product: [
    { name: 'Tools', href: '/tools' },
    { name: 'Categories', href: '/tools' },
    { name: 'Blog', href: '/blog' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  Legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
};
