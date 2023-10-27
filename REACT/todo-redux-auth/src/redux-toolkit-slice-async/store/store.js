import { configureStore } from "@reduxjs/toolkit";

import { tasksReducer } from "../slices/taskSlices";
import { filterReducer } from "../slices/filterSlice";
export const store = configureStore({
  reducer: {
    task: tasksReducer,
    filterStatus: filterReducer,
  },
  //   middleware: getDefaultMiddleware({
  //     immutableCheck: false,
  //   }),
});
