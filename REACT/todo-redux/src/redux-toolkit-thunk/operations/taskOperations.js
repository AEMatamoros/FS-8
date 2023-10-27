import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//Importar las acciones que controlaran el estado asincrono
axios.defaults.baseURL = "http://localhost:3000";
// Thunk
export const fetchTasksThunk = createAsyncThunk(
  "tasks/fetchAll",
  // Utilizamos el guión bajo como el nombre del primer parámetro,
  // ya que no lo necesitamos en esta operación.
  async (_, thunkAPI) => {
    try {
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

export const addTasksThunk = createAsyncThunk(
  "tasks/addTask",
  // Utilizamos el guión bajo como el nombre del primer parámetro,
  // ya que no lo necesitamos en esta operación.
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

export const updateTasksThunk = createAsyncThunk(
  "tasks/updateTask",
  // Utilizamos el guión bajo como el nombre del primer parámetro,
  // ya que no lo necesitamos en esta operación.
  async (task, thunkAPI) => {
    try {
      const response = await axios.put("/tasks/" + task.id, {
        ...task,
        completed: !task.completed,
      });
      // Si la petición tiene éxito, devolvemos un promise con datos
      return response.data;
    } catch (e) {
      // Si la petición falla, devuelve un promise
      // que será rechazado con un texto de error
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTasksThunk = createAsyncThunk(
  "tasks/deleteTask",
  // Utilizamos el guión bajo como el nombre del primer parámetro,
  // ya que no lo necesitamos en esta operación.
  async (task, thunkAPI) => {
    try {
      const response = await axios.delete("/tasks/" + task.id);
      // Si la petición tiene éxito, devolvemos un promise con datos
      return { id: task.id, ...response };
    } catch (e) {
      // Si la petición falla, devuelve un promise
      // que será rechazado con un texto de error
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
