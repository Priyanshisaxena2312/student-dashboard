import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Dashboard | Next-Gen Learning",
  description: "A futuristic, animated education platform dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-surface-900 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
