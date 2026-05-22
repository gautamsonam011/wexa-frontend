import {
  getToken,
} from "./storage";

export const isAuthenticated =
  () => {

    return !!getToken();
};

export const logoutUser =
  () => {

    localStorage.removeItem(
      "token"
    );

    window.location.href =
      "/login";
};