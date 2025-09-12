import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  authToken: string | null;
  user: Record<string, string | number | boolean> | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  authToken: null,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearAuth(state) {
      state.authToken = null;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setAuthToken, setUser, setLoading, setError, clearAuth } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
