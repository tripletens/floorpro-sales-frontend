import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./auth";
import { authApi } from "./auth/api";
import { categoryApi } from "./category/api";
import { OrderSlice } from "./orders";
import { orderApi } from "./orders/api";
import { productApi } from "./product/api";
import { usersApi } from "./users/api";


export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    order: OrderSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
});
