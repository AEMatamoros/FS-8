import axios from "axios";
//Importar las acciones que controlaran el estado asincrono
import {
  asyncFetchTasksLoading,
  asyncFetchTasksSucced,
  asyncFetchTasksError,
  asyncAddTask,
  asyncUpdateTask,
  asyncDeleteTask,
} from "../slices/taskSlices";
axios.defaults.baseURL = "http://localhost:3000";

export const fetchTasks = () => async (dispatch) => {
  try {
    // Indicador de carga
    dispatch(asyncFetchTasksLoading());
    // Petición HTTP
    const response = await axios.get("/tasks");
    // Manejo de los datos
    dispatch(asyncFetchTasksSucced(response.data));
  } catch (e) {
    // Manejo de los errores
    dispatch(asyncFetchTasksError(e.message));
  }
};

export const fetchAddTask = (task) => async (dispatch) => {
  try {
    // Indicador de carga
    dispatch(asyncFetchTasksLoading());
    // Petición HTTP
    const response = await axios.post("/tasks", { ...task });
    // Manejo de los datos
    dispatch(asyncAddTask(response.data));
  } catch (e) {
    // Manejo de los errores
    dispatch(asyncFetchTasksError(e.message));
  }
};

export const fetchUpdateTask = (task) => async (dispatch) => {
  try {
    // Indicador de carga
    dispatch(asyncFetchTasksLoading());
    // Petición HTTP
    const response = await axios.put("/tasks/" + task.id, {
      ...task,
      completed: !task.completed,
    });
    // Manejo de los datos
    dispatch(asyncUpdateTask(response.data));
  } catch (e) {
    // Manejo de los errores
    dispatch(asyncFetchTasksError(e.message));
  }
};

export const fetchDeleteTask = (task) => async (dispatch) => {
  try {
    // Indicador de carga
    dispatch(asyncFetchTasksLoading());
    // Petición HTTP
    const response = await axios.delete("/tasks/" + task.id);
    // Manejo de los datos
    dispatch(asyncDeleteTask({ id: task.id, ...response }));
  } catch (e) {
    // Manejo de los errores
    dispatch(asyncFetchTasksError(e.message));
  }
};
