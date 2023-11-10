
import axios from "axios";
export default function usePostTask({
  form,
  setTasksState,
  setForm,
  initState,
}) {
  const addTask = () => {
    if (form.newTask.trim() !== "") {
      axios({
        method: "POST",
        url: "http://localhost:3000/tasks",
        data: { title: form.newTask },
      })
        .then((response) => {
          setTasksState((prev) => {
            return { ...prev, tasks: [...prev.tasks, response.data] };
          });
          setForm(initState);
          alert("Su tarea se agrego con exito");
        })
        .catch(() => {
          alert("Ocurrio un erro al crear su tarea");
        });
    } else {
      console.log("Esta vacio");
    }
  };
  return { addTask };
}
