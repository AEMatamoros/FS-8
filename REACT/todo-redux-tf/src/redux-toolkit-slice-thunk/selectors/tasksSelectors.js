import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.task.tasks;
export const selectFilter = (state) => state.filterStatus.filter;

export const selectTasksFiltered = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
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
    return filteredTasks;
  }
);

export const selectTasksCount = (state) => {
  return state.task.tasks.length;
};

export const selectTasksStatus = (state) => {
  return state.task.tasks.reduce(
    (prev, act) => {
      if (act.completed) {
        prev.completed += 1;
      } else {
        prev.incomplete += 1;
      }
      return prev;
    },
    {
      incomplete: 0,
      completed: 0,
    }
  );
};

export const selectTasksStatusMemo = createSelector([selectTasks], (tasks) => {
  //   console.log("Calculando compkletas e incompletad");
  return tasks.reduce(
    (prev, act) => {
      if (act.completed) {
        prev.completed += 1;
      } else {
        prev.incomplete += 1;
      }
      return prev;
    },
    {
      incomplete: 0,
      completed: 0,
    }
  );
});
