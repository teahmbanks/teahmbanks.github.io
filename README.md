# Problem Solving Through Adaptation - Teah Banks Portfolio

[View the live portfolio](https://teahmbanks.github.io/)

## Project Description

Problem Solving Through Adaptation is Teah Banks's public professional portfolio. It presents her work as a developer, educator, stage manager, and adaptive problem-solver through one responsive Dramatic visual experience.

The site opens directly on a Home introduction and provides same-page navigation to Featured Projects, Skills and Experience, About Me, Contact, and Links. Featured Projects documents three past coding projects - StageSpace, CodeBloggs, and Rocket Food Delivery - as problem-solving case studies with verified technologies and repository links.

The public contact form stores messages in Supabase. A manually accessed, Supabase-authenticated administrator area allows the portfolio owner to read and delete those messages. The application remains readable when Supabase is unavailable and does not expose Login or Back Office in public navigation.

## Main Features

- Responsive React single-page portfolio with a Dramatic theater-inspired presentation
- Sticky desktop navigation and fixed, labeled mobile navigation
- Accessible focus handling, skip navigation, semantic landmarks, reduced-motion support, and mobile reflow
- Home introduction with technical and transferable skills
- Project case studies for StageSpace, CodeBloggs, and Rocket Food Delivery
- Work experience, education, and downloadable resume
- Verified professional and development-resource links
- Validated Supabase-backed contact form with success, failure, and configuration feedback
- Secret administrator login using Supabase Auth
- Protected Back Office with newest-first message display, full-message modal, deletion, and logout
- Automated GitHub Pages deployment from `main`

## Tech Stack

### Application

- React 19
- JavaScript with ES modules
- Vite 8
- HTML5 and CSS with custom properties
- Supabase JavaScript client

### Data and authentication

- Supabase Postgres
- Supabase Row Level Security (RLS)
- Supabase email/password authentication

### Development and delivery

- oxlint
- npm
- Git and GitHub
- GitHub Actions
- GitHub Pages

## Project Structure

```text
teahmbanks.github.io/
├── .github/workflows/
│   └── deploy.yml                 # Builds and deploys main to GitHub Pages
├── ai/
│   ├── ai-spec.md                 # Global AI specification
│   └── features/                  # Eight required feature specifications
├── docs/
│   ├── pitch-feedback.md          # Elevator-pitch feedback deliverable
│   ├── script-1.md                # First elevator-pitch script
│   └── script-2.md                # Revised elevator-pitch script
├── public/
│   ├── images/                    # Logo and generated editorial artwork
│   └── resume/                    # Downloadable resume PDF
├── src/
│   ├── components/                # Shared navigation, cards, icons, and entries
│   ├── data/                      # Structured portfolio content
│   ├── hooks/                     # Reusable browser-state behavior
│   ├── layouts/                   # Shared public-page frame
│   ├── lib/                       # Supabase, contact, auth, and admin services
│   ├── pages/                     # Public and private application views
│   ├── styles/                    # Global responsive and Dramatic styling
│   ├── App.jsx                    # Public view state and secret hash routing
│   └── main.jsx                   # React application entry point
├── supabase/
│   └── messages.sql               # Messages table, constraints, and RLS policies
├── .env.example                   # Public configuration placeholders
├── CONCEPTS.md                    # Technical interview concept explanations
├── RESEARCH.md                    # AI asset research and generation record
├── index.html                     # Vite HTML entry point
├── package.json                   # Dependencies and project scripts
└── vite.config.js                 # Root-path GitHub Pages configuration
```

Generated folders such as `node_modules/` and `dist/` are not committed.

## Installation and Local Setup

### Prerequisites

- Git
- Node.js 24 or another version compatible with Vite 8
- npm
- A Supabase project for contact, login, and Back Office behavior

### 1. Clone the repository

```bash
git clone https://github.com/teahmbanks/teahmbanks.github.io.git
cd teahmbanks.github.io
```

### 2. Install dependencies

```bash
npm install
```

Use `npm ci` instead when reproducing the exact dependency versions from `package-lock.json`, including in continuous integration.

### 3. Configure local environment variables

```bash
cp .env.example .env
```

Replace the placeholders in `.env` with the public values from the Supabase project's API settings. Never commit the completed `.env` file.

### 4. Configure Supabase

1. Open the Supabase SQL Editor.
2. Run `supabase/messages.sql` to create the `messages` table and its RLS policies.
3. Enable email/password authentication.
4. Create the required administrator account manually in Supabase Authentication.
5. Keep administrator credentials private and provide required grading credentials only through the private submission summary.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173/`.

## Environment Variables

| Variable | Required for Supabase features | Purpose |
|---|---:|---|
| `VITE_SUPABASE_URL` | Yes | Public URL for the Supabase project |
| `VITE_SUPABASE_ANON_KEY` | Yes | Public anon/publishable key used with RLS |

The public portfolio still renders if either value is missing. In that state, the contact form and administrator authentication display safe unavailable-state messaging.

For GitHub Pages, add both names under **Settings → Secrets and variables → Actions**. The deployment workflow passes them only to the Vite build. Never place a Supabase service-role key, administrator password, or another private secret in client code.

## Available Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Run oxlint against the project |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Navigation and Routes

Public navigation remains at the root URL. React state changes the visible view without adding `/home`, `/portfolio`, or similar paths.

| Location | Access | Purpose |
|---|---|---|
| `/` | Public | Home and all public portfolio views |
| `/#/login` | Manual/private | Administrator sign-in |
| `/#/backoffice` | Authenticated | Message-management Back Office |

Unauthenticated Back Office access redirects to Login. Login and Back Office do not appear in the header, footer, or mobile navigation.

## API and Data Operations

This project does not include a custom REST API or application server. The browser uses the official Supabase client through `src/lib/`.

| Operation | Supabase service | Access |
|---|---|---|
| Insert `name`, `email`, and `message` | `messages` table | Anonymous visitors, controlled by insert-only RLS |
| Sign in | `supabase.auth.signInWithPassword()` | Manually created administrator |
| Restore session | `supabase.auth.getSession()` | Authenticated administrator |
| Select messages newest first | `messages` table | Authenticated users only |
| Delete one message by ID | `messages` table | Authenticated users only |
| Sign out | `supabase.auth.signOut()` | Authenticated administrator |

The application does not create a public select, update, or delete policy. The database constraints limit names to 100 characters, emails to 254 characters, and messages to 2,000 characters.

## Deployment

The repository is a root GitHub Pages site, so Vite uses `base: '/'`.

`.github/workflows/deploy.yml` runs on every push to `main` and can also be started manually. It:

1. Checks out the repository.
2. Configures Node.js 24.
3. Installs locked dependencies with `npm ci`.
4. Builds the application with the encrypted Supabase repository secrets.
5. Uploads `dist/` as the Pages artifact.
6. Deploys the artifact to GitHub Pages.

GitHub Pages must use **GitHub Actions** as its build and deployment source.

## Verification

Before merging a completed feature, run:

```bash
npm run lint
npm run build
git diff --check
```

The current portfolio has also been checked for direct Home loading, Dramatic presentation activation, desktop and 320-pixel mobile reflow, public navigation, live contact-form availability, Supabase message submission, protected-route redirect behavior, administrator message viewing and deletion, logout, and production deployment.

Provider-dependent behavior should always be rechecked after changing Supabase configuration, RLS policies, authentication settings, GitHub secrets, or the deployment workflow.

## Accessibility

- Semantic header, navigation, main, footer, section, table, form, and dialog markup
- Skip link and visible keyboard focus
- Focus movement after same-page navigation and invalid login submission
- Visible labels, field-level errors, status messages, and error announcements
- Modal focus containment, Escape handling, outside-click close, and focus return
- Meaningful alternative text for content images
- Reduced-motion overrides through `prefers-reduced-motion`
- Responsive content with a fixed, labeled mobile navigation bar

## Security and Privacy

- `.env` is ignored by Git.
- Only the public Supabase URL and anon/publishable key are used by the browser.
- RLS allows anonymous inserts but blocks anonymous message reads and deletes.
- Administrator accounts are created outside the application.
- Authentication sessions are managed by Supabase.
- Private credentials belong only in approved private grading materials, never in the repository or README.

## AI-Assisted Assets and Specifications

The dragonfly logo and editorial illustrations were generated with OpenAI's image generator. Their purposes, constraints, dates, and usage are documented in `RESEARCH.md`. Global and feature-level implementation specifications are stored under `ai/`.

## Author

**Teah Banks**

- GitHub: [github.com/teahmbanks](https://github.com/teahmbanks)
- LinkedIn: [linkedin.com/in/teah-banks-952993149](https://www.linkedin.com/in/teah-banks-952993149)
- Portfolio: [teahmbanks.github.io](https://teahmbanks.github.io/)

### LinkedIn Update Summary

The professional profile was aligned with the portfolio's problem-solver narrative by foregrounding the transition into full-stack development, the transferable strengths developed through education and stage management, and project work that demonstrates practical investigation, implementation, and verification.

## License

No open-source license has been added. The repository's code and original portfolio content remain under the author's copyright unless a license is added later.
