import { createSlice } from "@reduxjs/toolkit";
import { sectionIndex } from "./currentSection";
import { currentSection } from "./currentSection";

const backgrounds = [
  ["#006eb8", "#4795d1"],
  ["#a61322", "#d33f34"],
  ["#00986f", "#6cd96a"],
];

const initialState = {
  part: 0,
  backgroundPalette: backgrounds[0],
};

const section2 = createSlice({
  name: "section2",
  initialState,
  reducers: {
    currentPart: (state, action) => {
      state.part += action.payload;
      if (state.part === -1) state.part = 0;
      if (state.part === 3) state.part = 2;
      state.backgroundPalette = backgrounds[state.part] || "none";
    },
  },
  extraReducers: {
    [sectionIndex]: (state, action) => {
      if (action.payload >= 3) state.part = 2;
      if (action.payload === 1) state.part = 0;
    },
  },
});

export default section2.reducer;
export const { currentPart, bgPalette } = section2.actions;
