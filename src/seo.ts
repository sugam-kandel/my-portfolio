export interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

const SITE_URL = 'https://sugamkandel.com.np';

const homeSeo: PageSeo = {
  title: 'Sugam Kandel | Portfolio - CS Student & Developer from Butwal, Nepal',
  description:
    'Official website of Sugam Kandel — a 17-year-old Computer Science student and developer at Everest English Boarding Secondary School, Butwal, Nepal. Born in Shringa, Gulmi, living in Sainamaina, Butwal.',
  canonical: `${SITE_URL}/`,
  ogTitle: 'Sugam Kandel | Portfolio - CS Student & Developer from Butwal, Nepal',
  ogDescription:
    'Explore the portfolio of Sugam Kandel — computer science student, developer, motorbike enthusiast, and traveler from Butwal, Nepal.',
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
    title: 'Sugam Kandel Journey | Timeline from Gulmi to Butwal',
    description:
      'Follow the journey of Sugam Kandel — SEE graduation from Rainbow English Boarding School Sainamaina, Grade 11 Computer Science at Everest Secondary School Butwal, and his first coding project.',
    canonical: `${SITE_URL}/journey`,
    ogTitle: 'Sugam Kandel Journey | Timeline from Gulmi to Butwal',
    ogDescription:
      'Milestones and timeline of Sugam Kandel — education, coding, bike exploration, and travel from Shringa Gulmi to Butwal.',
  },
  '/stats': {
    title: 'Sugam Kandel Stats | Coding, Bikes, Travel & Academics',
    description:
      'Quick stats of Sugam Kandel — 3+ months of coding, 25+ motorbike models researched, 10+ travel spots explored, and active Grade 11 Computer Science student at Everest Secondary School Butwal.',
    canonical: `${SITE_URL}/stats`,
    ogTitle: 'Sugam Kandel Stats | Coding, Bikes, Travel & Academics',
    ogDescription:
      'Coding journey, bikes researched, travel spots explored, and Grade 11 CS — the stats behind Sugam Kandel.',
  },
  '/education': {
    title: 'Sugam Kandel Education | Everest Secondary School Butwal',
    description:
      'Education background of Sugam Kandel — Grade 11 & 12 Computer Science at Everest English Boarding Secondary School Butwal, SEE graduate from Rainbow English Boarding School Sainamaina, roots in Shringa, Gulmi.',
    canonical: `${SITE_URL}/education`,
    ogTitle: 'Sugam Kandel Education | Everest Secondary School Butwal',
    ogDescription:
      'Sugam Kandel is a Computer Science student at Everest English Boarding Secondary School Butwal, Nepal.',
  },
  '/blog': {
    title: 'Sugam Kandel Blog | Coding, Bikes & Travel Perspectives',
    description:
      'Read blog posts by Sugam Kandel about starting to code as a teenager, why motorbikes are more than two wheels, and the school transition from Shringa, Gulmi to Sainamaina, Butwal.',
    canonical: `${SITE_URL}/blog`,
    ogTitle: 'Sugam Kandel Blog | Coding, Bikes & Travel Perspectives',
    ogDescription:
      'Perspectives and stories from Sugam Kandel — coding revelations, motorbike passion, and travel experiences in Nepal.',
  },
  '/contact': {
    title: 'Contact Sugam Kandel | Get in Touch from Butwal, Nepal',
    description:
      'Get in touch with Sugam Kandel for development collaborations, motorcycle discussions, or travels. Email kandelsugam877@gmail.com from Sainamaina-1, Butwal, Rupandehi, Nepal.',
    canonical: `${SITE_URL}/contact`,
    ogTitle: 'Contact Sugam Kandel | Get in Touch from Butwal, Nepal',
    ogDescription:
      'Contact Sugam Kandel — software development collaborations, motorbike talks, or travel experiences.',
  },
};

export function getPageSeo(pathname: string): PageSeo {
  return routeSeo[pathname] ?? homeSeo;
}