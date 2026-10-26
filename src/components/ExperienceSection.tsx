import React from 'react';
import { Briefcase, CheckCircle2, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-8 border-t border-slate-800/80">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Career History</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            Work Experience
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Hands-on professional experience in Salesforce development, customization, and full-stack solutions.
          </p>
        </div>

        <div className="space-y-4">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl border transition-all ${
                exp.isCurrent
                  ? 'bg-slate-900/80 border-sky-500/50 shadow-lg shadow-sky-950/20'
                  : 'bg-slate-900/50 border-slate-800/80'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-slate-400">@</span>
                  <span className="text-base font-bold text-sky-400">
                    {exp.company}
                  </span>
                  {exp.isCurrent && (
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Current Role
                    </span>
                  )}
                </div>

                <span className="text-xs text-sky-300 font-mono font-medium">
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {exp.location}
                </span>
                <span aria-hidden="true">·</span>
                <span>{exp.type}</span>
              </div>

              <ul className="space-y-2 mb-3">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-slate-400 bg-slate-850/80 border border-slate-800 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
