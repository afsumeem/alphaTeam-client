import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
});

export const { toggleState } = teamSlice.actions;

export default teamSlice.reducer;
