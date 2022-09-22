import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trigger: "toSection2",
};

const triggers = createSlice({
  name: "triggers",
  initialState,
  reducers: {
    triggerInView: (state, action) => {
      state.trigger = action.payload;
    },
  },
});

export default triggers.reducer;
export const { triggerInView } = triggers.actions;
