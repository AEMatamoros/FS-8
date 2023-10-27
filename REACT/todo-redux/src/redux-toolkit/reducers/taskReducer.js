import {
  addTaskAction,
  updateTaskAction,
  deleteTaskAction,
  filterTaskAction,
} from "../actions/taskActions";
import { createReducer } from "@reduxjs/toolkit";
export const initialState = { tasks: [], filter: "all" };

// const rootReducer = (state = initialState, action) => {
//   // console.log(action);
//   // console.log(addTaskAction.type);
//   switch (action.type) {
//     case addTaskAction.type:
//       return { ...state, tasks: [...state.tasks, action.payload] };
//     case updateTaskAction.type:
//       // let updatedTasks = [...JSON.parse(JSON.stringify(state.tasks))];
//       // updatedTasks[action.payload.index].completed =
//       //   !updatedTasks[action.payload.index].completed;

//       // return {
//       //   ...state,
//       //   tasks: [...updatedTasks],
//       // };
//       return {
//         ...state,
//         tasks: state.tasks.map((oldTask, index) => {
//           if (index === action.payload.index) {
//             return { ...oldTask, completed: !oldTask.completed };
//           } else {
//             return oldTask;
//           }
//         }),
//       };
//     case deleteTaskAction.type:
//       return {
//         ...state,
//         tasks: state.tasks.filter((_, index) => index !== action.payload.index),
//       };
//     case filterTaskAction.type:
//       return {
//         ...state,
//         filter: action.payload.filterState,
//       };
//     default:
//       return state;
//   }
// };

export const rootReducer = createReducer(initialState, {
  [addTaskAction]: (state, action) => {
    return { ...state, tasks: [...state.tasks, action.payload] };
  },
  [updateTaskAction]: (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((oldTask, index) => {
        if (index === action.payload.index) {
          return { ...oldTask, completed: !oldTask.completed };
        } else {
          return oldTask;
        }
      }),
    };
  },
  [deleteTaskAction]: (state, action) => {
    return {
      ...state,
      tasks: state.tasks.filter((_, index) => index !== action.payload.index),
    };
  },
  [filterTaskAction]: (state, action) => {
    return {
      ...state,
      filter: action.payload.filterState,
    };
  },
});

export default rootReducer;
