import api from "./api";

export const getAlerts = async () => {

  const response = await api.get(
    "/alerts"
  );

  return response.data;
};

export const createAlert = async (
  payload: {
    name: string;
    metric_name: string;
    operator: string;
    threshold: number;
  }
) => {

  const response = await api.post(
    "/alerts",
    payload
  );

  return response.data;
};