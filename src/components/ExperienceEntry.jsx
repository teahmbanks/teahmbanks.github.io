/** Renders one verified education or work-history entry. */
function ExperienceEntry({ description, dates, organization, role }) {
  return (
    <li className="experience-entry">
      <div className="experience-entry__heading">
        <div>
          <h3>{role}</h3>
          <p>{organization}</p>
        </div>
        <p className="experience-entry__dates">{dates}</p>
      </div>
      {description ? <p className="experience-entry__description">{description}</p> : null}
    </li>
  )
}

export default ExperienceEntry
