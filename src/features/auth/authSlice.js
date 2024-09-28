import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

// For demonstration, we'll mock the authentication process
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
    signupStart(state) {
      state.loading = true;
      state.error = null;
    },
    signupSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    signupFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  signupStart,
  signupSuccess,
  signupFailure,
} = authSlice.actions;

// Thunks for asynchronous actions
export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(credentials),
    // });
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    // const data = await response.json();
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Mock response
    const user = { id: 1, name: "John Doe", email: credentials.email };
    const token = "fake-jwt-token";
    // Save token to localStorage
    localStorage.setItem("token", token);
    dispatch(loginSuccess({ user, token }));
  } catch (error) {
    dispatch(loginFailure("Login failed"));
  }
};

export const signup = (data) => async (dispatch) => {
  dispatch(signupStart());
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Mock response
    const user = { id: 2, name: data.name, email: data.email };
    const token = "fake-jwt-token";
    localStorage.setItem("token", token);
    dispatch(signupSuccess({ user, token }));
  } catch (error) {
    dispatch(signupFailure("Signup failed"));
  }
};

export const performLogout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch(logout());
};

export default authSlice.reducer;
