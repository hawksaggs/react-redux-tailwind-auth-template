import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import toastMiddleware from "./middleware/toastMiddleware";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const preloadedState = {
  auth: {
    isAuthenticated: !!token,
    user: user,
    token: token,
    loading: false,
    error: null,
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(toastMiddleware),
  preloadedState,
});
