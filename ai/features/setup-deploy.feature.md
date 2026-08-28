# Feature Specification - Setup and Deploy

> Use this specification together with `ai/ai-spec.md`. The Module 16 rubric remains the grading authority.

## 1. Feature Goal

Create a clean React/Vite JavaScript foundation that can be installed reproducibly, built locally, and deployed automatically to the root GitHub Pages site at `https://teahmbanks.github.io`.

## 2. Scope

### In scope

- React application scaffolded with Vite.
- Root-level Vite configuration with `base: '/'`.
- Reproducible npm dependency installation and standard scripts.
- Minimal accessible application shell proving that React loads successfully.
- GitHub Actions build and GitHub Pages deployment from `main`.
- Build-time injection of `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from GitHub Actions secrets.
- Safe Supabase client initialization and a non-breaking fallback when configuration is absent.
- Secret-safe `.env.example` and ignore rules.
- Initial linting and production-build verification.

### Out of scope

- Supabase project creation, database tables, RLS policies, or admin-user creation.
- Contact form behavior, authentication, or Back Office features.
- Final navigation, visual themes, portfolio content, or production imagery.
- Optional extra-mile features.

## 3. Requirements Breakdown

### Application foundation

- Use React with Vite and JavaScript modules.
- The repository root contains `package.json`, `package-lock.json`, `index.html`, and `vite.config.js`.
- `src/main.jsx` mounts the application into the `#root` element.
- `src/App.jsx` renders a semantic, keyboard-readable placeholder shell without console errors.
- `vite.config.js` sets `base: '/'` for the root-level GitHub Pages repository.
- The application must not use a custom server or server-side rendering.

### npm scripts

`package.json` must provide:

- `npm run dev` for local development.
- `npm run build` for the production bundle.
- `npm run preview` for local production-bundle preview.
- `npm run lint` for source linting.

### Supabase client foundation

- Install and use `@supabase/supabase-js`.
- `src/lib/supabaseClient.js` reads only `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from `import.meta.env`.
- Never read or expose a service-role key.
- Export a configuration-status value so later features can render a safe fallback.
- Do not create a Supabase client with missing or blank values.
- Do not log configuration values.

### Environment safety

- `.env` and local variants remain ignored by Git.
- `.env.example` contains variable names and explanatory placeholders only.
- No real URL, key, password, token, or private message is committed.
- Production values come from GitHub repository Actions secrets.

### GitHub Actions deployment

- Workflow location: `.github/workflows/deploy.yml`.
- Trigger on pushes to `main`; allow a manual `workflow_dispatch` run.
- Use least-privilege permissions needed for GitHub Pages.
- Check out the repository and configure Node with npm caching.
- Install with `npm ci`.
- Build with `npm run build` while supplying both required `VITE_*` secrets through the build step environment.
- Upload the `dist/` directory as the Pages artifact.
- Deploy through the official GitHub Pages deployment action.
- Use a deployment concurrency group so an older deployment cannot overwrite a newer one.

## 4. User Flow and Delivery Flow

1. A developer clones the repository.
2. The developer creates a local `.env` from `.env.example` and supplies private values locally.
3. The developer runs `npm ci` and `npm run dev`.
4. The React shell loads at the local Vite URL.
5. A completed feature is merged into `dev` and verified.
6. A stable `dev` release is merged into `main`.
7. The push to `main` starts the deployment workflow.
8. GitHub Actions installs, builds, uploads, and deploys `dist/`.
9. The application loads at `https://teahmbanks.github.io`.

## 5. Interfaces Involved

### Files

- `package.json`
- `package-lock.json`
- `index.html`
- `vite.config.js`
- `.oxlintrc.json`
- `src/main.jsx`
- `src/App.jsx`
- `src/styles/global.css`
- `src/lib/supabaseClient.js`
- `.env.example`
- `.gitignore`
- `.github/workflows/deploy.yml`

### External services

- npm registry for dependency installation.
- GitHub Actions for CI/CD.
- GitHub Pages for static hosting.
- Supabase project configuration values supplied at build time; no database behavior is implemented in this feature.

## 6. Data, Validation, and Expected Behavior

### Environment values

- Both Supabase values are strings supplied through Vite environment variables.
- Blank, missing, or placeholder values are treated as unconfigured.
- The public application remains renderable when Supabase is unconfigured.
- Features that require Supabase must later check the exported configuration status before making requests.

### Application behavior

- A direct request to `/` renders the React application.
- The document title and description identify the portfolio without placeholder Vite branding.
- A missing Supabase configuration does not cause a blank screen or uncaught exception.
- The initial shell uses semantic headings and provides a useful message while feature pages are under development.

### Failure behavior

- Dependency, lint, or build failures stop the GitHub Actions job.
- Deployment does not run if the build fails.
- Missing production secrets may leave Supabase unconfigured but must not prevent the static public shell from building.

## 7. Accessibility and Responsive Baseline

- Use semantic `main`, heading, and paragraph elements.
- Set the HTML language to English.
- Provide a descriptive page title and viewport metadata.
- Do not remove visible keyboard focus.
- The placeholder shell must remain readable without horizontal scrolling at 320px width and at 200% zoom.
- Respect the operating system's reduced-motion preference from the first stylesheet.

## 8. Acceptance Criteria

- [x] The work is performed on `feature/setup-deploy`, created from synchronized `dev`.
- [x] `ai/ai-spec.md` and this feature specification were reviewed before implementation.
- [x] `npm ci` succeeds from the committed lockfile.
- [x] `npm run lint` succeeds without ignored errors.
- [x] `npm run build` succeeds and produces `dist/`.
- [x] `vite.config.js` explicitly sets `base: '/'`.
- [x] The local React shell renders without known console errors.
- [x] The shell remains usable with no Supabase environment variables.
- [x] `.env` is ignored and no secrets are tracked.
- [x] The deployment workflow contains at least one valid build job and one valid deployment job.
- [x] The workflow triggers on `main`, runs `npm ci` and `npm run build`, and deploys `dist/`.
- [x] GitHub Actions secrets are referenced only by name and are not copied into source files.
- [x] `git diff --check` passes.
- [ ] Live GitHub Pages behavior is reported as pending until a verified `main` deployment succeeds.
