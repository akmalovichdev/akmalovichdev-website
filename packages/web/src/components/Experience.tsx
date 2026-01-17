import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { EXPERIENCE } from '../lib/constants';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="experience" ref={ref} className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            My professional journey and the roles I've held
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent lg:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-background-dark -translate-x-1/2 mt-6 z-10" />

                <div className={`flex-1 pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div className={`glass-card-hover p-6 sm:p-8 ${index % 2 === 0 ? 'lg:ml-auto' : ''} max-w-xl`}>
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="p-2 rounded-lg bg-primary-500/20">
                        <Briefcase className="w-5 h-5 text-primary-400" />
                      </div>
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-primary-400 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 text-white/50 text-sm mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <Calendar size={14} />
                      {exp.period}
                    </div>

                    <p className={`text-white/70 leading-relaxed mb-4 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-white/5 text-white/70 rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
