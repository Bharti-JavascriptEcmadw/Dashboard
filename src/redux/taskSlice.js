import { createSlice } from '@reduxjs/toolkit';

// Load tasks from localStorage, if they exist
const savedTasks = JSON.parse(localStorage.getItem('tasks'));

const initialState = {
  tasks: savedTasks || [
    { id: 1, title: 'Brainstorming', status: 'To Do', priority: 'Low', description: 'Initial brainstorming session for new project ideas.' },
    { id: 2, title: 'Research', status: 'In Progress', priority: 'High', description: 'Conduct research on market trends for product positioning.' },
    { id: 3, title: 'Design Prototypes', status: 'Done', priority: 'Medium', description: 'Design and review prototypes for the new product.' },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    moveTask: (state, action) => {
      const { id, newStatus } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.status = newStatus;
    },
  },
});

export const { addTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;
