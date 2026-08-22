# Global AI Specification - Accessible to All Portfolio

> **Read this document first.** Every implementation task and every feature specification must follow this global specification. If a feature specification conflicts with this document, stop and resolve the conflict before coding. If this document conflicts with the Module 16 Requirement Checklist, the checklist takes precedence.

## 1. Project Identity

### Working title

**Accessible to All** - a personal professional portfolio.

### Product statement

Build a public, responsive personal portfolio with one focused **Dramatic** presentation that supports the portfolio owner's professional story without placing a style-selection step between the visitor and the content.

The experience should communicate that the portfolio owner is a developer, educator, stage manager, and naturally adaptive problem-solver who meets people where they are. The site may be expressive, but it must never make a visitor work harder to understand or use it.

### Primary audiences

- Recruiters and hiring managers evaluating development skills and experience.
- Technical interviewers reviewing projects and implementation choices.
- Professional contacts seeking the portfolio owner's resume, LinkedIn profile, or contact form.
- Visitors with different visual, cognitive, motor, and device-access needs.

### Brand promise

**A dramatic portfolio built around thoughtful problem-solving.**

### Core principles

1. **Accessible by default:** semantic structure, keyboard access, readable content, visible focus, clear feedback, and sufficient contrast are baseline requirements.
2. **Direct access:** visitors enter the Home experience immediately without a presentation-selection gate.
3. **Personal but professional:** theater, education, stage management, and software development should form one coherent career story.
4. **Progressive enhancement:** essential content remains readable and usable if animations, decorative images, or Supabase are unavailable.
5. **Evidence over invention:** do not fabricate biography details, job dates, education, project outcomes, links, metrics, testimonials, or skills. Use clearly labeled placeholders until the portfolio owner supplies verified content.

## 2. Scope

### In scope

- A React application scaffolded with Vite and written in JavaScript.
- A single-page public portfolio hosted at `https://username.github.io`.
- Public navigation in this exact order:
  1. Home
  2. Featured Projects
  3. Skills and Experience
  4. About Me
  5. Contact
  6. Links
- An introduction containing the portfolio owner's name, role/title or tagline, and a short professional summary.
- Technical skills and soft skills/talents, each with supporting text and meaningful icons.
- Education, work experience, project experience, and a downloadable resume PDF.
- Featured project case studies for StageSpace, CodeBloggs, and Rocket Food Delivery.
- A contact form that stores messages in Supabase.
- A secret Supabase-authenticated login view and protected Back Office for reading and deleting messages.
- An AI-generated personal logo and the required AI-generated imagery, all documented and supplied with appropriate alternative text.
- Responsive desktop and mobile layouts.
- Automated GitHub Pages deployment through GitHub Actions.
- Repository documentation and required Module 16 deliverables.

### Out of scope

- A custom backend, Express server, Spring Boot service, server-side rendering, or server-managed sessions.
- Public account registration, visitor accounts, password reset, or multiple admin roles.
- Public access to stored messages.
- A CMS, blog, e-commerce, analytics tracking, or newsletter system unless later approved as a separately scoped enhancement.
- Additional presentation modes until the Dramatic experience and required features are complete and reviewed.
- Unapproved languages, frameworks, or major libraries introduced only for visual effects.
- The optional light/dark mode and multilingual extra miles until all required features are complete and reviewed.

## 3. Source-of-Truth Order

Use the following priority when instructions conflict:

1. Module 16 Requirement Checklist / rubric.
2. Module 16 Business Document.
3. This global AI specification.
4. The applicable feature specification in `ai/features/`.
5. Module 16 instructional material.
6. Personal branding notes and later approved content decisions.

Do not silently choose between conflicting requirements. Record the conflict and follow the higher-priority source.

## 4. Required Feature Specifications

The global spec must be used together with these eight feature documents before implementation:

- `ai/features/setup-deploy.feature.md`
- `ai/features/header-footer.feature.md`
- `ai/features/home-page.feature.md`
- `ai/features/portfolio-page.feature.md`
- `ai/features/link-page.feature.md`
- `ai/features/contact-page.feature.md`
- `ai/features/login-page.feature.md`
- `ai/features/back-office.feature.md`

