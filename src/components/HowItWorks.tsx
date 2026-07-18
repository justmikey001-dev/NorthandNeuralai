const STEPS = [
  {
    num: '01',
    icon: 'fa-solid fa-compass',
    title: 'Choose a Service',
    desc: 'Browse 20+ done-for-you services across social media, websites, design, research, automation, and video. Pick what you need.',
  },
  {
    num: '02',
    icon: 'fa-solid fa-credit-card',
    title: 'Place Your Order',
    desc: 'Send your brief and confirm the order. No lengthy onboarding, no proposals, no discovery calls. Just the essentials.',
  },
  {
    num: '03',
    icon: 'fa-solid fa-microchip',
    title: 'Execution & Delivery',
    desc: 'Your project is handled with precision and speed by our production team, using the best available technology.',
  },
  {
    num: '04',
    icon: 'fa-solid fa-box-open',
    title: 'Receive Deliverables',
    desc: 'Get your finished work in 24–72 hours. Review, request revisions if needed, and put it to work immediately.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5 text-xs font-medium text-zinc-400 uppercase tracking-wide">
            <i className="fa-solid fa-route text-blue-400 text-[10px]"></i>
            Simple 4-Step Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            From order to delivery in four steps. No meetings, no project managers, no waiting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
              )}
              <div className="glass-card card-hover p-6 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl btn-gradient flex items-center justify-center">
                    <i className={`${step.icon} text-white`}></i>
                  </div>
                  <span className="text-3xl font-extrabold text-white/10">{step.num}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2.5">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
