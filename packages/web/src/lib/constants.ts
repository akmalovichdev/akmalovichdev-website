export const PERSONAL_INFO = {
  name: 'Nurbekjon Akhmatov',
  lastName: 'Nurbekjon',
  firstName: 'Akhmatov',
  nickname: 'akmalovichdev',
  title: 'Full-Stack Developer & DevOps Engineer',
  email: 'info@akmalovich.dev',
  location: 'Tashkent, Uzbekistan',
  available: true,
  bio: 'I build production-grade web applications and automate everything. From taxi platforms to education CRMs — turning complex business logic into clean, scalable systems.',
  heroTagline: 'I craft digital products that scale',
  heroSubtext: 'Full-stack developer & DevOps engineer with 5+ years of experience building production systems — from marketplace platforms to education CRMs, serving thousands of users daily.',
  roles: [
    'Full-Stack Developer',
    'DevOps Engineer',
    'Backend Architect',
    'Cloud Infrastructure Specialist',
  ],
  social: {
    github: 'https://github.com/akmalovichdev',
    telegram: 'https://t.me/akmalovichdev',
    instagram: 'https://instagram.com/akmalovichdev',
  },
} as const;

export const STATS = [
  { label: 'Years of Experience', value: 5, suffix: '+' },
  { label: 'Projects Delivered', value: 15, suffix: '+' },
  { label: 'Active Users Served', value: 10, suffix: 'K+' },
  { label: 'Uptime Guaranteed', value: 99.9, suffix: '%' },
] as const;

export const SERVICES = [
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web applications — from responsive frontends to robust APIs. React, Next.js, Node.js, PostgreSQL, and more.',
    icon: 'code',
    features: ['React / Next.js', 'Node.js / NestJS', 'PostgreSQL / MySQL', 'REST & GraphQL APIs'],
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Automated CI/CD pipelines, Docker orchestration, and cloud infrastructure that scales with your business.',
    icon: 'server',
    features: ['Docker & Docker Compose', 'CI/CD Automation', 'Nginx & Reverse Proxy', 'Linux Administration'],
  },
  {
    title: 'Business Automation',
    description: 'Custom CRM systems, Telegram bots, and workflow automation that save time and reduce manual work.',
    icon: 'zap',
    features: ['CRM Systems', 'Telegram Bots', 'Payment Integration', 'Analytics Dashboards'],
  },
  {
    title: 'Cloud & Deployment',
    description: 'Multi-server architectures, reverse proxies, SSL management, and monitoring for 99.9% uptime.',
    icon: 'cloud',
    features: ['Multi-Server Setup', 'SSL & Security', 'Monitoring & Alerts', 'Backup Strategies'],
  },
] as const;

export const SKILLS = {
  frontend: [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 92 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML / CSS', level: 95 },
    { name: 'Expo / React Native', level: 80 },
  ],
  backend: [
    { name: 'Node.js / NestJS', level: 93 },
    { name: 'Python', level: 88 },
    { name: 'PHP / Laravel', level: 82 },
    { name: 'PostgreSQL / MySQL', level: 90 },
    { name: 'Redis / MongoDB', level: 87 },
  ],
  devops: [
    { name: 'Docker / Compose', level: 95 },
    { name: 'Nginx / Reverse Proxy', level: 92 },
    { name: 'CI/CD Pipelines', level: 90 },
    { name: 'Linux Administration', level: 94 },
    { name: 'Git / GitHub Actions', level: 92 },
  ],
  tools: [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Python',
    'Docker', 'Nginx', 'PostgreSQL', 'Redis', 'MongoDB', 'Tailwind',
    'Prisma', 'Express', 'Telegram Bot API', 'GraphQL', 'Git', 'Linux',
  ],
} as const;

