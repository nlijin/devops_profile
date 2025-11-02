import React from 'react'
import { EnvelopeIcon, PhoneIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-slate-900 to-black px-6 relative overflow-hidden">
      
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
      >
        {profile.name}
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl md:text-2xl mt-3 text-gray-300 font-light tracking-wide"
      >
        {profile.title}
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 text-gray-300"
      >
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200"
        >
          <EnvelopeIcon className="w-5 h-5" /> {profile.email}
        </a>
        <span className="hidden md:inline text-gray-600">|</span>
        <a
          href={`tel:${profile.phone}`}
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200"
        >
          <PhoneIcon className="w-5 h-5" /> {profile.phone}
        </a>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-10 flex gap-4 flex-wrap justify-center"
      >
        {/* LinkedIn */}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 border border-cyan-400 rounded-xl text-cyan-400 font-medium hover:bg-cyan-400 hover:text-black transition-all duration-300"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-gray-700 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300"
          >
            {/* Inline SVG for GitHub */}
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

        {/* Resume */}
        <a
          href="/resume.pdf"
          className="flex items-center gap-2 px-5 py-2.5 border border-gray-700 rounded-xl text-gray-300 hover:bg-gray-800 transition-all duration-300"
        >
          <ArrowDownTrayIcon className="w-5 h-5" /> Resume
        </a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-cyan-400/70 text-sm"
      >
        Scroll Down ↓
      </motion.div>
    </section>
  )
}
