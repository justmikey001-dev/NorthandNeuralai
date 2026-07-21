/*
# Create site_stats table for active projects counter

1. Purpose
   Stores a single row of site-wide statistics. Currently used to track the
   "Currently working on X new projects" badge shown on the homepage.
   The active_projects count is adjusted once per day by +/- 1 (50/50 chance),
   clamped to a believable range of 3–12.

2. New Tables
   - `site_stats`
     - `id` (int, primary key, always 1 — singleton row)
     - `active_projects` (int, not null, default 5)
     - `last_updated` (date, not null, default today)
     - `updated_at` (timestamptz, default now)

3. Security
   - Enable RLS on `site_stats`.
   - Allow anon + authenticated to SELECT (public read — the badge is shown to all visitors).
   - Allow anon + authenticated to UPDATE (the client adjusts the count on page load when a new day is detected).
   - No DELETE or INSERT needed beyond the singleton seed.

4. Mechanism
   There is no daily cron available in this environment. Instead, the frontend
   checks `last_updated` on each page load. If the stored date is older than
   today, it applies a single random +1/-1 adjustment (clamped 3–12), updates
   `last_updated` to today, and reads back the new value. This guarantees at
   most one adjustment per calendar day regardless of how many visitors arrive.
*/

CREATE TABLE IF NOT EXISTS site_stats (
  id int PRIMARY KEY DEFAULT 1,
  active_projects int NOT NULL DEFAULT 5,
  last_updated date NOT NULL DEFAULT CURRENT_DATE,
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT singleton CHECK (id = 1)
);

ALTER TABLE site_stats ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_site_stats" ON site_stats;
CREATE POLICY "anon_select_site_stats"
ON site_stats FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_site_stats" ON site_stats;
CREATE POLICY "anon_update_site_stats"
ON site_stats FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

-- Seed the singleton row if it doesn't exist
INSERT INTO site_stats (id, active_projects, last_updated)
VALUES (1, 5, CURRENT_DATE)
ON CONFLICT (id) DO NOTHING;
