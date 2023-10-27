import axios from "axios";
import {
  fetchingInProgress,
  fetchingFullfiled,
  fetchingRejected,
  fetchAddTask,
  fetchDeleteTask,
  fetchUpdateTask,
} from "../slices/taskSlices";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "http://localhost:4000/api";
//Thunk
export const fetchTasksThunk = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      axios.defaults.headers.common["x-token"] = `${localStorage.getItem(
        "x-token"
      )}`;
      const response = await axios.get("/tasks");
      // Si la petición tiene éxito, devolvemos un promise con datos
      return response.data;
    } catch (e) {
      // Si la petición falla, devuelve un promise
      // que será rechazado con un texto de error
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTaskThunk = createAsyncThunk(
  "tasks/addTask",
  async (task, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { ...task });
      // Si la petición tiene éxito, devolvemos un promise con datos
      return response.data;
    } catch (e) {
      // Si la petición falla, devuelve un promise
      // que será rechazado con un texto de error
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
//Async
export const fetchTasks = () => async (dispatch) => {
  try {
    // Indicador de carga
    dispatch(fetchingInProgress());
    // Petición HTTP
    const response = await axios.get("/tasks");
    // Manejo de los datos
    dispatch(fetchingFullfiled(response.data));
  } catch (e) {
    // Manejo de los errores
    dispatch(fetchingRejected(e.message));
  }
};

export const addTaskAsync = (task) => async (dispatch) => {
  try {
    // Indicador de carga
    dispatch(fetchingInProgress());
    // Petición HTTP
    const response = await axios.post("/tasks", { ...task });
    // Manejo de los datos
    dispatch(fetchAddTask(response.data));
  } catch (e) {
    // Manejo de los errores
    dispatch(fetchingRejected(e.message));
  }
};

export const deleteTaskAsync = (id) => async (dispatch) => {
  try {
    // Indicador de carga
    dispatch(fetchingInProgress());
    // Petición HTTP
    const response = await axios.delete("/tasks/" + id);
    console.log(response);
    // Manejo de los datos
    dispatch(fetchDeleteTask({ id }));
  } catch (e) {
    // Manejo de los errores
    dispatch(fetchingRejected(e.message));
  }
};

export const updateTaskAsync = (updatedTask) => async (dispatch) => {
  try {
    // Indicador de carga
    dispatch(fetchingInProgress());
    console.log(updatedTask.id);
    // Petición HTTP
    const response = await axios.put("/tasks/" + updatedTask.id, {
      ...updatedTask,
      completed: !updatedTask.completed,
    });

    // Manejo de los datos
    dispatch(fetchUpdateTask({ ...updatedTask }));
  } catch (e) {
    // Manejo de los errores
    dispatch(fetchingRejected(e.message));
  }
};
