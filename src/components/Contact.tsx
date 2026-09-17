import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, CheckCircle, Info, Phone, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../config/forms';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 3500);
  };

  return (
    <section id="contact" className="py-14 md:py-24 bg-(--bg-base) relative overflow-hidden">
      {/* Decorative cyber blurs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-950/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Banner call to action - inspired by the drone banner from the mockup! */}
        <div className="relative rounded-2xl bg-gradient-to-r from-cyan-900/40 via-(--bg-panel) to-purple-950/40 border border-(--border-subtle) p-12 mb-16 overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl">
          {/* Grid visual overlay */}
          <div className="absolute inset-0 bg-dark-grid opacity-10 pointer-events-none" />
          
          <div className="space-y-4 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-bold text-cyan-400 capitalize tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Collaborated</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-(--text-primary) capitalize leading-snug tracking-tight">
              Fresh Ideas, Bold Explorations. <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Code the Future, Ride the Present.</span>
            </h3>
            
            <p className="text-(--text-muted) text-xs leading-relaxed font-light font-sans">
              Have an awesome software project, bike specs inquiry, or want to discuss computer science ideas? Reach out and let's construct something epic.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              id="cta-contact-form"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-(--text-primary) font-display font-bold text-xs tracking-widest capitalize rounded shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Send a Message</span>
              <Send className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Form and info panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Details left */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400">Connect</span>
                <h2 className="text-3xl font-display font-semibold text-(--text-primary) capitalize tracking-tight">
                  Get in Touch
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded" />
              </div>

              <p className="text-(--text-muted) text-xs leading-relaxed font-light">
                Feel free to fill out the secure contact form, or connect via any of the social platforms in the footer. I always check my inbox weekly!
              </p>
            </div>

            {/* Quick Specs Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-(--bg-panel)/50 border border-(--border-subtle)">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-(--text-faint) capitalize">Best Way to Reach Me</span>
                  <span className="text-xs font-display font-bold text-(--text-primary)">
                    Use the contact form — I reply within a few days.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-(--bg-panel)/50 border border-(--border-subtle)">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-(--text-faint) capitalize">Current Location</span>
                  <span className="text-xs font-display font-bold text-(--text-primary)">
                    Butwal, Rupandehi, Nepal
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-(--bg-panel)/50 border border-(--border-subtle)">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-(--text-faint) capitalize">Current Focus</span>
                  <span className="text-xs font-display font-bold text-(--text-primary)">
                    Computer Science Student (+2 Management)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form container right */}
          <div className="lg:col-span-8 bg-(--bg-panel)/40 border border-(--border-subtle) rounded-2xl p-8 relative">
            <h3 className="text-base font-display font-bold text-(--text-primary) capitalize tracking-wider mb-6 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Send Me a Message</span>
            </h3>

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="botcheck"
                value=""
                onChange={() => {}}
                className="hidden"
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="block text-[10px] font-mono text-(--text-muted) capitalize tracking-widest">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Sugam Kandel"
                    className="w-full bg-(--bg-base)/80 border border-(--border-subtle) hover:border-(--border-soft) focus:border-cyan-500/50 rounded-lg px-4 py-3.5 text-xs text-(--text-primary) placeholder-(--text-dim) focus:outline-none transition-colors font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="form-email" className="block text-[10px] font-mono text-(--text-muted) capitalize tracking-widest">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full bg-(--bg-base)/80 border border-(--border-subtle) hover:border-(--border-soft) focus:border-cyan-500/50 rounded-lg px-4 py-3.5 text-xs text-(--text-primary) placeholder-(--text-dim) focus:outline-none transition-colors font-sans"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="form-subject" className="block text-[10px] font-mono text-(--text-muted) capitalize tracking-widest">
                  Subject
                </label>
                <input
                  id="form-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Collab, Bike discussion, etc."
                  className="w-full bg-(--bg-base)/80 border border-(--border-subtle) hover:border-(--border-soft) focus:border-cyan-500/50 rounded-lg px-4 py-3.5 text-xs text-(--text-primary) placeholder-(--text-dim) focus:outline-none transition-colors font-sans"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="form-message" className="block text-[10px] font-mono text-(--text-muted) capitalize tracking-widest">
                  Your Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Sugam! I'm really impressed by your portfolio and wanted to discuss..."
                  className="w-full bg-(--bg-base)/80 border border-(--border-subtle) hover:border-(--border-soft) focus:border-cyan-500/50 rounded-lg px-4 py-3.5 text-xs text-(--text-primary) placeholder-(--text-dim) focus:outline-none transition-colors font-sans resize-none"
                />
              </div>

              {/* Message status banner */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    id="contact-status-success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-emerald-400 text-xs"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Your message has been dispatched successfully! Thank you for connecting, Sugam will respond soon!</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    id="contact-status-error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-xs"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Failed to submit. Please fill out all required fields marked with (*).</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  id="form-submit-btn"
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-(--text-primary) font-display font-bold text-xs tracking-widest capitalize rounded shadow-lg shadow-cyan-500/15 disabled:opacity-55 transition-all cursor-pointer"
                >
                  {status === 'loading' ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-(--text-primary)" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Transmitting Message...</span>
                    </div>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
