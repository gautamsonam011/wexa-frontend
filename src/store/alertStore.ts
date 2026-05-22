import { create } from "zustand";

interface Alert {

  id: string;

  name: string;

  metric_name: string;

  threshold: number;
}

interface AlertState {

  alerts: Alert[];

  setAlerts: (
    alerts: Alert[]
  ) => void;
}

export const useAlertStore =
  create<AlertState>((set) => ({

    alerts: [],

    setAlerts: (alerts) =>
      set({ alerts }),
}));