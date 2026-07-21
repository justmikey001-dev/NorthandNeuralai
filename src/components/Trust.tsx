import { useReveal } from '../hooks/useReveal';

const STATS = [
  { value: '20+', label: 'Done-For-You Services' },
  { value: '24-72hr', label: 'Average Delivery Time' },
  { value: '100%', label: 'Money-Back Guarantee' },
];

const WHY_US = [
  { icon: 'fa-solid fa-file-contract', text: 'No lengthy contracts' },
  { icon: 'fa-solid fa-tag', text: 'Transparent, upfront pricing' },
  { icon: 'fa-solid fa-bolt', text: 'Fast turnaround, real deliverables' },
  { icon: 'fa-solid fa-comments', text: 'Direct communication, no middlemen' },
  { icon: 'fa-solid fa-shield-halved', text: 'Money-back guarantee on every order' },
  { icon: 'fa-solid fa-sliders', text: 'Custom solutions, not cookie-cutter output' },
];

export default function Trust() {
  const statsRef = useReveal<HTMLDivElement>();
  const whyRef = useReveal<HTMLDivElement>();

  return (
    <section id="trust" className="relative py-24 lg:py-32 border-t border-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats */}
        <div ref={statsRef} className="reveal grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <div className="text-3xl lg:text-4xl font-extrabold text-gradient stat-glow mb-2">
                {stat.value}
              </div>
              <div className="text-muted text-xs lg:text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div ref={whyRef} className="reveal text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5 text-xs font-medium text-muted uppercase tracking-wide">
            <i className="fa-solid fa-circle-check text-blue-400 text-[10px]"></i>
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-base tracking-tight mb-4">
            Built for <span className="text-gradient">Busy Founders</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Everything you need to get professional AI-powered work done — without the friction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {WHY_US.map((item) => (
            <div key={item.text} className="glass-card card-hover p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-blue-400 text-sm`}></i>
              </div>
              <span className="text-muted text-sm font-medium leading-snug">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
