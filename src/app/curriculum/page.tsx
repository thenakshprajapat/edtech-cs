'use client';

import React, { useState } from 'react';
import { JourneyMap } from '../../components/JourneyMap';
import { csFundamentals, webDevelopment } from '../../data/curriculum';
import { Code, Terminal, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CurriculumPage() {
  const [activeTrack, setActiveTrack] = useState<'cs' | 'web'>('cs');

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
            <Link href="/curriculum" className="text-white">Curriculum</Link>
            <Link href="/courses" className="hover:text-blue-400 transition-colors">Courses</Link>
            <Link href="/resources" className="hover:text-orange-400 transition-colors">Resources</Link>
            <Link href="/community" className="hover:text-purple-400 transition-colors">Community</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Explore Learning Paths</h1>
            <p className="text-gray-400 max-w-xl">
              Select a track to view the complete curriculum roadmap. Follow the path step-by-step.
            </p>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search topics..." 
              className="w-full bg-[#0d1117] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Track Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <TrackCard 
            title="CS Fundamentals" 
            description="Master the basics with Harvard's CS50. C, Python, SQL, and Algorithms."
            icon={<Terminal className="w-6 h-6" />}
            active={activeTrack === 'cs'}
            onClick={() => setActiveTrack('cs')}
            color="blue"
          />
          <TrackCard 
            title="Web Development" 
            description="Become a full-stack developer with FreeCodeCamp. HTML, CSS, React, and Node."
            icon={<Code className="w-6 h-6" />}
            active={activeTrack === 'web'}
            onClick={() => setActiveTrack('web')}
            color="emerald"
          />
        </div>

        {/* Journey Map Section */}
        <div className="relative">
          <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className={`w-1 h-8 rounded-full ${activeTrack === 'cs' ? 'bg-blue-500' : 'bg-emerald-500'}`} />
              Curriculum Roadmap
            </h2>
            <div className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-400">
              {activeTrack === 'cs' ? 'HARVARD CS50' : 'FREECODECAMP'}
            </div>
          </div>
          
          <JourneyMap stages={activeTrack === 'cs' ? csFundamentals : webDevelopment} />
        </div>

      </main>
    </div>
  );
}

function TrackCard({ title, description, icon, active, onClick, color }: any) {
  const activeClass = color === 'blue' 
    ? 'border-blue-500/50 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
    : 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.1)]';
    
  const iconBg = color === 'blue' ? 'bg-blue-500' : 'bg-emerald-500';
  const textColor = color === 'blue' ? 'text-blue-400' : 'text-emerald-400';

  return (
    <button 
      onClick={onClick}
      className={`relative p-8 rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1 group overflow-hidden
        ${active ? activeClass : 'border-white/5 bg-[#0d1117] hover:border-white/10 hover:bg-[#161b22]'}`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center text-white shadow-lg`}>
          {icon}
        </div>
        {active && <div className={`w-3 h-3 rounded-full ${iconBg} animate-pulse`} />}
      </div>
      
      <h3 className={`text-xl font-bold mb-2 ${active ? 'text-white' : 'text-gray-200'}`}>{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-6">{description}</p>
      
      <div className={`flex items-center gap-2 text-sm font-medium ${textColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
        Select Track <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
}
