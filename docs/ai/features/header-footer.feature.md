# Feature Specification - Shared Layout, Header, Footer, and Presentation Modes

> Use this specification together with `docs/ai/ai-spec.md`. The Module 16 rubric remains the grading authority.

## 1. Feature Goal

Create the shared application frame that appears across all public portfolio views: a reusable main layout, accessible navigation, personal dragonfly logo, footer, responsive desktop/mobile behavior, and one centralized visual system supporting Simple, Corporate, and Dramatic presentation modes without duplicating content.

## 2. Scope

### In scope

- `MainLayout` wrapping all public page content between a header and footer.
- Sticky desktop header with the required public navigation order.
- Fixed mobile bottom navigation with icons and visible labels at 768px and below.
- AI-generated dragonfly logo inspired by the supplied hand-painted reference.
- Logo link to the Home/introduction view.
- Shared footer with onsite contact access, public GitHub link, and copyright notice.
- Skip link, semantic landmarks, visible focus states, current-view indication, and keyboard operation.
- Centralized Simple, Corporate, and Dramatic CSS token sets using one shared component tree.
- Locally persisted presentation choice with safe fallback behavior.
- Minimal placeholder panels that allow every navigation destination and theme to be tested before page-specific features are implemented.

### Out of scope

- Final Home, project, skills, biography, contact-form, links, login, or Back Office content.
- Supabase data behavior or authentication.
- Final AI imagery beyond the required header logo.
- Light/dark mode and multilingual extra miles.
- A separate component tree or different content for each presentation mode.

## 3. Requirements Breakdown

### Shared layout

- `MainLayout` renders the header, a single `main` landmark, page content, and footer.
- The layout reserves enough space that sticky/fixed navigation never covers content.
- A visible-on-focus skip link moves keyboard focus to the main landmark.
- The same layout and page content are used in all presentation modes.

### Navigation

The public navigation order is fixed:

1. Welcome Portal
2. Featured Projects
3. Skills and Experience
4. About Me
5. Contact
6. Links

- Navigation items behave as same-document application links and do not add `/home`, `/portfolio`, or other public route paths.
- The active destination is identified visually and with `aria-current="page"`.
- Selecting a destination updates the visible public view and moves focus to the new view heading without forcing a full-page reload.
- The secret Login and Back Office destinations never appear in the public header, footer, or mobile navigation.
- The logo has useful alternative text and navigates to the Home/introduction view.

### Header

- The header is visible at the top of every public view.
- Above 768px, it remains sticky at the top and shows horizontal navigation.
- It uses a consistent structure across all views while its tokens adapt to the selected presentation mode.
- The brand block contains the AI-generated dragonfly mark and readable portfolio-owner text.
- The logo scales without overflow and retains at least a 44-by-44 CSS-pixel activation target.

### Mobile bottom navigation

- At 768px and below, the six main navigation items move to a fixed bottom bar.
- Each item has a decorative icon and a visible text label.
- Each activation target is at least 44 CSS pixels in its primary dimension.
- The layout accounts for mobile safe-area insets and adds enough bottom padding to keep page/footer content visible.
- The bottom bar does not create horizontal page overflow.

### Footer

- The footer appears after the main content on every public view.
- It includes an onsite Contact link, a public GitHub profile link, and a copyright notice.
- External links open in a new tab, disclose that behavior to assistive technology, and use `rel="noopener noreferrer"`.
- Unverified email or LinkedIn information must not be invented.

### Presentation modes

- Supported values are `simple`, `corporate`, and `dramatic`.
- `simple` is the safe default for missing, invalid, or inaccessible stored data.
- Store the choice under a versioned local-storage key.
- Apply the current value to a root `data-presentation-mode` attribute.
- Theme changes use semantic CSS custom properties rather than duplicated component styles.
- All three modes maintain WCAG AA-oriented contrast, visible focus, readable type, and identical functionality.
- Dramatic-mode motion is optional and must be removed or reduced when `prefers-reduced-motion` is active.
- Changing mode must not change the current view or page content.

## 4. User Flow

1. A first-time visitor lands on the Welcome Portal with Simple mode as the default.
2. The visitor chooses Simple, Corporate, or Dramatic.
3. The shared theme state updates without reloading the application and is stored locally when storage is available.
4. The visitor enters the Home/introduction view.
5. Desktop visitors use the sticky top navigation; mobile visitors use the fixed bottom navigation.
6. The visitor can return to Welcome Portal to change presentation mode.
7. A returning visitor receives the stored valid presentation choice; invalid or unavailable storage safely returns to Simple.

