import { useEffect } from "react";
import axios from "axios";
export default function useGetTasks({ setTasksState }) {
  // GET
  useEffect(() => {
    setTasksState((prev) => {
      return { ...prev, loading: true };
    });
    axios({ method: "GET", url: "http://localhost:3000/tasks" })
      .then((response) => {
        if (response.statusText === "OK") {
          setTasksState((prev) => {
            return { ...prev, tasks: response.data };
          });
        } else {
          alert("Ocurrio un erro al obtener el listado de tareas");
        }
      })
      .catch((error) => {
        setTasksState((prev) => {
          return { ...prev, error: error };
        });
      })
      .finally(() => {
        setTasksState((prev) => {
          return { ...prev, loading: false };
        });
      });
  }, [setTasksState]);
  return;
}
