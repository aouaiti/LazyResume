import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trigger: "toSection2",
  scroll: 0,
};

const triggers = createSlice({
  name: "triggers",
  initialState,
  reducers: {
    triggerInView: (state, action) => {
      state.trigger = action.payload;
    },
    scrollIndex: (state, action) => {
      state.scroll = action.payload;
    },
  },
});

export default triggers.reducer;
export const { triggerInView, scrollIndex } = triggers.actions;
