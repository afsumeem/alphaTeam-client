import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addToTeam: (state, action) => {
      const existing = state.users.find(
        (user) => user._id === action.payload._id
      );

      if (!existing) {
        state.users.push(action.payload);
      }
    },
    removeFromTeam: (state, action) => {
      state.users = state.users.filter(
        (user) => user._id !== action.payload._id
      );
    },
  },
});

export const { addToTeam, removeFromTeam } = userSlice.actions;

export default userSlice.reducer;
