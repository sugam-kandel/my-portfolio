import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Bike, Compass, Film, ArrowRight, X, Sparkles, AlertCircle } from 'lucide-react';
import { PASSIONS } from '../data';
import { Passion } from '../types';

export default function Passions() {
  const [selectedPassion, setSelectedPassion] = useState<Passion | null>(null);

  const getIcon = (name: string, className: string) => {
    switch (name) {
      case 'Code':
        return <Code className={className} />;
      case 'Bike':
        return <Bike className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'Film':
        return <Film className={className} />;
      default:
        return <Code className={className} />;
    }
  };

  return (
    <section id="passions" className="py-14 md:py-24 bg-(--bg-section) relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Side: Header & Context */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-(--text-primary) capitalize tracking-tight">
              What I Do &<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">What I Love</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded" />
          </div>

          <p className="text-(--text-muted) text-sm leading-relaxed font-light">
            If you explore my world, you will find a unique intersection of structural logic and pure outdoor adventure. I balance high-concentration code design with the fast-paced, high-adrenaline world of motorbike specs and geographic exploration.
          </p>

          <div className="pt-4">
            <button
              id="view-all-passions-btn"
              onClick={() => setSelectedPassion(PASSIONS[0])}
              className="group inline-flex items-center gap-3 text-xs font-display font-bold tracking-widest text-cyan-400 hover:text-(--text-primary) capitalize transition-colors py-2 cursor-pointer"
            >
              <span>Explore My Coding Specs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Passions Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PASSIONS.map((passion, index) => (
            <motion.div
              id={`passion-card-${passion.id}`}
              key={passion.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPassion(passion)}
              className="group relative bg-(--bg-panel)/60 border border-(--border-subtle) hover:border-cyan-500/30 p-8 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Card Hover Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-6">
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${passion.accentColor} p-[1px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full bg-(--bg-panel) rounded-[7px] flex items-center justify-center">
                    {getIcon(passion.iconName, 'w-5 h-5 text-(--text-primary) group-hover:scale-110 transition-transform')}
                  </div>
                </div>

                {/* Title & Desc */}
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-(--text-primary) group-hover:text-cyan-400 transition-colors">
                    {passion.title}
                  </h3>
                  <p className="text-(--text-muted) text-xs leading-relaxed line-clamp-3">
                    {passion.description}
                  </p>
                </div>
              </div>

              {/* Action Prompt */}
              <div className="mt-8 flex items-center gap-2 text-(--text-faint) group-hover:text-cyan-400 text-xs font-mono tracking-wider transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Passion Modal Panel */}
      <AnimatePresence>
        {selectedPassion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              id="passion-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPassion(null)}
              className="absolute inset-0 bg-(--bg-base)/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              id="passion-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-(--bg-panel) border border-(--border-soft) rounded-2xl p-8 shadow-2xl z-10 overflow-hidden"
            >
              {/* Accent banner glow */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${selectedPassion.accentColor}`} />

              <button
                id="close-passion-modal-btn"
                onClick={() => setSelectedPassion(null)}
                aria-label="Close passion details"
                className="absolute top-6 right-6 text-(--text-muted) hover:text-(--text-primary) p-1 rounded-full hover:bg-(--bg-chip) transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedPassion.accentColor} p-[1px] flex items-center justify-center shadow-lg`}>
                    <div className="w-full h-full bg-(--bg-panel) rounded-[11px] flex items-center justify-center">
                      {getIcon(selectedPassion.iconName, 'w-6 h-6 text-(--text-primary)')}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-cyan-400 capitalize">My Passion Insights</span>
                    <h3 className="text-xl font-display font-bold text-(--text-primary)">{selectedPassion.title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-(--bg-chip) border border-(--border-subtle) flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <p className="text-(--text-body) text-xs italic leading-relaxed">
                      "{selectedPassion.description}"
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold capitalize text-(--text-muted) tracking-wider">Deep Dive</h4>
                    <p className="text-(--text-body) text-xs leading-relaxed font-light">
                      {selectedPassion.detail}
                    </p>
                  </div>

                  {selectedPassion.id === 'coding' && (
                    <div className="pt-4 border-t border-(--border-subtle) flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded bg-(--bg-chip) border border-cyan-500/20 text-[10px] font-mono text-cyan-400">TypeScript</span>
                      <span className="px-2.5 py-1 rounded bg-(--bg-chip) border border-cyan-500/20 text-[10px] font-mono text-cyan-400">React 19</span>
                      <span className="px-2.5 py-1 rounded bg-(--bg-chip) border border-cyan-500/20 text-[10px] font-mono text-cyan-400">Tailwind CSS</span>
                      <span className="px-2.5 py-1 rounded bg-(--bg-chip) border border-cyan-500/20 text-[10px] font-mono text-cyan-400">Computer Science Grade 11</span>
                    </div>
                  )}

                  {selectedPassion.id === 'bikes' && (
                    <div className="pt-4 border-t border-(--border-subtle) flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded bg-(--bg-chip) border border-pink-500/20 text-[10px] font-mono text-pink-400">Mechanics</span>
                      <span className="px-2.5 py-1 rounded bg-(--bg-chip) border border-pink-500/20 text-[10px] font-mono text-pink-400">Single Cylinder Specs</span>
                      <span className="px-2.5 py-1 rounded bg-(--bg-chip) border border-pink-500/20 text-[10px] font-mono text-pink-400">ABS Dynamics</span>
                      <span className="px-2.5 py-1 rounded bg-(--bg-chip) border border-pink-500/20 text-[10px] font-mono text-pink-400">Riding Trails</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    id="close-passion-modal-action-btn"
                    onClick={() => setSelectedPassion(null)}
                    className="px-5 py-2 bg-(--bg-chip) hover:bg-(--bg-chip) text-(--text-primary) font-display text-xs tracking-wider rounded font-bold cursor-pointer border border-(--border-subtle) transition-colors"
                  >
                    Got It
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
