const initialState = { tasks: [], filter: "all" };

const rootReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case "task/addTask":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "task/updateTask":
      let updatedTasks = [...state.tasks];
      updatedTasks[action.payload.index].completed =
        !updatedTasks[action.payload.index].completed;
      return { ...state, tasks: [...updatedTasks] };
    case "task/deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload.index),
      };
    case "task/filterTask":
      return {
        ...state,
        filter: action.payload.filterState,
      };
    default:
      return state;
  }
};

export default rootReducer;