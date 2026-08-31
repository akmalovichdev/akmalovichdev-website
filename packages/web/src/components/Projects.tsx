import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { PROJECTS, PERSONAL_INFO } from '../lib/constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="section-padding relative bg-surface-dark/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real products built for real businesses — all running in production
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, index) => {
            const gh = 'github' in project ? (project as any).github : undefined;
            const dm = 'demo' in project ? (project as any).demo : undefined;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card-hover overflow-hidden relative"
              >
                <div className="p-8 sm:p-10 relative z-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-white/40 group-hover:text-primary-400 group-hover:border-primary-500/30 transition-all shrink-0 ml-4">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-white/[0.04] text-white/50 rounded-full border border-white/[0.06] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {dm && (
                      <a
                        href={dm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors font-medium"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {gh && (
                      <a
                        href={gh}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((project, index) => {
            const dm = 'demo' in project ? (project as any).demo : undefined;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                className="group glass-card-hover p-5 flex flex-col"
              >
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] text-white/30 font-mono">{tech}</span>
                    ))}
                  </div>
                  {dm && (
                    <a href={dm} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-primary-400 transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
