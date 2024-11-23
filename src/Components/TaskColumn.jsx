import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { Button, TextField } from '@mui/material';

const TaskColumn = ({ title, tasks, addTask, provided }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    likes: 0,
    comments: 0,
    files: 0,
    profileImage: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewTask((prevTask) => ({
        ...prevTask,
        profileImage: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.description) {
      const taskWithId = { ...newTask, id: Date.now().toString() };
      addTask(taskWithId);
      setNewTask({
        title: '',
        description: '',
        priority: 'Medium',
        likes: 0,
        comments: 0,
        files: 0,
        profileImage: '',
      });
      setImagePreview(null);
      setIsModalOpen(false);
    }
  };

  return (
    <div
      ref={provided.innerRef}  // Use innerRef here
      {...provided.droppableProps}  // Spread droppableProps here
      className="w-full sm:w-80 md:w-96 lg:w-1/3 p-6 bg-gray-50 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-semibold text-gray-700 mb-6">{title}</h3>

      {/* Render tasks in this column */}
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}  // Set innerRef here for each draggable
              {...provided.draggableProps}  // Spread draggableProps
              {...provided.dragHandleProps}  // Spread dragHandleProps
              className="mb-6"
            >
              <TaskCard {...task} />
            </div>
          )}
        </Draggable>
      ))}

      {/* Add Task Button */}
      <Button
        variant="contained"
        onClick={() => setIsModalOpen(true)}
        className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 text-lg"
      >
        Add Task
      </Button>

      {provided.placeholder}  {/* Important for maintaining space when dragging */}

      {/* Modal Popup for Adding Task */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 max-w-lg shadow-lg transform transition-all">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Add Task</h3>

            {/* Task Form */}
            <TextField
              name="title"
              label="Task Title"
              value={newTask.title}
              onChange={handleInputChange}
              fullWidth
              className="mb-6"
              variant="outlined"
              size="small"
              inputProps={{
                maxLength: 100,
              }}
            />
            <TextField
              name="description"
              label="Task Description"
              value={newTask.description}
              onChange={handleInputChange}
              fullWidth
              className="mb-6"
              variant="outlined"
              size="small"
              inputProps={{
                maxLength: 250,
              }}
            />
            <TextField
              name="priority"
              value={newTask.priority}
              onChange={handleInputChange}
              fullWidth
              select
              SelectProps={{
                native: true,
              }}
              className="mb-6"
              variant="outlined"
              size="small"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </TextField>

            {/* Profile Image Upload */}
            <div className="mb-6 flex flex-col items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4 border-2 border-gray-300 rounded px-3 py-2 focus:outline-none"
              />
              {imagePreview && (
                <div className="mt-2 mb-4">
                  <img
                    src={imagePreview}
                    alt="Profile Preview"
                    className="w-24 h-24 object-cover rounded-full border-4 border-indigo-600"
                  />
                </div>
              )}
              {!imagePreview && (
                <span className="text-sm text-gray-500">Upload Profile Image</span>
              )}
            </div>

            {/* New fields for Likes, Comments, Files */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <TextField
                name="likes"
                label="Likes"
                value={newTask.likes}
                onChange={handleInputChange}
                fullWidth
                type="number"
                variant="outlined"
                size="small"
              />
              <TextField
                name="comments"
                label="Comments"
                value={newTask.comments}
                onChange={handleInputChange}
                fullWidth
                type="number"
                variant="outlined"
                size="small"
              />
            </div>
            <TextField
              name="files"
              label="Files"
              value={newTask.files}
              onChange={handleInputChange}
              fullWidth
              type="number"
              variant="outlined"
              size="small"
              className="mb-6"
            />

            {/* Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outlined"
                onClick={() => setIsModalOpen(false)}
                className="mr-4 text-gray-700 py-2 px-4"
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleAddTask}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6"
              >
                Add Task
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskColumn;
