import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/profile'
import {
  CpuChipIcon,
  CloudIcon,
  CodeBracketIcon,
  CircleStackIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

// Helper to dynamically assign Heroicons based on skill group category
const getGroupIcon = (groupName) => {
  const lower = groupName.toLowerCase()
  if (lower.includes('ai') || lower.includes('genai') || lower.includes('machine') || lower.includes('llm')) {
    return CpuChipIcon
  }
  if (lower.includes('cloud') || lower.includes('devops') || lower.includes('infrastructure')) {
    return CloudIcon
  }
  if (lower.includes('database') || lower.includes('data') || lower.includes('storage')) {
    return CircleStackIcon
  }
  if (lower.includes('language') || lower.includes('frontend') || lower.includes('backend') || lower.includes('code')) {
    return CodeBracketIcon
  }
  if (lower.includes('architect') || lower.includes('system') || lower.includes('design')) {
    return CommandLineIcon
  }
  return WrenchScrewdriverIcon
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-slate-900 to-black text-gray-300 px-6">
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
            Technical Expertise
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive technology stack built over 12+ years of experience across Generative AI, full-stack systems, cloud engineering, and enterprise architecture.
          </p>
        </motion.div>

        {/* Responsive Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, idx) => {
            const IconComponent = getGroupIcon(group.group)

            return (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 hover:border-cyan-500/40 p-6 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-cyan-500/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header with Dynamic Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {group.group}
                    </h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-slate-900/80 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
