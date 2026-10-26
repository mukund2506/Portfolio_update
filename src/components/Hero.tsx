import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Mail, 
  FileText,
  MapPin,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const titles = [
    'Salesforce Developer',
    'Salesforce Administrator',
    'Apex & LWC Specialist',
    'Full-Stack Web Developer'
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = titles[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentFullTitle.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullTitle.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullTitle.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="home" className="py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Left Intro Text */}
        <div className="space-y-4 text-center sm:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60 text-xs text-sky-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Currently working at {PERSONAL_INFO.company}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">{PERSONAL_INFO.name}</span>
          </h1>

          <div className="h-8 flex items-center justify-center sm:justify-start">
            <p className="text-lg sm:text-xl font-semibold text-slate-200">
              I am a <span className="text-sky-400 font-mono">{displayText}</span>
              <span className="animate-pulse text-sky-400 ml-0.5">|</span>
            </p>
          </div>

          <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
            Salesforce Developer at <strong className="text-white">{PERSONAL_INFO.company}</strong> (Sep 2025 – Present) specializing in designing, customizing, and scaling Salesforce CRM solutions with Apex, LWC, Flow automations, and modern web applications.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-md shadow-sky-950/40 transition-all hover:translate-y-[-1px]"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              title="Copy email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center sm:justify-start gap-4 pt-2 text-xs text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-300" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Right Avatar */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-sky-500/40 shadow-2xl shadow-sky-950/60 relative group bg-slate-900">
            <img
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
