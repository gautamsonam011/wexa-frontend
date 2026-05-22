import api from "./api";

import {
  LoginPayload,
  RegisterPayload,
  TokenResponse,
} from "@/types/auth.types";

export const loginUser = async (
  payload: LoginPayload
): Promise<TokenResponse> => {

  const response = await api.post(
    "/auth/login",
    payload
  );

  return response.data;
};

export const registerUser = async (
  payload: RegisterPayload
): Promise<TokenResponse> => {

  const response = await api.post(
    "/auth/register",
    payload
  );

  return response.data;
};