Each feature document must define its goal; in-scope and out-of-scope behavior; requirements and user flow; pages, components, and external interfaces; data and validation; expected behavior; accessibility considerations; responsive behavior; failure and empty states; and testable acceptance criteria.

## 5. Experience Architecture

### Public navigation model

The public experience remains at the root URL. It behaves like a single-page portfolio with view or section state rather than separate public route paths. Selecting a navigation item changes the visible view or scroll target without adding `/home`, `/portfolio`, or similar paths to the public URL.

The browser Back button must behave predictably if history state is used. Refreshing the root URL must always render a valid public experience.

### Dramatic presentation

- Apply `dramatic` to the root `data-presentation-mode` attribute on every public and private view.
- Do not render a presentation selector or store presentation choice in local storage.
- Theater-inspired composition, stronger visual rhythm, layered depth, and purposeful motion.
- Animation must respect `prefers-reduced-motion`, never delay access to content, and never be required to understand or navigate the page.
- Decorative effects must not reduce contrast, keyboard usability, performance, or mobile readability.

### Public content mapping

- **Featured Projects:** education, work experience, project portfolio, project interactions, project images, and downloadable resume.
- **Skills and Experience:** at least three technical skills and at least three soft skills/talents, with icons and explanatory text; include experience from software development, education, and stage management.
- **About Me:** the portfolio owner's journey through theater and education and the motivation for entering programming.
- **Contact:** LinkedIn access plus the Supabase-backed message form.
- **Links:** at least three useful resource cards with image, title, short description, and external URL.

The root/home experience must satisfy the rubric's Home page requirements. The introduction, technical-skills, and soft-skills sections must be directly available at the root experience.

### Secret administrative views

The login and Back Office must not appear in the desktop header, mobile navigation, footer, sitemap-like content, or public calls to action. They may use static-host-compatible secret locations such as hash routes (for example, `/#/login` and `/#/backoffice`) or an approved secret keyboard interaction. The exact mechanism must be defined in the login feature specification and work after a direct load on GitHub Pages.

## 6. Visual and Content System

### Color palette

Use the personal-brand palette as candidate design tokens:

- Deep teal: `#006469`
- Primary teal: `#069494`
- Pale teal: `#A1D7D6`
- Mist: `#E0F2F1`
- Blush: `#F5DCD3`
- Olive: `#929965`
- Gold: `#E2B129`
- Soft green-gray: `#D8E9E1`

The branding notes also contain `#f79cd7d`, which is not a valid six- or eight-digit hexadecimal color. Do not use it until the portfolio owner confirms the intended value.

Not every color must appear in every path. Assign colors through semantic CSS variables such as `--color-background`, `--color-surface`, `--color-text`, `--color-accent`, `--color-focus`, `--color-success`, and `--color-error`. Verify all text and interactive-state combinations for sufficient contrast.

### Dragonfly motif

- Use a dragonfly as the recurring visual motif and basis for the personal logo.
- The final logo should be inspired by the portfolio owner's hand-painted dragonfly reference, not presented as an exact reproduction unless the source image is available and its use is approved.
- Keep the motif intentional: logo, subtle dividers, project accents, or transition details rather than repetitive decoration.
- Decorative dragonflies use empty alternative text; meaningful images receive concise, purpose-based alternative text.
- Preserve logo clarity at small header and mobile-navigation sizes.

### Typography and voice

- Choose readable web-safe or properly licensed web fonts with robust fallbacks.
- Body copy must remain comfortably readable at 200% zoom and on narrow screens.
- Voice should be warm, capable, adaptive, direct, and human.
- Use plain language and short, concrete explanations. Avoid generic claims such as "passionate developer" unless supported by specific examples.
- Keep the Dramatic presentation readable, responsive, and accessible.

### Required imagery

- Header: at least one AI-generated personal logo.
- Root/Home experience: at least two relevant AI-generated images.
- Portfolio/Featured Projects: at least two AI-generated images.
- Links: at least one AI-generated image.
- Every meaningful image needs appropriate `alt` text; dimensions should be reserved to limit layout shift.
- Document the AI tool, prompt purpose, date, and output usage in `RESEARCH.md`, the applicable feature spec, or clear source comments.
- Do not use generated imagery as false evidence of a completed project, employer, award, credential, or accepted coding result.

