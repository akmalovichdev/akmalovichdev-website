import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SKILLS } from '../lib/constants';
import { Server, Code2, Wrench } from 'lucide-react';

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const categories = [
    { title: 'DevOps', skills: SKILLS.devops, icon: Server, color: 'primary' },
    { title: 'Backend', skills: SKILLS.backend, icon: Code2, color: 'accent' },
  ];

  return (
    <section id="skills" ref={ref} className="section-padding relative bg-surface-dark/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl ${
                    category.color === 'primary'
                      ? 'bg-primary-500/20 text-primary-400'
                      : 'bg-accent-500/20 text-accent-400'
                  }`}
                >
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="text-white/50 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          category.color === 'primary'
                            ? 'bg-gradient-to-r from-primary-500 to-primary-400'
                            : 'bg-gradient-to-r from-accent-500 to-accent-400'
                        }`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-white/10 text-white/80">
              <Wrench size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white">Tools & Technologies</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {SKILLS.tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <span className="text-lg font-bold gradient-text">
                    {tool.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs text-white/60 text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
