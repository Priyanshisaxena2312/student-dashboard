"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  User,
  ChevronLeft,
  Flame,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard", href: "/" },
  { icon: BookOpen, label: "Courses", id: "courses", href: "/courses" },
  { icon: BarChart3, label: "Analytics", id: "analytics", href: "/analytics" },
  { icon: User, label: "Profile", id: "profile", href: "/profile" },
  { icon: Settings, label: "Settings", id: "settings", href: "/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const pathname = usePathname() || "/";

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className={`hidden md:flex flex-col fixed left-0 top-0 h-screen z-40
          bg-surface-800/80 backdrop-blur-xl border-r border-white/5
          transition-[width] duration-300 ease-in-out
          ${collapsed ? "w-[72px]" : "w-[240px]"}`}
      >
        {/* Logo */}
        <header className="flex items-center gap-3 px-4 h-16 border-b border-white/5">
          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="font-semibold text-sm whitespace-nowrap overflow-hidden"
              >
                LearnHub
              </motion.span>
            )}
          </AnimatePresence>
        </header>

        {/* Nav Items */}
        <ul className="flex-1 flex flex-col gap-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.id} className="relative">
                <Link href={item.href} onClick={() => setActiveItem(item.id)} className={`relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg
                  text-sm font-medium transition-colors duration-200
                  ${isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <item.icon className="w-5 h-5 flex-shrink-0 relative z-10" />
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="relative z-10 whitespace-nowrap overflow-hidden"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Collapse Toggle */}
        <footer className="px-3 py-4 border-t border-white/5">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg
              text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors"
          >
            <motion.div
              animate={{ rotate: collapsed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft className="w-5 h-5 flex-shrink-0" />
            </motion.div>
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="whitespace-nowrap overflow-hidden"
                >
                  Collapse
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </footer>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-800/90 backdrop-blur-xl border-t border-white/5">
        <ul className="flex items-center justify-around px-2 py-2">
          {navItems.slice(0, 4).map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => setActiveItem(item.id)}
                className={`relative flex flex-col items-center gap-1 px-4 py-2 rounded-lg
                  text-xs font-medium transition-colors
                  ${activeItem === item.id ? "text-white" : "text-zinc-400"}`}
              >
                {activeItem === item.id && (
                  <motion.div
                    layoutId="mobile-nav-active"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <item.icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
