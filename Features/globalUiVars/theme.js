import { createSlice } from "@reduxjs/toolkit";
import { sectionIndex } from "./currentSection";

const initialState = {
  mode: "dark",
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode === "dark" ? (state.mode = "light") : (state.mode = "dark");
    },
  },
  // extraReducers: {
  //   [sectionIndex]: (state, action) => {
  //     console.log(action.payload);
  //   },
  // },
});

export default theme.reducer;
export const { toggleMode } = theme.actions;
