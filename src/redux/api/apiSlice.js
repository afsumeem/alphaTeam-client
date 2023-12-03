import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alpha-team-backend.vercel.app/",
  }),
  tagTypes: ["users", "domain", "search", "gender", "available"],
  endpoints: () => ({}),
});
