'use client';

import React from 'react';
import { CheckCircle2, Circle, Lock, PlayCircle, FileText, MonitorPlay, Trophy } from 'lucide-react';

export type Resource = {
  title: string;
  url: string;
  type: 'video' | 'article' | 'course' | 'challenge';
};

export type Stage = {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'locked';
  resources?: Resource[];
};

interface JourneyMapProps {
  stages: Stage[];
}

const getResourceIcon = (type: Resource['type']) => {
  switch (type) {
    case 'video': return <PlayCircle className="w-3 h-3" />;
    case 'article': return <FileText className="w-3 h-3" />;
    case 'course': return <MonitorPlay className="w-3 h-3" />;
    case 'challenge': return <Trophy className="w-3 h-3" />;
    default: return <Circle className="w-3 h-3" />;
  }
};

export const JourneyMap: React.FC<JourneyMapProps> = ({ stages }) => {
  return (
    <div className="relative flex flex-col space-y-12 p-4">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 md:-translate-x-1/2" />

      {stages.map((stage, index) => {
        const isCompleted = stage.status === 'completed';
        const isCurrent = stage.status === 'current';
        const isLocked = stage.status === 'locked';

        return (
          <div key={stage.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
            
            {/* Timeline Node */}
            <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#09090b] z-10 flex items-center justify-center transition-all duration-500
              ${isCompleted ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 
                isCurrent ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-110' : 
                'bg-gray-700'}`}>
              {isCompleted && <CheckCircle2 className="w-4 h-4 text-white" />}
              {isCurrent && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
              {isLocked && <Lock className="w-3 h-3 text-gray-400" />}
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block md:w-1/2" />

            {/* Content Card */}
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
              <div className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1
                ${isCurrent ? 'bg-[#0d1117] border-blue-500/30 shadow-lg shadow-blue-500/10' : 
                  isCompleted ? 'bg-[#0d1117] border-emerald-500/20 hover:border-emerald-500/40' : 
                  'bg-[#0d1117] border-white/5 opacity-70 grayscale'}`}>
                
                <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${isCurrent ? 'bg-blue-500/20 text-blue-300' : 'bg-white/10 text-gray-400'}`}>
                    STEP {index + 1}
                  </span>
                  <h3 className={`text-lg font-bold ${isCurrent ? 'text-white' : 'text-gray-200'}`}>
                    {stage.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {stage.description}
                </p>

                {stage.resources && stage.resources.length > 0 && (
                  <div className={`space-y-2 ${isLocked ? 'hidden' : 'block'}`}>
                    <div className={`text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      Resources
                    </div>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {stage.resources.map((res, idx) => (
                        <a 
                          key={idx} 
                          href={res.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-xs text-gray-300 hover:text-emerald-400 transition-colors"
                        >
                          {getResourceIcon(res.type)}
                          {res.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default JourneyMap;
