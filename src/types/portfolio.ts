export interface SkillItem {
  name: string;
  category: 'Salesforce Development' | 'Salesforce Administration' | 'Web & Programming' | 'Databases & Tools';
  level: 'Advanced' | 'Intermediate' | 'Proficient';
  iconName: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Salesforce' | 'Full-Stack Web' | 'Automation & Integration';
  image: string;
  description: string;
  features: string[];
  technologies: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  architectureOverview: string;
}

export interface CodeSnippetItem {
  id: string;
  title: string;
  language: 'apex' | 'javascript' | 'html' | 'soql';
  category: 'Apex Trigger & Handler' | 'Lightning Web Component' | 'REST Callout Service' | 'SOQL Optimization';
  fileName: string;
  code: string;
  description: string;
  keyPractices: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: 'Completed' | 'In Progress' | 'Certified';
  date: string;
  credentialId?: string;
}
