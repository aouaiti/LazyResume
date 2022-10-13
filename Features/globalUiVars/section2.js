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
  selectedResume: {
    active: false,
    index: undefined,
    bodyWidth: undefined,
    resumeWidth: undefined,
    resumeLeftPosition: undefined,
    centerFormula: "(bodyWidth - resumeWidth) / 2 - resumeLeftPosition",
    center: undefined,
  },
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
    selectResume: (state, action) => {
      state.selectedResume = { ...state.selectedResume, ...action.payload };
      if (state.selectedResume.active)
        state.selectedResume.center =
          (state.selectedResume.bodyWidth - state.selectedResume.resumeWidth) /
            2 -
          state.selectedResume.resumeLeftPosition;
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
export const { currentPart, bgPalette, selectResume } = section2.actions;
