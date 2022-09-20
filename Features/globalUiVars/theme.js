import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

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
    // section2part: (state, action) => {
    //   state.section2part = state.section2part + action.payload;
    // },
  },
});

export default theme.reducer;
export const { toggleMode } = theme.actions;
