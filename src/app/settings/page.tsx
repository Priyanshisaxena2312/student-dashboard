"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <main className="min-h-screen md:ml-[240px] p-8">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-2 text-zinc-400">Manage your account and preferences.</p>

      <section className="mt-6 space-y-4">
        <div className="flex items-center justify-between p-4 rounded-2xl border border-white/[0.06]">
          <div>
            <h3 className="font-medium">Dark Mode</h3>
            <p className="text-sm text-zinc-400">Toggle theme between dark and light.</p>
          </div>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </div>

        <div className="flex items-center justify-between p-4 rounded-2xl border border-white/[0.06]">
          <div>
            <h3 className="font-medium">Email Updates</h3>
            <p className="text-sm text-zinc-400">Receive course updates and newsletters.</p>
          </div>
          <input type="checkbox" checked={emailUpdates} onChange={() => setEmailUpdates(!emailUpdates)} />
        </div>
      </section>
    </main>
  );
}
