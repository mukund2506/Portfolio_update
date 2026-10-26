import React from 'react';
import { motion } from 'motion/react';
import { Layers, Cloud, Code } from 'lucide-react';
import { SKILL_ITEMS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const salesforceSkills = SKILL_ITEMS.filter((s) => s.category === 'Salesforce');
  const webSkills = SKILL_ITEMS.filter((s) => s.category === 'Web Development');

  return (
    <section id="skills" className="py-8 border-t border-slate-800/80">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            Skills & Capabilities
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Proficiencies across the Salesforce ecosystem and supporting full-stack web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Salesforce Skills */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/90 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <Cloud className="w-4 h-4 text-sky-400" />
              <h3 className="text-sm font-bold text-white">Salesforce Expertise</h3>
            </div>

            <div className="space-y-3">
              {salesforceSkills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200">{skill.name}</span>
                    <span className="text-[11px] text-sky-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development & Supporting Skills */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/90 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <Code className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm font-bold text-white">Web & Programming</h3>
            </div>

            <div className="space-y-3">
              {webSkills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200">{skill.name}</span>
                    <span className="text-[11px] text-indigo-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
