'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Terminal, Code, Database, Globe, Cpu, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 'cs50',
    title: 'CS50: Introduction to Computer Science',
    provider: 'Harvard University',
    level: 'Beginner',
    category: 'Computer Science',
    description: 'An introduction to the intellectual enterprises of computer science and the art of programming.',
    icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    color: 'emerald'
  },
  {
    id: 'fcc-web',
    title: 'Responsive Web Design',
    provider: 'FreeCodeCamp',
    level: 'Beginner',
    category: 'Web Development',
    description: 'Learn HTML, CSS, and responsive design principles by building real-world projects.',
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    color: 'blue'
  },
  {
    id: 'js-algo',
    title: 'JavaScript Algorithms and Data Structures',
    provider: 'FreeCodeCamp',
    level: 'Intermediate',
    category: 'Web Development',
    description: 'Master JavaScript fundamentals, algorithms, and data structures.',
    icon: <Code className="w-6 h-6 text-yellow-400" />,
    color: 'yellow'
  },
  {
    id: 'nand2tetris',
    title: 'Nand to Tetris',
    provider: 'Hebrew University of Jerusalem',
    level: 'Advanced',
    category: 'Computer Systems',
    description: 'Build a modern computer system, starting from first principles.',
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    color: 'purple'
  },
  {
    id: 'sql-zoo',
    title: 'SQLZoo',
    provider: 'SQLZoo',
    level: 'Beginner',
    category: 'Databases',
    description: 'Learn SQL step-by-step with interactive tutorials and quizzes.',
    icon: <Database className="w-6 h-6 text-orange-400" />,
    color: 'orange'
  }
];

export default function CoursesPage() {
  const [filter, setFilter] = useState('All');

  const filteredCourses = filter === 'All' 
    ? courses 
    : courses.filter(c => c.category === filter || c.level === filter);

  return (
    <div className="min-h-screen bg-[#09090b] text-gray-300 font-sans">
      {/* Navbar (Simplified for subpages) */}
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
            <Link href="/courses" className="text-white">Courses</Link>
            <Link href="/resources" className="hover:text-orange-400 transition-colors">Resources</Link>
            <Link href="/community" className="hover:text-purple-400 transition-colors">Community</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Course Catalog</h1>
            <p className="text-gray-400 max-w-xl">
              Browse our collection of high-quality, open-source courses. Filter by category or difficulty level.
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="w-full bg-[#0d1117] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
            </div>
            <button className="p-2 bg-[#0d1117] border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
              <Filter className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {['All', 'Computer Science', 'Web Development', 'Databases', 'Beginner', 'Advanced'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all
                ${filter === f 
                  ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' 
                  : 'bg-[#0d1117] border-white/10 text-gray-400 hover:border-white/20 hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group bg-[#0d1117] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                  {course.icon}
                </div>
                <span className={`text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5`}>
                  {course.level}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{course.title}</h3>
              <div className="text-sm text-emerald-500 mb-4 font-medium">{course.provider}</div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {course.description}
              </p>

              <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                View Syllabus <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
