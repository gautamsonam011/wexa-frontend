import api from "./api";

export const loginUser =
  async (
    payload: {
      email: string;
      password: string;
    }
  ) => {

    const formData =
      new URLSearchParams();

    formData.append(
      "username",
      payload.email
    );

    formData.append(
      "password",
      payload.password
    );

    const response =
      await api.post(
        "/auth/login",
        formData,
        {
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
        }
      );

    return response.data;
};

export const registerUser =
  async (
    payload: {
      full_name: string;
      organization_name: string;
      email: string;
      password: string;
    }
  ) => {

    const response =
      await api.post(
        "/auth/register",
        payload
      );

    return response.data;
};