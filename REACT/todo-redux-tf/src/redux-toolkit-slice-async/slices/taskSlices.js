import { createSlice } from "@reduxjs/toolkit";
export const initialState = { tasks: [], loading: false, error: null };

const tasksSlice = createSlice({
  // Nombre del slice
  name: "tasks",
  // Estado inicial del reducer del slice
  initialState: initialState,
  // Objeto de reducers
  reducers: {
    fetchingInProgress(state) {
      state.loading = true;
    },
    fetchingFullfiled(state, action) {
      state.loading = false;
      state.tasks = action.payload;
    },
    fetchingRejected(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    fetchAddTask(state, action) {
      state.loading = false;
      state.tasks = [...state.tasks, action.payload];
    },
    fetchDeleteTask(state, action) {
      state.loading = false;
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    fetchUpdateTask(state, action) {
      state.loading = false;
      state.tasks = state.tasks.map((oldTask) => {
        if (oldTask.id === action.payload.id) {
          return { ...oldTask, completed: !oldTask.completed };
        } else {
          return oldTask;
        }
      });
    },
    addTaskAction(state, action) {
      return { ...state, tasks: [...state.tasks, action.payload] };
    },
    updateTaskAction(state, action) {
      return {
        ...state,
        tasks: state.tasks.map((oldTask) => {
          if (oldTask.id === action.payload.fetchUpdateTask.id) {
            return { ...oldTask, completed: !oldTask.completed };
          } else {
            return oldTask;
          }
        }),
      };
    },
    deleteTaskAction(state, action) {
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload.index),
      };
    },
  },
});

// Creadores de acciones
export const {
  addTaskAction,
  updateTaskAction,
  deleteTaskAction,
  fetchingInProgress,
  fetchingFullfiled,
  fetchingRejected,
  fetchAddTask,
  fetchDeleteTask,
  fetchUpdateTask,
} = tasksSlice.actions;
// Reducer del slice
export const tasksReducer = tasksSlice.reducer;
