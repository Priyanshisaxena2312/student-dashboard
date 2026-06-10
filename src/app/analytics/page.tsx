import { fetchCourses } from "@/lib/fetch-courses";

export default async function AnalyticsPage() {
  const courses = await fetchCourses();
  const total = courses.length;
  const avgProgress = Math.round(
    courses.reduce((s, c) => s + c.progress, 0) / Math.max(1, total)
  );

  return (
    <main className="min-h-screen md:ml-[240px] p-8">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <p className="mt-2 text-zinc-400">Overview of your learning activity.</p>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/[0.06] p-4">
          <h2 className="text-sm text-zinc-400">Total Courses</h2>
          <div className="text-2xl font-semibold mt-2">{total}</div>
        </div>

        <div className="rounded-2xl border border-white/[0.06] p-4">
          <h2 className="text-sm text-zinc-400">Average Progress</h2>
          <div className="text-2xl font-semibold mt-2">{avgProgress}%</div>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Course Progress Breakdown</h3>
        <ul className="mt-3 space-y-2">
          {courses.map((c) => (
            <li key={c.id} className="flex items-center justify-between p-3 rounded-lg bg-surface-800/60 border border-white/[0.04]">
              <span className="text-sm font-medium">{c.title}</span>
              <span className="text-sm text-zinc-300">{c.progress}%</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
