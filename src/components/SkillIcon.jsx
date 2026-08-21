const iconPaths = {
  components: ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'],
  logic: ['M8 4 3 12l5 8', 'M16 4l5 8-5 8', 'm14 3-4 18'],
  layers: ['m12 3 9 5-9 5-9-5 9-5Z', 'm3 12 9 5 9-5', 'm3 16 9 5 9-5'],
  path: ['M4 19c2-8 6-12 16-14', 'm15 3 5 2-2 5', 'M5 19h.01'],
  dialogue: ['M4 5h16v11H9l-5 4V5Z', 'M8 9h8', 'M8 12h5'],
  coordinate: ['M12 4v4', 'M12 16v4', 'M4 12h4', 'M16 12h4', 'M12 12h.01', 'M7 7l2 2', 'm15 7-2 2', 'm7 8 2-2', 'm6 0 2 2'],
}

/** Supplies consistent decorative symbols while visible text names every skill. */
function SkillIcon({ name }) {
  const paths = iconPaths[name] ?? iconPaths.path

  return (
    <svg aria-hidden="true" className="skill-icon" fill="none" viewBox="0 0 24 24">
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

export default SkillIcon
