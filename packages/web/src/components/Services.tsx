import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SERVICES } from '../lib/constants';
import { Code2, Server, Zap, Cloud, Check } from 'lucide-react';

const iconMap = {
  code: Code2,
  server: Server,
  zap: Zap,
  cloud: Cloud,
};

export default function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="section-padding relative bg-surface-dark/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            Services & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            End-to-end solutions from concept to deployment and beyond
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-8 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>

                  <p className="text-white/60 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-white/50">
                        <Check size={14} className="text-primary-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
