import { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";
import DashboardSkeleton from "@/components/SkeletonLoader";
import ErrorState from "@/components/ErrorState";
import { fetchCourses } from "@/lib/fetch-courses";

async function CoursesSection() {
  try {
    const courses = await fetchCourses();
    return <DashboardContent courses={courses} />;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return <ErrorState message={message} />;
  }
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* Main content area offset by sidebar width */}
      <main className="flex-1 md:ml-[240px] pb-20 md:pb-0 min-h-screen">
        <Suspense fallback={<DashboardSkeleton />}>
          <CoursesSection />
        </Suspense>
      </main>
    </div>
  );
}
