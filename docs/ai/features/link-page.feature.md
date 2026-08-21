# Feature Specification - Links Page

> Use this specification together with `docs/ai/ai-spec.md`. The Module 16 rubric remains the grading authority.

## 1. Goal

Create a clear resource page with at least three verified external links that help visitors review Teah Banks's professional work, background, and training.

## 2. Scope

### In scope

- GitHub, LinkedIn, and CodeBoxx Academy resource cards.
- A meaningful image, title, description, and verified external URL for each card.
- Safe new-tab behavior, accessible names, responsive layouts, and identical content in all presentation modes.

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
- [ ] At least three verified resource cards include an image, title, description, and external URL.
- [ ] New-tab behavior is visible, announced, and uses safe link attributes.
- [ ] Simple, Corporate, and Dramatic modes present identical content and functionality.
- [ ] Heading, list, image-alternative, focus, and reduced-motion behavior are verified.
- [ ] Desktop, 768px, 320px, and 200% zoom-equivalent reflow checks pass.
- [ ] The browser console has no known errors in required flows.
- [ ] `npm run lint`, `npm run build`, and `git diff --check` pass.
