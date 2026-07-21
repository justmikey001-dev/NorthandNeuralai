import { useState, useMemo } from 'react';
import { allServices } from '../data/services';
import { useReveal } from '../hooks/useReveal';

const MAILTO = `mailto:hello.northandneural@gmail.com?subject=Service%20Order&body=Hi%2C%20I%27d%20like%20to%20order%3A%20`;

export default function PriceCalculator() {
  const sectionRef = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [days, setDays] = useState(30);

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const { total, selectedItems } = useMemo(() => {
    let sum = 0;
    const items: { name: string; priceNum: number; recurring: boolean; lineTotal: number }[] = [];
    allServices.forEach(({ service }) => {
      if (selected.has(service.name)) {
        const lineTotal = service.recurring ? service.priceNum * days : service.priceNum;
        sum += lineTotal;
        items.push({
          name: service.name,
          priceNum: service.priceNum,
          recurring: service.recurring,
          lineTotal,
        });
      }
    });
    return { total: sum, selectedItems: items };
  }, [selected, days]);

  const orderHref = `${MAILTO}${encodeURIComponent(
    selectedItems
      .map((i) => `${i.name} ${i.recurring ? `(x${days} days)` : ''} — $${i.lineTotal}`)
      .join(', ')
  )} Total: $${total}`;

  return (
    <section id="calculator" className="relative py-24 lg:py-32 border-t border-base">
      <div ref={sectionRef} className="reveal max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5 text-xs font-medium text-muted uppercase tracking-wide">
            <i className="fa-solid fa-calculator text-blue-400 text-[10px]"></i>
            Price Calculator
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-base tracking-tight mb-4">
            Estimate Your <span className="text-gradient">Total Cost</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Select the services you need and a duration. We'll calculate the total instantly.
          </p>
        </div>

        <div className="glass-card-bright p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service selection */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                <i className="fa-solid fa-list-check text-blue-400 text-sm"></i>
                Select Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-2">
                {allServices.map(({ service, categoryName }) => (
                  <button
                    key={service.name}
                    onClick={() => toggle(service.name)}
                    className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                      selected.has(service.name)
                        ? 'border-blue-500/50 bg-blue-500/10'
                        : 'border-base glass-card hover:border-strong'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          selected.has(service.name)
                            ? 'btn-gradient'
                            : 'border border-strong'
                        }`}
                      >
                        {selected.has(service.name) && (
                          <i className="fa-solid fa-check text-white text-[10px]"></i>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-base leading-snug">
                            {service.name}
                          </span>
                          <span className="text-xs font-semibold text-blue-400 flex-shrink-0">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-muted text-xs leading-relaxed mt-1">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[10px] text-subtle">{categoryName}</span>
                          {service.recurring && (
                            <span className="text-[10px] text-blue-400/80 bg-blue-500/10 px-1.5 py-0.5 rounded">
                              Recurring
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration + Total */}
            <div className="flex flex-col">
              <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                <i className="fa-solid fa-clock text-blue-400 text-sm"></i>
                Duration
              </h3>
              <div className="glass-card p-5 mb-4">
                <label className="text-muted text-sm mb-2 block">Number of days</label>
                <input
                  type="number"
                  min={1}
                  max={365}
                  value={days}
                  onChange={(e) => setDays(Math.max(1, Number(e.target.value) || 1))}
                  className="w-full bg-transparent border border-strong rounded-lg px-4 py-2.5 text-base text-base focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <div className="flex gap-2 mt-3">
                  {[7, 30, 90].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDays(d)}
                      className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                        days === d
                          ? 'btn-gradient text-white'
                          : 'glass-card text-muted hover:text-base'
                      }`}
                    >
                      {d}d
                    </button>
                  ))}
                </div>
              </div>

              <div className="glass-card-bright p-5 flex-grow flex flex-col">
                <p className="text-subtle text-xs mb-2 leading-relaxed">
                  One-time services are priced once regardless of duration; recurring services scale with duration selected.
                </p>

                {selectedItems.length > 0 ? (
                  <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
                    {selectedItems.map((item) => (
                      <div key={item.name} className="flex items-center justify-between text-xs">
                        <span className="text-muted truncate pr-2">{item.name}</span>
                        <span className="text-base font-medium flex-shrink-0">
                          ${item.lineTotal}
                          {item.recurring && (
                            <span className="text-subtle ml-1">×{days}d</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted text-sm text-center py-6 mb-4">
                    Select services to see your total.
                  </p>
                )}

                <div className="mt-auto pt-4 border-t border-base">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-base font-semibold">Total</span>
                    <span className="text-2xl font-extrabold text-gradient">${total}</span>
                  </div>
                  <a
                    href={selectedItems.length > 0 ? orderHref : undefined}
                    className={`block text-center font-semibold px-5 py-3 rounded-xl text-sm transition-all duration-200 ${
                      selectedItems.length > 0
                        ? 'btn-gradient text-white'
                        : 'glass-card text-subtle cursor-not-allowed'
                    }`}
                  >
                    {selectedItems.length > 0 ? 'Order These Services' : 'Select services first'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
