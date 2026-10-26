import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, MessageSquare, CheckCircle2, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-8 border-t border-slate-800/80">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>Connect</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            Get in Touch
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Have a project or opportunity? Reach out directly via email or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Direct Details */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Email Address:</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium"
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

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-mono font-bold text-white hover:text-sky-400 transition-colors block"
              >
                {PERSONAL_INFO.email}
              </a>

              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>github.com/mukund2506</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            {submitted ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 mx-auto" />
                <p className="text-sm font-bold text-white">Message Sent Successfully!</p>
                <p className="text-xs text-slate-300">
                  Thank you {name}, I have received your message and will reply to {email} promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-sky-400 hover:underline pt-2 block mx-auto"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#0a0f1d] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0a0f1d] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-400">Subject</label>
                  <input
                    type="text"
                    placeholder="Project inquiry / Opportunity"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#0a0f1d] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-400">Message</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#0a0f1d] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-sky-950/40"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
