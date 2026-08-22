# Feature Specification - Protected Back Office

> Use this specification with `docs/ai/ai-spec.md`. The Module 16 rubric remains authoritative.

## 1. Goal

Allow the authenticated portfolio owner to privately review and delete contact messages without exposing admin capabilities to public visitors.

## 2. Location and protection

- Use the static-host-compatible location `/#/backoffice`.
- Never include this location in public navigation or calls to action.
- Check the restored Supabase session before rendering message data.
- Redirect unauthenticated or unconfigured access to `/#/login`.
- Logout with Supabase, clear protected UI state, and return to `/#/login`.

## 3. Message behavior

- Fetch `id`, `name`, `email`, `message`, and `created_at` from `messages`, newest first.
- Provide loading, empty, failure, and populated states.
- Display Name, Email, Date, and Actions in the overview.
- Open the full message in an accessible modal.
- Require a distinct confirmation action before deleting.
- Remove a message from the rendered list only after Supabase confirms deletion.
- Keep the message and show safe feedback after a deletion failure.

## 4. Accessibility and responsive behavior

- Use one `h1`, semantic table headings on wide screens, and readable responsive cards on narrow screens.
- Give the modal an accessible name, move focus inside, trap Tab, close with Escape or outside click, and restore trigger focus.
- Announce loading, errors, deletion results, and empty state.
- Keep behavior and content equivalent in Simple, Corporate, and Dramatic modes.

## 5. Security contract

- RLS grants authenticated users only the required select and delete operations.
- No browser code uses or references a service-role key.
- Do not log or expose message contents in errors.

## 6. Acceptance criteria

- [x] Work begins on `feature/back-office` from synchronized `dev`.
- [x] Global Back Office, authentication, RLS, and modal requirements are reviewed.
- [ ] Direct unauthenticated access redirects to `/#/login`.
- [ ] A restored authenticated session opens the Back Office without another login.
- [ ] Loading, empty, failure, and populated message states behave as specified.
- [ ] Messages are sorted newest first and expose the required overview fields.
- [ ] Modal keyboard behavior, accessible naming, outside close, and focus return are verified.
- [ ] Delete confirmation, success, and failure behavior are verified.
- [ ] Logout ends the Supabase session and returns to Login.
- [ ] Desktop, mobile, reduced-motion, and all presentation modes are verified. The 320px protected error state passes without overflow.
- [ ] Live select/delete behavior and RLS are verified with configured Supabase infrastructure.
- [x] `npm run lint`, `npm run build`, and `git diff --check` pass.
