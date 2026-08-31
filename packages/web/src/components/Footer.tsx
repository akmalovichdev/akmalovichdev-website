import { PERSONAL_INFO, NAV_LINKS } from '../lib/constants';
import { scrollToSection } from '../lib/utils';
import { Github, Instagram, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-surface-dark/50">
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10">
                <img
                  src="/apple-touch-icon.png"
                  alt="akmalovich.dev"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-mono text-sm font-semibold gradient-text">
                {PERSONAL_INFO.nickname}
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Full-stack developer & DevOps engineer building production systems that scale.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href={'mailto:' + PERSONAL_INFO.email} className="text-white/40 hover:text-white transition-colors text-sm">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="text-white/40 text-sm">{PERSONAL_INFO.location}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/40 hover:text-white hover:border-primary-500/30 transition-all">
                <Github size={16} />
              </a>
              <a href={PERSONAL_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/40 hover:text-white hover:border-primary-500/30 transition-all">
                <Instagram size={16} />
              </a>
              <a href={PERSONAL_INFO.social.telegram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/40 hover:text-white hover:border-primary-500/30 transition-all">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm flex items-center gap-1">
            &copy; {currentYear} {PERSONAL_INFO.nickname}. Built with <Heart size={12} className="text-red-400" /> and lots of coffee.
          </p>
          <a
            href="/akmalovichdev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-sm hover:text-primary-400 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
