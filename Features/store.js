import { configureStore } from "@reduxjs/toolkit";
import globalUiValues from "./globalUiVars/globalUiSlice";

const store = configureStore({
  reducer: {
    globalUiValues,
  },
});

export default store;
