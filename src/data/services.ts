export interface Service {
  name: string;
  description: string;
  delivery: string;
  price: string;
}

export interface Category {
  id: string;
  icon: string;
  name: string;
  shortDesc: string;
  services: Service[];
}

export const categories: Category[] = [
  {
    id: 'social-media',
    icon: 'fa-solid fa-hashtag',
    name: 'Social Media & Content',
    shortDesc: 'AI-powered content engines that run your social presence on autopilot.',
    services: [
      {
        name: 'YouTube Automation Pack',
        description: 'Scripts, titles, thumbnails, and upload-ready video structure — every week.',
        delivery: '48–72 hrs',
        price: 'From $79',
      },
      {
        name: 'Instagram Reels System',
        description: 'Hook-first short-form video scripts with captions and hashtag strategy.',
        delivery: '24–48 hrs',
        price: 'From $49',
      },
      {
        name: 'LinkedIn Content Engine',
        description: 'Authority-building posts, carousels, and thought-leadership pieces.',
        delivery: '24–48 hrs',
        price: 'From $59',
      },
      {
        name: '30-Day Social Media Calendar',
        description: 'A full month of on-brand content planned, written, and ready to schedule.',
        delivery: '48–72 hrs',
        price: 'From $99',
      },
    ],
  },
  {
    id: 'websites',
    icon: 'fa-solid fa-globe',
    name: 'Websites & Digital Presence',
    shortDesc: 'Conversion-focused websites and stores, built and delivered fast.',
    services: [
      {
        name: 'Landing Page Creation',
        description: 'High-converting single-page site with copy, layout, and CTA structure.',
        delivery: '48–72 hrs',
        price: 'From $149',
      },
      {
        name: 'Full Business Website',
        description: 'Multi-page professional website with SEO structure and brand alignment.',
        delivery: '5–7 days',
        price: 'From $349',
      },
      {
        name: 'E-commerce Store Setup',
        description: 'Product listings, checkout flow, and storefront design ready to sell.',
        delivery: '5–7 days',
        price: 'From $449',
      },
      {
        name: 'Website Redesign',
        description: 'Modernize your existing site with fresh design, copy, and structure.',
        delivery: '3–5 days',
        price: 'From $249',
      },
    ],
  },
  {
    id: 'design',
    icon: 'fa-solid fa-palette',
    name: 'Design & Branding',
    shortDesc: 'Studio-quality brand assets created entirely by AI — delivered in days.',
    services: [
      {
        name: 'Complete Brand Identity Kit',
        description: 'Logo, color palette, typography, and brand guidelines in one package.',
        delivery: '48–72 hrs',
        price: 'From $199',
      },
      {
        name: 'Social Media Visual Templates',
        description: 'Editable post, story, and reel templates matched to your brand.',
        delivery: '24–48 hrs',
        price: 'From $89',
      },
      {
        name: 'Pitch Deck Design',
        description: 'Investor-ready slide deck with compelling narrative and clean visuals.',
        delivery: '48–72 hrs',
        price: 'From $179',
      },
    ],
  },
  {
    id: 'research',
    icon: 'fa-solid fa-chart-bar',
    name: 'Business Research & Strategy',
    shortDesc: 'Data-backed reports and plans to sharpen your competitive edge.',
    services: [
      {
        name: 'Market Research Report',
        description: 'In-depth industry analysis, audience insights, and opportunity mapping.',
        delivery: '48–72 hrs',
        price: 'From $129',
      },
      {
        name: 'Competitor Analysis',
        description: 'Full breakdown of competitor positioning, strengths, and gaps to exploit.',
        delivery: '24–48 hrs',
        price: 'From $99',
      },
      {
        name: 'Business Plan / Proposal',
        description: 'Professional business plan with financials, market size, and executive summary.',
        delivery: '3–5 days',
        price: 'From $249',
      },
    ],
  },
  {
    id: 'automation',
    icon: 'fa-solid fa-robot',
    name: 'Automation & Productivity',
    shortDesc: 'Custom AI workflows that eliminate repetitive tasks and scale your output.',
    services: [
      {
        name: 'WhatsApp + CRM Automation',
        description: 'Auto-reply flows, lead capture, and CRM integration for WhatsApp Business.',
        delivery: '3–5 days',
        price: 'From $199',
      },
      {
        name: 'Excel / Google Sheets Automation',
        description: 'Custom macros, formulas, and dashboards that automate your spreadsheets.',
        delivery: '24–48 hrs',
        price: 'From $89',
      },
      {
        name: 'Custom AI Assistant Setup',
        description: 'A trained, branded AI chatbot or assistant tailored to your business.',
        delivery: '3–5 days',
        price: 'From $299',
      },
    ],
  },
  {
    id: 'video',
    icon: 'fa-solid fa-video',
    name: 'Video & Multimedia',
    shortDesc: 'Professional video content — scripted, produced, and delivered by AI.',
    services: [
      {
        name: 'Explainer / Promo Video',
        description: 'Script, voiceover, motion graphics — a polished explainer for your product.',
        delivery: '3–5 days',
        price: 'From $179',
      },
      {
        name: 'Talking Avatar Videos',
        description: 'Realistic AI avatar delivering your message in any language or style.',
        delivery: '24–48 hrs',
        price: 'From $129',
      },
      {
        name: 'YouTube Shorts Creation',
        description: 'Vertical-format short videos optimized for algorithm and audience retention.',
        delivery: '24–48 hrs',
        price: 'From $79',
      },
    ],
  },
];
