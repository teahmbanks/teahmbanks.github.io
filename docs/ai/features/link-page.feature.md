# Feature Specification - Links Page

> Use this specification together with `docs/ai/ai-spec.md`. The Module 16 rubric remains the grading authority.

## 1. Goal

Create a clear resource page with at least three verified external links that help visitors review Teah Banks's professional work, background, and training.

## 2. Scope

### In scope

- GitHub, LinkedIn, and CodeBoxx Academy resource cards.
- A meaningful image, title, description, and verified external URL for each card.
- Safe new-tab behavior, accessible names, and responsive Dramatic layouts.

### Out of scope

- Unverified social profiles, affiliate links, fabricated resources, link analytics, feeds, or embedded third-party content.

## 3. Data and behavior

- Store card content in `src/data/linksData.js`.
- Every URL must use HTTPS and be verified before implementation.
- External links open in a new tab with `rel="noreferrer"` and visibly identify that behavior.
- A broken image must preserve useful alternative text without collapsing the card.

## 4. Accessibility and responsive behavior

- Use one page-level heading, a labelled resource section, a list, and article headings.
- Images require purpose-based alternative text and reserved dimensions.
- Links must remain keyboard operable with visible focus.
- Cards stack without horizontal overflow at 768px, 320px, and 200% zoom-equivalent widths.
- Reduced-motion preferences remain respected by the global interface.

## 5. AI image record

- Reuse the documented OpenAI-generated editorial images already stored under `public/images/home/` and `public/images/portfolio/`.
- Images are thematic illustrations, not evidence of external organizations, credentials, or completed project behavior.

## 6. Acceptance criteria

- [x] Work begins on `feature/links-page` from synchronized `dev`.
- [x] The global and feature specifications are reviewed before implementation.
- [x] At least three verified resource cards include an image, title, description, and external URL.
- [x] New-tab behavior is visible, announced, and uses safe link attributes.
- [x] Dramatic mode presents the complete content and functionality.
- [x] Heading, list, image-alternative, focus, and reduced-motion behavior are verified.
- [x] Desktop, 768px, 320px, and 200% zoom-equivalent reflow checks pass.
- [x] The browser console has no known errors in required flows.
- [x] `npm run lint`, `npm run build`, and `git diff --check` pass.

## 7. Verification record

- Date: August 21, 2026.
- Presentation parity: every mode rendered three matching resource cards with meaningful image alternatives and safe external links.
- Link contract: all resource URLs use HTTPS, open in a new tab, include `noreferrer`, visibly show an external-link arrow, and announce the new tab to assistive technology.
- Responsive reflow: 1280px, 768px, 640px (200%-zoom equivalent), and 320px checks had matching viewport and document widths with cards and the page heading inside the viewport.
- Browser console: no errors were captured in the Links flow.
- Code quality: `npm run lint`, `npm run build`, and `git diff --check` passed after implementation.