## 5. Interfaces Involved

### Components and hooks

- `src/layouts/MainLayout.jsx`
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/NavigationIcon.jsx`
- `src/components/PagePlaceholder.jsx`
- `src/hooks/usePresentationMode.js`
- `src/pages/WelcomePortal.jsx`
- `src/App.jsx`

### Data and styles

- `src/data/navigation.js`
- `src/styles/global.css`
- `public/images/dragonfly-logo.png`
- `RESEARCH.md`

## 6. Data and Validation

### Navigation item shape

Each shared item contains:

- `id`: stable internal identifier.
- `label`: exact visible navigation text.
- `shortLabel`: compact mobile label where needed without changing meaning.
- `icon`: supported internal icon identifier.

Navigation definitions must be stored once and rendered by both desktop and mobile navigation.

### Presentation-mode validation

- Accept only the three documented mode strings.
- Ignore unknown stored values.
- Catch local-storage read/write failures without breaking rendering.
- Do not store personal data, message content, or authentication data with the presentation preference.

## 7. Expected and Failure Behavior

### Expected behavior

- Header, footer, and main content render on every public view.
- Desktop and mobile navigation expose the same six destinations in the same order.
- The logo loads with reserved dimensions and navigates to Home.
- Theme choice persists across reloads when local storage works.
- Selecting a navigation item does not produce a network navigation or a public path change.

### Failure behavior

- If the logo fails to load, meaningful alternative text still identifies the brand link.
- If local storage is blocked, mode selection still works for the current session.
- If a requested view identifier is invalid, render the Welcome Portal rather than a blank page.
- No missing link, image, or storage error may crash the public application.

## 8. Accessibility and Responsive Rules

- Use semantic `header`, `nav`, `main`, and `footer` landmarks.
- Give desktop and mobile navigation distinct accessible labels.
- Keep one logical page-level `h1` in the active view.
- Every interactive item must work by keyboard and show a visible focus indicator.
- Do not rely on color alone for the current-view state; combine shape/weight and `aria-current`.
- Decorative navigation icons are hidden from assistive technology.
- Reflow cleanly at 320px and at 200% zoom with no horizontal page overflow.
- At 768px and below, hide desktop navigation and show mobile navigation; above 768px, do the reverse.
- Respect reduced-motion preferences.

## 9. AI Logo Record

- Tool: OpenAI built-in image generator.
- Source role: the dragonfly photograph embedded in `My personal branding project - Google Docs.pdf` was used only as a style and silhouette reference.
- Design intent: preserve the elongated, handmade brushstroke quality while refining it into a professional teal-and-gold mark recognizable at header scale.
- Generation constraints: one centered dragonfly; deep/primary teal with restrained gold; no text, badge, paper texture, shadow, watermark, or extra objects.
- Processing: generated against a flat magenta chroma-key background, then converted locally to a transparent PNG.
- Output: `public/images/dragonfly-logo.png`.

## 10. Acceptance Criteria

- [x] Work is performed on `feature/header-footer`, created from synchronized `dev`.
- [x] The global specification and this feature specification were reviewed before implementation.
- [x] `MainLayout` wraps all public content between a reusable header and footer.
- [x] The required six public destinations appear in the exact required order.
- [x] Login and Back Office do not appear in public navigation.
- [x] The AI-generated dragonfly logo is visible, has meaningful alternative text, scales correctly, and navigates to Home.
- [x] Desktop navigation is horizontal and sticky above 768px.
- [x] Mobile navigation uses icons and visible labels in a fixed bottom bar at 768px and below.
- [x] Footer appears on all public views with contact access, GitHub link, and copyright.
- [x] Simple, Corporate, and Dramatic modes use the same content and component structure.
- [x] A valid presentation choice persists; invalid/unavailable storage safely falls back to Simple.
- [x] Current-view and keyboard-focus states are visible and programmatically conveyed.
- [x] Skip link and semantic landmarks work.
- [ ] All three modes are checked at desktop and 320px mobile widths without horizontal overflow.
- [x] Reduced-motion behavior is respected.
- [x] Browser console has no known errors in required flows.
- [x] `npm run lint`, `npm run build`, and `git diff --check` pass.
