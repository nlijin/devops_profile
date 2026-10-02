import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/profile'
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-900 via-black to-slate-900 text-gray-300 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-3">
            Career Experience
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            12+ years of engineering evolution — from core infrastructure to full-stack scaling and enterprise Generative AI systems.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/20 ml-3 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[37px] md:-left-[53px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.4)] group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                <BriefcaseIcon className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="bg-white/5 border border-white/10 hover:border-cyan-500/40 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-cyan-500/5">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-base md:text-lg mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  {/* Period Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs md:text-sm text-slate-300 w-fit">
                    <CalendarIcon className="w-4 h-4 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Key Achievement Bullets with Custom Markers */}
                <ul className="space-y-3 text-gray-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 leading-relaxed text-sm md:text-base">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
