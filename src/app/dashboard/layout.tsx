import { ReactNode } from "react";

import Sidebar from "@/src/components/dashboard/Sidebar";

import Navbar from "@/src/components/dashboard/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100">

        <Navbar />

        <div className="p-8">

          {children}

        </div>

      </div>

    </div>
  );
}