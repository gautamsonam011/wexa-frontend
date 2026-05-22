import { create } from "zustand";

import {
  setToken,
  removeToken,
} from "@/utils/storage";

interface AuthState {

  token: string | null;

  isAuthenticated: boolean;

  setAuthToken: (
    token: string
  ) => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({

    token: null,

    isAuthenticated: false,

    setAuthToken: (
      token
    ) => {

      setToken(token);

      set({
        token,
        isAuthenticated: true,
      });
    },

    logout: () => {

      removeToken();

      set({
        token: null,
        isAuthenticated: false,
      });
    },
}));