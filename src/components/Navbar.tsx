import { useState, useEffect } from 'react';
import { useTheme, type ThemeMode } from '../context/ThemeContext';

const MAILTO = `mailto:hello.northandneural@gmail.com?subject=Service%20Order&body=Hi%2C%20I%27d%20like%20to%20order%3A%20%5Bservice%20name%5D`;

const THEME_ICONS: Record<ThemeMode, string> = {
  default: 'fa-solid fa-circle-half-stroke',
  dark: 'fa-solid fa-moon',
  light: 'fa-solid fa-sun',
};

const THEME_LABELS: Record<ThemeMode, string> = {
  default: 'Default',
  dark: 'Dark',
  light: 'Light',
};

interface NavbarProps {
  navigate: (page: 'home' | 'about' | 'faq' | 'legal') => void;
}

export default function Navbar({ navigate }: NavbarProps) {
  const { theme, cycleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const goPage = (p: 'about' | 'faq' | 'home') => {
    navigate(p);
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button onClick={() => goPage('home')} className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
              <i className="fa-solid fa-brain text-white text-sm"></i>
            </div>
            <span className="font-bold text-base text-base tracking-tight">
              North & Neural <span className="text-gradient">AI</span>
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted hover:text-base text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => goPage('faq')}
              className="text-muted hover:text-base text-sm font-medium transition-colors duration-200"
            >
              FAQ
            </button>
            <button
              onClick={() => goPage('about')}
              className="text-muted hover:text-base text-sm font-medium transition-colors duration-200"
            >
              About
            </button>
          </div>

          {/* CTA + Theme toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={cycleTheme}
              className="glass-card w-9 h-9 flex items-center justify-center text-muted hover:text-base transition-colors duration-200"
              aria-label={`Theme: ${THEME_LABELS[theme]} (click to switch)`}
              title={`Theme: ${THEME_LABELS[theme]}`}
            >
              <i className={`${THEME_ICONS[theme]} text-sm`}></i>
            </button>
            <a
              href={MAILTO}
              className="btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
            >
              Order Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-muted hover:text-base transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-base px-6 pb-6 pt-3">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-base text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => goPage('faq')}
              className="text-left text-muted hover:text-base text-sm font-medium transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => goPage('about')}
              className="text-left text-muted hover:text-base text-sm font-medium transition-colors"
            >
              About
            </button>
            <div className="flex items-center justify-between pt-2 border-t border-base">
              <span className="text-muted text-sm">Theme: {THEME_LABELS[theme]}</span>
              <button
                onClick={cycleTheme}
                className="glass-card w-9 h-9 flex items-center justify-center text-muted hover:text-base transition-colors"
                aria-label="Cycle theme"
              >
                <i className={`${THEME_ICONS[theme]} text-sm`}></i>
              </button>
            </div>
            <a
              href={MAILTO}
              className="btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center mt-2"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
