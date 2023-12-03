import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
  },
});

export const { toggleState } = userSlice.actions;

export default userSlice.reducer;
