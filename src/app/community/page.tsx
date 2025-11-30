'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, MessageSquare, Github, Heart, Users } from 'lucide-react';

export default function CommunityPage() {
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
            <Link href="/community" className="text-white">Community</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-8">
          <Users className="w-3 h-3" />
          5,000+ Learners
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-6">Join the Movement</h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          We are building the future of open education together. Connect with other students, find mentors, and contribute to the codebase.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <a href="#" className="group p-8 bg-[#0d1117] border border-white/5 rounded-2xl hover:border-[#5865F2]/50 transition-all relative overflow-hidden">
            <div className="absolute inset-0 bg-[#5865F2]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <MessageSquare className="w-12 h-12 text-[#5865F2] mb-6" />
            <h2 className="text-2xl font-bold text-white mb-2">Discord Server</h2>
            <p className="text-gray-400 mb-6">Chat with other students, get help with assignments, and attend live events.</p>
            <span className="text-[#5865F2] font-medium group-hover:underline">Join Server &rarr;</span>
          </a>

          <a href="#" className="group p-8 bg-[#0d1117] border border-white/5 rounded-2xl hover:border-white/30 transition-all relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Github className="w-12 h-12 text-white mb-6" />
            <h2 className="text-2xl font-bold text-white mb-2">GitHub Repository</h2>
            <p className="text-gray-400 mb-6">This entire platform is open source. Help us fix bugs, add features, or improve the curriculum.</p>
            <span className="text-white font-medium group-hover:underline">Star on GitHub &rarr;</span>
          </a>
        </div>

        <div className="border-t border-white/5 pt-20">
          <h3 className="text-2xl font-bold text-white mb-8">Top Contributors</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center gap-3 p-2 pr-4 bg-[#0d1117] border border-white/5 rounded-full hover:border-white/20 transition-colors cursor-pointer">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-white/10`}></div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">User_{i}</div>
                  <div className="text-xs text-gray-500">50 commits</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
