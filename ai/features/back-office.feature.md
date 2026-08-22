# Feature Specification - Protected Back Office

> Use this specification together with `ai/ai-spec.md`. The Module 16 rubric remains authoritative.

## 1. Feature Goal

Allow the authenticated portfolio owner to privately review and delete contact messages without exposing administrator capabilities to public visitors.

## 2. Scope

### In scope

- Protected `/#/backoffice` access.
- Supabase session verification and unauthenticated redirect.
- Loading, empty, failure, and populated message states.
- Newest-first message table, full-message modal, confirmed deletion, and logout.

### Out of scope

- Public message access, message editing, replies, exports, multiple administrator roles, or service-role operations.

## 3. Requirements Breakdown

- Verify the current Supabase session before rendering protected data.
- Fetch `id`, `name`, `email`, `message`, and `created_at`, ordered newest first.
- Display Name, Email, Date, and Actions for each message.
- Open the full message in an accessible modal.
- Require a distinct confirmation action before deletion.
- Remove a row only after Supabase confirms deletion.
- Sign out through Supabase, clear protected UI state, and return to Login.

## 4. User Flow

1. An authenticated administrator opens `/#/backoffice`.
2. The page verifies the restored session and loads messages.
3. The administrator may open a full message and close it with the close button, Escape, or outside click.
4. The administrator may request deletion, confirm it, and see the row removed after provider success.
5. The administrator signs out and returns to Login.
6. An unauthenticated visitor opening Back Office is redirected to `/#/login` before messages render.

## 5. Interfaces Involved

### Pages and modules

- `src/App.jsx`
- `src/pages/BackOfficePage.jsx`
- `src/lib/messageAdminService.js`
- `src/lib/supabaseClient.js`
- `src/styles/global.css`

### External interfaces

- Supabase Auth session
- Authenticated select and delete operations on `messages`
- RLS policies in `supabase/messages.sql`

## 6. Data and Validation

- Read only `id`, `name`, `email`, `message`, and `created_at`.
- Format a valid timestamp for display and show a safe fallback for an invalid date.
- Delete only the explicitly selected message ID after confirmation.
- Treat an absent or failed session as unauthenticated.
- Never log message contents, session values, or raw provider errors.

## 7. Expected, Failure, and Empty Behavior

### Expected behavior

- Authenticated access displays messages newest first.
- Opening a message displays its sender, email, date/time, and full body.
- Confirmed deletion removes the message immediately after provider success.
- Logout clears the session and returns to Login.

### Failure behavior

- Session absence redirects before protected data renders.
- Fetch failure displays a safe error without exposing stored content.
- Delete failure keeps the row and displays actionable feedback.
- Logout failure keeps the current state and displays feedback.

### Empty state

- A successful fetch with no rows displays “No contact messages yet.” instead of an empty table.

## 8. Accessibility and Responsive Behavior

- Use one `h1`, semantic table headings on wide screens, and readable responsive cards on narrow screens.
- Give the modal an accessible name, move focus inside, trap Tab, close with Escape or outside click, and restore trigger focus.
- Announce loading, errors, deletion results, and the empty state.
- Preserve complete behavior in the Dramatic presentation and respect reduced motion.
- Avoid horizontal overflow at desktop, 768px, 320px, and 200% zoom-equivalent widths.

## 9. Security Contract

- RLS grants authenticated users only the required select and delete operations.
- Browser code uses only the public anon/publishable key and never a service-role key.
- Login and Back Office remain absent from public navigation.

## 10. Acceptance Criteria

- [x] Work begins on `feature/back-office` from synchronized `dev`.
- [x] Global Back Office, authentication, RLS, and modal requirements are reviewed.
- [x] Direct unauthenticated access redirects to `/#/login`.
- [ ] A restored authenticated session opens Back Office without another login.
- [ ] Loading, empty, failure, and populated states are all manually verified.
- [x] Populated messages expose the required overview fields in newest-first order.
- [ ] Modal keyboard behavior, accessible naming, outside close, and focus return are fully verified.
- [x] Delete confirmation and successful removal are verified; provider-failure behavior remains pending.
- [x] Logout ends the Supabase session and returns to Login.
- [ ] Desktop, mobile, reduced-motion, and 200% zoom-equivalent behavior are fully verified.
- [x] Live select and delete behavior are verified with configured Supabase infrastructure.
- [x] `npm run lint`, `npm run build`, and `git diff --check` pass.
