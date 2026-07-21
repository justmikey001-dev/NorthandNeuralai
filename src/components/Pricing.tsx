const PLANS = [
  {
    name: 'Pay As You Go',
    tagline: 'Browse the menu. Order what you need.',
    price: 'From $49',
    period: ' per service',
    features: [
      'Browse 20+ services, priced individually',
      'Order exactly what you need',
      'No subscription required',
      '24–72 hour delivery',
      'Money-back guarantee',
    ],
    cta: 'Browse Services',
    ctaHref: '#services',
    highlight: false,
  },
  {
    name: 'Growth',
    tagline: 'Up to $150 in services per month — use it however you like.',
    price: '$149',
    period: '/ month',
    features: [
      'Up to 5 active projects',
      'Priority 24-hour delivery',
      'Unlimited revisions',
      'Dedicated AI workflow setup',
      'Slack / WhatsApp support',
      'Monthly strategy review',
    ],
    cta: 'Start Growth Plan',
    ctaHref: `mailto:hello.northandneural@gmail.com?subject=Growth%20Plan&body=Hi%2C%20I%27d%20like%20to%20start%20the%20Growth%20Plan.`,
    highlight: true,
  },
  {
    name: 'Enterprise',
    tagline: 'Full AI operations partner.',
    price: 'Custom Pricing',
    period: '',
    features: [
      'Unlimited active projects',
      'Same-day priority delivery',
      'Custom AI assistant built for you',
      'Automation system design',
      'Dedicated account manager',
      'Quarterly roadmap planning',
    ],
    cta: 'Talk to Us',
    ctaHref: `mailto:hello.northandneural@gmail.com?subject=Enterprise%20Inquiry&body=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Enterprise.`,
    highlight: false,
  },
];

const TALK_TO_US_HREF = `mailto:hello.northandneural@gmail.com?subject=Talk%20to%20Us&body=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20pricing%20plan.`;

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 border-t border-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5 text-xs font-medium text-muted uppercase tracking-wide">
            <i className="fa-solid fa-tag text-blue-400 text-[10px]"></i>
            Simple Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-base tracking-tight mb-4">
            Plans That <span className="text-gradient">Scale With You</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Order a single service or subscribe for ongoing AI-powered delivery. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-7 rounded-2xl flex flex-col ${
                plan.highlight
                  ? 'glass-card-bright border-2 lg:scale-105'
                  : 'glass-card card-hover'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 btn-gradient text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-base font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-muted text-sm mb-6">{plan.tagline}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-base">{plan.price}</span>
                <span className="text-muted text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <i className="fa-solid fa-check text-blue-400 text-xs mt-1 flex-shrink-0"></i>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2.5">
                <a
                  href={plan.ctaHref}
                  className={`block text-center font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 ${
                    plan.highlight
                      ? 'btn-gradient text-white'
                      : 'glass-card border border-strong text-base hover:border-blue-500/40'
                  }`}
                >
                  {plan.cta}
                </a>
                <a
                  href={TALK_TO_US_HREF}
                  className="block text-center text-muted hover:text-base text-xs font-medium py-1.5 transition-colors duration-200"
                >
                  Talk to Us Directly
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-xs mt-10">
          All plans include our money-back guarantee. No long-term contracts.
        </p>
      </div>
    </section>
  );
}
