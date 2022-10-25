import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../config";
// import { useDispatch, useSelector } from "react-redux";

// const token = useSelector((state) => state.auth.token);
// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const access_token = sessionStorage.getItem("access_token") ? sessionStorage.getItem("access_token") : null;

      // console.log({ token, access_token });
      headers.set("content-type", "application/json");
      headers.set("Accept", "application/json");

      if (access_token) {
        headers.set("authorization", `Bearer ${access_token}`);
        headers.set("Access-Control-Allow-Origin", "*");
      }
  
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // login: builder.mutation({
    //   // note: an optional `queryFn` may be used in place of `query`
    //   query: (payload) => ({
    //     url: "/login",
    //     method: "POST",
    //     body: {
    //       email: payload.email,
    //       password: payload.password,
    //     },
    //   }),
    // }),
    
    fetchAllProducts: builder.query({
      query: () => ({
        url: "fetch_all_products",
        method: "GET",
      }),
    }),

    fetchProductsById: builder.query({
      query: (id) => ({
        url: `products_by_id/${id}`,
        method: "GET",
      }),
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useFetchAllProductsQuery, 
  useFetchProductsByIdQuery,
} = productApi;
