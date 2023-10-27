import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers/taskReducer";

export const store = configureStore({
  reducer: {
    task: rootReducer,
  },
  //   middleware: getDefaultMiddleware({
  //     immutableCheck: false,
  //   }),
});
