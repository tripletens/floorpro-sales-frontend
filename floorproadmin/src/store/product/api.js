import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, API_LOCAL_URL } from "../../config";
// import { useDispatch, useSelector } from "react-redux";

// const token = useSelector((state) => state.auth.token);
// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_LOCAL_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const access_token = sessionStorage.getItem("access_token") ? sessionStorage.getItem("access_token") : null;

      // console.log({ token, access_token });
      // headers.set("content-type", "application/json");
      // headers.set("Accept", "application/json");


      if (access_token) {
        headers.set("authorization", `Bearer ${access_token}`);
        headers.set("Access-Control-Allow-Origin", "*");
        // headers.set("Content-Type", "application/json");
        // headers.set("Content-Type", "multipart/form-data");
      }
  
      return headers;
    },
  }),
  endpoints: (builder) => ({
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

    addProduct: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      // name, quantity, price, image, description, square_meter,category_id, vendor_id 
      query: (payload) => ({
        url: "/add_product",
        method: "POST",
        // headers: { 'Content-Type': 'multipart/form-data'},
        body: {
          name: payload.name,
          quantity: payload.quantity,
          image: payload.image,
          price: payload.price,
          description: payload.description,
          square_meter: payload.square_meter,
          category_id: payload.product_category,
          vendor_id: payload.vendor_id,
        },
      }),
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useFetchAllProductsQuery, 
  useFetchProductsByIdQuery,
  useAddProductMutation
} = productApi;
