import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070b14]/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-6 px-5 py-3.5">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="group flex items-center gap-2 text-base font-bold tracking-tight text-white whitespace-nowrap shrink-0"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
          <span>{PERSONAL_INFO.name}</span>
          <span className="font-mono text-[11px] text-sky-400/90 bg-sky-950/60 border border-sky-800/50 px-2 py-0.5 rounded">
            Salesforce Dev
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-sky-400 transition-colors whitespace-nowrap relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-sky-950/50"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-medium text-white bg-sky-600 rounded-md"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090e1c] px-6 py-4 space-y-2.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-medium text-slate-200 hover:text-sky-400 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
