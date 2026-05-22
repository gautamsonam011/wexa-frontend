import api from "./api";

export const getDashboards = async () => {

  const response = await api.get(
    "/dashboards"
  );

  return response.data;
};

export const createDashboard = async (
  payload: {
    name: string;
    description: string;
  }
) => {

  const response = await api.post(
    "/dashboards",
    payload
  );

  return response.data;
};