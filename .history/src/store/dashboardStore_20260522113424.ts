import { create } from "zustand";

interface Dashboard {

  id: string;

  name: string;

  description: string;
}

interface DashboardState {

  dashboards: Dashboard[];

  setDashboards: (
    dashboards: Dashboard[]
  ) => void;
}

export const useDashboardStore =
  create<DashboardState>((set) => ({

    dashboards: [],

    setDashboards: (dashboards) =>
      set({ dashboards }),
}));