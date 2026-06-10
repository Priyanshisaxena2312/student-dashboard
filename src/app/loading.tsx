import DashboardSkeleton from "@/components/SkeletonLoader";

export default function Loading() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar placeholder */}
      <div className="hidden md:block w-[240px] flex-shrink-0" />
      <main className="flex-1 pb-20 md:pb-0">
        <DashboardSkeleton />
      </main>
    </div>
  );
}
