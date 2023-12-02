import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ search, gender }) => ({
        url: "/filteredUsers",
        params: { search, gender },
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
