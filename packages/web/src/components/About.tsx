import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Code2, Server, Zap, Award } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../lib/constants';

function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref as any}>
      {Number.isInteger(value) ? count : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const highlights = [
    { icon: Code2, text: '15+ production projects deployed and maintained' },
    { icon: Server, text: 'Multi-server infrastructure with 99.9% uptime' },
    { icon: Zap, text: 'Full-stack: from UI/UX to DevOps automation' },
    { icon: Award, text: '5+ years building real business solutions' },
  ];

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-hover p-6 sm:p-8 text-center group"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text-static mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label">
              <MapPin size={14} />
              {PERSONAL_INFO.location}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Turning ideas into
              <br />
              <span className="gradient-text">production systems</span>
            </h2>
            <div className="space-y-4 text-white/60 text-lg leading-relaxed">
              <p>
                I am a full-stack developer and DevOps engineer based in Tashkent. I specialize in building
                web applications that solve real business problems — from taxi platforms and marketplaces
                to education CRMs and automation tools.
              </p>
              <p>
                I don't just write code — I architect systems. Every project I deliver is built to scale,
                deployed with Docker, monitored for uptime, and maintained for the long term.
              </p>
              <p>
                When I am not shipping features, I am optimizing infrastructure, setting up CI/CD pipelines,
                or exploring new technologies to stay ahead of the curve.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card-hover p-5 flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors shrink-0">
                  <item.icon size={20} />
                </div>
                <p className="text-white/70 text-base leading-relaxed pt-1">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
