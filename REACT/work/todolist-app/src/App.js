import useForm from "./hooks/useForm";
import useGetTasks from "./hooks/useGetTasks";
import usePostTask from "./hooks/usePostTask";

import { useState } from "react";
import "./App.css";
import useDeleteTask from "./hooks/useDeleteTask";

function App() {
  // Estado de la aplicacion
  const [tasksState, setTasksState] = useState({
    tasks: [],
    error: null,
    loading: true,
  });

  //Handle Inputs
  const initState = { newTask: "" };
  const { form, setForm, handleInput } = useForm({ initState });

  //HTTP
  useGetTasks({ setTasksState });
  //POST
  const { addTask } = usePostTask({ form, setForm, setTasksState, initState });
  //DELETE
  const { removeTask } = useDeleteTask({ tasksState, setTasksState });

  // Filter
  const [filter, setFilter] = useState("");
  return (
    <div className="App">
      <>
        <h1>Todo List</h1>
        <form className="task-input">
          <input
            type="text"
            placeholder="Enter a new task"
            id="newTask"
            name="newTask"
            value={form.newTask}
            onChange={handleInput}
          />
          <button onClick={addTask}>Add Task</button>
        </form>
        <input
          type="text"
          placeholder="Filter"
          id="newTask"
          name="newTask"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        {tasksState.loading && <h1>Cargando...</h1>}
        {tasksState.error && <h1>Error</h1>}
        <ul className="task-list">
          {!!tasksState.tasks &&
            tasksState.tasks.length > 0 &&
            tasksState.tasks.map((task) => (
              <>
                {task.title.includes(filter) && (
                  <li key={task.id}>
                    {task.title}
                    <button onClick={() => removeTask(task.id)}>Delete</button>
                  </li>
                )}
              </>
            ))}
        </ul>
      </>
      <>Componente 2</>
      <>Componente 3</>
    </div>
  );
}

export default App;
