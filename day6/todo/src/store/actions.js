import { ADD_TASK, REMOVE_TASK, REMOVE_ALL, CHANGE_TASK } from './actionTypes';

export const addTaskAction = (data) => {
  return {
    type: ADD_TASK,
    payload: data,
  };
};

export const removeTaskAction = (id) => {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
};

export const removeAllTasksAction = () => {
  return {
    type: REMOVE_ALL,
    payload: null,
  };
};

export const changeTaskAction = (id) => {
  return {
    type: CHANGE_TASK,
    payload: id,
  };
};
