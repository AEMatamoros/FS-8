import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTasksThunk,
  addTasksThunk,
  updateTasksThunk,
  deleteTasksThunk,
} from "../operations/taskOperations";
export const initialState = { tasks: [], isLoading: false, error: null };

const tasksSlice = createSlice({
  // Nombre del slice
  name: "tasks",
  // Estado inicial del reducer del slice
  initialState: initialState,
  // Objeto de reducers
  extraReducers: (builder) => {
    builder.addCase(fetchTasksThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTasksThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.tasks = [...action.payload];
    });
    builder.addCase(fetchTasksThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addTasksThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTasksThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.tasks = [...state.tasks, action.payload];
    });
    builder.addCase(addTasksThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(updateTasksThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateTasksThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.tasks = state.tasks.map((oldTask) => {
        if (oldTask.id === action.payload.id) {
          return { ...oldTask, completed: !oldTask.completed };
        } else {
          return oldTask;
        }
      });
    });
    builder.addCase(updateTasksThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteTasksThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTasksThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    });
    builder.addCase(deleteTasksThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// Reducer del slice
export const tasksReducer = tasksSlice.reducer;
