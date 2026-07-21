import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const FAQS = [
  {
    q: 'What happens after I place an order?',
    a: "You'll receive a confirmation and we'll begin work immediately. Most deliverables arrive within 24-72 hours depending on the service.",
  },
  {
    q: 'How do revisions work?',
    a: "Each service includes a set number of revision rounds as listed on its card. Additional revisions can be requested for a small added fee.",
  },
  {
    q: "What's your refund policy?",
    a: "If we're unable to deliver what was promised, you're eligible for a full refund within 7 days of your order. Refunds are not available once a deliverable has been approved by you.",
  },
  {
    q: 'What payment methods do you accept?',
    a: '[PLACEHOLDER — insert actual payment methods once finalized]',
  },
  {
    q: 'Can I request a custom service?',
    a: 'Yes — use the "Request a Custom Service" button to describe what you need and we\'ll get back to you with a quote.',
  },
  {
    q: 'Do you offer ongoing or subscription work?',
    a: 'Yes, our Growth plan gives you a set amount of service capacity each month for recurring needs, with priority delivery.',
  },
];

export default function FAQ() {
  const sectionRef = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div ref={sectionRef} className="reveal max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5 text-xs font-medium text-muted uppercase tracking-wide">
            <i className="fa-solid fa-circle-question text-blue-400 text-[10px]"></i>
            FAQ
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-base tracking-tight mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Everything you need to know about ordering, delivery, and revisions.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-base font-semibold text-base">{item.q}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-muted text-sm transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                >
                  <p className="text-muted text-sm leading-relaxed px-5 pb-5">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
