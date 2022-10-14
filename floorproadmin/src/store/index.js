import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./auth";
import { authApi } from "./auth/api";


export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    // shop: shopReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
});
