import { PERSONAL_INFO, NAV_LINKS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-surface-dark/50">
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-white/5 p-1">
                <img
                  src="/apple-touch-icon.png"
                  alt="akmalovich.dev logo"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <span className="font-mono text-lg font-semibold gradient-text">
                akmalovich.dev
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              DevOps & Backend Developer passionate about building scalable
              infrastructure and robust systems.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="text-white/60 text-sm">{PERSONAL_INFO.location}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={PERSONAL_INFO.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} {PERSONAL_INFO.nickname}. All rights reserved.
          </p>
          <a
            href="/akmalovichdev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-sm hover:text-primary-400 transition-colors"
          >
            Portfolio by akmalovich.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
