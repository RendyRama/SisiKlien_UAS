import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("auth_user") || "{}"), // Gunakan fallback {}
    token: localStorage.getItem("auth_token") || null, // Ambil token dari localStorage
  },

  reducers: {
    login: (state, action) => {
      const user = action.payload.user || {}; // Gunakan objek kosong jika user undefined
      const token = action.payload.token;

      state.user = user;
      state.token = token;

      localStorage.setItem("auth_user", JSON.stringify(user)); // Simpan user ke localStorage
      localStorage.setItem("auth_token", token); // Simpan token ke localStorage
    },

    logout: (state) => {
      // Reset Redux state
      state.user = {};
      state.token = null;

      // Hapus user dan token dari localStorage
      localStorage.removeItem("auth_user");
      localStorage.removeItem("auth_token");
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
