/** Public navigation is defined once so desktop and mobile orders cannot drift. */
export const publicNavigation = [
  {
    id: 'welcome',
    label: 'Welcome Portal',
    shortLabel: 'Portal',
    icon: 'portal',
  },
  {
    id: 'portfolio',
    label: 'Featured Projects',
    shortLabel: 'Projects',
    icon: 'projects',
  },
  {
    id: 'skills',
    label: 'Skills and Experience',
    shortLabel: 'Skills',
    icon: 'skills',
  },
  {
    id: 'about',
    label: 'About Me',
    shortLabel: 'About',
    icon: 'about',
  },
  {
    id: 'contact',
    label: 'Contact',
    shortLabel: 'Contact',
    icon: 'contact',
  },
  {
    id: 'links',
    label: 'Links',
    shortLabel: 'Links',
    icon: 'links',
  },
]

export const publicViewIds = new Set([
  'home',
  ...publicNavigation.map(({ id }) => id),
])
