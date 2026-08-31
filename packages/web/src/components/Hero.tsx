import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Instagram, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/constants';
import { scrollToSection } from '../lib/utils';

function useTypingEffect(words: readonly string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect(PERSONAL_INFO.roles);

  const socialIcons: Record<string, any> = {
    github: Github,
    telegram: Send,
    instagram: Instagram,
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Logo avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary-500/20">
                <img
                  src="/apple-touch-icon.png"
                  alt="akmalovich.dev"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -inset-3 rounded-full border border-primary-500/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span className="text-sm text-white/70">Available for new projects</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight"
          >
            <span className="block text-white">Building</span>
            <span className="block gradient-text mt-2">Digital Products</span>
            <span className="block text-white mt-2">That Scale</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 h-8 flex items-center justify-center"
          >
            <span className="text-xl sm:text-2xl text-white/60 font-mono">
              {'> '}
              <span className="text-primary-400">{typedText}</span>
              <span className="animate-pulse text-primary-400">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/50 max-w-3xl mb-10 leading-relaxed text-balance"
          >
            {PERSONAL_INFO.heroSubtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <button onClick={() => scrollToSection('projects')} className="btn-primary group">
              <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              <Send size={18} />
              Let us Talk
            </button>
            <a href="/akmalovichdev.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FileText size={18} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-3"
          >
            {Object.entries(PERSONAL_INFO.social).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white/50 transition-all duration-300 hover:bg-primary-500/10 hover:border-primary-500/30 hover:text-primary-400 hover:scale-110 hover:-translate-y-1"
                  aria-label={platform}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
