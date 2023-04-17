import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, API_LOCAL_URL } from "../../config";
// import { useDispatch, useSelector } from "react-redux";

// const token = useSelector((state) => state.auth.token);
// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_LOCAL_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const access_token = sessionStorage.getItem("access_token")
        ? sessionStorage.getItem("access_token")
        : null;

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
    updateBasicInformation: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (payload) => ({
        url: "/update_basic_information",
        method: "POST",
        body: {
          user_id: payload.user_id,
          name: payload.name,
          username: payload.username,
          status: payload.status,
          department_id: payload.department_id,
          gender: payload.gender,
          dob: payload.dob,
          role: payload.role,
        },
      }),
    }),

    updateContactInformation: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (payload) => ({
        url: "/update_contact_information",
        method: "POST",
        body: {
          user_id: payload.user_id,
          phone: payload.phone,
          home_address: payload.home_address,
          postal_code: payload.postal_code,
          city: payload.city,
          state: payload.state,
          country: payload.country,
        },
      }),
    }),

    updateSocialInformation: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (payload) => ({
        url: "/update_social_information",
        method: "POST",
        body: {
          user_id: payload.user_id,
          twitter: payload.twitter,
          instagram: payload.instagram,
          facebook: payload.facebook,
          whatsapp: payload.whatsapp,
        },
      }),
    }),

    updatePasswordInformation: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (payload) => ({
        url: "/update_password_information",
        method: "POST",
        body: {
          user_id: payload.user_id,
          old_password: payload.old_password,
          confirm_password: payload.confirm_password,
          new_password: payload.new_password
        },
      }),
    }),

    fetchAllUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useFetchAllUsersQuery, 
  useUpdateBasicInformationMutation, 
  useUpdateContactInformationMutation,
  useUpdateSocialInformationMutation,
  useUpdatePasswordInformationMutation
} =
  usersApi;
