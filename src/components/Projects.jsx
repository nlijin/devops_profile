import React from 'react'
import { projects } from '../data/profile'
import { motion } from 'framer-motion'


export default function Projects() {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 to-black text-gray-300 px-6">
            <div className="max-w-5xl mx-auto">

                <div className="container mx-auto px-6">
                    <h3 className="text-2xl font-semibold mb-6 text-white">Projects</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {projects.map(p => (
                            <motion.div key={p.title} className="card p-4 rounded-xl" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h4 className="font-semibold">{p.title}</h4>
                                <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
                                <div className="mt-3">
                                    {p.highlights.map(h => <span key={h} className="block text-sm text-slate-400">• {h}</span>)}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}