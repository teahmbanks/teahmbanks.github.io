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
    id: 'teacherflow',
    name: 'TeacherFlow',
    status: 'Engineering foundation complete',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Vitest',
    ],
    purpose:
      'Lay a reliable foundation for a teacher productivity application designed to reduce repetitive grading, documentation, gradebook, and family-communication work.',
    description:
      'TeacherFlow is planned around a fast grading workflow: select or scan an assignment, scan a student identifier, grade, add feedback, save, and continue. The current implementation intentionally stops at the engineering foundation so future classroom features can be added through focused specifications instead of speculative code.',
    image: portfolioImages.experience,
    stages: [
      {
        label: 'Problem',
        detail:
          'Grading physical student work can require repeated searching, data entry, documentation, and gradebook preparation that take time away from instruction.',
      },
      {
        label: 'Investigation',
        detail:
          'The workflow was broken into client, API, persistence, testing, and privacy concerns, with the grading loop identified as the first product priority.',
      },
      {
        label: 'Obstacle',
        detail:
          'The long-term product includes many related classroom needs, creating a risk of building domain models and integrations before the primary grading workflow is understood and tested.',
      },
      {
        label: 'Decision',
        detail:
          'Build an infrastructure-only monorepo first and require focused feature specifications before adding student, assignment, rubric, scanning, messaging, or analytics behavior.',
      },
      {
        label: 'Implementation',
        detail:
          'The foundation uses npm workspaces with a responsive React and TypeScript client, an Express API, centralized request handling, PostgreSQL-ready Prisma tooling, environment validation, and starter client and server tests.',
      },
      {
        label: 'Verification',
        detail:
          'The current checkout passes client and server builds, lint, one client test, and two API tests. The health endpoint returns only an operational status and does not require a database connection.',
      },
      {
        label: 'Lesson',
        detail:
          'Protecting the core workflow sometimes means choosing a smaller verified foundation over a larger collection of unfinished features.',
      },
    ],
  },
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
    dates: '2016',
  },
]

export const resume = {
  href: '/resume/Teah-Banks-Resume-2026.pdf',
  label: 'Download Teah Banks resume (PDF)',
}
