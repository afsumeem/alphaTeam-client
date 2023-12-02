import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        // providesTags: ["users"],
      }),
    }),
    getUser: builder.query({
      query: ({ search, gender }) => ({
        url: "/filteredUsers",
        params: { search, gender },
      }),
    }),
  }),
});

export const { useGetUserQuery, useGetAllUsersQuery } = userApi;
