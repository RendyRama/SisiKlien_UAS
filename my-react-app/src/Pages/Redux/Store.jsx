import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";

// eslint-disable-next-line no-undef
const isDevelopment = process.env.NODE_ENV === "development"; // Cek mode pengembangan

const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    isDevelopment
      ? getDefaultMiddleware().concat((storeAPI) => (next) => (action) => {
          // Debug action dan state hanya dalam mode development
          console.log("Dispatching action:", action);
          const result = next(action);
          console.log("State setelah dispatch:", storeAPI.getState());
          return result;
        })
      : getDefaultMiddleware(),
});

export default Store;
