"use client";

import { useRouter } from "next/navigation";

import {
  loginUser,
  registerUser,
} from "@/services/auth.service";

import {
  useAuthStore,
} from "@/store/authStore";

export const useAuth = () => {

  const router = useRouter();

  const setToken =
    useAuthStore(
      (state) => state.setToken
    );

  const login = async (
    email: string,
    password: string
  ) => {

    const data =
      await loginUser({
        email,
        password,
      });

    setToken(
      data.access_token
    );

    router.push(
      "/dashboard"
    );
  };

  const register = async (
    payload: any
  ) => {

    const data =
      await registerUser(
        payload
      );

    setToken(
      data.access_token
    );

    router.push(
      "/dashboard"
    );
  };

  return {
    login,
    register,
  };
};