import React from 'react'


export default function Footer() {
    return (
        <footer className="py-6 text-center text-slate-400">
            <div className="container mx-auto px-6">© {new Date().getFullYear()} Lijin Raj. N — Built with React & Tailwind</div>
        </footer>
    )
}