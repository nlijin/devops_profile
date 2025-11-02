import React from 'react'
import { profile } from '../data/profile'


export default function Contact() {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-slate-900 text-gray-300 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="container mx-auto px-6">
                    <div className="card p-6 rounded-2xl">
                        <h3 className="text-2xl font-semibold">Contact</h3>
                        <p className="mt-3 text-slate-300">Feel free to reach out for collaboration, interviews, or contract work.</p>
                        <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4">
                            <a href={`mailto:${profile.email}`} className="px-4 py-2 rounded-md card">{profile.email}</a>
                            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-slate-700">LinkedIn</a>
                            <a href={`tel:${profile.phone}`} className="px-4 py-2 rounded-md border border-slate-700">{profile.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}