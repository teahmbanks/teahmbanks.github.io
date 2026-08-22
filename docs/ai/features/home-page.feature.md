# Feature Specification - Home Page

> Use this specification together with `docs/ai/ai-spec.md`. The Module 16 rubric remains the grading authority.

## 1. Feature Goal

Replace the temporary Home placeholder with a clear, responsive introduction to Teah Banks and an evidence-based overview of technical and transferable skills. The page should immediately communicate adaptive problem-solving across software development, education, and stage management in the focused Dramatic presentation.

## 2. Scope

### In scope

- Home content rendered directly at the root application experience.
- A prominent name, professional role or tagline, and concise introductory paragraph.
- At least three technical skills with meaningful icons and supporting explanations.
- At least three soft skills or talents with meaningful icons and supporting explanations.
- Clear visual separation between introduction, technical skills, and transferable skills.
- Two relevant AI-generated images with accurate alternative text and generation documentation.
- Structured content data shared across the Home experience.
- Responsive, keyboard-readable, reduced-motion-safe presentation.

### Out of scope

- Detailed project case studies, education timeline, work history, and resume download.
- Contact form, LinkedIn call to action, authentication, or Supabase behavior.
- Additional presentation modes.
- Unverified biography claims, dates, metrics, employers, credentials, or technologies.
- Optional dark mode, multilingual support, or new runtime dependencies.

## 3. Requirements Breakdown

### Root and introduction

- `HomePage` is the default content view after a visitor chooses a presentation mode.
- Public navigation remains at `/`; selecting Home must not add a route path.
- Display `Teah Banks` prominently in the page-level heading.
- Display a short role or tagline connecting software development, education, and adaptive problem-solving.
- Include a brief introduction written in a warm, direct, professional voice.
- Do not use generic claims unless the surrounding text provides concrete support.

### Technical skills

- Render at least three technical skills from one structured data collection.
- Each skill includes a title, a short explanation, and an icon with an accessible name or equivalent text association.
- Initial content may cover verified portfolio technologies such as React, JavaScript, and full-stack/API work; final wording must remain consistent with supplied project evidence.
- Present the collection as a responsive card grid or equally clear semantic list.

### Soft skills and talents

- Render at least three transferable skills from one structured data collection.
- Each item includes a title, a concrete explanation, and a meaningful icon.
- Content should connect problem-solving, communication, adaptability, teaching, and stage-management experience without inventing outcomes or metrics.
- Present the collection separately from technical skills while using the same accessible card pattern where practical.

### Images

- Include at least two AI-generated images relevant to the portfolio's adaptive problem-solving theme.
- Images must support the content rather than act as false project evidence.
- Every meaningful image has concise, purpose-based alternative text and reserved dimensions.
- Record the image-generation tool, date, prompt purpose, and usage in `RESEARCH.md` and this feature specification.

## 4. User Flow

1. A visitor opens the root URL.
2. The visitor enters Home directly in Dramatic mode.
3. The introduction establishes Teah Banks's professional identity and problem-solving focus.
4. The visitor reviews technical skills and their supporting explanations.
5. The visitor reviews transferable skills grounded in development, education, and stage management.
6. The visitor may use the shared navigation to continue through the Dramatic experience.

## 5. Interfaces Involved

### Components and pages

- `src/pages/HomePage.jsx`
- `src/components/SkillCard.jsx`
- `src/components/SkillIcon.jsx`
- `src/App.jsx`

### Data and styles

- `src/data/homeData.js`
- `src/styles/global.css`
- `public/images/home/`
- `RESEARCH.md`

### External interfaces

- No API or database interface is required.
- AI-generated image files are committed as optimized local assets.

## 6. Data and Validation

### Introduction data

- `name`: verified display name.
- `tagline`: concise professional positioning without unsupported claims.
- `summary`: one short paragraph using verified background information.

### Skill item shape

Each technical or transferable skill contains:

- `id`: stable unique identifier.
- `title`: short visible skill name.
- `description`: one or two sentences explaining application or value.
- `icon`: supported internal icon identifier.

### Validation rules

- Require at least three items in each skill category.
- Do not render an item with a missing title or description.
- Icon identifiers must map to a supported icon; use a safe fallback without crashing.
- Content arrays and image metadata are defined once and reused throughout Home.

## 7. Expected and Failure Behavior

### Expected behavior

- Home displays one logical `h1` and at least three visually distinct sections.
- Both skill groups display at least three complete, understandable entries.
- Both required images load with reserved dimensions and appropriate alternative text.
- Dramatic styling does not change the facts, order, or functionality.
- The page remains usable at the root URL and integrates with shared focus management.

### Failure behavior

- If an image fails, its alternative text still communicates its purpose and the surrounding content remains readable.
- An unknown skill icon uses a neutral fallback without removing the skill text.
- Missing optional decorative effects never hide or delay content.
- The page must not crash if motion, local storage, or decorative assets are unavailable.

## 8. Accessibility and Responsive Rules

- Use semantic `section` elements with labelled headings.
- Maintain one page-level `h1` followed by a logical heading hierarchy.
- Do not rely on icons or color alone to communicate a skill.
- Meaningful images use useful `alt` text; decorative elements use empty alternative text or CSS.
- Keep text readable at 320px, 200% zoom, and enlarged-text settings without horizontal scrolling.
- Stack cards and media vertically on narrow viewports; enhance to columns only when space permits.
- Keep all text contrast at WCAG AA-oriented levels in Dramatic mode.
- Respect `prefers-reduced-motion`; no animation may block reading or interaction.

## 9. AI Image Record

- Date: August 21, 2026.
- Tool: OpenAI built-in image generator.
- `problem-solving-path.jpg`: an editorial metaphor showing books, modular code-like forms, connected ideas, and branching paths resolving into a clear route.
- `connected-strengths.jpg`: an editorial metaphor connecting a theater stage, open book, discussion forms, and modular technology through one coordinated system.
- Constraints: no people, text, logos, credentials, employer marks, fabricated project interfaces, watermarks, or false documentary evidence.
- Usage and alternative text are centralized in `src/data/homeData.js`; prompt purposes and final paths are also recorded in `RESEARCH.md`.

## 10. Acceptance Criteria

- [x] Work is performed on `feature/home-page`, created from synchronized `dev`.
- [x] The global specification and this feature specification were reviewed before implementation.
- [x] Home is directly available in the root application experience without adding a public route path.
- [x] The introduction prominently displays the student's name, role or tagline, and brief supporting paragraph.
- [x] At least three technical skills include supporting text and meaningful icons.
- [x] At least three soft skills or talents include supporting text and meaningful icons.
- [x] Introduction, technical skills, and transferable skills are clearly separated visual sections.
- [x] At least two relevant AI-generated images are present, accessible, optimized, and documented.
- [x] Dramatic mode presents the complete content and functionality.
- [x] Keyboard, focus, heading, image-alternative, and reduced-motion behavior are verified.
- [x] Desktop, 768px, 320px, and 200% zoom-equivalent reflow checks pass without horizontal overflow.
- [x] Browser console has no known errors in required flows.
- [x] `npm run lint`, `npm run build`, and `git diff --check` pass.
