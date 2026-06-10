import { fetchCourses } from "@/lib/fetch-courses";
import { BentoGrid } from "@/components/BentoGrid";
import CourseTile from "@/components/CourseTile";

export default async function CoursesPage() {
  const courses = await fetchCourses();

  return (
    <main className="min-h-screen md:ml-[240px] p-8">
      <h1 className="text-2xl font-bold">Courses</h1>
      <p className="mt-2 text-zinc-400">Your enrolled courses and progress.</p>

      <section className="mt-6">
        <BentoGrid>
          {courses.map((course, i) => (
            <CourseTile key={course.id} course={course} index={i} />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
}
