import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { EXPERIENCE } from '../lib/constants';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Journey</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            From self-taught developer to building production systems for thousands of users
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card-hover p-8 relative overflow-hidden group"
            >
              {/* Timeline dot */}
              <div className="absolute top-8 left-0 w-1 h-full bg-gradient-to-b from-primary-500/50 to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400 shrink-0">
                  <Briefcase size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="flex items-center gap-1.5 text-sm text-white/40 font-mono">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-white/60 leading-relaxed mb-4">{exp.description}</p>

                  {/* Highlights */}
                  {exp.highlights && (
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-white/50">
                          <CheckCircle2 size={14} className="text-primary-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-white/[0.04] text-white/50 rounded-md border border-white/[0.06] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
