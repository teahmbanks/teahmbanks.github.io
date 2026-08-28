import ExperienceEntry from '../components/ExperienceEntry.jsx'
import ProjectCaseStudy from '../components/ProjectCaseStudy.jsx'
import {
  education,
  portfolioImages,
  portfolioIntroduction,
  projects,
  resume,
  workExperience,
} from '../data/portfolioData.js'

/** Shares Teah's verified projects, experience, education, and resume. */
function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero" aria-labelledby="view-heading">
        <img
          alt={portfolioImages.hero.alt}
          className="portfolio-hero__image"
          height="724"
          src={portfolioImages.hero.src}
          width="2172"
        />
        <div className="portfolio-hero__content">
          <p className="page-panel__eyebrow">{portfolioIntroduction.eyebrow}</p>
          <h1 id="view-heading" tabIndex="-1">{portfolioIntroduction.title}</h1>
          <p className="page-panel__lead">{portfolioIntroduction.summary}</p>
          <a className="resume-download" download href={resume.href}>
            {resume.label}
          </a>
        </div>
      </section>

      <section className="portfolio-section" aria-labelledby="projects-heading">
        <p className="page-panel__eyebrow">The work</p>
        <h2 id="projects-heading">Project case studies</h2>
        <div className="project-list">
          {projects.map((project) => <ProjectCaseStudy key={project.id} project={project} />)}
        </div>
      </section>

      <section className="portfolio-section" aria-labelledby="experience-heading">
        <p className="page-panel__eyebrow">Where I apply it</p>
        <h2 id="experience-heading">Professional experience</h2>
        <ol className="experience-list">
          {workExperience.map((entry) => (
            <ExperienceEntry key={entry.id} {...entry} organization={entry.organization} />
          ))}
        </ol>
      </section>

      <section className="portfolio-section" aria-labelledby="education-heading">
        <p className="page-panel__eyebrow">Foundation</p>
        <h2 id="education-heading">Education</h2>
        <ol className="experience-list">
          {education.map((entry) => (
            <ExperienceEntry
              key={entry.id}
              dates={entry.dates}
              organization={entry.institution}
              role={entry.program}
            />
          ))}
        </ol>
      </section>
    </div>
  )
}

export default PortfolioPage
