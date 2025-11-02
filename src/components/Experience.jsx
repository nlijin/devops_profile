import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black to-slate-900 text-gray-300 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center text-cyan-400 mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-md backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>
              <p className="text-cyan-400 font-medium mb-3">{exp.company}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="leading-relaxed">{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
