import { configureStore } from "@reduxjs/toolkit";
import theme from "./globalUiVars/theme";
import section2 from "./globalUiVars/section2";

const store = configureStore({
  reducer: {
    theme,
    section2,
  },
});

export default store;
