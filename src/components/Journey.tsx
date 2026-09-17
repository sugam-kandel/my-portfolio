import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Filter, MapPin, Calendar, X, GraduationCap, Code, Bike, Compass } from 'lucide-react';
import { JOURNEY_ITEMS } from '../data';
import { JourneyItem } from '../types';

export default function Journey() {
  const [filter, setFilter] = useState<'all' | 'education' | 'coding' | 'bikes' | 'travel'>('all');
  const [selectedItem, setSelectedItem] = useState<JourneyItem | null>(null);

  const filterTabs = [
    { label: 'All Journey', id: 'all' },
    { label: 'Academics', id: 'education' },
    { label: 'Coding', id: 'coding' },
    { label: 'Bikes', id: 'bikes' },
    { label: 'Travels', id: 'travel' },
  ];

  const filteredItems = JOURNEY_ITEMS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'coding':
        return <Code className="w-4 h-4 text-emerald-400" />;
      case 'bikes':
        return <Bike className="w-4 h-4 text-pink-400" />;
      case 'travel':
        return <Compass className="w-4 h-4 text-purple-400" />;
      default:
        return <GraduationCap className="w-4 h-4 text-(--text-muted)" />;
    }
  };

  const getCategoryGlow = (category: string) => {
    switch (category) {
      case 'education':
        return 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] border-cyan-500/10 hover:border-cyan-500/30';
      case 'coding':
        return 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] border-emerald-500/10 hover:border-emerald-500/30';
      case 'bikes':
        return 'group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)] border-pink-500/10 hover:border-pink-500/30';
      case 'travel':
        return 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] border-purple-500/10 hover:border-purple-500/30';
      default:
        return '';
    }
  };

  return (
    <section id="journey" className="py-24 bg-(--bg-base) relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400">My Milestones</span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-(--text-primary) capitalize tracking-tight">
              Portfolio & <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Life Journey</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-(--bg-panel)/80 backdrop-blur border border-(--border-subtle) p-1 rounded-lg">
            {filterTabs.map((tab) => (
              <button
                id={`journey-filter-btn-${tab.id}`}
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded text-[10px] font-display font-bold tracking-widest capitalize transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-(--text-primary) shadow-lg'
                    : 'text-(--text-muted) hover:text-(--text-primary)'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                id={`journey-card-${item.id}`}
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className={`group bg-(--bg-panel)/50 border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${getCategoryGlow(item.category)}`}
              >
                {/* Image Wrap */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    id={`journey-img-${item.id}`}
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={338}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-(--bg-base)/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top tags */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-(--bg-header)/90 backdrop-blur border border-(--border-soft) text-[9px] font-mono font-bold tracking-wider text-(--text-primary) capitalize flex items-center gap-1.5 shadow-lg">
                      {getCategoryIcon(item.category)}
                      {item.category}
                    </span>
                    {item.tag && (
                      <span className="px-2 py-1 rounded bg-cyan-500/10 backdrop-blur border border-cyan-500/20 text-[9px] font-mono font-bold tracking-wider text-cyan-400 capitalize">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Corner link button style */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-(--bg-chip) backdrop-blur border border-(--border-mid) flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 shadow-lg">
                    <ArrowUpRight className="w-4 h-4 text-(--text-primary)" />
                  </div>
                </div>

                {/* Bottom details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-(--text-muted)">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-(--text-faint)" />
                      {item.date}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-(--text-faint)" />
                        {item.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-display font-bold text-(--text-primary) group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-(--text-muted) text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Immersive Milestone Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              id="journey-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-(--bg-base)/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              id="journey-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-(--bg-panel) border border-(--border-soft) rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                id="close-journey-modal-btn"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 text-(--text-primary) bg-black/40 hover:bg-black/60 p-1.5 rounded-full backdrop-blur-sm border border-(--border-soft) transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Hero Image */}
              <div className="relative aspect-video w-full">
                <img
                  id="journey-modal-hero-img"
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={600}
                  height={338}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-(--bg-panel) via-transparent to-transparent" />
                
                {/* Banner titles */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-(--bg-header)/90 backdrop-blur border border-(--border-soft) text-[10px] font-mono font-bold tracking-wider text-(--text-primary) capitalize shadow-lg">
                      {getCategoryIcon(selectedItem.category)}
                      {selectedItem.category}
                    </span>
                    <h3 className="text-2xl font-display font-semibold text-(--text-primary) capitalize drop-shadow-md">
                      {selectedItem.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description & Details */}
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-b border-(--border-subtle) pb-6">
                  <div>
                    <span className="block text-[10px] font-mono text-(--text-faint) capitalize">Timeline</span>
                    <span className="text-xs font-display font-semibold text-(--text-primary) flex items-center gap-1 mt-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {selectedItem.date}
                    </span>
                  </div>
                  {selectedItem.location && (
                    <div>
                      <span className="block text-[10px] font-mono text-(--text-faint) capitalize">Location</span>
                      <span className="text-xs font-display font-semibold text-(--text-primary) flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-pink-400" />
                        {selectedItem.location}
                      </span>
                    </div>
                  )}
                  <div className="col-span-2 md:col-span-1">
                    <span className="block text-[10px] font-mono text-(--text-faint) capitalize">Status</span>
                    <span className="text-xs font-display font-semibold text-(--text-primary) flex items-center gap-1 mt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Successfully Logged
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold capitalize text-(--text-muted) tracking-wider">Milestone Context</h4>
                  <p className="text-(--text-body) text-sm leading-relaxed font-light">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    id="close-journey-modal-action-btn"
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-(--text-primary) font-display text-xs tracking-wider rounded font-bold hover:shadow-lg hover:shadow-cyan-500/15 transition-all cursor-pointer"
                  >
                    Close Milestone
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
