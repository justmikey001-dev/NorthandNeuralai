import { useState } from 'react';
import { categories, type Service, type Category } from '../data/services';
import { useReveal } from '../hooks/useReveal';

const MAILTO = `mailto:hello.northandneural@gmail.com?subject=Service%20Order&body=Hi%2C%20I%27d%20like%20to%20order%3A%20`;

// Step 1 options map to existing categories exactly.
const GOALS: { label: string; categoryId: string }[] = [
  { label: 'Grow on social media', categoryId: 'social-media' },
  { label: 'Build or improve a website', categoryId: 'websites' },
  { label: 'Get branding/design assets', categoryId: 'design' },
  { label: 'Research or plan my business', categoryId: 'research' },
  { label: 'Automate repetitive tasks', categoryId: 'automation' },
  { label: 'Create video content', categoryId: 'video' },
];

export default function SurveyRecommender() {
  const sectionRef = useReveal<HTMLDivElement>();

  const [step, setStep] = useState(0); // 0 = intro, 1 = goal, 2 = services, 3 = result
  const [selectedGoal, setSelectedGoal] = useState<Category | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const reset = () => {
    setStep(0);
    setSelectedGoal(null);
    setSelectedService(null);
  };

  const pickGoal = (categoryId: string) => {
    const cat = categories.find((c) => c.id === categoryId) ?? null;
    setSelectedGoal(cat);
    setStep(2);
  };

  const pickService = (svc: Service) => {
    setSelectedService(svc);
    setStep(3);
  };

  return (
    <section id="recommender" className="relative py-24 lg:py-32 border-t border-base">
      <div ref={sectionRef} className="reveal max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5 text-xs font-medium text-muted uppercase tracking-wide">
            <i className="fa-solid fa-wand-magic-sparkles text-blue-400 text-[10px]"></i>
            Service Recommender
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-base tracking-tight mb-4">
            Not Sure What You <span className="text-gradient">Need?</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Answer two quick questions and we’ll point you to the right service.
          </p>
        </div>

        {/* Card */}
        <div className="glass-card-bright p-8 lg:p-10">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2].map((n) => (
              <div
                key={n}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step >= n ? 'w-10 bg-blue-500' : 'w-6 bg-zinc-500/40'
                }`}
              />
            ))}
          </div>

          {/* Step 0 — Intro */}
          {step === 0 && (
            <div className="text-center fade-in">
              <div className="w-14 h-14 rounded-2xl btn-gradient flex items-center justify-center mx-auto mb-5">
                <i className="fa-solid fa-compass text-white text-lg"></i>
              </div>
              <h3 className="text-xl font-bold text-base mb-3">Find your service in 2 steps</h3>
              <p className="text-muted text-sm mb-6 max-w-md mx-auto">
                Tell us your goal, pick from the relevant services, and get a tailored recommendation.
              </p>
              <button
                onClick={() => setStep(1)}
                className="btn-gradient text-white font-semibold px-7 py-3 rounded-xl text-sm"
              >
                Get Started
              </button>
            </div>
          )}

          {/* Step 1 — Goal */}
          {step === 1 && (
            <div className="fade-in">
              <h3 className="text-lg font-bold text-base mb-1 text-center">
                What are you trying to achieve right now?
              </h3>
              <p className="text-muted text-sm mb-6 text-center">Select one</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {GOALS.map((g) => (
                  <button
                    key={g.categoryId}
                    onClick={() => pickGoal(g.categoryId)}
                    className="glass-card card-hover p-4 text-left flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                      <i
                        className={`${
                          categories.find((c) => c.id === g.categoryId)?.icon
                        } text-blue-400 text-sm`}
                      ></i>
                    </div>
                    <span className="text-sm font-medium text-base group-hover:text-blue-400 transition-colors">
                      {g.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Services in category */}
          {step === 2 && selectedGoal && (
            <div className="fade-in">
              <h3 className="text-lg font-bold text-base mb-1 text-center">
                Pick a service in {selectedGoal.name}
              </h3>
              <p className="text-muted text-sm mb-6 text-center">Select one to see your recommendation</p>
              <div className="grid grid-cols-1 gap-3">
                {selectedGoal.services.map((svc) => (
                  <button
                    key={svc.name}
                    onClick={() => pickService(svc)}
                    className="glass-card card-hover p-4 text-left flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${selectedGoal.icon} text-blue-400 text-sm`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-base group-hover:text-blue-400 transition-colors">
                          {svc.name}
                        </span>
                        <span className="text-xs font-semibold text-blue-400 flex-shrink-0">{svc.price}</span>
                      </div>
                      <p className="text-muted text-xs leading-relaxed mt-1">{svc.description}</p>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                className="mt-6 text-sm text-muted hover:text-base transition-colors flex items-center gap-1.5 mx-auto"
              >
                <i className="fa-solid fa-arrow-left text-xs"></i> Back
              </button>
            </div>
          )}

          {/* Step 3 — Result */}
          {step === 3 && selectedService && selectedGoal && (
            <div className="fade-in">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 glass-card px-3 py-1 mb-4 text-xs font-medium text-blue-400 uppercase tracking-wide">
                  <i className="fa-solid fa-circle-check text-[10px]"></i>
                  Recommended for you
                </div>
              </div>

              {/* Service card — mirrors the Services section card */}
              <div className="glass-card p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-semibold text-lg leading-snug pr-2">
                    {selectedService.name}
                  </h3>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                    <i className={`${selectedGoal.icon} text-blue-400 text-sm`}></i>
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {selectedService.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-base">
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <i className="fa-solid fa-clock text-blue-400/70"></i>
                      {selectedService.delivery}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-blue-400">
                      {selectedService.price}
                    </span>
                  </div>
                  <a
                    href={`${MAILTO}${encodeURIComponent(selectedService.name)}`}
                    className="text-xs font-semibold text-white bg-white/10 hover:bg-blue-500/20 px-3 py-1.5 rounded-md transition-colors"
                  >
                    Order
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  onClick={reset}
                  className="btn-gradient text-white font-semibold px-6 py-2.5 rounded-lg text-sm"
                >
                  Start Over
                </button>
                <a
                  href="#services"
                  className="text-sm text-muted hover:text-base transition-colors"
                >
                  Browse all services
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
