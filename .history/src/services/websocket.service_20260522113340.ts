export const createWebSocketConnection =
  () => {

    const socket = new WebSocket(
      "wss://wexabackend-8uzl.onrender.com/ws"
    );

    return socket;
  };