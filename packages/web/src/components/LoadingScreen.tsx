import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary-500/30"
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <img
              src="/apple-touch-icon.png"
              alt="Loading"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-transparent border-t-primary-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <motion.div
          className="flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary-400"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
