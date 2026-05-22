"use client";

import { useEffect } from "react";

import {
  createWebSocketConnection,
} from "@/services/websocket.service";

export const useWebSocket =
  () => {

    useEffect(() => {

      const socket =
        createWebSocketConnection();

      socket.onmessage = (
        event
      ) => {

        console.log(
          "Realtime Event:",
          event.data
        );
      };

      return () => {

        socket.close();
      };

    }, []);
};