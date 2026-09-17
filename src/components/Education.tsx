import { motion } from 'motion/react';
import { GraduationCap, Award, MapPin, Building, BookOpen, Star } from 'lucide-react';

export default function Education() {
  const educationTimeline = [
    {
      id: 'highschool',
      institution: 'High School (Grade 11 & 12)',
      level: 'Grade 11 & 12 (High School)',
      major: 'Computer Science & Mathematics',
      timeline: '2082 BS - Present (2025/2026 AD)',
      location: 'Butwal, Rupandehi',
      description: 'Acquiring a strong foundation in computer programming, algorithms, database architectures, and digital systems, with peer-to-peer coding collaboration.',
      icon: GraduationCap,
      color: 'border-cyan-500/20 shadow-cyan-500/5',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    },
    {
      id: 'secondary',
      institution: 'Secondary School (Grade 10)',
      level: 'Secondary Education (Grade 10)',
      major: 'Secondary Education Examination (SEE) Graduate',
      timeline: 'Graduated 2081 BS (2024 AD)',
      location: 'Rupandehi, Nepal',
      description: 'Completed my secondary schooling with rigorous focus on foundational sciences, english linguistics, and basic mathematics, active in creative writing clubs.',
      icon: BookOpen,
      color: 'border-pink-500/20 shadow-pink-500/5',
      badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20'
    },
    {
      id: 'roots',
      institution: 'Village Roots',
      level: 'Early Childhood & Primary Schooling',
      major: 'Village Upbringing & Serene Foundations',
      timeline: 'Childhood Years',
      location: 'Hills of Western Nepal',
      description: 'Growing up in the serene hills of western Nepal taught me patience, community appreciation, and deep-seated humility. It remains my peaceful sanctuary.',
      icon: Star,
      color: 'border-purple-500/20 shadow-purple-500/5',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    }
  ];

  return (
    <section id="education" className="py-14 md:py-24 bg-(--bg-base) relative overflow-hidden">
      {/* Grid Lines Background */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      {/* Decorative Neon Blurs */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
        
        {/* Left Side: Display Heading */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400">My Academics</span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-(--text-primary) capitalize tracking-tight">
              Education &<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">My Foundations</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded" />
          </div>

          <p className="text-(--text-muted) text-sm leading-relaxed font-light">
            My academic journey bridges the serene hills of western Nepal with the technical and modern training grounds of Butwal, Rupandehi. Studying computer science in grade 11 acts as the core launchpad for my tech goals.
          </p>

          {/* Core Skills Summary Badge */}
          <div className="p-6 bg-(--bg-panel)/50 border border-(--border-subtle) rounded-xl space-y-3 shadow-lg">
            <h3 className="text-xs font-mono font-bold text-(--text-primary) tracking-widest capitalize flex items-center gap-2">
              <Building className="w-4 h-4 text-cyan-400" />
              <span>Current Status</span>
            </h3>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-(--text-body) text-xs font-semibold">
                Grade 11 Computer Science • Butwal, Rupandehi
              </p>
            </div>
            <p className="text-(--text-muted) text-[11px] leading-relaxed">
              Curriculum focus includes Programming Fundamentals, Data Types, HTML/CSS Web Projects, Computer Hardware concepts, and Logic Gates.
            </p>
          </div>
        </div>

        {/* Right Side: Timeline Cards */}
        <div className="lg:col-span-7 space-y-6 relative pl-4 md:pl-8 border-l border-(--border-subtle)">
          {educationTimeline.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                id={`edu-timeline-item-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 md:p-8 bg-(--bg-panel)/60 border rounded-2xl shadow-xl transition-all duration-300 hover:bg-(--bg-panel)/90 hover:border-(--border-soft) ${item.color}`}
              >
                {/* Connector Node */}
                <div className="absolute left-[-21px] md:left-[-41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-(--bg-base) border-2 border-cyan-400 flex items-center justify-center shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-3">
                    {/* Badge */}
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider capitalize border ${item.badgeColor}`}>
                        {item.level}
                      </span>
                      <span className="text-(--text-faint) text-[10px] font-mono">
                        {item.timeline}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-(--text-primary) capitalize tracking-tight">
                      {item.institution}
                    </h3>

                    <p className="text-(--text-muted) text-xs leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Institution Icon block */}
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-(--bg-chip) border border-(--border-subtle) text-(--text-muted)">
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-(--border-subtle) flex items-center gap-2 text-[10px] font-mono text-(--text-faint)">
                  <MapPin className="w-3.5 h-3.5 text-(--text-dim)" />
                  <span>{item.location}</span>
                  <span className="text-(--text-dim)">•</span>
                  <span>{item.major}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
