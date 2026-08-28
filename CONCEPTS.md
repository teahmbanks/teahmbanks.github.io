# Module 16 Technical Concepts

## 1. Supabase Integration and Row Level Security

### Purpose in the project

Supabase gives the static GitHub Pages portfolio the database and authentication services that would normally require a custom backend. The public contact form inserts messages into the `messages` table, while Row Level Security (RLS) determines which users can insert, read, or delete those records.

### Why it was challenging

The challenge was balancing access and privacy. Visitors need permission to send messages without signing in, but they must not be able to read or delete anyone's messages. The authenticated administrator needs broader access. This required coordinating the React client, environment variables, database constraints, authentication roles, and separate RLS policies without exposing a service-role key in the browser.

### Usage locations

- `src/lib/supabaseClient.js`, lines 1-15: reads the public Vite environment variables and creates one shared Supabase client.
- `src/lib/contactService.js`: inserts validated contact messages through the shared client.
- `supabase/messages.sql`, lines 1-31: creates the `messages` table, enables RLS, allows anonymous inserts, and limits reading and deletion to authenticated users.

## 2. Authentication, Session Protection, and Private Routing

### Purpose in the project

Authentication protects the Back Office where contact messages are managed. The login page calls Supabase email/password authentication, the application keeps the administrator route out of public navigation, and the Back Office checks for a valid session before loading private data.

### Why it was challenging

Hiding a link is not the same as protecting a page. The application had to handle direct URL entry, page refreshes, expired or missing sessions, failed login attempts, and logout. It also had to redirect unauthenticated visitors without showing private message data first.

### Usage locations

- `src/lib/authService.js`, lines 1-14: signs in the administrator with `signInWithPassword` and provides safe error handling.
- `src/App.jsx`, lines 15-42: synchronizes the secret hash routes and displays Login or Back Office without exposing them in public navigation.
- `src/pages/LoginPage.jsx`, lines 34-55: validates credentials, prevents duplicate submissions, authenticates, and handles success or failure.
- `src/pages/BackOfficePage.jsx`, lines 58-77: restores the session and redirects to Login when the visitor is not authenticated.

## 3. React State and Asynchronous User Interface Behavior

### Purpose in the project

React state coordinates changing interface conditions without reloading the page. It tracks form values, validation errors, loading states, success or failure feedback, selected messages, delete confirmation, and the currently displayed portfolio view.

### Why it was challenging

Asynchronous work can leave the interface out of sync if each transition is not handled deliberately. The contact form must reject invalid input, disable duplicate submissions, wait for Supabase, clear itself only after success, and preserve the user's message after failure. The Back Office must also update immediately after deletion and avoid updating state after the page has unmounted.

### Usage locations

- `src/pages/ContactPage.jsx`, lines 26-57: manages form, validation, submission, success, and error states.
- `src/pages/ContactPage.jsx`, lines 83-146: connects state to accessible fields, disabled controls, and visible feedback.
- `src/pages/BackOfficePage.jsx`, lines 50-77: loads messages asynchronously and uses an `active` guard during cleanup.
- `src/pages/BackOfficePage.jsx`, lines 79-110: manages the message modal, optimistic interface updates after deletion, feedback, and logout.
- `src/App.jsx`, lines 44-87: changes public views with React state while keeping the public URL at the site root.

## Summary

These concepts work together as one system: React manages the experience in the browser, Supabase provides external data and authentication services, and RLS plus session checks protect private information. Building the portfolio required understanding not only how each concept works individually, but also how they interact across the user interface, service layer, and database.
