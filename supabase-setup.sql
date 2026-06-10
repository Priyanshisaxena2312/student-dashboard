-- Supabase SQL: Run this in your Supabase SQL Editor to set up the database

-- Create the courses table
CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  progress INTEGER NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  icon_name TEXT NOT NULL DEFAULT 'book-open',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows public read access (for demo purposes)
CREATE POLICY "Allow public read access" ON courses
  FOR SELECT USING (true);

-- Seed data: Insert 4 mock courses
INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'atom'),
  ('TypeScript Masterclass', 45, 'code'),
  ('System Design Fundamentals', 30, 'network'),
  ('Next.js & Server Components', 90, 'rocket');
