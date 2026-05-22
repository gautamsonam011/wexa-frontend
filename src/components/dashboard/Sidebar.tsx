"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  BarChart3,
  Bell,
  FileText,
  Settings,
} from "lucide-react";

export default function Sidebar() {

  return (
    <div className="flex h-screen w-[260px] flex-col bg-black p-6 text-white">

      <h1 className="mb-12 text-3xl font-bold">
        Wexa
      </h1>

      <div className="space-y-6">

        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >
          <LayoutDashboard size={20} />

          Dashboard
        </Link>

        <Link
          href="/analytics"
          className="flex items-center gap-3"
        >
          <BarChart3 size={20} />

          Analytics
        </Link>

        <Link
          href="/alerts"
          className="flex items-center gap-3"
        >
          <Bell size={20} />

          Alerts
        </Link>

        <Link
          href="/reports"
          className="flex items-center gap-3"
        >
          <FileText size={20} />

          Reports
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3"
        >
          <Settings size={20} />

          Settings
        </Link>

      </div>
    </div>
  );
}