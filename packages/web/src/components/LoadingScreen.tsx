import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-1">
            <img
              src="/apple-touch-icon.png"
              alt="akmalovich.dev logo"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
          <motion.img
            src="/apple-touch-icon.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-2xl object-cover blur-xl opacity-50 pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.div
          className="flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary-500"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
        <motion.p
          className="text-white/60 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          akmalovich.dev
        </motion.p>
      </div>
    </motion.div>
  );
}
