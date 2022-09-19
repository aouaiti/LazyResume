import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const globalUiValues = createSlice({
  name: "globalUiValues",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode === "dark" ? (state.mode = "light") : (state.mode = "dark");
    },
  },
});

export default globalUiValues.reducer;
export const { toggleMode } = globalUiValues.actions;