export const EXPERIENCE = [
  {
    title: 'Founder & Lead Developer',
    company: 'Freelance / Independent',
    period: '2022 — Present',
    description:
      'Building and deploying production web applications for clients across Uzbekistan and internationally. Managing full project lifecycle — from requirements gathering to deployment and maintenance. Currently maintaining 10+ active projects across multiple servers.',
    technologies: ['React', 'Node.js', 'NestJS', 'Docker', 'PostgreSQL', 'Nginx'],
    highlights: [
      'Built OK Taxi — a ride-hailing platform serving thousands of daily users',
      'Deployed and maintain 15+ production projects on multi-server infrastructure',
      'Achieved 99.9% uptime across all managed services',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Various Clients',
    period: '2020 — 2022',
    description:
      'Developed custom web solutions including CRM systems, e-commerce platforms, and automation tools. Specialized in building scalable backends and intuitive frontends.',
    technologies: ['React', 'Python', 'PHP', 'MySQL', 'Redis', 'Docker'],
    highlights: [
      'Delivered 10+ client projects on time and within budget',
      'Built education CRM systems managing student workflows',
      'Integrated payment systems and Telegram bot automation',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Self-taught & Open Source',
    period: '2018 — 2020',
    description:
      'Started the journey into web development. Built foundational skills in JavaScript, Python, and Linux. Contributed to open-source projects and built personal portfolio projects.',
    technologies: ['JavaScript', 'Python', 'Linux', 'Git', 'MySQL'],
    highlights: [
      'Mastered full Linux server administration',
      'Built first production applications',
      'Established Docker-based development workflows',
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: 'OK Taxi',
    description: 'Full-featured ride-hailing platform with real-time tracking, driver/rider apps, admin panel, and payment processing. Serving thousands of users daily.',
    technologies: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'WebSocket'],
    demo: 'https://oktaxi24.com',
    github: 'https://github.com/OK-TAXI/ok-taxi-technologies',
    featured: true,
    size: 'large',
  },
  {
    title: 'Bozorli',
    description: 'Online marketplace platform connecting buyers and sellers with product management, search, and order processing.',
    technologies: ['React', 'Node.js', 'MySQL', 'Docker'],
    demo: 'https://bozorli.uz',
    github: 'https://github.com/akmalovichdev/bozorliPro',
    featured: true,
    size: 'medium',
  },
  {
    title: 'Cup&Cake',
    description: 'E-commerce platform for custom cake ordering with customer portal, admin dashboard, and mobile app.',
    technologies: ['NestJS', 'Prisma', 'React', 'Expo', 'MySQL', 'Redis'],
    demo: 'https://cup-cake.uz',
    github: 'https://github.com/akmalovichdev/cupcake',
    featured: true,
    size: 'medium',
  },
  {
    title: 'Ohalik Education CRM',
    description: 'Student management system for education centers with attendance tracking, scheduling, and parent communication.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    demo: 'https://ohalik-edu.uz',
    github: 'https://github.com/akmalovichdev/education-system',
    featured: false,
    size: 'small',
  },
  {
    title: 'SamitGlobal CRM',
    description: 'Education CRM with HikVision integration for attendance tracking, student management, and analytics.',
    technologies: ['React', 'Node.js', 'MySQL', 'Docker', 'HikVision API'],
    demo: 'https://admin.akmalovich.dev',
    featured: false,
    size: 'small',
  },
  {
    title: 'Sifat Textile',
    description: 'Corporate website for textile manufacturing company with product catalog and inquiry system.',
    technologies: ['React', 'Node.js', 'Docker'],
    demo: 'https://sifattextile.uz',
    github: 'https://github.com/akmalovichdev/sifattextile',
    featured: false,
    size: 'small',
  },
  {
    title: 'Shirin Direksiyasi',
    description: 'Driving school management platform with student scheduling, progress tracking, and online booking.',
    technologies: ['React', 'Node.js', 'MySQL', 'Docker'],
    demo: 'https://shirin-direksiyasi.uz',
    github: 'https://github.com/akmalovichdev/shirin',
    featured: false,
    size: 'small',
  },
  {
    title: 'Nuri AI',
    description: 'AI-powered personal assistant with home automation, voice control, and smart integrations.',
    technologies: ['Python', 'React', 'Docker', 'Home Assistant', 'Telegram Bot API'],
    featured: true,
    size: 'medium',
  },
] as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
] as const;
