const MAILTO = `mailto:hello.northandneural@gmail.com?subject=Service%20Order&body=Hi%2C%20I%27d%20like%20to%20order%3A%20%5Bservice%20name%5D`;

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-base">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative glass-card-bright rounded-3xl p-10 lg:p-16 text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-blue-600/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-6 text-xs font-medium text-muted uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Ready When You Are
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-base tracking-tight mb-5">
              Ready to Get <span className="text-gradient">Started?</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto mb-9">
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
                className="glass-card border border-strong text-base font-semibold px-8 py-3.5 rounded-xl text-base w-full sm:w-auto transition-all duration-200"
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
