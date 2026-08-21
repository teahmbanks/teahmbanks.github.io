import SkillCard from '../components/SkillCard.jsx'
import { technicalSkills, transferableSkills } from '../data/homeData.js'
import {
  experienceConnections,
  skillsIntroduction,
  technicalToolkit,
} from '../data/skillsExperienceData.js'

function SkillsCollection({ eyebrow, heading, skills }) {
  const headingId = `${heading.toLowerCase().replaceAll(' ', '-')}-heading`

  return (
    <section className="skills-page__section" aria-labelledby={headingId}>
      <p className="page-panel__eyebrow">{eyebrow}</p>
      <h2 id={headingId}>{heading}</h2>
      <ul className="skill-grid">
        {skills.map((skill) => <SkillCard key={skill.id} {...skill} />)}
      </ul>
    </section>
  )
}

/** Connects Teah's verified technical skills with cross-disciplinary evidence. */
function SkillsExperiencePage() {
  return (
    <div className="skills-page">
      <section className="skills-page__hero" aria-labelledby="view-heading">
        <p className="page-panel__eyebrow">{skillsIntroduction.eyebrow}</p>
        <h1 id="view-heading" tabIndex="-1">{skillsIntroduction.title}</h1>
        <p className="page-panel__lead">{skillsIntroduction.summary}</p>
      </section>

      <SkillsCollection eyebrow="How I build" heading="Technical skills" skills={technicalSkills} />

      <section className="skills-page__section" aria-labelledby="toolkit-heading">
        <p className="page-panel__eyebrow">What I use</p>
        <h2 id="toolkit-heading">Technical toolkit</h2>
        <dl className="toolkit-grid">
          {technicalToolkit.map((group) => (
            <div key={group.category}>
              <dt>{group.category}</dt>
              <dd>{group.items.join(' • ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <SkillsCollection eyebrow="How I work" heading="Transferable strengths" skills={transferableSkills} />

      <section className="skills-page__section" aria-labelledby="connections-heading">
        <p className="page-panel__eyebrow">Where the skills come together</p>
        <h2 id="connections-heading">Experience in practice</h2>
        <ol className="connection-grid">
          {experienceConnections.map((connection) => (
            <li key={connection.id}>
              <p>{connection.context}</p>
              <h3>{connection.title}</h3>
              <span>{connection.description}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default SkillsExperiencePage
