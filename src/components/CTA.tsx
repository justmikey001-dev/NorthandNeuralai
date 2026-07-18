const MAILTO = `mailto:hello.northandneural@gmail.com?subject=Service%20Order&body=Hi%2C%20I%27d%20like%20to%20order%3A%20%5Bservice%20name%5D`;

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative glass-card-bright rounded-3xl p-10 lg:p-16 text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-blue-600/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-6 text-xs font-medium text-zinc-300 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Ready When You Are
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              Let AI Do <span className="text-gradient">All The Work</span>
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mx-auto mb-9">
              Pick a service, place your order, and receive a finished deliverable in days.
              No back-and-forth. No long timelines. Just results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={MAILTO}
                className="btn-gradient text-white font-semibold px-8 py-3.5 rounded-xl text-base w-full sm:w-auto"
              >
                Order Now
              </a>
              <a
                href="#services"
                className="glass-card border border-white/15 hover:border-blue-500/40 text-white font-semibold px-8 py-3.5 rounded-xl text-base w-full sm:w-auto transition-all duration-200"
              >
                Browse Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
