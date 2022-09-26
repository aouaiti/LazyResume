import { configureStore } from "@reduxjs/toolkit";
import theme from "./globalUiVars/theme";
import currentSection from "./globalUiVars/currentSection";
import section2 from "./globalUiVars/section2";
import triggers from "./globalUiVars/triggers";

const store = configureStore({
  reducer: {
    theme,
    currentSection,
    section2,
    triggers,
  },
});

store.subscribe(() => {
  console.log("state changed");
  console.log(store.getState().section2);
});

export default store;
