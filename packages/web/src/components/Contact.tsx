import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { PERSONAL_INFO } from '../lib/constants';
import { Mail, MapPin, Send, Github, Instagram, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setIsSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data: { ok?: boolean; error?: string } = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || 'Failed');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to send');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const quickLinks = [
    { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: 'mailto:' + PERSONAL_INFO.email },
    { icon: MessageCircle, label: 'Telegram', value: '@akmalovichdev', href: PERSONAL_INFO.social.telegram },
    { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? I'm always open to discussing new opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {quickLinks.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover p-5 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors shrink-0">
                  <info.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors font-medium">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <div className="glass-card p-5">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Social</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: PERSONAL_INFO.social.github, label: 'GitHub' },
                  { icon: Instagram, href: PERSONAL_INFO.social.instagram, label: 'Instagram' },
                  { icon: MessageCircle, href: PERSONAL_INFO.social.telegram, label: 'Telegram' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/50 hover:bg-primary-500/10 hover:border-primary-500/30 hover:text-primary-400 transition-all"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 glass-card p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-white/50 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-white/50 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-white/50 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitError && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  <span>{submitError}</span>
                </div>
              )}
              {isSubmitted && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle2 size={16} />
                  <span>Message sent! I'll get back to you soon.</span>
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50">
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
