
import axios from "axios";
export default function useDeleteTask({ tasksState, setTasksState }) {
  const removeTask = (id) => {
    axios({
      method: "DELETE",
      url: "http://localhost:3000/tasks/" + id,
    })
      .then((response) => {
        const updatedTasks = tasksState.tasks.filter((task) => task.id !== id);
        setTasksState((prev) => {
          return { ...prev, tasks: updatedTasks };
        });
        alert("Su tarea se elimino con exito");
      })
      .catch(() => {
        alert("Ocurrio un error al eliminar su tarea");
      });
  };
  return { removeTask };
}
