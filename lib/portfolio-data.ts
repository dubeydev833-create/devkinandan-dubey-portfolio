export const profile = {
  name: 'Devkinandan Dubey',
  title: 'B.Tech CSE (AI & ML) Student | AI & Machine Learning Enthusiast | Aspiring Software Developer',
  shortTitle: 'B.Tech CSE (AI & ML) Student',
  email: 'dubeydev833@gmail.com',
  phone: '+91 9456258790',
  location: 'Vrindavan, Mathura, Uttar Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/devkinandan-dubey-848017305/',
  github: 'https://github.com/dubeydev833-create',
  roles: [
    'AI & ML Enthusiast',
    'Python Developer',
    'Frontend Developer',
    'Future Software Engineer',
    'Continuous Learner',
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 2, suffix: '+', label: 'Years of Learning' },
  { value: 6, suffix: '+', label: 'Technologies' },
  { value: 3, suffix: '', label: 'Projects Building' },
  { value: 2029, suffix: '', label: 'Graduation Year', raw: true },
]

export type SkillGroup = {
  category: string
  skills: { name: string; level: number; note?: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C', level: 75 },
      { name: 'JavaScript', level: 78 },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 78 },
    ],
  },
  {
    category: 'Artificial Intelligence',
    skills: [{ name: 'Machine Learning', level: 55, note: 'Currently Learning' }],
  },
  {
    category: 'Database',
    skills: [
      { name: 'SQL', level: 72 },
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'GitHub', level: 80 },
      { name: 'Visual Studio Code', level: 88 },
    ],
  },
]

export const softSkills = [
  'Problem Solving',
  'Teamwork',
  'Fast Learner',
  'Communication',
  'Adaptability',
]

export const projects = [
  {
    title: 'AI/ML Project',
    description:
      'Currently building an Artificial Intelligence and Machine Learning project to apply concepts learned in Python and Machine Learning.',
    tech: ['Python', 'Machine Learning', 'NumPy'],
    status: 'Coming Soon',
    statusTone: 'coming' as const,
    github: 'https://github.com/dubeydev833-create',
    demo: null as string | null,
    icon: 'brain',
  },
  {
    title: 'Web Development Project',
    description:
      'Developing a responsive web application using HTML, CSS, and JavaScript with a focus on clean UI and smooth interactions.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'In Progress',
    statusTone: 'progress' as const,
    github: 'https://github.com/dubeydev833-create',
    demo: null as string | null,
    icon: 'code',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern responsive personal portfolio showcasing skills, education, and projects with premium animations and glassmorphism.',
    tech: ['Next.js', 'React', 'CSS'],
    status: 'Completed',
    statusTone: 'done' as const,
    github: 'https://github.com/dubeydev833-create',
    demo: '#home',
    icon: 'layout',
  },
]
