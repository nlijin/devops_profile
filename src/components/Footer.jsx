import React, { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState('Loading...')

  useEffect(() => {
    const fileUrl = `${window.location.origin}${import.meta.env.BASE_URL}last-update.txt`

    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error('File not found')
        return res.text()
      })
      .then((text) => setLastUpdated(text.trim()))
      .catch(() => setLastUpdated('Last updated: Recently'))
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm py-10 px-6 relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Subtitle */}
        <div className="text-center md:text-left">
          <h3 className="text-base font-semibold text-white">
            {profile.name}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Senior AI & Systems Engineer | Technical Lead
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 text-xs font-medium">
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          )}
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200 group"
        >
          <ArrowUpIcon className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto border-t border-slate-800/60 my-6" />

      {/* Bottom Copyright & Build Timestamp */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 text-center sm:text-left">
        <p>© {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
        <p className="font-mono text-[11px] text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800/60">
          {lastUpdated}
        </p>
      </div>
    </footer>
  )
}
