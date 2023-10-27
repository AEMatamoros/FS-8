import axios from "axios";
import {
  fetchingInProgress,
  fetchingFullfiled,
  fetchingRejected,
  fetchAddTask,
  fetchDeleteTask,
  fetchUpdateTask,
} from "../slices/taskSlices";
axios.defaults.baseURL = "http://localhost:3000";
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
