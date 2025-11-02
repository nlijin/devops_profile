import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-black text-gray-300 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-cyan-400 mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((group, idx) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-md backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {group.group}
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-md bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
