import React from 'react';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-8 border-t border-slate-800/80">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            Projects
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Selected personal and web development projects with source code and live demos.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-sky-950/20 group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2.5">
                  <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: GitHub & Live Demo */}
              <div className="p-4 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700/60"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
