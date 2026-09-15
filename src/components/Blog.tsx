import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Calendar, Clock, X, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-(--bg-section) relative overflow-hidden">
      {/* Decorative blurry nodes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-16 max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400">Our Blog</span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-(--text-primary) capitalize tracking-tight">
            Blog Updates & <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">My Perspectives</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded mx-auto mt-3" />
          <p className="text-(--text-muted) text-xs font-light pt-2">
            Writing about my journey, technical discoveries, transitioning environments, and deep motor mechanical studies.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              id={`blog-card-${post.id}`}
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="group relative bg-(--bg-panel)/60 border border-(--border-subtle) hover:border-cyan-500/30 rounded-xl p-8 cursor-pointer transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Colored Glow Line Top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-(--border-subtle) group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-colors" />

              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-[10px] font-mono text-(--text-faint)">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-(--text-dim)" />
                    {post.date}
                  </span>
                  <span>/</span>
                  <span className="flex items-center gap-1 text-cyan-400/80">
                    <MessageSquare className="w-3.5 h-3.5 text-(--text-dim)" />
                    {post.comments} Comments
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="text-base md:text-lg font-display font-bold text-(--text-primary) group-hover:text-cyan-400 transition-colors capitalize leading-snug tracking-tight line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-(--text-muted) text-xs leading-relaxed line-clamp-3 font-light">
                  {post.excerpt}
                </p>
              </div>

              {/* Action Button Link */}
              <div className="mt-8 pt-4 border-t border-(--border-subtle) flex items-center justify-between">
                <span className="text-[10px] font-mono text-(--text-muted) capitalize tracking-widest">
                  {post.category} • {post.readTime}
                </span>
                
                <span className="text-xs font-display font-bold text-cyan-400 group-hover:text-(--text-primary) transition-colors flex items-center gap-1 capitalize tracking-widest">
                  <span>Read More</span>
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Immersive Blog Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              id="blog-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-(--bg-base)/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              id="blog-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-(--bg-panel) border border-(--border-soft) rounded-2xl shadow-2xl z-10 overflow-hidden"
            >
              {/* Border glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

              <button
                id="close-blog-modal-btn"
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 text-(--text-muted) hover:text-(--text-primary) p-1 rounded-full hover:bg-(--bg-chip) transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-(--text-muted)">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 capitalize">
                      {selectedPost.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400/70" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-pink-400/70" />
                      {selectedPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-semibold text-(--text-primary) capitalize tracking-tight leading-tight">
                    {selectedPost.title}
                  </h3>
                </div>

                <div className="w-full h-[1px] bg-(--border-subtle)" />

                {/* Real blog body content */}
                <div className="prose prose-invert max-h-80 overflow-y-auto pr-2 space-y-4">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-(--text-body) text-sm leading-relaxed font-light font-sans">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="w-full h-[1px] bg-(--border-subtle)" />

                <div className="flex items-center justify-between text-xs text-(--text-muted)">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-(--text-faint)" />
                    <span>Authored by Sugam Kandel</span>
                  </span>
                  
                  <button
                    id="blog-modal-close-action-btn"
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-(--text-primary) text-xs font-bold tracking-wider rounded font-display hover:scale-[1.02] cursor-pointer shadow-md transition-all"
                  >
                    Close Article
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
