import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="sm:px-6 lg:px-8">
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        <Hero />
        <main>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}