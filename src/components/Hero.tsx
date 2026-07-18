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
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-xs font-medium text-zinc-400 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Powered by Advanced AI Technology
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
          Let AI Do{' '}
          <span className="text-gradient">All The Work</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10">
          A marketplace of 20+ done-for-you services — from brand identities to automation systems — delivered by elite AI teams. Place an order. Receive the finished deliverable. No back-and-forth freelancing.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#services"
            className="btn-gradient text-white font-semibold px-8 py-3.5 rounded-xl text-base w-full sm:w-auto text-center"
          >
            Browse Services
          </a>
          <a
            href={MAILTO}
            className="glass-card border border-white/15 hover:border-blue-500/40 text-white font-semibold px-8 py-3.5 rounded-xl text-base w-full sm:w-auto text-center transition-all duration-200 hover:bg-white/8"
          >
            Start Free Trial
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2.5 text-sm text-zinc-400">
            <div className="w-8 h-8 rounded-full bg-blue-500/15 flex items-center justify-center">
              <i className="fa-solid fa-bolt text-blue-400 text-xs"></i>
            </div>
            <span>Fast Delivery — 24 to 72 Hours</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-zinc-400">
            <div className="w-8 h-8 rounded-full bg-blue-500/15 flex items-center justify-center">
              <i className="fa-solid fa-star text-blue-400 text-xs"></i>
            </div>
            <span>High Quality — AI-Powered Precision</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-zinc-400">
            <div className="w-8 h-8 rounded-full bg-blue-500/15 flex items-center justify-center">
              <i className="fa-solid fa-shield-halved text-blue-400 text-xs"></i>
            </div>
            <span>Money-Back Guarantee</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
