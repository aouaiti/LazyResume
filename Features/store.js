import { configureStore } from "@reduxjs/toolkit";
import theme from "./globalUiVars/theme";
import currentSection from "./globalUiVars/currentSection";
import section2 from "./globalUiVars/section2";
import section3 from "./globalUiVars/section3";

const store = configureStore({
  reducer: {
    theme,
    currentSection,
    section2,
    section3,
  },
});

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;
