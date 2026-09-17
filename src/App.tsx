import type React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEOHelper from './components/SEOHelper';
import Passions from './components/Passions';
import Journey from './components/Journey';
import Stats from './components/Stats';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';

// A high-contrast, beautiful layout wrapper for standalone pages
function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-28 pb-16 min-h-[70vh] relative overflow-hidden">
      {/* Visual background guide lines and overlays */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-cyan-950/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6">
        <Link
          id="back-to-hub-link"
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-(--text-primary) transition-colors group bg-(--bg-chip) border border-(--border-soft) px-4 py-2 rounded-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-cyan-400" />
          <span className="font-bold tracking-wider capitalize">Return to Main Hub</span>
        </Link>
      </div>
      
      {/* Page Content animate-in container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Long-scroll Homepage Hub
function Home() {
  return (
    <>
      <Hero />
      <Passions />
      <Journey />
      <Stats />
      <Education />
      <Blog />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      {/* Scroll restore helper on navigation */}
      <ScrollToTop />

      {/* Per-route SEO: unique title, canonical, description, OG & Twitter meta */}
      <SEOHelper />

      <div className="min-h-screen bg-(--bg-base) text-(--text-primary) font-sans antialiased selection:bg-cyan-500/30 selection:text-white relative">
        {/* Dynamic Grid Background Overlay */}
        <div className="fixed inset-0 bg-dark-grid opacity-10 pointer-events-none z-0" />

        {/* Global sticky header with reactive active state */}
        <Header />

        {/* Routes configuration */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/passions" element={<PageLayout><Passions /></PageLayout>} />
            <Route path="/journey" element={<PageLayout><Journey /></PageLayout>} />
            <Route path="/stats" element={<PageLayout><Stats /></PageLayout>} />
            <Route path="/education" element={<PageLayout><Education /></PageLayout>} />
            <Route path="/blog" element={<PageLayout><Blog /></PageLayout>} />
            <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
            {/* Fallback wildcard to main home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global branding footer with link lists */}
        <Footer />
      </div>
    </Router>
  );
}
