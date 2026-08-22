# Feature Specification - Portfolio Page

> Use this specification together with `docs/ai/ai-spec.md`. The Module 16 rubric remains the grading authority.

## 1. Feature Goal

Create a recruiter-friendly portfolio and resume experience that presents verified education, work history, and projects. Project entries should foreground Teah Banks's problem-solving process in the focused Dramatic presentation.

## 2. Scope

### In scope

- Education, work experience, and project sections.
- At least one complete verified entry in each required section.
- Project case studies organized around problem, investigation, obstacles, decision, implementation, verification, and lesson learned.
- A downloadable final resume PDF.
- At least two documented AI-generated images that complement the resume content without acting as evidence.
- Structured data, accessible semantics, responsive layouts, and explicit empty/fallback behavior.

### Out of scope

- Invented institutions, programs, employers, dates, responsibilities, achievements, technologies, or project results.
- Contact submission, authentication, Back Office behavior, or external API calls.
- A CMS, résumé editor, filtering system, or additional presentation modes.
- Optional dark mode or multilingual features.

## 3. Requirements Breakdown

### Education

- List at least one verified institution.
- Each entry includes institution, degree or program, and dates.
- Sort entries by end/start date in reverse chronological order.

### Work experience

- List at least one verified position.
- Each entry includes role, organization, dates, and a responsibility- or achievement-based description.
- Sort entries in reverse chronological order.

### Projects

- List at least one verified artistic, application, website, video, or related project.
- Each entry includes project name, technologies or medium, purpose, description, and image.
- When verified information is available, describe the problem-solving sequence: problem, investigation, obstacle, decision, implementation, verification, and lesson.
- Do not use AI-generated art as a screenshot or proof of completed project behavior.

### Resume and imagery

- Provide a clearly labelled link to the final PDF stored under `public/resume/`.
- Use the HTML `download` attribute while preserving normal link behavior.
- Integrate at least two relevant AI-generated images with reserved dimensions and appropriate alternative text.
- Document the tool, date, prompt purpose, final paths, and usage in `RESEARCH.md` and this specification.

## 4. User Flow

1. A visitor selects Featured Projects from shared navigation without leaving `/`.
2. The page introduces the portfolio owner's cross-disciplinary experience.
3. The visitor reviews projects, education, and work history in clearly separated sections.
4. The visitor can understand each project's purpose and the reasoning used to address its problem.
5. The visitor downloads or opens the final resume PDF.

## 5. Interfaces Involved

- `src/pages/PortfolioPage.jsx`
- `src/components/ExperienceEntry.jsx`
- `src/components/ProjectCaseStudy.jsx`
- `src/data/portfolioData.js`
- `src/styles/global.css`
- `public/images/portfolio/`
- `public/resume/`
- `RESEARCH.md`

No database or API interface is required.

## 6. Data and Validation

### Education entry

- `id`, `institution`, `program`, `startDate`, `endDate`, and optional `details`.

### Work entry

- `id`, `role`, `organization`, `startDate`, `endDate`, and `description`.

### Project entry

- `id`, `name`, `technologies`, `purpose`, `description`, `image`, and optional case-study stages.

### Validation rules

- Required strings must be non-empty and based on user-supplied or repository-supported facts.
- Dates use one consistent display format and sort from newest to oldest.
- Technology lists contain only tools supported by the project or user-provided evidence.
- Missing required personal content remains an explicit placeholder and blocks completion; it is never silently invented.
- Invalid image or resume paths must not crash the page.

## 7. Expected and Failure Behavior

- All three required content sections render with logical headings and visual separation.
- The same structured content appears throughout the Dramatic experience.
- Broken images preserve useful alternative text and do not collapse surrounding content.
- If the final resume is unavailable, show a clear unavailable status rather than a broken download.
- Empty content collections show an honest temporary message during development and block the acceptance criterion.

## 8. Accessibility and Responsive Rules

- Use one page-level `h1`, labelled sections, lists, articles, and a logical heading hierarchy.
- Project images have purpose-based alternative text; decorative imagery uses empty alternative text.
- Do not rely on timelines, icons, color, or visual position alone to communicate chronology.
- Resume access is keyboard operable and clearly identifies a PDF download.
- Cards and timelines stack at 768px and below with no horizontal scrolling at 320px or 200% zoom.
- Respect reduced motion and retain visible focus throughout the Dramatic presentation.

## 9. AI Image Record

- Status: generated and integrated on August 21, 2026.
- Tool: OpenAI built-in image generator.
- Outputs: `public/images/portfolio/problem-solving-journey.webp` and `public/images/portfolio/cross-disciplinary-work.webp`.
- Prompt purpose: illustrate a thoughtful problem-solving journey and the connection between development, education, and backstage coordination.
- Constraints: no people, readable text, institutional or employer marks, credentials, fabricated interfaces, false project screenshots, awards, or watermarks.
- Usage and alternative text are recorded in `src/data/portfolioData.js` and `RESEARCH.md`.

## 10. Verification Record

- Date: August 21, 2026.
- Dramatic presentation: three project case studies, four experience/education entries, meaningful image alternatives, repository links, and PDF download are rendered.
- Responsive reflow: 1280px, 768px, 640px (200%-zoom equivalent), and 320px browser checks had matching viewport and document widths with all project and experience cards inside the viewport.
- Accessibility contracts: one page-level heading, logical section and card headings, meaningful image alternatives, a native PDF download link, visible focus styling, and reduced-motion overrides are present.
- Resume: the public PDF URL returned HTTP 200 with `application/pdf`.
- Browser console: no errors were captured in the required Featured Projects flow.
- Code quality: `npm run lint`, `npm run build`, and `git diff --check` passed after implementation.

## 11. Acceptance Criteria

- [x] Work is performed on `feature/portfolio-page`, created from synchronized `dev`.
- [x] The global specification and this feature specification were reviewed before implementation.
- [x] Education includes at least one verified institution, program, and date in reverse chronological order.
- [x] Work experience includes at least one verified role, organization, dates, and responsibility or achievement description in reverse chronological order.
- [x] Projects include at least one verified name, technology or medium, purpose, description, and image.
- [x] Project content explains problem-solving decisions where supporting facts are available.
- [x] A final resume PDF is available through a working, clearly labelled download.
- [x] Education, work, and projects appear as three distinct visual sections.
- [x] At least two relevant AI-generated images are present, accessible, optimized, and documented.
- [x] The Dramatic presentation contains the complete project facts and functionality.
- [x] Keyboard, focus, heading, image-alternative, reduced-motion, and PDF-link behavior are verified.
- [x] Desktop, 768px, 320px, and 200% zoom-equivalent reflow checks pass without horizontal overflow.
- [x] Browser console has no known errors in required flows.
- [x] `npm run lint`, `npm run build`, and `git diff --check` pass.
