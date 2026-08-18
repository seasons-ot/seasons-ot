import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Our Team',
      href: '/our-team',
    },
    {
      text: 'Services',
      href: '/services',
    },
    {
      text: 'Testimonials',
      href: '/client-love',
    },
  ],
  actions: [{ text: 'Connect', href: '/contact' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: '',
};
