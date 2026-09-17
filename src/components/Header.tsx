import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Youtube, Instagram, Facebook, Twitter, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', id: 'home', path: '/' },
    { label: 'Passions', id: 'passions', path: '/passions' },
    { label: 'Journey', id: 'journey', path: '/journey' },
    { label: 'Stats', id: 'stats', path: '/stats' },
    { label: 'Education', id: 'education', path: '/education' },
    { label: 'Blog', id: 'blog', path: '/blog' },
    { label: 'Contact', id: 'contact', path: '/contact' },
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
          ? 'bg-(--bg-header)/95 backdrop-blur-md border-b border-(--border-subtle) py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          id="logo-link"
          to="/"
          className="flex items-center group cursor-pointer"
        >
          <img
            id="header-logo"
            src="/assets/fullLogo.png"
            alt="Sugam Kandel"
            className="h-14 w-auto rounded-lg group-hover:scale-105 transition-transform"
          />
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
                  : 'text-(--text-muted) hover:text-(--text-primary)'
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

        {/* Social Links, Theme Toggle & Call To Action */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            id="social-github"
            href="https://github.com/sugam-kandel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--text-muted) hover:text-cyan-400 hover:scale-110 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="social-instagram"
            href="https://www.instagram.com/suga.m7606"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--text-muted) hover:text-cyan-400 hover:scale-110 transition-all duration-200"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            id="social-youtube"
            href="https://www.youtube.com/@NJPLSMST"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--text-muted) hover:text-cyan-400 hover:scale-110 transition-all duration-200"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            id="social-facebook"
            href="https://www.facebook.com/sugam.kandel.71112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--text-muted) hover:text-cyan-400 hover:scale-110 transition-all duration-200"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            id="social-x"
            href="https://x.com/kadelsugam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--text-muted) hover:text-cyan-400 hover:scale-110 transition-all duration-200"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <button
            id="theme-toggle-desktop"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="text-(--text-muted) hover:text-cyan-400 hover:scale-110 transition-all duration-200 cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-(--text-primary) p-2 hover:bg-(--bg-chip) rounded-full transition-colors cursor-pointer"
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
            className="lg:hidden w-full bg-(--bg-header) border-b border-(--border-subtle) overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  id={`mobile-nav-${item.id}`}
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-display tracking-widest font-semibold py-2 text-left w-full border-b border-(--border-subtle) cursor-pointer block ${
                    activeSection === item.id ? 'text-cyan-400 font-bold' : 'text-(--text-muted)'
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
                  className="text-(--text-muted) hover:text-cyan-400"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  id="mobile-social-instagram"
                  href="https://www.instagram.com/suga.m7606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--text-muted) hover:text-cyan-400"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  id="mobile-social-youtube"
                  href="https://www.youtube.com/@NJPLSMST"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--text-muted) hover:text-cyan-400"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  id="mobile-social-facebook"
                  href="https://www.facebook.com/sugam.kandel.71112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--text-muted) hover:text-cyan-400"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  id="mobile-social-x"
                  href="https://x.com/kadelsugam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--text-muted) hover:text-cyan-400"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <button
                  id="theme-toggle-mobile"
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                  className="text-(--text-muted) hover:text-cyan-400 cursor-pointer"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
