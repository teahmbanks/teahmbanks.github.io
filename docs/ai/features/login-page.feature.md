# Feature Specification - Secret Login Page

> Use this specification with `docs/ai/ai-spec.md`. The Module 16 rubric remains authoritative.

## 1. Goal

Provide a discreet, accessible admin sign-in screen using Supabase email/password authentication without exposing it in public navigation.

## 2. Location and flow

- The static-host-compatible location is `/#/login`.
- The login destination must not appear in the public header, mobile navigation, footer, or calls to action.
- A direct load at `/#/login` renders the login view.
- Successful authentication changes the hash to `#/backoffice`.
- “Return to portfolio” clears the secret hash and restores the public Home experience.

## 3. Authentication contract

- Use the shared browser Supabase client and `supabase.auth.signInWithPassword`.
- Collect only email and password; trim the email but never alter the password.
- Do not provide registration, password reset, password hints, or embedded credentials.
- Never log credentials or display raw provider errors.
- Prevent duplicate submissions while authentication is pending.
- If Supabase is not configured, disable the form and provide a safe explanation.

## 4. Validation and accessibility

- Both fields are required; email uses a valid email shape and a maximum of 254 characters.
- Use visible labels, autocomplete hints, field-associated errors, and an announced result message.
- Preserve entered values after a failed sign-in.
- Use the shared presentation styling while keeping authentication behavior identical in every mode.
- Maintain keyboard operation, visible focus, reduced-motion support, and narrow-screen reflow.

## 5. Acceptance criteria

- [x] Work begins on `feature/login-page` from synchronized `dev`.
- [x] Global authentication and secret-location requirements are reviewed.
- [x] Direct loading `/#/login` renders a labelled login form.
- [x] The login location is absent from every public navigation surface.
- [ ] Missing configuration, invalid input, pending, provider failure, and success are handled safely. Missing configuration is locally verified; configured states require Supabase.
- [ ] Successful login sends the authenticated admin to `#/backoffice`.
- [x] Credentials and raw Supabase errors are never logged or rendered.
- [ ] Keyboard, focus, error association, and responsive Dramatic reflow are verified. Direct-load, return, 320px, and 768px flows pass.
- [ ] Live authentication and session restoration are verified with configured Supabase infrastructure.
- [x] `npm run lint`, `npm run build`, and `git diff --check` pass.
