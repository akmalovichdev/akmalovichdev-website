import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../lib/constants';
import { scrollToSection } from '../lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (isScrolled ? 'bg-background-dark/80 backdrop-blur-xl border-b border-white/[0.06]' : '')}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 group-hover:border-primary-500/50 transition-all group-hover:scale-110">
              <img
                src="/apple-touch-icon.png"
                alt="akmalovich.dev"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-mono text-sm font-semibold text-white/80 group-hover:text-white transition-colors hidden sm:block">
              {PERSONAL_INFO.nickname}
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 px-5 py-2 text-sm font-medium bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
            >
              Hire Me
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/60 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background-dark/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <nav className="section-container py-6">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="btn-primary w-full"
                  >
                    Hire Me
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
