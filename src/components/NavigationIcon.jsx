const iconPaths = {
  portal: ['M4 4h16v16H4z', 'M9 4v16', 'M13 12h4', 'm15 10 2 2-2 2'],
  projects: ['M4 7h16v12H4z', 'M9 7V5h6v2', 'M4 12h16', 'M10 12v2h4v-2'],
  skills: ['M12 3v18', 'M5 8h14', 'M7 16h10', 'M8 5h8', 'M9 19h6'],
  about: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M5 21a7 7 0 0 1 14 0'],
  contact: ['M3 5h18v14H3z', 'm3 7 9 6 9-6'],
  links: ['M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1', 'M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1'],
}

/** Renders a small decorative icon without duplicating accessible nav labels. */
function NavigationIcon({ name }) {
  const paths = iconPaths[name] ?? iconPaths.portal

  return (
    <svg
      aria-hidden="true"
      className="navigation-icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      {paths.map((path) => (
        <path
          d={path}
          key={path}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      ))}
    </svg>
  )
}

export default NavigationIcon
