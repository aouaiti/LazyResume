import { createSlice } from "@reduxjs/toolkit";
import { currentSec } from "./currentSection";

const initialState = {
  rotation: 0,
};

const section3 = createSlice({
  name: "section3",
  initialState,
  reducers: {
    rotate: (state, action) => {
      //   console.log(section3.actions.rotate(20));
      state.rotation += action.payload;
      //   section3.actions.rotate(20);
    },
  },
});

// store.subscribe(() => {
//   console.log(store.getState().section3);
// });

export default section3.reducer;
export const { rotate } = section3.actions;
