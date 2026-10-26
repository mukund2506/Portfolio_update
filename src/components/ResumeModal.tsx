import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_ITEMS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const salesforceSkills = SKILL_ITEMS.filter(s => s.category === 'Salesforce');
  const webSkills = SKILL_ITEMS.filter(s => s.category === 'Web Development');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b0f19] border border-slate-700/80 shadow-2xl z-10 text-slate-200"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-[#0d1322] border-b border-slate-800 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <span>Curriculum Vitae</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">{PERSONAL_INFO.name}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document */}
          <div className="p-6 sm:p-8 space-y-6 print:p-0 print:text-black">
            {/* Header Lockup */}
            <div className="border-b border-slate-800 pb-5 space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm text-sky-400 font-semibold">
                {PERSONAL_INFO.tagline}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  {PERSONAL_INFO.email}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Github className="w-3.5 h-3.5 text-slate-500" />
                  github.com/mukund2506
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                  LinkedIn
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Professional Summary
              </h2>
              <div className="text-xs text-slate-300 space-y-1 leading-relaxed">
                {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-white">
                        {exp.role} — <span className="text-sky-400 font-medium">{exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-sky-300 font-medium">{exp.period}</span>
                    </div>
                    <ul className="space-y-1 pl-1">
                      {exp.responsibilities.map((r, rIdx) => (
                        <li key={rIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                          <span className="text-sky-400 font-bold">›</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="font-bold text-white mb-1">Salesforce Ecosystem</p>
                  <p className="text-slate-400 leading-relaxed">
                    {salesforceSkills.map(s => s.name).join(', ')}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="font-bold text-white mb-1">Web Development & Tools</p>
                  <p className="text-slate-400 leading-relaxed">
                    {webSkills.map(s => s.name).join(', ')}, Git, Salesforce CLI, Postman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
