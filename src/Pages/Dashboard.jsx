import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, moveTask } from '../redux/taskSlice';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Header1 from '../Components/Header1';
import TaskColumn from '../Components/TaskColumn';
import Filter from '../Components/Filter';

const Dashboard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks); // Access the tasks array from state

  const [filter, setFilter] = useState({
    priority: '',
    category: '',
    dueDate: '',
  });

  // Handle adding a task
  const handleAddTask = (task, column) => {
    dispatch(addTask({ ...task, status: column }));
  };

  // Handle drag and drop
  const handleOnDragEnd = (result) => {
    const { destination, source } = result;
    
    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const movedTask = tasks.find((task) => task.id === result.draggableId);

    dispatch(moveTask({ id: movedTask.id, newStatus: destination.droppableId }));
  };

  // Handle filter change
  const handleFilterChange = (filters) => {
    setFilter(filters);
  };

  // Saving tasks to Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Filter tasks based on the selected filter values
  const filterTasks = (columnTasks) => {
    if (!columnTasks) return [];
    return columnTasks.filter((task) => {
      return (
        (filter.priority ? task.priority === filter.priority : true) &&
        (filter.category ? task.category?.toLowerCase().includes(filter.category.toLowerCase()) : true) &&
        (filter.dueDate ? task.dueDate === filter.dueDate : true)
      );
    });
  };

  // Separate tasks by status for rendering
  const todoTasks = tasks.filter((task) => task.status === 'To Do');
  const inProgressTasks = tasks.filter((task) => task.status === 'In Progress');
  const doneTasks = tasks.filter((task) => task.status === 'Done');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-48 h-full bg-gray-900 shadow-md fixed">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-48 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 shadow">
          <Header1 />
          <Header />
          <Filter onFilterChange={handleFilterChange} />
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-4">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="flex justify-between space-x-4">
              {/* To Do Column */}
              <Droppable droppableId="To Do">
                {(provided) => (
                  <TaskColumn
                    title="To Do"
                    tasks={filterTasks(todoTasks)}
                    addTask={(task) => handleAddTask(task, 'To Do')}
                    innerRef={provided.innerRef}
                    provided={provided}
                    {...provided.droppableProps}
                  />
                )}
              </Droppable>

              {/* In Progress Column */}
              <Droppable droppableId="In Progress">
                {(provided) => (
                  <TaskColumn
                    title="In Progress"
                    tasks={filterTasks(inProgressTasks)}
                    addTask={(task) => handleAddTask(task, 'In Progress')}
                    innerRef={provided.innerRef}
                    provided={provided}
                    {...provided.droppableProps}
                  />
                )}
              </Droppable>

              {/* Done Column */}
              <Droppable droppableId="Done">
                {(provided) => (
                  <TaskColumn
                    title="Done"
                    tasks={filterTasks(doneTasks)}
                    addTask={(task) => handleAddTask(task, 'Done')}
                    innerRef={provided.innerRef}
                    provided={provided}
                    {...provided.droppableProps}
                  />
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
