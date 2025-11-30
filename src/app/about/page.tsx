'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-gray-300 font-sans">
      {/* Navbar */}
      <nav className="border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-emerald-500/10 rounded border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <Terminal className="w-4 h-4 text-emerald-500" />
            </div>
            <span className="font-mono font-bold text-gray-100 tracking-tight">CS_EdTech</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/curriculum" className="hover:text-emerald-400 transition-colors">Curriculum</Link>
            <Link href="/courses" className="hover:text-blue-400 transition-colors">Courses</Link>
            <Link href="/resources" className="hover:text-orange-400 transition-colors">Resources</Link>
            <Link href="/community" className="hover:text-purple-400 transition-colors">Community</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">The Manifesto</h1>
        
        <div className="prose prose-invert prose-lg">
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Education should be a fundamental right, not a privilege reserved for those who can afford it. 
            In the age of the internet, the world's knowledge is available for free, but it is scattered and unorganized.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Problem</h2>
          <p className="text-gray-400 mb-6">
            Aspiring developers are often overwhelmed by the sheer volume of tutorials, bootcamps, and courses available online. 
            Many paid bootcamps charge thousands of dollars for content that is available for free elsewhere. 
            University degrees provide structure but come with massive debt.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Solution</h2>
          <p className="text-gray-400 mb-6">
            CS EdTech is an attempt to solve this by curating the best open-source resources into a structured, 
            university-grade curriculum. We don't create the content; we organize it.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-8">
            <li><strong className="text-white">Structure:</strong> A clear path from "Hello World" to "Senior Engineer".</li>
            <li><strong className="text-white">Quality:</strong> Only the highest quality resources (Harvard, MIT, FreeCodeCamp).</li>
            <li><strong className="text-white">Community:</strong> Learning is better together.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Open Source</h2>
          <p className="text-gray-400 mb-12">
            This platform itself is open source. We believe in transparency and community ownership. 
            If you see something that can be improved, submit a Pull Request.
          </p>

          <div className="flex gap-4">
            <Link href="/curriculum" className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
              Start Learning
            </Link>
            <a href="#" className="px-6 py-3 border border-white/20 rounded hover:bg-white/5 transition-colors">
              View Source Code
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
