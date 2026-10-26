import React from 'react';
import { User, CheckCircle2, ShieldCheck, Code, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-8 border-t border-slate-800/80">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
          <User className="w-4 h-4" />
          <span>About Me</span>
        </div>

        <h2 className="text-2xl font-bold text-white tracking-tight">
          Salesforce Developer & Administrator
        </h2>

        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* 3 Pillar Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Code className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-white">Apex & LWC Development</h3>
            <p className="text-[11px] text-slate-400">
              Bulkified triggers, one-trigger-per-object pattern, reactive Lightning Web Components, and governor-limit safe SOQL queries.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-white">Salesforce Administration</h3>
            <p className="text-[11px] text-slate-400">
              User & security management, role hierarchy, profiles, permission sets, OWD, custom objects, and reports/dashboards.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-white">Automations & Web</h3>
            <p className="text-[11px] text-slate-400">
              Record-Triggered Flows, approval processes, REST API integrations, and modern web apps in JavaScript, React, Python, and SQL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
