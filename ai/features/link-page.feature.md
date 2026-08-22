# Feature Specification - Links Page

> Use this specification together with `ai/ai-spec.md`. The Module 16 rubric remains the grading authority.

## 1. Feature Goal

Create a clear resource page with at least three verified external links that help visitors review Teah Banks's professional work, background, and training.

## 2. Scope

### In scope

- GitHub, LinkedIn, and CodeBoxx Academy resource cards.
- An image, title, description, and verified HTTPS URL for each card.
- Safe new-tab behavior, accessible names, and responsive Dramatic layouts.

### Out of scope

- Unverified profiles, affiliate links, analytics, feeds, embedded third-party content, or fabricated resources.

## 3. Requirements Breakdown

- Render at least three resources as structured cards.
- Give each card an image, title, one-to-three-sentence description, and clickable URL.
- Open external links in a new tab with safe relationship attributes.
- Identify new-tab behavior visually and to assistive technology.
- Reuse documented AI-generated editorial artwork without presenting it as external-site evidence.

## 4. User Flow

1. The visitor opens Links from public navigation.
2. The visitor reviews the resource cards and their descriptions.
3. The visitor activates a resource link.
4. The external resource opens in a new tab while the portfolio remains available.

## 5. Interfaces Involved

### Pages and data

- `src/pages/LinksPage.jsx`
- `src/data/linksData.js`
- `src/styles/global.css`

### External interfaces

- GitHub profile
- LinkedIn profile
- CodeBoxx Academy website

## 6. Data and Validation

Each resource contains a stable `id`, title, description, HTTPS `href`, and image object with `src` and `alt` values.

- Reject missing or non-HTTPS URLs during content review.
- Require non-empty titles, descriptions, image paths, and meaningful alternative text.
- Verify external destinations before release.

## 7. Expected, Failure, and Empty Behavior

### Expected behavior

- Three complete cards render in a logical list, and each link opens its verified destination in a new tab.

### Failure behavior

- A failed image preserves its alternative text and does not collapse the card.
- A temporarily unavailable external site does not break portfolio navigation.

### Empty state

- An empty resource collection is not release-ready; the page requires at least three complete resources.

## 8. Accessibility and Responsive Behavior

- Use one page-level heading, a labelled resource section, a list, and article headings.
- Reserve image dimensions and provide purpose-based alternative text.
- Keep every link keyboard operable with visible focus.
- Cards stack without horizontal overflow at 768px, 320px, and 200% zoom-equivalent widths.
- Respect global reduced-motion behavior.

## 9. AI Image Record

- Reuse the documented OpenAI-generated images under `public/images/home/` and `public/images/portfolio/`.
- Treat the images as thematic illustrations, not proof of external organizations, credentials, or completed project behavior.

## 10. Acceptance Criteria

- [x] Work begins on `feature/links-page` from synchronized `dev`.
- [x] The global and feature specifications are reviewed before implementation.
- [x] At least three verified resource cards include an image, title, description, and external URL.
- [x] New-tab behavior is visible, announced, and uses safe relationship attributes.
- [x] Dramatic mode presents the complete content and functionality.
- [x] Heading, list, image-alternative, focus, and reduced-motion behavior are verified.
- [x] Desktop, 768px, 320px, and 200% zoom-equivalent reflow checks pass.
- [x] The browser console has no known errors in required flows.
- [x] `npm run lint`, `npm run build`, and `git diff --check` pass.

## 11. Verification Record

- Date: August 21, 2026.
- Dramatic presentation rendered three resource cards with meaningful image alternatives and safe external links.
- All URLs use HTTPS, open in a new tab, include safe relationship attributes, and announce the new tab.
- Checks at 1280px, 768px, 640px, and 320px showed no horizontal overflow.
