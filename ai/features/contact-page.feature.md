# Feature Specification - Contact Page

> Use this specification together with `ai/ai-spec.md`. The Module 16 rubric remains the grading authority.

## 1. Feature Goal

Create an accessible public contact experience with LinkedIn access and a validated form that inserts approved message fields into the Supabase `messages` table.

## 2. Scope

### In scope

- Visible name, email, and message fields.
- Client validation, pending protection, success feedback, retained-input failure behavior, and missing-configuration fallback.
- Supabase insert payload limited to `name`, `email`, and `message`.
- LinkedIn access and responsive Dramatic layouts.

### Out of scope

- Public message reading, editing, or deletion.
- Administrator authentication or Back Office behavior.
- Spam services, attachments, custom email delivery, or service-role credentials.

## 3. Requirements Breakdown

- Render visible labels and required indicators for every field.
- Trim surrounding whitespace and reject empty or invalid values.
- Disable duplicate submission while the insert is pending.
- Insert only the three approved public fields through the shared Supabase client.
- Show distinct success and failure feedback.
- Reset fields after success and retain them after failure.
- Keep LinkedIn available when Supabase is not configured.

## 4. User Flow

1. The visitor opens Contact from public navigation.
2. The visitor may open the verified LinkedIn profile in a new tab.
3. The visitor enters a name, email address, and message.
4. Invalid submission displays associated field errors and focuses the first invalid field.
5. Valid submission disables the button while Supabase processes the insert.
6. Success clears the fields and displays confirmation; failure retains the draft and displays safe feedback.

## 5. Interfaces Involved

### Pages and modules

- `src/pages/ContactPage.jsx`
- `src/data/contactData.js`
- `src/lib/contactService.js`
- `src/lib/supabaseClient.js`
- `src/styles/global.css`

### External interfaces

- Supabase `messages` table
- Anonymous insert RLS policy in `supabase/messages.sql`
- Public LinkedIn profile

## 6. Data and Validation

- Name: required after trimming; maximum 100 characters.
- Email: required after trimming; valid email shape; maximum 254 characters.
- Message: required after trimming; maximum 2,000 characters.
- Payload: exactly `{ name, email, message }`.
- Supabase generates `id` and `created_at`; the browser must not provide them.

## 7. Expected, Failure, and Empty Behavior

### Expected behavior

- A valid configured submission inserts one message, prevents duplicate clicks, clears the form, and announces success.

### Failure behavior

- Invalid input never calls Supabase.
- Missing configuration disables submission and explains the unavailable state without breaking the page.
- Provider failure retains the complete draft and displays a non-sensitive error.

### Empty state

- The initial empty form shows no validation errors until the visitor attempts submission or interacts with a field.

## 8. Accessibility and Responsive Behavior

- Use one page-level heading, labelled regions, visible labels, `aria-describedby`, `aria-invalid`, and programmatically distinct status/error feedback.
- Do not rely on color alone for required fields, errors, or submission state.
- Keep keyboard order logical and move focus to the first invalid field.
- Controls meet comfortable touch-target sizes and stack without horizontal overflow at 768px, 320px, and 200% zoom-equivalent widths.
- Respect `prefers-reduced-motion` and keep the draft stable during public navigation behavior.

## 9. Acceptance Criteria

- [x] Work begins on `feature/contact-page` from synchronized `dev`.
- [x] The global and feature specifications are reviewed before implementation.
- [x] Name, email, and message fields use visible labels and aligned validation limits.
- [x] Valid configured submission inserts only the approved payload into `messages`.
- [ ] Pending, success, invalid-input, Supabase-failure, and missing-configuration states are all manually verified.
- [x] LinkedIn remains available when the form cannot submit.
- [x] Dramatic mode preserves the complete content and behavior.
- [ ] Keyboard, focus, error association, status announcement, and reduced-motion behavior are fully verified.
- [ ] Desktop, 768px, 320px, and 200% zoom-equivalent reflow checks all pass.
- [x] Live Supabase insert behavior is verified with configured infrastructure.
- [x] The browser console has no known errors in verified flows.
- [x] `npm run lint`, `npm run build`, and `git diff --check` pass.
