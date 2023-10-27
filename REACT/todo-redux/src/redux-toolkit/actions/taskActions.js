import { createAction } from "@reduxjs/toolkit";
export const addTaskAction = createAction("task/addTask");
export const updateTaskAction = createAction("task/updateTask");
export const deleteTaskAction = createAction("task/deleteTaskAction");
export const filterTaskAction = createAction("task/filterTask");
