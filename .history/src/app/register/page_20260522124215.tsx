"use client";

import { useState } from "react";

import { useAuth } from "@/src/hooks/useAuth";

export default function RegisterPage() {

  const { register } = useAuth();

  const [formData, setFormData] =
    useState({
      full_name: "",
      email: "",
      password: "",
      organization_name: "",
    });

  const handleRegister =
    async () => {

      try {

        await register(formData);

      } catch (error) {

        console.log(error);

        alert("Registration failed");
      }
    };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">

      <div className="w-[450px] rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-3xl font-bold">

          Create Account

        </h1>

        <p className="mb-8 text-slate-500">

          Register your organization

        </p>

        <div className="space-y-4">

          <input
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
            onChange={(e) =>
              setFormData({
                ...formData,
                full_name:
                  e.target.value,
              })
            }
          />

          <input
            placeholder="Organization Name"
            className="w-full rounded-lg border p-3"
            onChange={(e) =>
              setFormData({
                ...formData,
                organization_name:
                  e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            className="w-full rounded-lg border p-3"
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
            placeholder="Password"
            className="w-full rounded-lg border p-3"
            onChange={(e) =>
              setFormData({
                ...formData,
                password:
                  e.target.value,
              })
            }
          />

          <button
            onClick={handleRegister}
            className="w-full rounded-lg bg-black py-3 text-white"
          >

            Register

          </button>

        </div>

      </div>

    </div>
  );
}