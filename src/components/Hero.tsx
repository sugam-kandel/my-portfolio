import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Code, Bike, Compass, Terminal, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Coding the Future',
      headingHighlight: 'One Line at a Time',
      description:
        `I'm a Computer Science student pursuing +2 Management, and I began my coding journey just a few months ago. Since then, I've been fascinated by creating interactive web applications, solving logical challenges, and continuously expanding my skills.`,
      cta: 'Explore My Passions',
      sectionId: 'passions',
      icon: Code,
      glowColor: 'rgba(34, 211, 238, 0.15)',
    },
    {
      title: 'Riding the Present',
      headingHighlight: 'With Fuel & Freedom',
      description:
        'I have a keen obsession with motorbikes—studying specs, understanding dual-channel ABS, cylinder layouts, and exhaust notes. Living in Butwal, Nepal, riding through beautiful terrains represents my spirit of adventure.',
      cta: 'Check My Vehicle Insights',
      sectionId: 'journey',
      icon: Bike,
      glowColor: 'rgba(244, 63, 94, 0.15)',
    },
    {
      title: 'Exploring Scenic Nepal',
      headingHighlight: 'Creating New Memories',
      description:
        'Born in the peaceful hills of western Nepal and now living in Rupandehi, I thrive on traveling to new destinations, gathering deep experiences, and watching inspirational films that fuel my digital visual ideas.',
      cta: 'View My Travel Diary',
      sectionId: 'stats',
      icon: Compass,
      glowColor: 'rgba(168, 85, 247, 0.15)',
    },
  ];

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center bg-(--bg-base) bg-dark-grid pt-32 pb-10 md:pb-16 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Main semantic H1 for SEO */}
              <h1 className="sr-only">Sugam Kandel | CS Student Portfolio - +2 Management, Nepal</h1>

              {/* Slide Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-(--text-primary) leading-tight capitalize">
                {currentSlide.title} <br />
                <span className={`bg-gradient-to-r ${activeSlide === 0 ? 'from-cyan-400 to-blue-500' : activeSlide === 1 ? 'from-pink-400 to-rose-500' : 'from-purple-400 to-indigo-500'} bg-clip-text text-transparent`}>
                  {currentSlide.headingHighlight}
                </span>
              </h2>

              {/* Slide Description */}
              <p className="text-(--text-body) text-sm md:text-base leading-relaxed max-w-xl font-sans font-light">
                {currentSlide.description}
              </p>

              {/* Interactive Slide Info Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-(--bg-chip) border border-(--border-soft) text-xs text-(--text-muted) font-mono">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Computer Science Student • Based in Butwal, Nepal</span>
              </div>

              {/* CTA Button */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  id={`hero-cta-${activeSlide}`}
                  onClick={() => navigate('/' + currentSlide.sectionId)}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent text-(--text-primary) font-display font-bold text-xs tracking-widest capitalize cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Decorative Angular Border matching screenshot style */}
                  <div className="absolute inset-0 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
                  
                  {/* Hover fluid fill */}
                  <div className="absolute inset-[1px] bg-(--bg-chip) -z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <span>{currentSlide.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-cyan-400" />
                </button>

                <button
                  id="hero-about-me-btn"
                  onClick={() => navigate('/education')}
                  className="px-6 py-4 text-xs font-display font-bold tracking-widest text-(--text-muted) hover:text-(--text-primary) capitalize transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>My Background</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators / Tabs */}
          <div className="flex items-center gap-6 mt-16 border-t border-(--border-subtle) pt-8">
            {slides.map((slide, idx) => {
              const IconComponent = slide.icon;
              return (
                <button
                  id={`hero-slide-btn-${idx}`}
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className="group flex flex-col items-start gap-1 cursor-pointer text-left focus:outline-none"
                >
                  <span
                    className={`font-mono text-xs font-bold transition-colors ${
                      activeSlide === idx ? 'text-(--text-primary)' : 'text-(--text-dim) group-hover:text-(--text-muted)'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <IconComponent
                      className={`w-4 h-4 transition-all duration-300 ${
                        activeSlide === idx
                          ? idx === 0
                            ? 'text-cyan-400 scale-110'
                            : idx === 1
                            ? 'text-pink-400 scale-110'
                            : 'text-purple-400 scale-110'
                          : 'text-(--text-faint) group-hover:text-(--text-body)'
                      }`}
                    />
                    <span
                      className={`text-xs font-display font-bold tracking-wider capitalize transition-colors ${
                        activeSlide === idx ? 'text-(--text-primary)' : 'text-(--text-faint) group-hover:text-(--text-body)'
                      }`}
                    >
                      {idx === 0 ? 'Coding' : idx === 1 ? 'Rides' : 'Travel'}
                    </span>
                  </div>
                  {/* Indicator Line */}
                  <div className="w-16 h-[2px] bg-neutral-800 mt-2 relative overflow-hidden">
                    {activeSlide === idx && (
                      <motion.div
                        layoutId="activeSlideBar"
                        className={`absolute top-0 left-0 h-full w-full ${
                          idx === 0
                            ? 'bg-cyan-400'
                            : idx === 1
                            ? 'bg-pink-400'
                            : 'bg-purple-400'
                        }`}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column - Sugam's Image Frame */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
            {/* Ambient Shadow glow background matching slider accent */}
            <div
              className="absolute -inset-4 rounded-3xl blur-[32px] transition-all duration-700 opacity-60"
              style={{
                background: `radial-gradient(circle, ${currentSlide.glowColor} 0%, rgba(0,0,0,0) 70%)`,
              }}
            />

            {/* Glowing Tech Ring Border */}
            <div className="absolute inset-0 rounded-2xl border border-(--border-subtle) bg-gradient-to-br from-white/10 to-transparent -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            
            {/* Cyan Border Corners */}
            <div className="absolute top-[-6px] left-[-6px] w-6 h-6 border-t-[3px] border-l-[3px] border-cyan-400 rounded-tl-lg" />
            <div className="absolute bottom-[-6px] right-[-6px] w-6 h-6 border-b-[3px] border-r-[3px] border-cyan-400 rounded-br-lg" />

            {/* Actual Image Holder */}
            <div className="absolute inset-3 rounded-xl overflow-hidden bg-(--bg-panel) rotate-3 group-hover:rotate-0 transition-all duration-500 border border-(--border-soft) shadow-2xl flex items-center justify-center">
              <img
                id="hero-sugam-avatar"
                src="/assets/sugam-512.jpg"
                alt="Sugam Kandel - Computer Science student from Butwal, Nepal"
                width={512}
                height={683}
                fetchPriority="high"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />

              {/* Tech overlay grid */}
              <div className="absolute inset-0 bg-gradient-to-t from-(--bg-base) via-transparent to-transparent opacity-40" />
              
              {/* Subtle Tech scanner line or watermark */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded bg-(--bg-header)/80 backdrop-blur border border-(--border-soft) text-[10px] font-mono text-(--text-muted) tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Sugam_Kandel_Portrait.IMG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
