import { ADD_TASK, REMOVE_TASK } from "./constans";

export const addTaskAction = (text) => (dispatch) => dispatch({ type: ADD_TASK, payload: text });

export const removeTaskAction = (id) => (dispatch) => dispatch({ type: REMOVE_TASK, payload: id });
