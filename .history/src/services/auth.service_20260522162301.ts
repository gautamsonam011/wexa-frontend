import api from "./api";

export const registerUser =
  async (
    payload: {
      email: string;
      password: string;
      full_name: string;
      organization_name: string;
    }
  ) => {

    const response =
      await api.post(
        "/auth/register",
        payload
      );

    return response.data;
};

export const loginUser =
  async (
    payload: {
      email: string;
      password: string;
    }
  ) => {

    const response =
      await api.post(
        "/auth/login",
        payload
      );

    return response.data;
};