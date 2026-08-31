import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SKILLS } from '../lib/constants';
import { Monitor, Server, Wrench } from 'lucide-react';

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const categories = [
    { title: 'Frontend', skills: SKILLS.frontend, icon: Monitor, gradient: 'from-primary-500 to-violet-500' },
    { title: 'Backend', skills: SKILLS.backend, icon: Server, gradient: 'from-accent-500 to-blue-500' },
    { title: 'DevOps', skills: SKILLS.devops, icon: Wrench, gradient: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <section id="stack" ref={ref} className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-subtitle">
            Battle-tested tools and frameworks I use to build reliable products
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="glass-card-hover p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={"p-2.5 rounded-xl bg-gradient-to-br " + category.gradient}>
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-white/80 text-sm font-medium">{skill.name}</span>
                      <span className="text-white/40 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        className={"h-full rounded-full bg-gradient-to-r " + category.gradient}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: skill.level + '%' } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee of all tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden mask-fade-x py-4"
        >
          <div className="flex animate-marquee gap-4 w-max">
            {[...SKILLS.tools, ...SKILLS.tools].map((tool, index) => (
              <div
                key={tool + '-' + index}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] whitespace-nowrap hover:border-primary-500/30 hover:bg-primary-500/5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-accent-400" />
                <span className="text-sm text-white/60 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
