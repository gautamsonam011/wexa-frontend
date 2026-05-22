"use client";

export default function Navbar() {

  return (
    <div className="flex h-[80px] items-center justify-between border-b bg-white px-8">

      <h1 className="text-2xl font-bold">
        Analytics Dashboard
      </h1>

      <div className="flex items-center gap-4">

        <div className="h-10 w-10 rounded-full bg-slate-200" />

      </div>
    </div>
  );
}