export interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

const SITE_URL = 'https://www.sugamkandel.com.np';

const homeSeo: PageSeo = {
  title: 'Sugam Kandel | CS Student Portfolio - +2 Management, Nepal',
  description:
    'Portfolio of Sugam Kandel, a Computer Science student in Butwal, Nepal pursuing +2 Management. Follow his coding journey with TypeScript, React & Tailwind CSS projects.',
  canonical: `${SITE_URL}/`,
  ogTitle: 'Sugam Kandel | CS Student Portfolio - +2 Management, Nepal',
  ogDescription:
    'Computer Science student portfolio from Butwal, Nepal — a coding journey with TypeScript, React & Tailwind CSS, motorbike enthusiasm, and travel stories.',
};

const routeSeo: Record<string, PageSeo> = {
  '/passions': {
    title: 'Passions of Sugam Kandel | Coding, Bikes, Travel & Movies',
    description:
      'Discover what inspires Sugam Kandel — a Computer Science student learning web development, researching motorbike engineering, and traveling across Nepal. Coding, bikes, travel & cinema from Butwal, Rupandehi.',
    canonical: `${SITE_URL}/passions`,
    ogTitle: 'Sugam Kandel Passions | Coding, Bikes, Travel & Movies',
    ogDescription:
      'Software development learning journey, motorbike exploring, travel & experiences, and cinema — the passions of a Computer Science student based in Butwal, Nepal.',
  },
  '/journey': {
    title: 'Sugam Kandel Journey | Coding Milestones & Timeline',
    description:
      'Timeline of Sugam Kandel — SEE graduation, first coding project, moving to Butwal, and Grade 11 Computer Science studies. A student web development learning journey in Nepal.',
    canonical: `${SITE_URL}/journey`,
    ogTitle: 'Sugam Kandel Journey | Coding Milestones & Timeline',
    ogDescription:
      'Milestones and timeline of Sugam Kandel — education, first coding project, bike exploration, and travel across Nepal.',
  },
  '/stats': {
    title: 'Sugam Kandel Stats | Coding, Bikes, Travel & Academics',
    description:
      'Quick stats of Sugam Kandel — 3+ months of coding practice, 25+ motorbike models researched, 10+ travel spots explored, and an active Computer Science student in Butwal, Nepal.',
    canonical: `${SITE_URL}/stats`,
    ogTitle: 'Sugam Kandel Stats | Coding, Bikes, Travel & Academics',
    ogDescription:
      'Coding journey, bikes researched, travel spots explored, and Grade 11 CS — the stats behind Sugam Kandel.',
  },
  '/education': {
    title: 'Sugam Kandel Education | Computer Science Student, Butwal Nepal',
    description:
      'Education of Sugam Kandel — a Grade 11 Computer Science student pursuing +2 Management in Butwal, Nepal. SEE graduate with roots in the hills of western Nepal.',
    canonical: `${SITE_URL}/education`,
    ogTitle: 'Sugam Kandel Education | Computer Science Student, Butwal Nepal',
    ogDescription:
      'Sugam Kandel is a Grade 11 Computer Science student pursuing +2 Management in Butwal, Nepal.',
  },
  '/blog': {
    title: 'Sugam Kandel Blog | Coding, Bikes & Travel Stories',
    description:
      'Read blog posts by Sugam Kandel — learning to code as a teenager, first coding project, motorbike engineering, and travel experiences across Nepal. A student coding blog from Butwal.',
    canonical: `${SITE_URL}/blog`,
    ogTitle: 'Sugam Kandel Blog | Coding, Bikes & Travel Stories',
    ogDescription:
      'Stories and perspectives from Sugam Kandel — coding revelations, motorbike passion, and travel experiences across Nepal.',
  },
  '/contact': {
    title: 'Contact Sugam Kandel | Get in Touch from Butwal, Nepal',
    description:
      'Get in touch with Sugam Kandel for collaborations, motorbike discussions, or travels. Based in Butwal, Rupandehi, Nepal.',
    canonical: `${SITE_URL}/contact`,
    ogTitle: 'Contact Sugam Kandel | Get in Touch from Butwal, Nepal',
    ogDescription:
      'Contact Sugam Kandel — web development collaborations, motorbike talks, or travel experiences.',
  },
};

export function getPageSeo(pathname: string): PageSeo {
  return routeSeo[pathname] ?? homeSeo;
}