import { createSlice } from '@reduxjs/toolkit';

// Initial state (can be fetched from Local Storage if available)
const initialState = localStorage.getItem('tasks')
  ? JSON.parse(localStorage.getItem('tasks'))
  : {
      todo: [
        { id: '1', title: 'Brainstorming', description: 'Generate new ideas', priority: 'Low', dueDate: '2024-11-20', category: 'Design' },
      ],
      inProgress: [
        { id: '2', title: 'UI Design', description: 'Create wireframes', priority: 'Medium', dueDate: '2024-11-25', category: 'Design' },
      ],
      done: [
        { id: '3', title: 'Client Meeting', description: 'Discuss project requirements', priority: 'High', dueDate: '2024-11-15', category: 'Meetings' },
      ],
    };

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { task, column } = action.payload;
      console.log("Adding task", task, column);  // Log task details
      state[column].push(task);
      localStorage.setItem('tasks', JSON.stringify(state));  // Persisting updated state to localStorage
    },
    moveTask: (state, action) => {
      const { task, fromColumn, toColumn } = action.payload;
      state[fromColumn] = state[fromColumn].filter((t) => t.id !== task.id);
      state[toColumn].push(task);
      localStorage.setItem('tasks', JSON.stringify(state)); // Persisting updated state
    },
    setTasks: (state, action) => {
      console.log("Setting tasks from localStorage", action.payload);
      return action.payload; // Directly set tasks from Local Storage or other source
    },
  },
});

export const { addTask, moveTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
