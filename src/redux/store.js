import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";

// import logger from "./middlewares/logger";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
