import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/profile'
import { FolderIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 via-black to-slate-900 text-gray-300 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Architectural showcases, agentic AI workflows, and high-performance cloud platforms engineered for enterprise scale.
          </p>
        </motion.div>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white/5 border border-white/10 hover:border-cyan-500/40 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-cyan-500/10 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Context Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 group-hover:scale-105 transition-transform">
                    {p.where?.includes('Flagship') ? (
                      <SparklesIcon className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <FolderIcon className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                  {p.where && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800/90 text-cyan-300 border border-slate-700/80 shadow-sm">
                      {p.where}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {p.title}
                </h3>

                {/* Project Overview */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              {/* Highlights & Technical Impact */}
              {p.highlights && p.highlights.length > 0 && (
                <div className="pt-5 border-t border-white/10 mt-auto">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Technical Highlights
                  </div>
                  <ul className="space-y-2.5">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
                        <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
