import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

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
      state.backgroundPalette = backgrounds[state.part] || "none";
    },
    // bgPalette: (state, payload) => {
    //   //   const reduxStore = store.getState();
    //   //   const section2part = reduxStore.section2.currentPart;
    //   state.backgroundPalette = backgrounds[payload];
    // },
  },
  //   extraReducers: {
  //     ["section2/currentPart"]: (state) => {
  //       state.backgroundPalette = backgrounds[2];
  //     },
  //   },
});

export default section2.reducer;
export const { currentPart, bgPalette } = section2.actions;
