"use client";

import Link from "next/link";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import {
  BarChart3,
  ShieldCheck,
  Activity,
} from "lucide-react";

export default function HomePage() {

  const router = useRouter();

  useEffect(() => {

    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {

      router.push(
        "/dashboard"
      );
    }

  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-500/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6">

        <div className="mb-10 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur">

          <p className="text-sm text-slate-300">

            Enterprise Realtime Analytics Platform

          </p>

        </div>

        <h1 className="max-w-5xl text-center text-6xl font-extrabold leading-tight">

          Analyze Realtime Data
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            {" "}With Intelligence

          </span>

        </h1>

        <p className="mt-8 max-w-2xl