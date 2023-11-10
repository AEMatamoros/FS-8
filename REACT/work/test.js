const [taskState, setTaskState] = useState({
  tasks: [],
  error: null,
  loading: true,
});
const [newTask, setNewTask] = useState("");

const removeTask = (id) => {
  axios
    .delete("http://localhost:3000/tasks/" + id)
    .then((response) => {
      const updatedTasks = taskState.tasks.filter(
        (oldtaks) => oldtaks.id !== id
      );
      setTaskState((prev) => {
        return { ...prev, tasks: updatedTasks };
      });
    })
    .catch((err) => {
      setTaskState((prev) => {
        return { ...prev, error: err };
      });
      swal.fire("Error", "Ocurrion un erro al ejecutar la peticion", "error");
    })
    .finally(() => {
      setTaskState((prev) => {
        return { ...prev, loading: false };
      });
    });
};

//Get Tasks
useEffect(() => {
  axios
    .get("http://localhost:3000/tasks")
    .then((response) => {
      setTaskState((prev) => {
        return { ...prev, tasks: response.data };
      });
    })
    .catch((err) => {
      setTaskState((prev) => {
        return { ...prev, error: err };
      });
      swal.fire("Error", "Ocurrion un erro al ejecutar la peticion", "error");
    })
    .finally(() => {
      setTaskState((prev) => {
        return { ...prev, loading: false };
      });
    });
}, []);

const addTask = () => {
  axios
    .post("http://localhost:3000/tasks", { title: newTask })
    .then((response) => {
      setTaskState((prev) => {
        return { ...prev, tasks: [...prev.tasks, response.data] };
      });
    })
    .catch((err) => {
      setTaskState((prev) => {
        return { ...prev, error: err };
      });
      swal.fire("Error", "Ocurrion un erro al ejecutar la peticion", "error");
    })
    .finally(() => {
      setTaskState((prev) => {
        return { ...prev, loading: false };
      });
    });
};
