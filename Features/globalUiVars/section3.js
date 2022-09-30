import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rotation: 0,
};

const section3 = createSlice({
  name: "section3",
  initialState,
  reducers: {
    rotate: (state, action) => {
      state.rotation += action.payload;
    },
  },
});

export default section3.reducer;
export const { rotate } = section3.actions;
