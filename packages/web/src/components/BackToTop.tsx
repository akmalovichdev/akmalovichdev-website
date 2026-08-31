import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-primary-600/80 backdrop-blur-sm text-white border border-primary-500/30 hover:bg-primary-500 hover:scale-110 transition-all shadow-lg shadow-primary-500/20"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
