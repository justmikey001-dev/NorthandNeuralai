const PLANS = [
  {
    name: 'Starter',
    tagline: 'Single project, pay-as-you-go.',
    price: '$29',
    period: '/ month',
    features: [
      'One done-for-you deliverable',
      '24–72 hour delivery',
      '1 round of revisions',
      'Email support',
      'Source files included',
    ],
    cta: 'Order a Project',
    highlight: false,
  },
  {
    name: 'Growth',
    tagline: 'For businesses scaling content & operations.',
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
    highlight: false,
  },
];

const MAILTO = `mailto:hello.northandneural@gmail.com?subject=Plan%20Inquiry&body=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20plans.`;

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5 text-xs font-medium text-zinc-400 uppercase tracking-wide">
            <i className="fa-solid fa-tag text-blue-400 text-[10px]"></i>
            Simple Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Plans That <span className="text-gradient">Scale With You</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Start with a single project or subscribe for ongoing AI-powered delivery. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-7 rounded-2xl flex flex-col ${
                plan.highlight
                  ? 'glass-card-bright border-2 border-blue-500/40 lg:scale-105'
                  : 'glass-card card-hover'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 btn-gradient text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-zinc-500 text-sm mb-6">{plan.tagline}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-zinc-500 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <i className="fa-solid fa-check text-blue-400 text-xs mt-1 flex-shrink-0"></i>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={MAILTO}
                className={`block text-center font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 ${
                  plan.highlight
                    ? 'btn-gradient text-white'
                    : 'glass-card border border-white/15 hover:border-blue-500/40 text-white hover:bg-white/8'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-xs mt-10">
          All plans include our money-back guarantee. No long-term contracts.
        </p>
      </div>
    </section>
  );
}
