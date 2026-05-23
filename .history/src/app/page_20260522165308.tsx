"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  loginUser,
  registerUser,
} from "@/services/auth.service";

export default function HomePage() {

  const router = useRouter();

  const [isLogin, setIsLogin] =
    useState(true);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      full_name: "",
      organization_name: "",
      email: "",
      password: "",
    });

  const handleSubmit =
    async () => {

      try {

        setLoading(true);

        console.log(formData);

        let response;

        if (isLogin) {

          response =
            await loginUser({
              email:
                formData.email,
              password:
                formData.password,
            });

        } else {

          response =
            await registerUser({
              full_name:
                formData.full_name,
              organization_name:
                formData.organization_name,
              email:
                formData.email,
              password:
                formData.password,
            });
        }

        console.log(response);

        localStorage.setItem(
          "token",
          response.access_token
        );

        router.push(
          "/dashboards"
        );

      } catch (error) {

        console.log(error);

        alert(
          isLogin
            ? "Login Failed"
            : "Registration Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-500/10" />

      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">

        <div className="flex flex-col justify-center">

          <div className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur">

            <span className="text-sm text-cyan-300">

              Enterprise Analytics Platform

            </span>

          </div>

          <h1 className="text-6xl font-extrabold leading-tight text-white">

            Wexa
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              {" "}Analytics

            </span>

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">

            Monitor realtime events,
            dashboards, reports,
            analytics and alerts
            from one intelligent platform.

          </p>

          <div className="mt-10 flex gap-5">

            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">

              <h2 className="text-3xl font-bold text-white">

                50K+

              </h2>

              <p className="text-slate-400">

                Events Processed

              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">

              <h2 className="text-3xl font-bold text-white">

                99.9%

              </h2>

              <p className="text-slate-400">

                System Uptime

              </p>

            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">

          <div className="mb-8 flex gap-4">

            <button
              onClick={() =>
                setIsLogin(true)
              }
              className={`flex-1 rounded-xl py-3 font-semibold transition ${
                isLogin
                  ? "bg-cyan-500 text-white"
                  : "bg-white/5 text-slate-300"
              }`}
            >

              Login

            </button>

            <button
              onClick={() =>
                setIsLogin(false)
              }
              className={`flex-1 rounded-xl py-3 font-semibold transition ${
                !isLogin
                  ? "bg-cyan-500 text-white"
                  : "bg-white/5 text-slate-300"
              }`}
            >

              Register

            </button>

          </div>

          <div className="space-y-5">

            {!isLogin && (

              <>
                <input
                  value={formData.full_name}
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-slate-500"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      full_name:
                        e.target.value,
                    })
                  }
                />

                <input
                  value={formData.organization_name}
                  placeholder="Organization Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-slate-500"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      organization_name:
                        e.target.value,
                    })
                  }
                />
              </>
            )}

            <input
              type="email"
              value={formData.email}
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-slate-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email:
                    e.target.value,
                })
              }
            />

            <input
              type="password"
              value={formData.password}
              placeholder="Password"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none placeholder:text-slate-500"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password:
                    e.target.value,
                })
              }
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white transition hover:opacity-90"
            >

              {loading
                ? "Please wait..."
                : isLogin
                ? "Login"
                : "Create Account"}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}