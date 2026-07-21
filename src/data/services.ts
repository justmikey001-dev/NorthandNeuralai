export interface Service {
  name: string;
  description: string;
  delivery: string;
  price: string;
  priceNum: number;
  recurring: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  shortDesc: string;
  services: Service[];
}

export const categories: Category[] = [
  {
    id: 'social-media',
    name: 'Social Media & Content',
    icon: 'fa-solid fa-hashtag',
    shortDesc: 'Content packs, management, and strategy to grow your audience across platforms.',
    services: [
      {
        name: 'Social Media Content Pack',
        description: '15 ready-to-post graphics with captions and hashtags tailored to your brand.',
        delivery: '48 hours',
        price: 'From $49',
        priceNum: 49,
        recurring: true,
      },
      {
        name: 'Instagram Reels Pack',
        description: '5 short-form video edits with trending audio, captions, and hooks.',
        delivery: '72 hours',
        price: 'From $99',
        priceNum: 99,
        recurring: true,
      },
      {
        name: 'Social Media Management',
        description: 'Full month of posting, scheduling, engagement, and performance reporting.',
        delivery: 'Ongoing',
        price: 'From $199',
        priceNum: 199,
        recurring: true,
      },
      {
        name: 'Content Calendar Strategy',
        description: '30-day content calendar with post ideas, angles, and platform-specific strategy.',
        delivery: '48 hours',
        price: 'From $79',
        priceNum: 79,
        recurring: false,
      },
    ],
  },
  {
    id: 'websites',
    name: 'Websites & Digital Presence',
    icon: 'fa-solid fa-globe',
    shortDesc: 'From single landing pages to full e-commerce stores — built and launched.',
    services: [
      {
        name: 'Landing Page Creation',
        description: 'High-converting single-page site with copy, design, and mobile optimization.',
        delivery: '48 hours',
        price: 'From $49',
        priceNum: 49,
        recurring: false,
      },
      {
        name: 'Full Business Website',
        description: 'Up to 5 pages with custom design, SEO setup, and contact integration.',
        delivery: '72 hours',
        price: 'From $199',
        priceNum: 199,
        recurring: false,
      },
      {
        name: 'E-commerce Store Setup',
        description: 'Complete online store with product listings, payment gateway, and shipping setup.',
        delivery: '5 days',
        price: 'From $299',
        priceNum: 299,
        recurring: false,
      },
      {
        name: 'Website Redesign',
        description: 'Modernize your existing site with updated design, faster load times, and UX improvements.',
        delivery: '72 hours',
        price: 'From $149',
        priceNum: 149,
        recurring: false,
      },
    ],
  },
  {
    id: 'design',
    name: 'Design & Branding',
    icon: 'fa-solid fa-palette',
    shortDesc: 'Logos, brand kits, and design assets that make your business look professional.',
    services: [
      {
        name: 'Logo Design',
        description: '3 logo concepts with revisions, final files in PNG, SVG, and PDF.',
        delivery: '48 hours',
        price: 'From $49',
        priceNum: 49,
        recurring: false,
      },
      {
        name: 'Brand Identity Kit',
        description: 'Logo, color palette, typography, and brand guidelines document.',
        delivery: '72 hours',
        price: 'From $149',
        priceNum: 149,
        recurring: false,
      },
      {
        name: 'Social Media Template Set',
        description: '10 customizable Canva templates for posts, stories, and highlights.',
        delivery: '48 hours',
        price: 'From $79',
        priceNum: 79,
        recurring: false,
      },
      {
        name: 'Business Card & Stationery Design',
        description: 'Business card, letterhead, and email signature design with print-ready files.',
        delivery: '48 hours',
        price: 'From $49',
        priceNum: 49,
        recurring: false,
      },
    ],
  },
  {
    id: 'research',
    name: 'Research & Planning',
    icon: 'fa-solid fa-magnifying-glass-chart',
    shortDesc: 'Market research, competitor analysis, and business planning to inform your decisions.',
    services: [
      {
        name: 'Market Research Report',
        description: 'Industry analysis, target audience profile, and market opportunity assessment.',
        delivery: '72 hours',
        price: 'From $99',
        priceNum: 99,
        recurring: false,
      },
      {
        name: 'Competitor Analysis',
        description: 'Detailed breakdown of 5 competitors — strengths, gaps, and positioning opportunities.',
        delivery: '48 hours',
        price: 'From $79',
        priceNum: 79,
        recurring: false,
      },
      {
        name: 'Business Plan Draft',
        description: 'Complete business plan with executive summary, financials, and go-to-market strategy.',
        delivery: '5 days',
        price: 'From $149',
        priceNum: 149,
        recurring: false,
      },
      {
        name: 'Content Strategy Audit',
        description: 'Review of your existing content with actionable recommendations for improvement.',
        delivery: '72 hours',
        price: 'From $99',
        priceNum: 99,
        recurring: false,
      },
    ],
  },
  {
    id: 'automation',
    name: 'Automation & Productivity',
    icon: 'fa-solid fa-gears',
    shortDesc: 'Workflow automations, AI assistants, and integrations that save hours every week.',
    services: [
      {
        name: 'Workflow Automation Setup',
        description: 'Connect your tools with automated workflows — eliminate manual data entry.',
        delivery: '72 hours',
        price: 'From $149',
        priceNum: 149,
        recurring: false,
      },
      {
        name: 'Custom AI Assistant',
        description: 'A trained AI assistant for your business — handles FAQs, drafts content, and more.',
        delivery: '5 days',
        price: 'From $199',
        priceNum: 199,
        recurring: true,
      },
      {
        name: 'Email Automation Sequence',
        description: '5-email welcome or nurture sequence with copy, design, and automation setup.',
        delivery: '72 hours',
        price: 'From $99',
        priceNum: 99,
        recurring: false,
      },
      {
        name: 'CRM Setup & Integration',
        description: 'CRM configuration with pipeline stages, automations, and team onboarding.',
        delivery: '5 days',
        price: 'From $129',
        priceNum: 129,
        recurring: false,
      },
    ],
  },
  {
    id: 'video',
    name: 'Video Content',
    icon: 'fa-solid fa-video',
    shortDesc: 'Short-form edits, explainer videos, and ad creatives that capture attention.',
    services: [
      {
        name: 'Short-Form Video Edit',
        description: '3 polished short-form videos with captions, transitions, and trending audio.',
        delivery: '48 hours',
        price: 'From $49',
        priceNum: 49,
        recurring: true,
      },
      {
        name: 'Explainer Video',
        description: '60-second animated explainer with script, voiceover, and custom graphics.',
        delivery: '5 days',
        price: 'From $199',
        priceNum: 199,
        recurring: false,
      },
      {
        name: 'YouTube Thumbnail Pack',
        description: '10 eye-catching thumbnails optimized for click-through rate.',
        delivery: '48 hours',
        price: 'From $49',
        priceNum: 49,
        recurring: false,
      },
      {
        name: 'Video Ad Creative',
        description: '30-second video ad with script, editing, and platform-specific formats.',
        delivery: '72 hours',
        price: 'From $149',
        priceNum: 149,
        recurring: false,
      },
    ],
  },
];

export const allServices: { service: Service; categoryName: string }[] = categories.flatMap((cat) =>
  cat.services.map((service) => ({ service, categoryName: cat.name }))
);
