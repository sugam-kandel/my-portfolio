import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Instagram, Youtube, Send, Code, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [subbed, setSubbed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail || !newsEmail.includes('@')) return;
    setSubbed(true);
    setTimeout(() => {
      setNewsEmail('');
    }, 2000);
  };

  return (
    <footer id="footer-section" className="bg-[#04050D] border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      {/* Background glow node */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
        
        {/* Column 1 - Brand Profile */}
        <div className="lg:col-span-4 space-y-6">
          <Link
            id="footer-logo-link"
            to="/"
            className="flex items-center gap-2 text-white font-display font-bold tracking-widest text-lg group cursor-pointer inline-flex"
          >
            <div className="w-9 h-9 rounded bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent capitalize">
              SUGAM KANDEL
            </span>
          </Link>

          <p className="text-neutral-400 text-xs leading-relaxed font-light">
            A high-school Computer Science student pursuing coding, mechanical research, and geographical adventures. Combining logic and wheels to explore the digital and physical landscapes.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              id="footer-social-github"
              href="https://github.com/sugam-kandel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-white/5 hover:bg-cyan-500 hover:text-black hover:scale-105 transition-all flex items-center justify-center text-neutral-400"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-social-instagram"
              href="https://www.instagram.com/suga.m7606"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-white/5 hover:bg-cyan-500 hover:text-black hover:scale-105 transition-all flex items-center justify-center text-neutral-400"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="footer-social-youtube"
              href="https://www.youtube.com/@NJPLSMST"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-white/5 hover:bg-cyan-500 hover:text-black hover:scale-105 transition-all flex items-center justify-center text-neutral-400"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="lg:col-span-2.5 space-y-6">
          <h4 className="text-xs font-display font-bold text-white capitalize tracking-widest relative pb-2 border-b border-white/5">
            WHO WE ARE
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'Home Base', path: '/' },
              { label: 'Core Passions', path: '/passions' },
              { label: 'Timeline Journey', path: '/journey' },
              { label: 'Academic Stats', path: '/stats' },
              { label: 'Foundations', path: '/education' },
              { label: 'Perspectives Blog', path: '/blog' },
              { label: 'Send Message', path: '/contact' },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  id={`footer-nav-link-${idx}`}
                  to={link.path}
                  className="text-xs text-neutral-400 hover:text-cyan-400 hover:translate-x-1 transition-all text-left cursor-pointer block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - My Passions */}
        <div className="lg:col-span-2.5 space-y-6">
          <h4 className="text-xs font-display font-bold text-white capitalize tracking-widest relative pb-2 border-b border-white/5">
            OUR WORK
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'Software Architecture' },
              { label: 'Motorbike Specs' },
              { label: 'Route Expedition' },
              { label: 'Cinematography Study' },
            ].map((work, idx) => (
              <li key={idx}>
                <Link
                  id={`footer-passion-link-${idx}`}
                  to="/passions"
                  className="text-xs text-neutral-400 hover:text-pink-400 hover:translate-x-1 transition-all text-left cursor-pointer block"
                >
                  {work.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="text-xs font-display font-bold text-white capitalize tracking-widest relative pb-2 border-b border-white/5">
            NEWSLETTER
          </h4>
          <p className="text-neutral-400 text-xs leading-relaxed font-light">
            Subscribe to get notified whenever I release a new coding tutorial, blog post, or motorcycle specs analysis.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="relative flex items-center border-b border-white/20 focus-within:border-cyan-400 transition-colors py-1.5">
              <input
                id="footer-newsletter-email"
                type="email"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-transparent text-xs text-white placeholder-neutral-600 focus:outline-none py-1 font-sans"
              />
              <button
                id="footer-newsletter-submit"
                type="submit"
                className="text-neutral-400 hover:text-cyan-400 p-1 cursor-pointer transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <AnimatePresence>
              {subbed && (
                <motion.div
                  id="footer-newsletter-success"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="text-[10px] text-emerald-400 flex items-center gap-1.5 mt-2"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Subscribed Successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
        <div>
          Copyright © 2026 Sugam Kandel. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Constructed with</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" />
          <span>in Sainamaina, Butwal, Nepal</span>
        </div>
      </div>
    </footer>
  );
}
