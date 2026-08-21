export const portfolioIntroduction = {
  eyebrow: 'Featured projects',
  title: 'Problems worth understanding. Solutions built with care.',
  summary:
    'My work connects software development, education, and production management. Each case study focuses on the real need, the choices made along the way, and what the result taught me.',
}

export const portfolioImages = {
  problemSolving: {
    src: '/images/portfolio/problem-solving-journey.webp',
    alt: 'Editorial illustration of a winding problem-solving path connecting investigation, building, testing, and reflection',
  },
  experience: {
    src: '/images/portfolio/cross-disciplinary-work.webp',
    alt: 'Editorial illustration connecting software development, an open book, and backstage production planning',
  },
}

export const projects = [
  {
    id: 'accessible-to-all',
    name: 'Accessible to All Portfolio',
    status: 'In active development',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'GitHub Pages'],
    purpose:
      'Create one accessible professional portfolio that can adapt its visual presentation without changing its facts or functionality.',
    description:
      'This portfolio brings my development, education, and stage-management experience into one clear professional story. Visitors choose a Simple, Corporate, or Dramatic presentation while receiving the same content and accessible navigation.',
    image: portfolioImages.problemSolving,
    stages: [
      {
        label: 'Problem',
        detail:
          'A single visual style cannot anticipate every visitor’s preferences, but separate websites would make the content difficult to maintain consistently.',
      },
      {
        label: 'Investigation',
        detail:
          'The requirements were translated into shared navigation, structured content, responsive behavior, and presentation tokens that can change appearance without duplicating the page.',
      },
      {
        label: 'Decision',
        detail:
          'Use one semantic React structure and CSS custom properties for all three presentation modes so choice changes the experience, not the information.',
      },
      {
        label: 'Verification so far',
        detail:
          'The shared layout and Home experience pass local lint and production-build checks. Portfolio implementation and responsive verification are continuing on this feature branch.',
      },
      {
        label: 'Lesson',
        detail:
          'Accessibility becomes more dependable when it shapes the component and content architecture from the beginning rather than being added after the design is finished.',
      },
    ],
  },
]

export const workExperience = [
  {
    id: 'codeboxx',
    role: 'Junior Software Developer (Business Simulation)',
    organization: 'CodeBoxx Academy',
    dates: 'March 2026 - Present',
    description:
      'Develop full-stack applications and REST APIs through Agile workflows, collaborative projects, code reviews, testing, and technical presentations.',
  },
  {
    id: 'blake',
    role: 'English Teacher',
    organization: 'Blake High School',
    dates: '2019 - Present',
    description:
      'Manage concurrent projects, design structured learning experiences, communicate complex ideas clearly, and use data to guide decisions and improve outcomes.',
  },
  {
    id: 'jobsite',
    role: 'Stage Manager / Props Master',
    organization: 'Jobsite Theater',
    dates: '2017 - Present',
    description:
      'Coordinate teams, schedules, budgets, inventory, documentation, and fast-moving production logistics while solving time-sensitive challenges.',
  },
]

export const education = [
  {
    id: 'usf',
    institution: 'University of South Florida',
    program: 'Bachelor of Arts, English Creative Writing',
    dates: 'Graduation date not listed on resume',
  },
]

export const resume = {
  href: '/resume/Teah-Banks-Resume-2026.pdf',
  label: 'Download Teah Banks resume (PDF)',
}
