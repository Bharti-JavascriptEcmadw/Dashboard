// src/redux/reducers/taskReducer.js

const initialState = {
    todo: [],
    inProgress: [],
    done: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        // Logic to add task to the correct column
        return {
          ...state,
          [action.payload.column]: [...state[action.payload.column], action.payload.task],
        };
      case 'MOVE_TASK':
        // Logic to move task between columns
        const { taskId, fromColumn, toColumn } = action.payload;
        const fromTasks = [...state[fromColumn]];
        const toTasks = [...state[toColumn]];
        const movedTask = fromTasks.find((task) => task.id === taskId);
  
        // Remove task from fromColumn and add it to toColumn
        fromTasks.splice(fromTasks.indexOf(movedTask), 1);
        toTasks.push(movedTask);
  
        return {
          ...state,
          [fromColumn]: fromTasks,
          [toColumn]: toTasks,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  