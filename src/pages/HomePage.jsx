import SkillCard from '../components/SkillCard.jsx'
import {
  homeImages,
  homeIntroduction,
  technicalSkills,
  transferableSkills,
} from '../data/homeData.js'

function SkillSection({ eyebrow, heading, image, imageFirst = false, skills }) {
  return (
    <section className={`home-section home-section--skills${imageFirst ? ' home-section--image-first' : ''}`} aria-labelledby={`${heading.toLowerCase().replaceAll(' ', '-')}-heading`}>
      <div className="home-section__content">
        <p className="page-panel__eyebrow">{eyebrow}</p>
        <h2 id={`${heading.toLowerCase().replaceAll(' ', '-')}-heading`}>{heading}</h2>
        <ul className="skill-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </ul>
      </div>
      <img alt={image.alt} className="home-section__image" height="1024" loading="lazy" src={image.src} width="1536" />
    </section>
  )
}

/** Introduces Teah's cross-disciplinary approach and supporting strengths. */
function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="view-heading">
        <div className="home-hero__content">
          <p className="page-panel__eyebrow">Hello, I'm</p>
          <h1 id="view-heading" tabIndex="-1">{homeIntroduction.name}</h1>
          <p className="home-hero__tagline">{homeIntroduction.tagline}</p>
          <p className="page-panel__lead">{homeIntroduction.summary}</p>
        </div>
        <img alt={homeImages.problemSolving.alt} className="home-hero__image" height="1024" src={homeImages.problemSolving.src} width="1536" />
      </section>

      <SkillSection eyebrow="How I build" heading="Technical skills" image={homeImages.connectedStrengths} skills={technicalSkills} />
      <SkillSection eyebrow="How I work" heading="Transferable strengths" image={homeImages.problemSolving} imageFirst skills={transferableSkills} />
    </div>
  )
}

export default HomePage
