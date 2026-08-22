# Feature Specification - Secret Login Page

> Use this specification together with `ai/ai-spec.md`. The Module 16 rubric remains authoritative.

## 1. Feature Goal

Provide a discreet, accessible administrator sign-in screen using Supabase email/password authentication without exposing it in public navigation.

## 2. Scope

### In scope

- Manual access through `/#/login`.
- Email and password validation.
- Supabase password authentication, pending protection, safe errors, and successful Back Office navigation.
- Public-portfolio return action and responsive Dramatic styling.

### Out of scope

- Registration, password reset, credential hints, multiple roles, social login, or embedded administrator credentials.

## 3. Requirements Breakdown

- Keep Login absent from header, footer, mobile navigation, and public calls to action.
- Collect a valid email and non-empty password.
- Authenticate with `supabase.auth.signInWithPassword()` through the shared client.
- Prevent duplicate submission while authentication is pending.
- Navigate successful authentication to `#/backoffice`.
- Show safe field or provider errors without logging credentials or raw Supabase responses.

## 4. User Flow

1. The administrator manually opens `/#/login`.
2. The administrator enters the pre-created Supabase Auth credentials.
3. Invalid input displays associated errors and focuses the first invalid field.
4. A valid submission enters a pending state and calls Supabase Auth.
5. Success changes the location to `#/backoffice`; failure preserves the fields and shows safe feedback.
6. Return to portfolio clears the secret hash and opens Home.

## 5. Interfaces Involved

### Pages and modules

- `src/App.jsx`
- `src/pages/LoginPage.jsx`
- `src/lib/authService.js`
- `src/lib/supabaseClient.js`
- `src/styles/global.css`

### External interfaces

- Supabase email/password authentication
- Manually created administrator account

## 6. Data and Validation

- Email: required, trimmed, valid email shape, maximum 254 characters.
- Password: required, never trimmed or transformed.
- Credentials exist only in component memory during submission and are never logged or rendered.

## 7. Expected, Failure, and Empty Behavior

### Expected behavior

- Successful sign-in establishes a Supabase session and opens the protected Back Office.
- A valid restored session remains authoritative after refresh.

### Failure behavior

- Missing configuration disables authentication and displays a safe explanation.
- Invalid input does not call Supabase.
- Rejected credentials preserve input and display a visually and programmatically distinct error.

### Empty state

- Initially empty controls render without errors and with correct autocomplete attributes.

## 8. Accessibility and Responsive Behavior

- Use a single `h1`, visible labels, autocomplete hints, field-associated errors, and an announced result message.
- Move focus to the first invalid field and maintain complete keyboard operation.
- Keep visible focus, readable error contrast, reduced-motion support, and no horizontal overflow at desktop, 768px, 320px, and 200% zoom-equivalent widths.

## 9. Acceptance Criteria

- [x] Work begins on `feature/login-page` from synchronized `dev`.
- [x] Global authentication and secret-location requirements are reviewed.
- [x] Direct loading `/#/login` renders a labelled login form.
- [x] The login location is absent from every public navigation surface.
- [ ] Missing configuration, invalid input, pending, provider failure, and success are all manually verified.
- [x] Successful configured login sends the authenticated administrator to `#/backoffice`.
- [x] Credentials and raw Supabase errors are never logged or rendered.
- [ ] Keyboard, focus, error association, reduced motion, and all responsive widths are fully verified.
- [ ] Live authentication and session restoration after refresh are both verified.
- [x] `npm run lint`, `npm run build`, and `git diff --check` pass.
