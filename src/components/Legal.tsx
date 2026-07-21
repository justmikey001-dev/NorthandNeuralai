import { useReveal } from '../hooks/useReveal';

const SECTIONS = [
  {
    icon: 'fa-solid fa-rotate-left',
    title: 'Refund Policy',
    body: [
      'Full refund available within 7 days of order if the deliverable has not been approved. No refunds after approval.',
      '[PLACEHOLDER — adjust window/terms as needed]',
    ],
  },
  {
    icon: 'fa-solid fa-file-contract',
    title: 'Terms of Service',
    body: [
      'Ownership of final deliverables transfers to the client upon full payment. Standard limitation of liability applies.',
      'Service descriptions and delivery times are estimates, not guarantees, though we aim to meet them consistently.',
    ],
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Privacy Policy',
    body: [
      'Customer information (name, email, project details) is used only to fulfill orders and is not sold to third parties.',
    ],
  },
];

export default function Legal() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div className="relative pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div ref={ref} className="reveal max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 mb-5 text-xs font-medium text-muted uppercase tracking-wide">
            <i className="fa-solid fa-scale-balanced text-blue-400 text-[10px]"></i>
            Legal
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-base tracking-tight mb-4">
            Terms &amp; <span className="text-gradient">Policies</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Refund policy, terms of service, and privacy statement.
          </p>
        </div>

        <div className="space-y-6">
          {SECTIONS.map((s) => (
            <div key={s.title} className="glass-card p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                  <i className={`${s.icon} text-blue-400 text-sm`}></i>
                </div>
                <h2 className="text-lg font-bold text-base">{s.title}</h2>
              </div>
              <div className="space-y-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-muted text-sm leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
