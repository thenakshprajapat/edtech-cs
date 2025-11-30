import Link from 'next/link';
import { Terminal, Code, BookOpen, Users, ArrowRight, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-gray-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 flex flex-col">
      
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
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/curriculum" className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-sm font-medium transition-all hover:border-emerald-500/30">
              Start Learning
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        
        {/* Gradient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            v1.0 Public Beta
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl">
            The Open Source Path to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-glow-green">
              Computer Science Mastery
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            A complete, structured computer science curriculum. <br className="hidden md:block" />
            Aggregated from the world's best open resources. <span className="text-gray-200">100% Free.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/curriculum" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <Terminal className="w-4 h-4" />
              Start the Curriculum
            </Link>
            <Link href="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded transition-all w-full sm:w-auto justify-center">
              Read the Manifesto
            </Link>
          </div>

          {/* Terminal Visual */}
          <div className="mt-20 w-full max-w-3xl mx-auto bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden text-left font-mono text-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#161b22]">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              <div className="ml-2 text-xs text-gray-500">student@edtech:~/curriculum</div>
            </div>
            <div className="p-6 space-y-2 text-gray-300">
              <div className="flex gap-2">
                <span className="text-emerald-400">➜</span>
                <span className="text-blue-400">~</span>
                <span>npm install computer-science</span>
              </div>
              <div className="text-gray-500">
                added 150 packages in 2s
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">➜</span>
                <span className="text-blue-400">~</span>
                <span>ls ./tracks</span>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-emerald-300 pl-4">
                <span>01_intro_to_cs/</span>
                <span>02_web_development/</span>
                <span>03_algorithms/</span>
                <span>04_systems/</span>
              </div>
              <div className="flex gap-2 animate-pulse">
                <span className="text-emerald-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="w-2 h-5 bg-gray-500 block"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<BookOpen className="w-6 h-6 text-emerald-400" />}
            title="Structured Learning"
            description="Don't get lost in tutorials. Follow a clear, university-grade roadmap designed for clarity."
            color="emerald"
          />
          <FeatureCard 
            icon={<Code className="w-6 h-6 text-blue-400" />}
            title="Project Based"
            description="Theory is important, but practice is everything. Build real software at every stage."
            color="blue"
          />
          <FeatureCard 
            icon={<Users className="w-6 h-6 text-orange-400" />}
            title="Community Driven"
            description="Open source at its core. Contribute to the curriculum and learn from others."
            color="orange"
          />
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/5 py-12 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © 2025 CS EdTech. Open Source (MIT).
          </div>
          <div className="flex gap-6 text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-white transition-colors">Discord</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: any) {
  const colorClasses = {
    emerald: "group-hover:border-emerald-500/30 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
    blue: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
    orange: "group-hover:border-orange-500/30 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]",
  };

  return (
    <div className={`p-8 rounded-2xl bg-[#0d1117] border border-white/5 transition-all duration-300 group ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="mb-6 p-3 bg-white/5 rounded-lg w-fit border border-white/5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
