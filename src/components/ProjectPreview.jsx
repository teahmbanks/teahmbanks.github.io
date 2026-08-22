import { useState } from 'react'

/** Provides a small, truthful walkthrough of a project's real interface or API. */
function ProjectPreview({ preview, projectName }) {
  const [activeSceneId, setActiveSceneId] = useState(preview.scenes[0].id)
  const activeScene = preview.scenes.find((scene) => scene.id === activeSceneId) ?? preview.scenes[0]
  const descriptionId = `${preview.id}-preview-description`

  return (
    <section className="project-preview" aria-labelledby={`${preview.id}-preview-heading`}>
      <div className="project-preview__browser">
        <div className="project-preview__bar" aria-hidden="true">
          <span className="project-preview__dots"><i /><i /><i /></span>
          <span className="project-preview__address">{activeScene.address}</span>
        </div>

        <div className="project-preview__viewport" aria-describedby={descriptionId}>
          {activeScene.image ? (
            <img
              alt={activeScene.alt}
              height="760"
              loading="lazy"
              src={activeScene.image}
              width="1200"
            />
          ) : (
            <div className="project-preview__api">
              <div>
                <span>{activeScene.method}</span>
                <code>{activeScene.endpoint}</code>
              </div>
              <pre aria-label={`${activeScene.label} sample response`}>
                {JSON.stringify(activeScene.response, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>

      <div className="project-preview__details">
        <div>
          <p className="page-panel__eyebrow">Interactive sample</p>
          <h4 id={`${preview.id}-preview-heading`}>Look inside {projectName}</h4>
        </div>
        <div className="project-preview__controls" role="group" aria-label={`${projectName} preview scenes`}>
          {preview.scenes.map((scene) => (
            <button
              aria-pressed={scene.id === activeScene.id}
              key={scene.id}
              onClick={() => setActiveSceneId(scene.id)}
              type="button"
            >
              {scene.label}
            </button>
          ))}
        </div>
        <p aria-live="polite" id={descriptionId}>{activeScene.caption}</p>
      </div>
    </section>
  )
}

export default ProjectPreview
