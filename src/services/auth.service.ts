import api from "./api";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  full_name: string;
  organization_name: string;
}

export const loginUser = async (
  payload: LoginPayload
) => {

  const response = await api.post(
    "/auth/login",
    payload
  );

  return response.data;
};

export const registerUser = async (
  payload: RegisterPayload
) => {

  const response = await api.post(
    "/auth/register",
    payload
  );

  return response.data;
};