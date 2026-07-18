const MAILTO = `mailto:hello.northandneural@gmail.com?subject=Pre-Order%20Question&body=Hi%2C%20I%27d%20like%20to%20ask%20about%3A%20`;

export default function TalkToUs() {
  return (
    <section className="relative py-16 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div className="glass-card border border-white/8 rounded-2xl px-10 py-12">
          <div className="w-12 h-12 rounded-xl btn-gradient flex items-center justify-center mx-auto mb-5">
            <i className="fa-solid fa-envelope-open-text text-white text-lg"></i>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-3">
            Prefer to Talk First?
          </h2>
          <p className="text-zinc-400 text-base mb-7">
            Have questions before you order? Reach out directly.
          </p>
          <a
            href={MAILTO}
            className="btn-gradient inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-xl text-sm"
          >
            <i className="fa-solid fa-envelope text-sm"></i>
            Talk to Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
