import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  Section: 1,
};

const currentSection = createSlice({
  name: "current-section",
  initialState,
  reducers: {
    sectionIndex: (state, action) => {
      state.Section = action.payload;
    },
  },
});

export default currentSection.reducer;
export const { sectionIndex } = currentSection.actions;
