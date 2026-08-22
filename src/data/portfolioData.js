export const portfolioIntroduction = {
  eyebrow: 'Featured projects',
  title: 'Problems worth understanding. Solutions built with care.',
  summary:
    'My work connects software development, education, and production management. Each case study focuses on the real need, the choices made along the way, and what the result taught me.',
}

export const portfolioImages = {
  hero: {
    src: '/images/portfolio/problem-to-solution-banner.webp',
    alt: 'Abstract journey from tangled questions and investigative lines to a carefully constructed golden pathway',
  },
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
    id: 'stagespace',
    name: 'StageSpace',
    status: 'Authentication foundation connected',
    technologies: [
      'React',
      'Vite',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
    ],
    purpose:
      'Create one calm digital backstage where theater companies can organize productions, departments, schedules, reports, calls, and notes.',
    description:
      'StageSpace brings my theater-production experience into a full-stack application. Its current foundation includes public and protected routes, account creation and sign-in, company and production views, backstage hubs, and department workspaces ready for deeper production tools.',
    image: portfolioImages.experience,
    preview: {
      id: 'stagespace',
      scenes: [
        {
          id: 'welcome',
          label: 'Welcome',
          address: 'stagespace.local/',
          image: '/images/portfolio/stagespace-welcome.webp',
          alt: 'StageSpace welcome page with theater collaboration messaging and a backstage dashboard preview',
          caption: 'The public welcome view introduces the shared backstage workspace and its production-focused structure.',
        },
        {
          id: 'sign-in',
          label: 'Sign in',
          address: 'stagespace.local/login',
          image: '/images/portfolio/stagespace-login.webp',
          alt: 'StageSpace sign-in page for returning theater collaborators',
          caption: 'Authentication protects the company dashboards, production rooms, and department workspaces behind this entry point.',
        },
        {
          id: 'sign-up',
          label: 'Create account',
          address: 'stagespace.local/signup',
          image: '/images/portfolio/stagespace-signup.webp',
          alt: 'StageSpace account creation page with role and membership choices',
          caption: 'The account flow begins separating individual and company-member needs before users enter a workspace.',
        },
      ],
    },
    repository: {
      href: 'https://github.com/teahmbanks/Personal-project--Theater-website',
      label: 'View StageSpace on GitHub',
    },
    stages: [
      {
        label: 'Problem',
        detail:
          'Production information is often scattered across messages, calendars, documents, and department-specific systems, making it difficult for a company to maintain one reliable source of truth.',
      },
      {
        label: 'Investigation',
        detail:
          'I mapped the work around company profiles, production rooms, backstage communication, and the different information needs of stage management, props, costumes, lighting, and other departments.',
      },
      {
        label: 'Decision',
        detail:
          'Start with secure identity and navigation first, then use realistic mock production data to test the information architecture before expanding the backend domain model.',
      },
      {
        label: 'Implementation',
        detail:
          'The React client uses protected routing and reusable company, production, and department views. The Express API uses MongoDB, Mongoose, password hashing, JWT authentication, and protected user endpoints.',
      },
      {
        label: 'Lesson',
        detail:
          'A complex collaboration product becomes easier to build when permissions, navigation, and shared vocabulary are established before adding every requested tool.',
      },
    ],
  },
  {
    id: 'codebloggs',
    name: 'CodeBloggs',
    status: 'Full-stack coursework project',
    technologies: ['React', 'Redux', 'Express', 'MongoDB', 'Selenium IDE', 'Lighthouse'],
    purpose:
      'Build a social blogging application where developers can connect, publish ideas, discuss posts, and manage their profiles.',
    description:
      'CodeBloggs is a full-stack social platform with registration, session-based authentication, posts, comments, replies, likes, user networking, account settings, and administrative interfaces. Later work strengthened the project through Lighthouse audits and a repeatable Selenium test suite.',
    image: portfolioImages.problemSolving,
    preview: {
      id: 'codebloggs',
      scenes: [
        {
          id: 'feed',
          label: 'Community feed',
          address: 'codebloggs.local/home',
          product: 'codebloggs',
          view: 'feed',
          caption: 'A representative sample of the social feed where members publish ideas and join conversations.',
        },
        {
          id: 'network',
          label: 'Developer network',
          address: 'codebloggs.local/network',
          product: 'codebloggs',
          view: 'network',
          caption: 'Explore the network through developer cards, presence, profile details, and recent activity.',
        },
        {
          id: 'profile',
          label: 'Member profile',
          address: 'codebloggs.local/users/teah-banks',
          product: 'codebloggs',
          view: 'profile',
          caption: 'A member profile brings identity, activity, account level, and community connections together.',
        },
      ],
    },
    repository: {
      href: 'https://github.com/teahmbanks/Module-15',
      label: 'View CodeBloggs on GitHub',
    },
    stages: [
      {
        label: 'Problem',
        detail:
          'A social application must coordinate identity, content ownership, conversation threads, and administrative control without making everyday interactions feel complicated.',
      },
      {
        label: 'Investigation',
        detail:
          'I worked across the React client, Redux state, Express routes, MongoDB models, authentication, validation, and the relationships between posts, comments, replies, and users.',
      },
      {
        label: 'Decision',
        detail:
          'Use reusable service and state patterns for the application, then audit the most important routes with Lighthouse and automate core browser flows with Selenium IDE.',
      },
      {
        label: 'Verification',
        detail:
          'The Module 15 work includes documented Login and Home audits, an external benchmark, and a Firefox-compatible Selenium IDE suite containing ten tests.',
      },
      {
        label: 'Lesson',
        detail:
          'Measurement and repeatable tests turn a working application into evidence that performance, accessibility, and critical user paths can be maintained.',
      },
    ],
  },
  {
    id: 'rocket-food-delivery',
    name: 'Rocket Food Delivery',
    status: 'Full-stack mobile coursework project',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Expo', 'React Native', 'JWT'],
    purpose:
      'Connect customers, couriers, restaurants, and administrators through one food-ordering and delivery system.',
    description:
      'Rocket Food Delivery combines a Spring Boot REST API and administrative back office with an Expo mobile application. It supports role-aware customer and courier experiences, restaurant ordering, delivery management, account tools, order history, and optional notification preferences.',
    image: portfolioImages.experience,
    preview: {
      id: 'rocket-delivery',
      scenes: [
        {
          id: 'restaurants',
          label: 'Browse restaurants',
          address: 'rocket-delivery.app/customer/restaurants',
          product: 'rocket-delivery',
          view: 'restaurants',
          caption: 'Browse a representative restaurant list with the rating and price filters used by the mobile client.',
        },
        {
          id: 'menu',
          label: 'Build an order',
          address: 'rocket-delivery.app/customer/restaurants/12',
          product: 'rocket-delivery',
          view: 'menu',
          caption: 'Step into a restaurant menu, adjust item quantities, and see the order total take shape.',
        },
        {
          id: 'delivery',
          label: 'Track delivery',
          address: 'rocket-delivery.app/orders/42',
          product: 'rocket-delivery',
          view: 'delivery',
          caption: 'Follow a representative order from restaurant confirmation to courier pickup and arrival.',
        },
      ],
    },
    repository: {
      href: 'https://github.com/teahmbanks/Module-14',
      label: 'View Rocket Food Delivery on GitHub',
    },
    stages: [
      {
        label: 'Problem',
        detail:
          'Customers and couriers need different views of the same order, while the backend must keep authentication, status changes, restaurant data, and delivery actions consistent.',
      },
      {
        label: 'Investigation',
        detail:
          'I traced the complete journey across the mobile navigation, REST endpoints, database entities, authentication layers, order lifecycle, and back-office operations.',
      },
      {
        label: 'Obstacle',
        detail:
          'The mobile client, local backend, physical devices, and third-party notification providers all have different runtime and configuration requirements.',
      },
      {
        label: 'Decision',
        detail:
          'Centralize API communication, preserve role-aware sessions, and keep optional email and SMS providers behind backend services so the core ordering workflow remains understandable.',
      },
      {
        label: 'Implementation',
        detail:
          'The backend uses Spring Boot, Spring Security, JWT, JPA, and MySQL. The Expo client uses file-based routing, shared services, persisted session state, customer tabs, and courier delivery tools.',
      },
      {
        label: 'Lesson',
        detail:
          'Cross-platform systems are easier to debug when network boundaries, response shapes, roles, and provider-dependent behavior are documented explicitly.',
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
