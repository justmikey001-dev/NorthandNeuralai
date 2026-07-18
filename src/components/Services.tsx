import { useState } from 'react';
import { categories } from '../data/services';

const MAILTO = `mailto:hello.northandneural@gmail.com?subject=Service%20Order&body=Hi%2C%20I%27d%20like%20to%20order%3A%20%5Bservice%20name%5D`;

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5 text-xs font-medium text-zinc-400 uppercase tracking-wide">
            <i className="fa-solid fa-layer-group text-blue-400 text-[10px]"></i>
            20+ Done-For-You Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Browse the <span className="text-gradient">Service Menu</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Pick a service. Place an order. Receive a finished deliverable in days — not weeks of back-and-forth.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'btn-gradient text-white'
                  : 'glass-card text-zinc-400 hover:text-white hover:bg-white/8'
              }`}
            >
              <i className={`${cat.icon} text-xs`}></i>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active category services */}
        <div className="mb-8 text-center">
          <p className="text-zinc-500 text-sm max-w-xl mx-auto">{active.shortDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {active.services.map((service) => (
            <div
              key={service.name}
              className="glass-card card-hover p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white font-semibold text-lg leading-snug pr-2">
                  {service.name}
                </h3>
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                  <i className={`${active.icon} text-blue-400 text-sm`}></i>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <i className="fa-solid fa-clock text-blue-400/70"></i>
                    {service.delivery}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-blue-400">
                    {service.price}
                  </span>
                </div>
                <a
                  href={MAILTO}
                  className="text-xs font-semibold text-white bg-white/8 hover:bg-blue-500/20 px-3 py-1.5 rounded-md transition-colors"
                >
                  Order
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-zinc-500 text-sm mb-4">Don't see what you need?</p>
          <a
            href={MAILTO}
            className="inline-flex items-center gap-2 glass-card border border-white/15 hover:border-blue-500/40 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200"
          >
            <i className="fa-solid fa-envelope text-blue-400 text-xs"></i>
            Request a Custom Service
          </a>
        </div>
      </div>
    </section>
  );
}
