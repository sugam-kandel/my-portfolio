import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Youtube, Instagram, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'HOME', id: 'home', path: '/' },
    { label: 'PASSIONS', id: 'passions', path: '/passions' },
    { label: 'JOURNEY', id: 'journey', path: '/journey' },
    { label: 'STATS', id: 'stats', path: '/stats' },
    { label: 'EDUCATION', id: 'education', path: '/education' },
    { label: 'BLOG', id: 'blog', path: '/blog' },
    { label: 'CONTACT', id: 'contact', path: '/contact' },
  ];

  // Derive active item ID from current route pathname
  const getActiveId = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    const matched = navItems.find((item) => item.path === path);
    return matched ? matched.id : 'home';
  };

  const activeSection = getActiveId();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080916]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          id="logo-link"
          to="/"
          className="flex items-center gap-2 text-white font-display font-bold tracking-widest text-lg group cursor-pointer"
        >
          <div className="w-9 h-9 rounded bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            SUGAM KANDEL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              id={`nav-${item.id}`}
              key={item.id}
              to={item.path}
              className={`text-xs font-display tracking-widest font-semibold transition-all relative py-2 cursor-pointer ${
                activeSection === item.id
                  ? 'text-cyan-400'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Social Links & Call To Action */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            id="social-github"
            href="https://github.com/sugam-kandel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="social-instagram"
            href="https://www.instagram.com/suga.m7606"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            id="social-youtube"
            href="https://www.youtube.com/@NJPLSMST"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-[#080916] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  id={`mobile-nav-${item.id}`}
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-display tracking-widest font-semibold py-2 text-left w-full border-b border-white/5 cursor-pointer block ${
                    activeSection === item.id ? 'text-cyan-400 font-bold' : 'text-neutral-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-6 py-4 justify-center">
                <a
                  id="mobile-social-github"
                  href="https://github.com/sugam-kandel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-cyan-400"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  id="mobile-social-instagram"
                  href="https://www.instagram.com/suga.m7606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-cyan-400"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  id="mobile-social-youtube"
                  href="https://www.youtube.com/@NJPLSMST"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-cyan-400"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
