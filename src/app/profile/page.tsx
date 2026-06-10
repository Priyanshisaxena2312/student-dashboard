import { fetchCourses } from "@/lib/fetch-courses";
import CourseTile from "@/components/CourseTile";
import { BentoGrid } from "@/components/BentoGrid";

export default async function ProfilePage() {
  const courses = await fetchCourses();
  const total = courses.length;
  const avgProgress = Math.round(
    courses.reduce((s, c) => s + c.progress, 0) / Math.max(1, total)
  );

  return (
    <main className="min-h-screen md:ml-[240px] p-8">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white text-2xl font-bold">
          A
        </div>
        <div>
          <h1 className="text-2xl font-bold">Alex</h1>
          <p className="text-zinc-400">Learner · Member since 2024</p>
        </div>
      </div>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 rounded-2xl border border-white/[0.06] p-4">
          <h2 className="text-sm text-zinc-400">Courses Enrolled</h2>
          <div className="text-2xl font-semibold mt-2">{total}</div>
        </div>
        <div className="col-span-1 rounded-2xl border border-white/[0.06] p-4">
          <h2 className="text-sm text-zinc-400">Average Progress</h2>
          <div className="text-2xl font-semibold mt-2">{avgProgress}%</div>
        </div>
        <div className="col-span-1 rounded-2xl border border-white/[0.06] p-4">
          <h2 className="text-sm text-zinc-400">Streak</h2>
          <div className="text-2xl font-semibold mt-2">12 days</div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Your Courses</h2>
        <div className="mt-4">
          <BentoGrid>
            {courses.map((course, i) => (
              <CourseTile key={course.id} course={course} index={i} />
            ))}
          </BentoGrid>
        </div>
      </section>
    </main>
  );
}
