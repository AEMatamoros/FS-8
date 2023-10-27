import { createSlice } from "@reduxjs/toolkit";
export const initialState = { tasks: [] };

const tasksSlice = createSlice({
  // Nombre del slice
  name: "tasks",
  // Estado inicial del reducer del slice
  initialState: initialState,
  // Objeto de reducers
  reducers: {
    addTaskAction(state, action) {
      return { ...state, tasks: [...state.tasks, action.payload] };
    },
    updateTaskAction(state, action) {
      return {
        ...state,
        tasks: state.tasks.map((oldTask, index) => {
          if (index === action.payload.index) {
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
export const { addTaskAction, updateTaskAction, deleteTaskAction } =
  tasksSlice.actions;
// Reducer del slice
export const tasksReducer = tasksSlice.reducer;
