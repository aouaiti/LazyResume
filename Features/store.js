import { configureStore } from "@reduxjs/toolkit";
import theme from "./globalUiVars/theme";
import section2 from "./globalUiVars/section2";
import triggers from "./globalUiVars/triggers";

const store = configureStore({
  reducer: {
    theme,
    section2,
    triggers,
  },
});

export default store;