## 7. Technical Architecture

### Approved stack

- React with Vite.
- JavaScript using modern ES modules.
- HTML5 and custom CSS with CSS custom properties.
- React Router only where needed for the secret login and protected Back Office; public navigation should preserve the root URL.
- Supabase JavaScript client for database access and authentication.
- GitHub Pages for static hosting.
- GitHub Actions for CI/CD.
- A small, justified icon library is allowed if it supports accessibility and does not replace understanding of core React/CSS work.

Prefer technologies the portfolio owner has already learned. Any new runtime dependency requires a clear feature need, a short rationale, and approval before installation.

### Prohibited architecture

- No custom backend server.
- No server-side rendering.
- No service-role or secret Supabase key in browser code, repository files, logs, screenshots, or documentation.
- No hard-coded private credentials in source code.
- No public `SELECT` policy for messages.
- No direct commits to `main`.

### Recommended repository structure

```text
username.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── ai/
│   │   ├── ai-spec.md
│   │   └── features/
│   │       ├── setup-deploy.feature.md
│   │       ├── header-footer.feature.md
│   │       ├── home-page.feature.md
│   │       ├── portfolio-page.feature.md
│   │       ├── link-page.feature.md
│   │       ├── contact-page.feature.md
│   │       ├── login-page.feature.md
│   │       └── back-office.feature.md
│   ├── script-1.md
│   ├── script-2.md
│   └── pitch-feedback.md
├── LeetCode-Challenges/
├── public/
│   ├── images/
│   └── resume/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   │   └── supabaseClient.js
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── CONCEPTS.md
├── README.md
├── RESEARCH.md
├── index.html
├── package.json
└── vite.config.js
```

Structure code by responsibility. Reusable navigation, cards, form controls, feedback, and modal behavior belong in focused components or hooks. Static portfolio content should live in structured data modules.

### State boundaries

- Keep the Dramatic presentation centralized through the root data attribute and shared CSS tokens.
- Keep public active-section state separate from authentication state.
- Treat the Supabase session as the authority for Back Office access.
- Do not store admin passwords, message data, or sensitive session details manually in local storage.
- UI state such as selected message/modal visibility should remain local to the Back Office feature.

## 8. Supabase Contract and Security

### Client configuration

