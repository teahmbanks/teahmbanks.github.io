/** Presents a verified project as a problem-solving story. */
function ProjectCaseStudy({ project }) {
  return (
    <article className="project-case-study">
      <img
        alt={project.image.alt}
        className="project-case-study__image"
        height="1024"
        loading="lazy"
        src={project.image.src}
        width="1536"
      />
      <div className="project-case-study__content">
        <div className="project-case-study__heading">
          <div>
            <p className="page-panel__eyebrow">Case study</p>
            <h3>{project.name}</h3>
          </div>
          <span className="project-case-study__status">{project.status}</span>
        </div>
        <p className="project-case-study__purpose">{project.purpose}</p>
        <p>{project.description}</p>
        {project.repository && (
          <a
            className="text-link"
            href={project.repository.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {project.repository.label} <span className="visually-hidden">(opens in a new tab)</span>
          </a>
        )}
        <ul className="technology-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <dl className="case-study-stages">
          {project.stages.map((stage) => (
            <div key={stage.label}>
              <dt>{stage.label}</dt>
              <dd>{stage.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}

export default ProjectCaseStudy
