import { createSlice, createSelector } from "@reduxjs/toolkit";
import { rotate } from "./section3";

const initialState = {
  Section: 1,
};

const currentSection = createSlice({
  name: "current-section",
  initialState,
  reducers: {
    sectionIndex: (state, action) => {
      state.Section = action.payload;
      // if (state.Section !== 3) rotate(-5);
      rotate(15);
    },
  },
});

export default currentSection.reducer;
export const currentSec = currentSection;
export const { sectionIndex } = currentSection.actions;
