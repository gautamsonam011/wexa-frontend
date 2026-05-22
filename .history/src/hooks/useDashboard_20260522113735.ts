"use client";

import { useEffect } from "react";

import {
  getDashboards,
} from "@/src/services/dashboard.service";

import {
  useDashboardStore,
} from "@/src/store/dashboardStore";

export const useDashboard =
  () => {

    const dashboards =
      useDashboardStore(
        (state) =>
          state.dashboards
      );

    const setDashboards =
      useDashboardStore(
        (state) =>
          state.setDashboards
      );

    const fetchDashboards =
      async () => {

        const data =
          await getDashboards();

        setDashboards(
          data
        );
      };

    useEffect(() => {

      fetchDashboards();

    }, []);

    return {
      dashboards,
      fetchDashboards,
    };
};