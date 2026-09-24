# MathHub real authentication setup

MathHub is prepared to use Supabase for real online authentication and cloud progress.

## 1. Create a Supabase project

Create a project at https://supabase.com/.

## 2. Run the database SQL

Open **SQL Editor** in your Supabase dashboard, create a new query, paste the contents of `supabase-schema.sql`, and run it.

The schema creates:
- `profiles`
- `lesson_progress`
- `quiz_scores`

Row Level Security is enabled so an authenticated user can access only their own records.

## 3. Get the browser-safe project credentials

In Supabase, open your project's API/connect settings and copy:
- Project URL
- Publishable key (or legacy anon key)

Do **not** use or expose the service_role/secret key in the browser.

## 4. Put the values in supabase-config.js

Replace:

```js
const MATHHUB_SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const MATHHUB_SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";
```

with your actual project URL and browser-safe publishable/anon key.

## 5. Email confirmation

Supabase may require a new user to confirm their email before a session is created, depending on the project's Auth settings. Configure the Site URL and redirect URLs for the deployed MathHub site in Authentication settings.

## 6. Security note

The browser may contain the publishable/anon key. That is expected. The service_role/secret key must never be placed in HTML, JavaScript, GitHub Pages, or any other client-side code.

Source: Supabase JavaScript/Auth documentation.
