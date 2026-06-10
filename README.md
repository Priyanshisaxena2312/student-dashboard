# Student Dashboard — Next-Gen Learning Platform

A futuristic, highly animated education platform dashboard built with **Next.js App Router**, **Supabase**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 15 (App Router + Server Components)
- **Database/BaaS**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A free [Supabase](https://supabase.com) project

### 1. Install Dependencies

```bash
cd student-dashboard
npm install
```

### 2. Set Up Supabase

1. Create a free project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase dashboard.
3. Copy & paste the contents of `supabase-setup.sql` and run it. This creates the `courses` table and seeds it with 4 mock courses.

### 3. Configure Environment Variables

Edit `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Find these values in your Supabase project → **Settings** → **API**.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles + Tailwind
│   ├── layout.tsx          # Root layout (dark mode)
│   ├── loading.tsx         # Loading skeleton state
│   └── page.tsx            # Main page (Server Component, fetches data)
├── components/
│   ├── ActivityTile.tsx    # Contribution graph tile
│   ├── BentoGrid.tsx       # Bento grid layout + animated tile wrapper
│   ├── CourseTile.tsx      # Dynamic course card with progress bar
│   ├── DashboardContent.tsx # Client wrapper for all tiles
│   ├── DynamicIcon.tsx     # Renders Lucide icons by name string
│   ├── ErrorState.tsx      # Graceful error display
│   ├── HeroTile.tsx        # Welcome greeting + streak indicator
│   ├── Sidebar.tsx         # Collapsible nav with layout animations
│   └── SkeletonLoader.tsx  # Animated skeleton loaders
├── lib/
│   ├── fetch-courses.ts    # Server-side data fetching
│   └── supabase-server.ts  # Supabase server client
└── types/
    └── index.ts            # TypeScript types
```

## Features

- **Staggered page load** — Tiles animate in sequentially with Framer Motion
- **Spring-physics hover** — Cards scale up with natural spring easing
- **Layout animations** — Sidebar active indicator uses `layoutId` for smooth transitions
- **Animated progress bars** — Fill from 0% to fetched value on mount
- **Contribution graph** — Mock activity grid with staggered cell animations
- **Responsive design** — Desktop/Tablet/Mobile breakpoints with collapsible sidebar
- **Skeleton loaders** — Pulsing placeholders during data fetch
- **Error handling** — Graceful fallback if Supabase connection fails
- **Semantic HTML** — `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`
- **Zero layout shifts** — All animations use `transform`/`opacity` only
