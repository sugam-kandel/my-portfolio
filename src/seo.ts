export interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

const SITE_URL = 'https://sugamkandel.com.np';

const homeSeo: PageSeo = {
  title: 'Sugam Kandel | CS Student - +2 Management at Everest',
  description:
    'Official website of Sugam Kandel — a Computer Science student pursuing +2 Management at Everest, from Butwal, Nepal.',
  canonical: `${SITE_URL}/`,
  ogTitle: 'Sugam Kandel | CS Student - +2 Management at Everest',
  ogDescription:
    'Explore the portfolio of Sugam Kandel — computer science student, motorbike enthusiast, and traveler from Butwal, Nepal.',
};

const routeSeo: Record<string, PageSeo> = {
  '/passions': {
    title: 'Passions of Sugam Kandel | Coding, Bikes, Travel & Movies',
    description:
      'Discover what inspires Sugam Kandel — software development, motorbike exploring, traveling across Nepal, and cinema & storytelling from Butwal, Rupandehi.',
    canonical: `${SITE_URL}/passions`,
    ogTitle: 'Sugam Kandel Passions | Coding, Bikes, Travel & Movies',
    ogDescription:
      'Software development, motorbike exploring, travel & experiences, and cinema & storytelling — the passions of Sugam Kandel.',
  },
  '/journey': {
    title: 'Sugam Kandel Journey | Timeline of Milestones',
    description:
      'Follow the journey of Sugam Kandel — high school graduation, Grade 11 Computer Science studies, and his first coding project.',
    canonical: `${SITE_URL}/journey`,
    ogTitle: 'Sugam Kandel Journey | Timeline of Milestones',
    ogDescription:
      'Milestones and timeline of Sugam Kandel — education, coding, bike exploration, and travel across Nepal.',
  },
  '/stats': {
    title: 'Sugam Kandel Stats | Coding, Bikes, Travel & Academics',
    description:
      'Quick stats of Sugam Kandel — 3+ months of coding, 25+ motorbike models researched, 10+ travel spots explored, and an active Computer Science student in Butwal.',
    canonical: `${SITE_URL}/stats`,
    ogTitle: 'Sugam Kandel Stats | Coding, Bikes, Travel & Academics',
    ogDescription:
      'Coding journey, bikes researched, travel spots explored, and Grade 11 CS — the stats behind Sugam Kandel.',
  },
  '/education': {
    title: 'Sugam Kandel Education | Everest Secondary School Butwal',
    description:
      'Education background of Sugam Kandel — Grade 11 & 12 Computer Science (Management stream) at Everest English Boarding Secondary School Butwal, SEE graduate from Rainbow English Boarding School, roots in the hills of western Nepal.',
    canonical: `${SITE_URL}/education`,
    ogTitle: 'Sugam Kandel Education | Everest Secondary School Butwal',
    ogDescription:
      'Sugam Kandel is a Computer Science student pursuing +2 Management at Everest English Boarding Secondary School Butwal, Nepal.',
  },
  '/blog': {
    title: 'Sugam Kandel Blog | Coding, Bikes & Travel Perspectives',
    description:
      'Read blog posts by Sugam Kandel about starting to code as a teenager, why motorbikes are more than two wheels, and the school transition from a hill village to city life.',
    canonical: `${SITE_URL}/blog`,
    ogTitle: 'Sugam Kandel Blog | Coding, Bikes & Travel Perspectives',
    ogDescription:
      'Perspectives and stories from Sugam Kandel — coding revelations, motorbike passion, and travel experiences in Nepal.',
  },
  '/contact': {
    title: 'Contact Sugam Kandel | Get in Touch from Butwal, Nepal',
    description:
      'Get in touch with Sugam Kandel for development collaborations, motorcycle discussions, or travels. Based in Butwal, Rupandehi, Nepal.',
    canonical: `${SITE_URL}/contact`,
    ogTitle: 'Contact Sugam Kandel | Get in Touch from Butwal, Nepal',
    ogDescription:
      'Contact Sugam Kandel — software development collaborations, motorbike talks, or travel experiences.',
  },
};

export function getPageSeo(pathname: string): PageSeo {
  return routeSeo[pathname] ?? homeSeo;
}