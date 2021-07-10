import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: null,
    email: null,
    displayName: null,
    emailVerified: null,
    initialized: false,
  },
  reducers: {
    update: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { update } = userSlice.actions;

export default userSlice.reducer;
