import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  // Convert snake_case or kebab-case to PascalCase
  const formatIconName = (iconName: string): string => {
    return iconName
      .split(/[-_]/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join("");
  };

  const formattedName = formatIconName(name);
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<LucideProps>>)[formattedName];

  if (!IconComponent) {
    // Fallback to BookOpen if icon not found
    const Fallback = LucideIcons.BookOpen;
    return <Fallback {...props} />;
  }

  return <IconComponent {...props} />;
}
