import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  CheckIcon, 
  ClipboardDocumentIcon 
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-black text-gray-300 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md shadow-2xl"
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-cyan-400 mb-3">
              Let's Connect
            </h2>
            <p className="text-slate-300 text-base md:text-lg">
              Open to technical leadership roles, AI/ML architecture consulting, agentic workflow implementations, or high-impact engineering collaborations.
            </p>
          </div>

          {/* Quick Action Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Direct Email Card */}
            <div className="flex items-center justify-between bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-lg">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-gray-400">Email</div>
                  <a href={`mailto:${profile.email}`} className="text-sm font-medium text-white hover:text-cyan-400 transition-colors truncate block">
                    {profile.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none"
                title="Copy Email"
              >
                {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardDocumentIcon className="w-5 h-5" />}
              </button>
            </div>

            {/* Direct Phone Card */}
            <div className="flex items-center space-x-3 bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
              <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-lg">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Phone</div>
                <a href={`tel:${profile.phone}`} className="text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links & CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-white/10">
            {/* Email CTA */}
            <a
              href={`mailto:${profile.email}`}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20"
            >
              Send an Email
            </a>

            {/* LinkedIn Link */}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-400 text-white font-medium text-sm transition-all hover:bg-slate-700"
              >
                LinkedIn Profile
              </a>
            )}

            {/* GitHub Link */}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-400 text-white font-medium text-sm transition-all hover:bg-slate-700"
              >
                GitHub Profile
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
