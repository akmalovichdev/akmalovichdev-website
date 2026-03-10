import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Instagram, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/constants';
import { scrollToSection } from '../lib/utils';

export default function Hero() {
  const socialIcons = {
    github: Github,
    telegram: Send,
    instagram: Instagram,
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-white/10 bg-white/5 p-1">
              <img
                src="/favicon.svg"
                alt="akmalovich.dev avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <motion.img
              src="/favicon.svg"
              alt=""
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-full object-cover blur-2xl pointer-events-none"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.3, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-400 font-mono text-sm sm:text-base mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-medium mb-6"
          >
            {PERSONAL_INFO.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-white/60 max-w-2xl mb-8 leading-relaxed"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              <Send size={18} />
              Contact Me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-secondary"
            >
              View Projects
            </button>
            <a
              href="/akmalovichdev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FileText size={18} />
              Portfolio PDF
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            {Object.entries(PERSONAL_INFO.social).map(([platform, url]) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-primary-400 hover:scale-110"
                  aria-label={`Visit ${platform}`}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-white/40 hover:text-white/80 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
