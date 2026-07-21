import ActiveProjectsBadge from './ActiveProjectsBadge';

const MAILTO = `mailto:hello.northandneural@gmail.com?subject=Service%20Order&body=Hi%2C%20I%27d%20like%20to%20order%3A%20%5Bservice%20name%5D`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Radial glow background */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Dotted grid overlay */}
      <div className="absolute inset-0 dotted-bg opacity-40 pointer-events-none" />

      {/* Ambient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 text-xs font-medium text-muted tracking-wide uppercase fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Powered by Advanced AI Technology
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-base mb-6 fade-in">
          Let AI Do{' '}
          <span className="text-gradient">All The Work</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-10 fade-in">
          A marketplace of 20+ done-for-you services — from brand identities to automation systems — delivered by elite AI teams. Place an order. Receive the finished deliverable. No back-and-forth freelancing.
        </p>

        {/* Active projects badge */}
        <div className="mb-8 fade-in">
          <ActiveProjectsBadge />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 fade-in">
          <a
            href="#services"
            className="btn-gradient text-white font-semibold px-8 py-3.5 rounded-xl text-base w-full sm:w-auto text-center"
          >
            Browse Services
          </a>
          <a
            href={MAILTO}
            className="glass-card border border-strong text-base font-semibold px-8 py-3.5 rounded-xl text-base w-full sm:w-auto text-center transition-all duration-200 hover:border-blue-500/40"
          >
            Order Now
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 fade-in">
          <div className="flex items-center gap-2.5 text-sm text-muted">
            <div className="w-8 h-8 rounded-full bg-blue-500/15 flex items-center justify-center">
              <i className="fa-solid fa-bolt text-blue-400 text-xs"></i>
            </div>
            <span>Fast Delivery — 24 to 72 Hours</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted">
            <div className="w-8 h-8 rounded-full bg-blue-500/15 flex items-center justify-center">
              <i className="fa-solid fa-star text-blue-400 text-xs"></i>
            </div>
            <span>High Quality — AI-Powered Precision</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted">
            <div className="w-8 h-8 rounded-full bg-blue-500/15 flex items-center justify-center">
              <i className="fa-solid fa-shield-halved text-blue-400 text-xs"></i>
            </div>
            <span>Money-Back Guarantee</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: `linear-gradient(to top, var(--hero-fade), transparent)` }} />
    </section>
  );
}
