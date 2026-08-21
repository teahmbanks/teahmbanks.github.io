import SkillIcon from './SkillIcon.jsx'

/** Pairs each skill with evidence-oriented supporting text. */
function SkillCard({ description, icon, title }) {
  return (
    <li className="skill-card">
      <span className="skill-card__icon">
        <SkillIcon name={icon} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default SkillCard
