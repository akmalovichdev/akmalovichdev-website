export const PERSONAL_INFO = {
  name: 'Nurbekjon Akhmatov',
  nickname: 'akmalovich.dev',
  title: 'DevOps & Backend Developer',
  email: 'hello@akmalovich.dev',
  location: 'Uzbekistan',
  bio: 'Passionate about building scalable infrastructure and robust backend systems. I specialize in automating deployments, optimizing cloud resources, and crafting efficient APIs that power modern applications.',
  social: {
    github: 'https://github.com/akmalovich',
    linkedin: 'https://linkedin.com/in/akmalovich',
    telegram: 'https://t.me/akmalovich',
    twitter: 'https://twitter.com/akmalovich',
  },
} as const;

export const SKILLS = {
  devops: [
    { name: 'Docker', level: 95 },
    { name: 'Kubernetes', level: 90 },
    { name: 'AWS', level: 88 },
    { name: 'Terraform', level: 85 },
    { name: 'CI/CD', level: 92 },
    { name: 'Linux', level: 94 },
    { name: 'Ansible', level: 82 },
    { name: 'Prometheus', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 92 },
    { name: 'Python', level: 88 },
    { name: 'Go', level: 75 },
    { name: 'PostgreSQL', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'Redis', level: 87 },
    { name: 'GraphQL', level: 80 },
    { name: 'REST APIs', level: 95 },
  ],
  tools: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub Actions', icon: 'github' },
    { name: 'GitLab CI', icon: 'gitlab' },
    { name: 'Jenkins', icon: 'jenkins' },
    { name: 'Nginx', icon: 'nginx' },
    { name: 'Grafana', icon: 'grafana' },
    { name: 'ArgoCD', icon: 'argocd' },
    { name: 'Helm', icon: 'helm' },
  ],
} as const;

export const EXPERIENCE = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    description:
      'Leading infrastructure automation, implementing GitOps workflows, and managing Kubernetes clusters at scale. Reduced deployment time by 70% through CI/CD optimization.',
    technologies: ['Kubernetes', 'ArgoCD', 'Terraform', 'AWS', 'Python'],
  },
  {
    title: 'Backend Developer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description:
      'Developed high-performance REST APIs and microservices architecture. Implemented real-time data processing pipelines handling millions of events daily.',
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL'],
  },
  {
    title: 'Junior Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description:
      'Started my journey building web applications and learning DevOps practices. Contributed to multiple client projects and internal tools.',
    technologies: ['JavaScript', 'Python', 'Linux', 'Git', 'MySQL'],
  },
] as const;

export const PROJECTS = [
  {
    title: 'Cloud Infrastructure Platform',
    description:
      'Self-service platform for deploying and managing cloud resources with automated scaling and monitoring.',
    technologies: ['Kubernetes', 'Terraform', 'React', 'Go'],
    image: '/projects/cloud-platform.png',
    github: 'https://github.com/akmalovich/cloud-platform',
    demo: 'https://cloud.akmalovich.dev',
  },
  {
    title: 'API Gateway Service',
    description:
      'High-performance API gateway with rate limiting, authentication, and request routing capabilities.',
    technologies: ['Node.js', 'Redis', 'Docker', 'Kong'],
    image: '/projects/api-gateway.png',
    github: 'https://github.com/akmalovich/api-gateway',
  },
  {
    title: 'CI/CD Pipeline Generator',
    description:
      'Tool for automatically generating optimized CI/CD pipelines based on project structure and requirements.',
    technologies: ['Python', 'GitHub Actions', 'YAML', 'Docker'],
    image: '/projects/cicd-generator.png',
    github: 'https://github.com/akmalovich/cicd-generator',
  },
  {
    title: 'Monitoring Dashboard',
    description:
      'Comprehensive monitoring solution with custom metrics, alerting, and beautiful visualizations.',
    technologies: ['Grafana', 'Prometheus', 'Node.js', 'InfluxDB'],
    image: '/projects/monitoring.png',
    github: 'https://github.com/akmalovich/monitoring-stack',
    demo: 'https://monitor.akmalovich.dev',
  },
] as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;
