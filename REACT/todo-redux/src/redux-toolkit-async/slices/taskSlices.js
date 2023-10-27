import { createSlice } from "@reduxjs/toolkit";
export const initialState = { tasks: [], isLoading: false, error: null };

const tasksSlice = createSlice({
  // Nombre del slice
  name: "tasks",
  // Estado inicial del reducer del slice
  initialState: initialState,
  // Objeto de reducers
  reducers: {
    asyncFetchTasksLoading(state, action) {
      state.isLoading = true;
    },
    asyncFetchTasksSucced(state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks = [...action.payload];
    },
    asyncFetchTasksError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    asyncAddTask(state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks = [...state.tasks, action.payload];
    },
    asyncUpdateTask(state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks = state.tasks.map((oldTask) => {
        if (oldTask.id === action.payload.id) {
          return { ...oldTask, completed: !oldTask.completed };
        } else {
          return oldTask;
        }
      });
    },
    asyncDeleteTask(state, action) {
      state.isLoading = false;
      state.error = null;
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
  },
});

// Creadores de acciones
export const {
  addTaskAction,
  updateTaskAction,
  deleteTaskAction,
  asyncFetchTasksLoading,
  asyncFetchTasksSucced,
  asyncFetchTasksError,
  asyncAddTask,
  asyncUpdateTask,
  asyncDeleteTask,
} = tasksSlice.actions;
// Reducer del slice
export const tasksReducer = tasksSlice.reducer;
