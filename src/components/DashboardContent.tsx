"use client";

import { Course } from "@/types";
import { BentoGrid } from "./BentoGrid";
import HeroTile from "./HeroTile";
import CourseTile from "./CourseTile";
import ActivityTile from "./ActivityTile";

interface DashboardContentProps {
  courses: Course[];
}

export default function DashboardContent({ courses }: DashboardContentProps) {
  return (
    <BentoGrid>
      {/* Hero Tile - spans 2 columns */}
      <HeroTile name="Alex" streak={12} index={0} />

      {/* Activity Tile */}
      <ActivityTile index={1} />

      {/* Dynamic Course Tiles */}
      {courses.map((course, i) => (
        <CourseTile key={course.id} course={course} index={i + 2} />
      ))}
    </BentoGrid>
  );
}
