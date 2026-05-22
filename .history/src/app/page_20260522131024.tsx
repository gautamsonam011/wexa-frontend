"use client";

import Link from "next/link";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

export default function HomePage() {

  const router = useRouter();

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (token) {

      router.push("/dashboard");
    }

  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">

      <div className="w-[500px] rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="mb-4 text-center text-5xl font-bold">

          Wexa Analytics

        </h1>

        <p className="mb-10 text-center text-slate-500">

          Enterprise Realtime Analytics Platform

        </p>

        <div className="space-y-4">

          <Link href="/login">

            <button className="w-full rounded-xl bg-black py-4 text-white transition hover:bg-slate-800">

              Login

            </button>

          </Link>

          <Link href="/register">

            <button className="w-full rounded-xl border border-slate-300 py-4 transition hover:bg-slate-100">

              Register

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}