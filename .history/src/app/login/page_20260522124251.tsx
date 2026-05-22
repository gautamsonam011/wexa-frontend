"use client";

import { useState } from "react";

import { useAuth } from "@/src/hooks/useAuth";

export default function LoginPage() {

  const { login } = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin =
    async () => {

      try {

        setLoading(true);

        await login(
          email,
          password
        );

      } catch (error) {

        console.log(error);

        alert("Login failed");

      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">

      <div className="w-[420px] rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-3xl font-bold">

          Welcome Back

        </h1>

        <p className="mb-8 text-slate-500">

          Login to continue

        </p>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-lg bg-black py-3 text-white"
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </div>

      </div>

    </div>
  );
}