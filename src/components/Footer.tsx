const MAILTO = `mailto:hello.northandneural@gmail.com`;

interface FooterProps {
  navigate: (page: 'home' | 'about') => void;
}

export default function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();

  const links = {
    Services: [
      { label: 'Social Media & Content', href: '#services' },
      { label: 'Websites & Digital Presence', href: '#services' },
      { label: 'Design & Branding', href: '#services' },
      { label: 'Automation & Productivity', href: '#services' },
    ],
    Company: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Reviews', href: '#trust' },
    ],
    Contact: [
      { label: 'hello.northandneural@gmail.com', href: MAILTO },
    ],
  };

  return (
    <footer className="relative border-t border-base pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <button onClick={() => navigate('home')} className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
                <i className="fa-solid fa-brain text-white text-sm"></i>
              </div>
              <span className="font-bold text-base text-base tracking-tight">
                North & Neural <span className="text-gradient">AI</span>
              </span>
            </button>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              A marketplace of done-for-you AI services. Place an order. Receive the finished deliverable.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-base font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-base text-sm transition-colors duration-200 break-all"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-base">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-muted text-xs">
              © {year} North & Neural AI. All rights reserved.
            </p>
            <span className="hidden sm:block text-subtle text-xs">·</span>
            <p className="text-muted text-xs">
              Founded by{' '}
              <span className="text-base font-semibold">Vidhan Pachauri</span>
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a href={MAILTO} className="text-muted hover:text-base transition-colors" aria-label="Email">
              <i className="fa-solid fa-envelope text-sm"></i>
            </a>
            <a href="https://youtube.com/@northneuralai?si=lSb9ythqW7lCf1k3" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-base transition-colors" aria-label="YouTube">
              <i className="fa-brands fa-youtube text-sm"></i>
            </a>
            <a href="https://x.com/northandneural" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-base transition-colors" aria-label="X">
              <i className="fa-brands fa-x-twitter text-sm"></i>
            </a>
            <a href="https://www.instagram.com/northandneural" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-base transition-colors" aria-label="Instagram">
              <i className="fa-brands fa-instagram text-sm"></i>
            </a>
            <a href="https://www.threads.com/@northandneural" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-base transition-colors" aria-label="Threads">
              <i className="fa-brands fa-threads text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
