import { motion } from 'motion/react';
import { Clock, Bike, Compass, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { STATS } from '../data';

export default function Stats() {
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case 'Clock':
        return <Clock className={className} />;
      case 'Bike':
        return <Bike className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      default:
        return <Award className={className} />;
    }
  };

  return (
    <section id="stats" className="py-24 bg-(--bg-section) relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-16 max-w-xl">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400">By the Numbers</span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-(--text-primary) capitalize tracking-tight">
            My Personal <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights & Specs</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded mx-auto mt-3" />
          <p className="text-(--text-muted) text-xs font-light pt-2">
            A metric-focused glance into my academic dedication, travel exploration, motorcycle research coverage, and active coding hours.
          </p>
        </div>

        {/* Diamond Clusters - Custom responsive layout */}
        {/* Desktop Layout: Overlapping diamond structures as shown in the screenshot */}
        <div className="hidden lg:flex relative w-full max-w-3xl h-[450px] items-center justify-center">
          
          {/* Center Connector Lines */}
          <svg className="absolute inset-0 w-full h-full text-neutral-800/40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="240" y1="225" x2="384" y2="105" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="384" y1="105" x2="528" y2="225" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="240" y1="225" x2="384" y2="345" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="384" y1="345" x2="528" y2="225" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          </svg>

          {/* Diamond 1: Academic (Top Center) */}
          <div className="absolute top-[20px] left-[310px] w-[148px] h-[148px]">
            <motion.div
              id="stat-diamond-academic"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-(--bg-panel) border border-cyan-500/30 hover:border-cyan-400 rotate-45 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/5 cursor-pointer relative group overflow-hidden"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="-rotate-45 text-center flex flex-col items-center justify-center p-4">
                {getIcon(STATS[3].iconName, 'w-6 h-6 text-cyan-400 mb-1')}
                <span className="font-display font-semibold text-(--text-primary) text-lg leading-none tracking-tight">{STATS[3].value}</span>
                <span className="font-mono text-[8px] text-(--text-muted) tracking-wider capitalize mt-1">{STATS[3].label}</span>
              </div>
            </motion.div>
          </div>

          {/* Diamond 2: Coding (Left Center) */}
          <div className="absolute top-[150px] left-[160px] w-[148px] h-[148px]">
            <motion.div
              id="stat-diamond-coding"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-(--bg-panel) border border-emerald-500/30 hover:border-emerald-400 rotate-45 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/5 cursor-pointer relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="-rotate-45 text-center flex flex-col items-center justify-center p-4">
                {getIcon(STATS[0].iconName, 'w-6 h-6 text-emerald-400 mb-1')}
                <span className="font-display font-semibold text-(--text-primary) text-lg leading-none tracking-tight">{STATS[0].value}</span>
                <span className="font-mono text-[8px] text-(--text-muted) tracking-wider capitalize mt-1">{STATS[0].label}</span>
              </div>
            </motion.div>
          </div>

          {/* Diamond 3: Bikes (Right Center) */}
          <div className="absolute top-[150px] left-[460px] w-[148px] h-[148px]">
            <motion.div
              id="stat-diamond-bikes"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-(--bg-panel) border border-pink-500/30 hover:border-pink-400 rotate-45 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/5 cursor-pointer relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="-rotate-45 text-center flex flex-col items-center justify-center p-4">
                {getIcon(STATS[1].iconName, 'w-6 h-6 text-pink-400 mb-1')}
                <span className="font-display font-semibold text-(--text-primary) text-lg leading-none tracking-tight">{STATS[1].value}</span>
                <span className="font-mono text-[8px] text-(--text-muted) tracking-wider capitalize mt-1">{STATS[1].label}</span>
              </div>
            </motion.div>
          </div>

          {/* Diamond 4: Travel (Bottom Center) */}
          <div className="absolute top-[280px] left-[310px] w-[148px] h-[148px]">
            <motion.div
              id="stat-diamond-travel"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-(--bg-panel) border border-purple-500/30 hover:border-purple-400 rotate-45 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/5 cursor-pointer relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="-rotate-45 text-center flex flex-col items-center justify-center p-4">
                {getIcon(STATS[2].iconName, 'w-6 h-6 text-purple-400 mb-1')}
                <span className="font-display font-semibold text-(--text-primary) text-lg leading-none tracking-tight">{STATS[2].value}</span>
                <span className="font-mono text-[8px] text-(--text-muted) tracking-wider capitalize mt-1">{STATS[2].label}</span>
              </div>
            </motion.div>
          </div>

          {/* Core watermark text center */}
          <div className="absolute text-[10px] font-mono tracking-widest text-(--text-dim) capitalize pointer-events-none text-center">
            Core Metrics<br />
            <span className="text-cyan-400 font-bold">Sugam K</span>
          </div>
        </div>

        {/* Mobile / Tablet Layout: Responsive Card Grid (Simplified clean cards) */}
        <div className="lg:hidden w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {STATS.map((stat, idx) => (
            <div
              id={`mobile-stat-card-${stat.id}`}
              key={stat.id}
              className={`p-6 rounded-xl bg-(--bg-panel)/50 border ${
                idx === 0
                  ? 'border-emerald-500/20 hover:border-emerald-400/40 shadow-sm shadow-emerald-500/5'
                  : idx === 1
                  ? 'border-pink-500/20 hover:border-pink-400/40 shadow-sm shadow-pink-500/5'
                  : idx === 2
                  ? 'border-purple-500/20 hover:border-purple-400/40 shadow-sm shadow-purple-500/5'
                  : 'border-cyan-500/20 hover:border-cyan-400/40 shadow-sm shadow-cyan-500/5'
              } flex flex-col items-center text-center space-y-3 transition-colors`}
            >
              <div className={`p-3 rounded-lg bg-(--bg-chip) border border-(--border-subtle) ${
                idx === 0 ? 'text-emerald-400' : idx === 1 ? 'text-pink-400' : idx === 2 ? 'text-purple-400' : 'text-cyan-400'
              }`}>
                {getIcon(stat.iconName, 'w-5 h-5')}
              </div>
              <div className="space-y-1">
                <span className="block font-display font-semibold text-(--text-primary) text-xl">{stat.value}</span>
                <span className="block font-mono text-[9px] text-(--text-muted) tracking-wider capitalize">{stat.label}</span>
              </div>
              <p className="text-(--text-faint) text-[10px] leading-tight font-light pt-1 border-t border-(--border-subtle) w-full">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
