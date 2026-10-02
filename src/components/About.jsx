import React from 'react'
import { motion } from 'framer-motion'
import { summary } from '../data/profile'

const highlights = [
  { label: 'Total Experience', value: '12+ Years' },
  { label: 'Specialization', value: 'GenAI & Agentic AI' },
  { label: 'Core Architecture', value: 'MCP & Cloud Systems' },
  { label: 'Quality Standard', value: '100% TDD & Clean Code' }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-slate-900 text-gray-300 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-cyan-400 mb-6"
        >
          About Me
        </motion.h2>

        {/* Dynamic Summary Block */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="leading-relaxed text-lg text-gray-300 bg-white/5 p-6 rounded-2xl shadow-md border border-white/10 backdrop-blur-sm text-left md:text-center"
        >
          {summary}
        </motion.p>

        {/* High-Impact Metric Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 border border-slate-700/50 p-4 rounded-xl text-center backdrop-blur-sm hover:border-cyan-500/50 transition-colors"
            >
              <div className="text-xl md:text-2xl font-bold text-cyan-400">{item.value}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
