"use client";

import { useEffect } from "react";

import {
  getAlerts,
} from "@/services/alert.service";

import {
  useAlertStore,
} from "@/store/alertStore";

export const useAlerts =
  () => {

    const alerts =
      useAlertStore(
        (state) =>
          state.alerts
      );

    const setAlerts =
      useAlertStore(
        (state) =>
          state.setAlerts
      );

    const fetchAlerts =
      async () => {

        const data =
          await getAlerts();

        setAlerts(data);
      };

    useEffect(() => {

      fetchAlerts();

    }, []);

    return {
      alerts,
    };
};