import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import {
  addTaskThunk,
  deleteTaskAsync,
  fetchTasksThunk,
  updateTaskAsync,
} from "./redux-toolkit-slice-thunk/operations/fetchTaskOperations";
import {
  selectTasksCount,
  selectTasksFiltered,
  // selectTasksStatus,
  selectTasksStatusMemo,
  selectFilter,
} from "./redux-toolkit-slice-thunk/selectors/tasksSelectors";
import { filterTaskAction } from "./redux-toolkit-slice/slices/filterSlice";
function App() {
  //State
  const tasks = useSelector(selectTasksFiltered);
  const taskcount = useSelector(selectTasksCount);
  const taskStatus = useSelector(selectTasksStatusMemo);
  const filter = useSelector(selectFilter);
  // const store = useSelector((state) => state);

  // console.log(store);
  //Dispatch
  //Fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasksThunk());
  }, [dispatch]);

  const addTask = () => {
    if (newTask.title.trim() !== "") {
      // dispatch(addTaskAction({ ...newTask }));
      dispatch(addTaskThunk({ ...newTask }));
    }
  };

  const toggleTask = (task) => {
    // dispatch(updateTaskAction({ index }));
    dispatch(updateTaskAsync({ ...task }));
  };

  const handleDelete = (id) => {
    // dispatch(deleteTaskAction({ index }));
    dispatch(deleteTaskAsync(id));
  };

  const handleFilter = (filterState) => {
    dispatch(filterTaskAction({ filterState }));
  };
  // const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  // const [filter, setFilter] = useState("incomplete"); // 'todos', 'completas', 'incompletas'

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
        <h3>Total: {taskcount}</h3>
        <h3>Completed: {taskStatus.completed}</h3>
        <h3>Incompleted: {taskStatus.incomplete}</h3>

        <ul className="task-list">
          {tasks.map((task, index) => (
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
                  handleDelete(task.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
