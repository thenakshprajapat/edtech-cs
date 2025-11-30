'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Book, FileText, Download, ExternalLink, Code2, Wrench } from 'lucide-react';

const resources = [
  {
    category: 'Development Tools',
    items: [
      { title: 'Visual Studio Code', desc: 'The most popular code editor.', link: 'https://code.visualstudio.com/', icon: <Code2 className="w-4 h-4" /> },
      { title: 'Git', desc: 'Version control system.', link: 'https://git-scm.com/', icon: <Terminal className="w-4 h-4" /> },
      { title: 'Postman', desc: 'API development platform.', link: 'https://www.postman.com/', icon: <Wrench className="w-4 h-4" /> },
    ]
  },
  {
    category: 'Documentation',
    items: [
      { title: 'MDN Web Docs', desc: 'Resources for developers, by developers.', link: 'https://developer.mozilla.org/', icon: <Book className="w-4 h-4" /> },
      { title: 'React Docs', desc: 'Learn React from the best source.', link: 'https://react.dev/', icon: <Book className="w-4 h-4" /> },
      { title: 'Python Docs', desc: 'Official Python documentation.', link: 'https://docs.python.org/3/', icon: <Book className="w-4 h-4" /> },
    ]
  },
  {
    category: 'Cheat Sheets',
    items: [
      { title: 'Git Cheat Sheet', desc: 'Essential Git commands.', link: '#', icon: <FileText className="w-4 h-4" /> },
      { title: 'Flexbox Guide', desc: 'CSS Flexbox visual guide.', link: '#', icon: <FileText className="w-4 h-4" /> },
      { title: 'Vim Shortcuts', desc: 'Master the Vim editor.', link: '#', icon: <FileText className="w-4 h-4" /> },
    ]
  }
];

export default function ResourcesPage() {
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
            <Link href="/resources" className="text-white">Resources</Link>
            <Link href="/community" className="hover:text-purple-400 transition-colors">Community</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Developer Resources</h1>
          <p className="text-gray-400">Essential tools, documentation, and cheat sheets for your journey.</p>
        </div>

        <div className="space-y-12">
          {resources.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.items.map((item) => (
                  <a 
                    key={item.title} 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-[#0d1117] border border-white/5 rounded-xl hover:border-orange-500/30 hover:bg-[#161b22] transition-all flex items-start gap-4"
                  >
                    <div className="mt-1 p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-orange-400 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-200 group-hover:text-white flex items-center gap-2">
                        {item.title}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
