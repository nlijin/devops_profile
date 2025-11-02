import React from 'react'
import { motion } from 'framer-motion'
import { summary } from '../data/profile'

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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="leading-relaxed text-lg text-gray-300 bg-white/5 p-6 rounded-2xl shadow-md border border-white/10 backdrop-blur-sm"
        >
          {summary}
        </motion.p>
      </div>
    </section>
  )
}
