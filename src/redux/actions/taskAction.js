// /src/redux/actions/index.js

export const ADD_TASK = 'ADD_TASK';
export const MOVE_TASK = 'MOVE_TASK';

// Action creator for adding a task
export const addTask = (task, section) => ({
  type: ADD_TASK,
  payload: { task, section }
});

// Action creator for moving a task
export const moveTask = (taskId, sourceSection, targetSection) => ({
  type: MOVE_TASK,
  payload: { taskId, sourceSection, targetSection }
});
