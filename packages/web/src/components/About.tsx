import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Calendar, Code2, Server } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/constants';

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stats = [
    { label: 'Years Experience', value: '5+', icon: Calendar },
    { label: 'Projects Completed', value: '50+', icon: Code2 },
    { label: 'Servers Managed', value: '100+', icon: Server },
  ];

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A passionate developer focused on building scalable and efficient solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-1">
                  <img
                    src="/apple-touch-icon.png"
                    alt="akmalovich.dev logo"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {PERSONAL_INFO.nickname}
                  </h3>
                  <p className="text-white/60 flex items-center gap-1">
                    <MapPin size={14} />
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-6">
                I'm a DevOps and Backend Developer with a passion for automation,
                cloud infrastructure, and building robust systems. My journey in
                tech started with a curiosity about how things work behind the
                scenes, which led me to specialize in the infrastructure that
                powers modern applications.
              </p>

              <p className="text-white/70 leading-relaxed mb-6">
                I believe in writing clean, maintainable code and creating
                infrastructure that scales seamlessly. When I'm not coding, you
                can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer
                community.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented'].map(
                  (trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 text-sm bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                    >
                      {trait}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card-hover p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                  <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold text-white mb-4">What I Do</h4>
              <ul className="space-y-3">
                {[
                  'Design and implement CI/CD pipelines for automated deployments',
                  'Build and manage containerized applications with Docker & Kubernetes',
                  'Develop scalable REST APIs and microservices',
                  'Optimize cloud infrastructure for performance and cost',
                  'Implement monitoring, logging, and alerting solutions',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
