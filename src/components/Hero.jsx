import React from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, ArrowDownTrayIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { profile } from '../data/profile'

export default function Hero() {
  // Ensures resume download works dynamically under GitHub Pages subpath (/devops_profile/)
  const resumePath = `${import.meta.env.BASE_URL}resume.pdf`

  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black px-6 relative overflow-hidden">
      {/* Ambient Lighting & Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs md:text-sm font-medium mb-6 backdrop-blur-sm shadow-sm"
        >
          <SparklesIcon className="w-4 h-4 text-cyan-400" />
          <span>12+ Years Experience • GenAI & Systems Architecture</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl mt-4 text-cyan-400 font-semibold tracking-wide drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]"
        >
          {profile.title}
        </motion.h2>

        {/* Contact Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-6 text-slate-300 text-sm md:text-base"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
          >
            <EnvelopeIcon className="w-4 h-4 text-cyan-400" />
            <span>{profile.email}</span>
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
          >
            <PhoneIcon className="w-4 h-4 text-cyan-400" />
            <span>{profile.phone}</span>
          </a>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex gap-4 flex-wrap justify-center items-center"
        >
          {/* Primary CTA: Resume Download */}
          <a
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <ArrowDownTrayIcon className="w-5 h-5 stroke-[2.5]" />
            Download Resume
          </a>

          {/* LinkedIn */}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 border border-slate-700 hover:border-cyan-400 rounded-xl text-slate-200 hover:text-cyan-400 bg-slate-900/60 hover:bg-slate-800/80 font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          )}

          {/* GitHub */}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-slate-700 hover:border-cyan-400 rounded-xl text-slate-200 hover:text-cyan-400 bg-slate-900/60 hover:bg-slate-800/80 font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .297a12 12 0 0 0-3.793 23.4c.6.111.793-.261.793-.577v-2.012c-3.338.725-4.042-1.416-4.042-1.416-.546-1.389-1.333-1.759-1.333-1.759-1.089-.745.083-.73.083-.73 1.205.086 1.838 1.24 1.838 1.24 1.07 1.834 2.809 1.304 3.495.998.107-.775.42-1.304.762-1.604-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.469-2.382 1.236-3.222-.123-.303-.536-1.527.117-3.182 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.002 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.655.242 2.879.12 3.182.77.84 1.235 1.912 1.235 3.222 0 4.61-2.806 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576A12.004 12.004 0 0 0 12 .297Z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          )}
        </motion.div>
      </div>

      {/* Interactive Scroll Down Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-slate-400 hover:text-cyan-400 text-xs md:text-sm font-medium flex flex-col items-center gap-1 transition-colors"
      >
        <span>Scroll Down</span>
        <span className="text-cyan-400 font-bold">↓</span>
      </motion.a>
    </section>
  )
}
