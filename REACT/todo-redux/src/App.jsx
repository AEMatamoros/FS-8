import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTaskAction } from "./redux-toolkit-slice/slices/filterSlice";
import {
  fetchTasksThunk,
  addTasksThunk,
  updateTasksThunk,
  deleteTasksThunk,
} from "./redux-toolkit-thunk/operations/taskOperations";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasksThunk());
  }, [dispatch]);

  //State
  const tasks = useSelector((state) => state.task.tasks);
  const isLoading = useSelector((state) => state.task.isLoading);
  const error = useSelector((state) => state.task.error);

  const filter = useSelector((state) => state.filterStatus.filter);
  // const store = useSelector((state) => state);

  // console.log(store);
  //Dispatch
  const addTask = () => {
    if (newTask.title.trim() !== "") {
      dispatch(addTasksThunk({ ...newTask }));
    }
  };

  const toggleTask = (task) => {
    dispatch(updateTasksThunk({ ...task }));
  };

  const handleDelete = (task) => {
    dispatch(deleteTasksThunk({ ...task }));
  };

  const handleFilter = (filterState) => {
    dispatch(filterTaskAction({ filterState }));
  };

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  // const [filter, setFilter] = useState("incomplete"); // 'todos', 'completas', 'incompletas'

  let filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    }
    return true;
  });
  return (
    <div className="App">
      <h1>ToDo GoIt</h1>
      <div className="container">
        <div className="task-inputs">
          <input
            type="text"
            placeholder="Task title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Task description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="filter-options">
          <label>Show: </label>
          <select value={filter} onChange={(e) => handleFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        {isLoading ? (
          <h2>Cargando</h2>
        ) : (
          <ul className="task-list">
            {filteredTasks.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task)}
                />
                <span className={task.completed ? "completed" : ""}>
                  {task.title}
                </span>
                <p>{task.description}</p>
                {/* <span>{JSON.stringify(task)}</span> */}
                <button
                  onClick={() => {
                    handleDelete(task);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        {!!error && <h2>Ocurrio un Error</h2>}
      </div>
    </div>
  );
}

export default App;