- Configure the client in `src/lib/supabaseClient.js`.
- Read only `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from `import.meta.env`.
- Include `.env` in `.gitignore` and provide placeholder names only in `.env.example`.
- GitHub Actions must inject the two `VITE_*` values from repository secrets during the build.
- Provide a safe, user-readable fallback when Supabase is not configured; the rest of the public portfolio must continue to render.

### Messages data model

Use a Supabase table named `messages`, as required by the checklist. Minimum fields:

- `id`: generated primary key.
- `name`: required text.
- `email`: required text.
- `message`: required text.
- `created_at`: server-generated timestamp.

The contact payload includes only `name`, `email`, and `message`. Do not trust client-supplied IDs or timestamps.

### Row Level Security

- Enable RLS on `messages`.
- Anonymous visitors may insert valid messages.
- Anonymous visitors may not select, update, or delete messages.
- Authenticated admin access must be limited to the operations required by the Back Office.
- Never expose the `service_role` key.
- SQL policies and setup instructions must be documented without including secret values.

### Authentication

- Use Supabase email/password authentication and `signInWithPassword`.
- The required admin account is created manually in the Supabase dashboard; the app must not create it.
- Do not print or commit the required password. Refer implementers to the protected course requirement or secure handoff for credential setup.
- Persist and restore valid Supabase sessions through the Supabase client.
- Unauthenticated Back Office access redirects to the secret login view.
- Logout calls `supabase.auth.signOut()`, clears protected UI state, and redirects to Home or Login.

## 9. Responsive and Accessibility Rules

### Responsive behavior

- Desktop widths above 768px use a sticky or fixed top header with horizontal navigation.
- At 768px and below, main navigation becomes icon-based and appears at the bottom of the viewport.
- Mobile navigation must include visible text labels or equivalent accessible names; icons alone are not sufficient for understanding.
- Account for safe-area insets and reserve page padding so bottom navigation does not cover content.
- Logo, images, cards, tables, modals, and text must never cause horizontal scrolling.
- Sections stack cleanly on narrow screens.

### Accessibility baseline

- Target WCAG 2.2 AA practices for all required features.
- Use semantic landmarks: `header`, `nav`, `main`, `section`, and `footer`.
- Provide one logical `h1` per rendered view and a consistent heading hierarchy.
- All functionality must work by keyboard; no keyboard traps.
- Provide a visible skip link and highly visible focus indicators.
- Associate every form field with a visible label and connect errors with `aria-describedby` where appropriate.
- Announce asynchronous success and failure feedback accessibly without stealing focus unnecessarily.
- Modals must have an accessible name, move focus inside on open, contain focus while open, close on Escape and outside click, and return focus to the trigger.
- Respect `prefers-reduced-motion`; avoid flashing, forced parallax, and auto-playing audio/video.
- Do not rely on color alone for validation, mode, or status.
- Preserve usable content at 200% zoom and with enlarged text.
- External links that open a new tab must communicate that behavior and use `rel="noopener noreferrer"`.

## 10. Coding Standards

### General conventions

- Use functional React components and hooks.
- Components use `PascalCase`; functions, variables, and hooks use `camelCase`; custom hooks begin with `use`.
- Use descriptive names and keep components focused on one clear responsibility.
- Use named constants for storage keys, navigation definitions, validation limits, and repeated configuration.
- Avoid duplicated content and duplicated mode-specific markup.
- Do not mutate React state directly.
- Keep side effects in `useEffect` or explicit event/service functions with correct dependencies and cleanup.
- Handle loading, success, empty, validation, and failure states explicitly.
- Remove debug logging and dead code before merging.

### Documentation comments

- Add succinct professional comments for files, major components, important methods, and non-obvious logic.
- Explain why presentation-state, authentication, routing, accessibility, or Supabase decisions exist.
- Do not narrate obvious line-by-line behavior.

### CSS conventions

- Use semantic design tokens and mode classes/data attributes.
- Build mobile-first styles, then enhance above documented breakpoints.
- Avoid `!important` except for a documented accessibility or integration need.
- Do not encode essential information in pseudo-elements or background images.
- Keep animations transform/opacity-based when possible and disable or simplify them for reduced motion.

### Content and privacy

- Keep portfolio content in centralized structured data when practical.
- Use privacy-safe fictional placeholder data during development.
- Do not commit personal addresses, private phone numbers, private messages, credentials, tokens, or unapproved personal details.
- Do not claim project outcomes or experience that cannot be verified.

## 11. Validation and Expected Behavior

### Contact form

- Fields: visible labeled name, email, and message controls.
- All fields are required; trim surrounding whitespace.
- Validate email format on the client.
- Define reasonable maximum lengths in the contact feature spec and align them with the database schema.
- Prevent duplicate submissions while an insert is pending.
- On success, show visually and programmatically distinct feedback, reset the form, and dismiss feedback after a few seconds or the next interaction.
- On failure, retain user input and show a clear, actionable error.

### Back Office

- Verify authentication before rendering protected message data.
- Fetch all messages ordered by `created_at` descending.
- Render Name, Email, Date, and Actions columns.
- Provide clear loading, empty, and error states.
- Open the full message in an accessible modal from a row or View control.
- Delete only after an intentional user action; after successful deletion, remove the row immediately from the rendered list.
- If deletion fails, keep or restore the row and show an error.
- Ensure the mobile experience remains usable; a responsive card/list transformation is acceptable if it preserves all required fields and actions.

### Dramatic presentation state

- Apply Dramatic mode consistently without a visitor-facing selector.
- Navigation must not reset the current contact-form draft or authentication session.
- The single presentation must pass every functional, responsive, and accessibility check.

## 12. Deployment and Repository Workflow

### Repository and branches

- Create a public repository named `username.github.io` and add all coaches as collaborators.
- `main` is production and the only graded branch.
- `dev` is the integration branch.
- Create each `feature/*` branch from `dev`, merge it back into `dev`, then merge `dev` into `main` only when stable.
- Never commit directly to `main`.
- Commit history must clearly demonstrate `feature/*` to `dev` to `main`.

### Vite and GitHub Pages

- Scaffold with `npm create vite@latest username.github.io`, React, JavaScript.
- Set `base: '/'` in `vite.config.js` for the root-level user site.
- The production workflow lives at `.github/workflows/deploy.yml` and triggers on pushes to `main`.
- The workflow runs `npm ci`, `npm run build`, and deploys `dist/` through GitHub Pages Actions.
- GitHub Pages uses GitHub Actions as its deployment source.
- Required `VITE_*` variables are passed to the build from GitHub repository secrets.
- Production verification must include direct loading of the root, secret login location, and protected-route redirect behavior.

## 13. Cross-Feature Rules

These rules apply to every feature specification and implementation:

1. The Requirement Checklist is the grading authority.
2. Public navigation order is fixed and identical on desktop and mobile.
3. Login and Back Office are never exposed through public navigation.
4. Dramatic is the only active presentation.
5. Shared content is stored once and rendered through reusable components.
6. Every async action has loading, success or empty, and failure behavior as applicable.
7. Every new interaction is keyboard operable and has an accessible name.
8. Every meaningful image has useful alternative text; decorative images are ignored by assistive technology.
9. Responsive behavior is verified above and at/below 768px.
10. No secret or private data is committed, logged, or placed in client code.
11. No feature is complete solely because it builds; acceptance criteria require behavior verification.
12. Do not implement extra miles until required work is complete and coach-reviewed.
13. User-provided content and source artwork remain authoritative; do not invent replacements silently.
14. New dependencies require justification and approval.
15. Preserve unrelated work and keep commits focused on one feature.

## 14. Global Definition of Done

The project is globally done only when all of the following are true:

### Specification and content

- This global spec and all eight required feature specs exist in the required locations and were used during implementation.
- No unresolved placeholder, invented biography, invalid color value, or undocumented requirement conflict remains.
- All public content is accurate, proofread, and consistent throughout the site.
- The downloadable resume is final and LinkedIn updates are summarized and linked in the README Author section.

### Functional behavior

- The root URL opens the Home experience directly in Dramatic mode.
- Home/root, Featured Projects, Skills and Experience, About Me, Contact, and Links satisfy their mapped rubric requirements.
- Contact form validation, Supabase insert, feedback, and fallback behavior are verified.
- Secret login, session persistence, protected Back Office, message listing, modal viewing, deletion, and logout are verified.
- All required AI-generated images and the AI-generated logo are present, documented, and accessible.

### Quality

- `npm ci` completes from a clean install.
- Linting, if configured, passes without ignored errors.
- `npm run build` completes successfully.
- There are no known console errors in required user flows.
- Keyboard-only, focus order, modal focus, screen-reader naming, contrast, reduced motion, 200% zoom, and responsive overflow checks pass.
- Required flows are manually checked on desktop and mobile-sized viewports.
- Empty, misconfigured, unauthenticated, invalid-input, and Supabase-failure states are verified.

### Delivery

- `.env` and all secrets are excluded from Git.
- The GitHub Actions workflow deploys the current `main` branch successfully to `https://username.github.io`.
- The live site is verified, not merely assumed from a successful local build.
- Feature branches are merged to `dev`, then `dev` is merged to `main`; `main` contains the final stable version.
- README, `CONCEPTS.md`, elevator-pitch documents, LeetCode screenshots, and required video links are complete.
- The submission summary is complete but remains outside the GitHub repository.
- Required coach communication, progress updates, and project review obligations are satisfied.

## 15. Implementation Guardrails for AI Assistance

When an AI assistant works on this project, it must:

1. Read this file and the relevant feature spec before inspecting or changing feature code.
2. Confirm the repository, branch, working-tree status, requested scope, and protected/unrelated files before editing.
3. State assumptions when source content is missing, and use explicit placeholders instead of invented personal facts.
4. Make the smallest coherent change that satisfies the active feature spec.
5. Never expose credentials or claim a live deployment, Supabase behavior, test result, merge, push, or video completion without direct evidence.
6. Verify changes proportionally: inspect the diff, run focused checks, run a production build when appropriate, and report manual checks that remain pending.
7. Preserve the accessible-to-all principle even when adding dramatic visuals or interaction.
8. Stop and request direction before changing project scope, technology, personal content, or the fixed navigation order.
