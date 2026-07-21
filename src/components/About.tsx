import { useReveal } from '../hooks/useReveal';

const PILLARS = [
  {
    icon: 'fa-solid fa-bolt',
    title: 'Speed Without Compromise',
    desc: 'AI-powered workflows move fast without cutting corners. Professional output in days, not weeks.',
  },
  {
    icon: 'fa-solid fa-tag',
    title: 'Transparent Pricing',
    desc: 'Every service is priced upfront. No discovery calls, no lengthy proposals, no guessing what you’ll end up with.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Done-For-You Delivery',
    desc: 'Pick a service, place your order, and receive a finished deliverable. We build so you don’t have to.',
  },
];

export default function About() {
  const heroRef = useReveal<HTMLDivElement>();
  const pillarsRef = useReveal<HTMLDivElement>();
  const storyRef = useReveal<HTMLDivElement>();

  return (
    <div className="relative pt-28 pb-24 lg:pt-36 lg:pb-32">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Hero */}
        <div ref={heroRef} className="reveal text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-6 text-xs font-medium text-muted uppercase tracking-wide">
            <i className="fa-solid fa-circle-info text-blue-400 text-[10px]"></i>
            About Us
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-base tracking-tight mb-6">
            We build so <span className="text-gradient">you don’t have to</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            North &amp; Neural AI started with a simple frustration: getting quality work done — a
            website, a brand kit, a month of content — usually means weeks of back-and-forth with
            freelancers or agencies, unclear pricing, and rounds of revisions that never quite land.
          </p>
        </div>

        {/* Story */}
        <div ref={storyRef} className="reveal glass-card p-8 lg:p-10 mb-16">
          <p className="text-base text-lg leading-relaxed mb-5">
            We built North &amp; Neural AI to fix that. Pick a service, place your order, and get a
            finished deliverable — no discovery calls, no lengthy proposals, no guessing what
            you’ll end up with.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            We use AI-powered workflows to move fast without cutting corners, so you get
            professional output in days, not weeks.
          </p>
          <div className="mt-8 pt-8 border-t border-base">
            <p className="text-sm text-subtle uppercase tracking-wide mb-1">Founded by</p>
            <p className="text-xl font-bold text-base">Vidhan Pachauri</p>
          </div>
        </div>

        {/* Pillars */}
        <div ref={pillarsRef} className="reveal">
          <h2 className="text-2xl lg:text-3xl font-bold text-base tracking-tight text-center mb-10">
            What <span className="text-gradient">drives us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <div key={p.title} className="glass-card card-hover p-6">
                <div className="w-11 h-11 rounded-xl btn-gradient flex items-center justify-center mb-4">
                  <i className={`${p.icon} text-white text-sm`}></i>
                </div>
                <h3 className="text-base font-semibold text-base mb-2">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#services"
            className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-xl text-base"
          >
            Browse Services
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
