import mukundPortrait from '../assets/images/mukund_portrait_1792673960721.jpg';
import amazonCloneImg from '../assets/images/project_amazon_clone_1792673961765.jpg';
import netflixCloneImg from '../assets/images/netflix_clone_preview_1792731218412.jpg';
import qrGeneratorImg from '../assets/images/project_qr_generator_1792731199561.jpg';

export interface SkillProgress {
  name: string;
  level: number; // percentage
  category: 'Salesforce' | 'Web Development';
}

export interface OriginalProject {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const PERSONAL_INFO = {
  name: 'Mukund Jagani',
  tagline: 'Salesforce Developer & Administrator | Web Developer',
  company: 'Mahardhi Techlabs LLP',
  period: 'Sep 2025 – Present',
  email: 'mukundjagani04@gmail.com',
  github: 'https://github.com/mukund2506',
  linkedin: 'https://linkedin.com/in/mukund-jagani',
  location: 'India',
  avatar: mukundPortrait,
  aboutParagraphs: [
    "I am driven by continuous learning and tackling complex challenges to build scalable, high-quality solutions. I have hands-on experience in designing, customizing, and optimizing Salesforce solutions to meet business requirements and improve operational efficiency.",
    "My Salesforce expertise covers both administration (User & security management, custom objects, validation rules, workflows, approval processes, reports, and dashboards) and development (Apex & Apex Triggers, Lightning Web Components [LWC], Visualforce, Aura Components, and Flows).",
    "Additionally, I have strong supporting skills in web development, including HTML, CSS, JavaScript, Python, PHP, Bootstrap, AJAX, jQuery, JSON, SQL, and MongoDB."
  ]
};

export const EXPERIENCES = [
  {
    role: 'Salesforce Developer',
    company: 'Mahardhi Techlabs LLP',
    period: 'Sep 2025 – Present',
    type: 'Full-time',
    isCurrent: true,
    location: 'India',
    description: 'Working on enterprise Salesforce customization, development, and automations.',
    responsibilities: [
      'Developing and customizing Salesforce solutions using Apex (classes, triggers, batch jobs), Aura Components, and Lightning Web Components (LWC).',
      'Configuring declarative automations using Flow Builder (Record-Triggered Flows, Screen Flows) and approval processes.',
      'Managing security architectures: Role Hierarchy, Profiles, Permission Sets, and Organization-Wide Defaults (OWD).',
      'Implementing REST API integrations and optimizing SOQL/SOSL queries adhering strictly to Governor Limits.',
      'Conducting unit testing and deployment verification ensuring high test coverage across all components.'
    ],
    technologies: ['Apex', 'Apex Triggers', 'LWC', 'Aura Components', 'Salesforce Admin', 'Flows', 'SOQL', 'REST APIs', 'Git']
  },
  {
    role: 'Python Developer',
    company: 'Cognifyz Technologies · Internship',
    period: 'May 2025 - Aug 2025 · 4 mos',
    type: 'Internship',
    isCurrent: false,
    location: 'Remote',
    description: 'Worked as a Python Developer Intern on core programming tasks and automation scripts.',
    responsibilities: [
      'Developed backend logic, data processing routines, and automation scripts using Python.',
      'Utilized developer tools, version control with Git, and executed unit tests.',
      'Collaborated remotely on software development deliverables and problem solving.'
    ],
    technologies: ['Python (Programming Language)', 'Developer Tools', 'Automation Scripts', 'Git']
  },
  {
    role: 'Web & Salesforce Developer',
    company: 'Freelance & Independent Projects',
    period: '2023 – 2025',
    type: 'Projects',
    isCurrent: false,
    location: 'India',
    description: 'Built full-stack web applications and customized Salesforce CRM modules.',
    responsibilities: [
      'Engineered interactive frontend applications including Amazon Clone, Netflix Clone, and QR Generator.',
      'Configured custom objects, validation rules, page layouts, and reports & dashboards in Salesforce.',
      'Developed responsive UI interfaces utilizing HTML5, CSS3, JavaScript, Python, and SQL databases.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'PHP', 'Bootstrap', 'SQL']
  }
];

export const SKILL_ITEMS: SkillProgress[] = [
  // Salesforce
  { name: 'Apex & Apex Trigger', level: 85, category: 'Salesforce' },
  { name: 'Lightning Web Components (LWC)', level: 85, category: 'Salesforce' },
  { name: 'Salesforce Admin & Security', level: 90, category: 'Salesforce' },
  { name: 'Approval Process & Flows', level: 85, category: 'Salesforce' },
  { name: 'Aura Components', level: 80, category: 'Salesforce' },
  { name: 'Visualforce', level: 80, category: 'Salesforce' },

  // Web Development
  { name: 'HTML5', level: 95, category: 'Web Development' },
  { name: 'CSS3 / Bootstrap', level: 90, category: 'Web Development' },
  { name: 'JavaScript (ES6+)', level: 85, category: 'Web Development' },
  { name: 'Python', level: 80, category: 'Web Development' },
  { name: 'PHP', level: 80, category: 'Web Development' },
  { name: 'AJAX, jQuery & JSON', level: 85, category: 'Web Development' },
  { name: 'SQL & MongoDB', level: 80, category: 'Web Development' },
];

export const PROJECTS: OriginalProject[] = [
  {
    id: 'amazon-clone',
    title: 'Amazon Clone',
    description: 'A full-featured responsive Amazon e-commerce clone featuring product catalog browsing, dynamic shopping cart management, customer reviews, and a simulated checkout flow.',
    image: amazonCloneImg,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/mukund2506',
    liveUrl: 'https://mukund2506.github.io/portfolio/'
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description: 'An interactive video streaming UI clone inspired by Netflix. Features a prominent hero billboard, horizontally scrollable movie categories, dynamic poster previews, and media modal.',
    image: netflixCloneImg,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Video API'],
    githubUrl: 'https://github.com/mukund2506',
    liveUrl: 'https://mukund2506.github.io/portfolio/'
  },
  {
    id: 'qr-generator',
    title: 'QR Code Generator',
    description: 'A fast, responsive web application that generates instant, customizable QR codes from user-provided URLs or plain text, with instant download support in multiple formats.',
    image: qrGeneratorImg,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
    githubUrl: 'https://github.com/mukund2506',
    liveUrl: 'https://mukund2506.github.io/portfolio/'
  }
];
