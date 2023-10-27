import { createSlice } from "@reduxjs/toolkit";
export const initialState = { filter: "all" };

const filterSlice = createSlice({
  // Nombre del slice
  name: "filter",
  // Estado inicial del reducer del slice
  initialState: initialState,
  // Objeto de reducers
  reducers: {
    filterTaskAction(state, action) {
      return {
        ...state,
        filter: action.payload.filterState,
      };
    },
  },
});

// Creadores de acciones
export const { filterTaskAction } = filterSlice.actions;
// Reducer del slice
export const filterReducer = filterSlice.reducer;
