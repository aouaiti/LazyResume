import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

const footer = createSlice({
  name: "footer",
  initialState,
  reducers: {
    makeVisible: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export default footer.reducer;
export const { makeVisible } = footer.actions;
