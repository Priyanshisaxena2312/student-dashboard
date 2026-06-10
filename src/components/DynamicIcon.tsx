import React from "react";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const formatIconName = (iconName: string): string => {
    return iconName
      .split(/[-_]/)
      .map(
        (part) =>
          part.charAt(0).toUpperCase() +
          part.slice(1).toLowerCase()
      )
      .join("");
  };

  const formattedName = formatIconName(name);

  const icon =
    LucideIcons[
      formattedName as keyof typeof LucideIcons
    ];

  const IconComponent = (icon || LucideIcons.BookOpen) as React.ElementType;

  return <IconComponent {...props} />;
}