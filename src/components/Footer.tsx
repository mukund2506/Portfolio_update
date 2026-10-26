import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070b14]/90 py-6 text-slate-400">
      <div className="max-w-4xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-0.5 text-center sm:text-left">
          <p className="text-xs font-bold text-white">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-[11px] text-slate-500">
            Salesforce Developer · {PERSONAL_INFO.company}
          </p>
          <p className="text-[10px] text-slate-600">
            © {new Date().getFullYear()} Mukund Jagani. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5 text-xs">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-sky-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
