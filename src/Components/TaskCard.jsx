import React from 'react';
import { Favorite, Comment, AttachFile } from '@mui/icons-material';

const TaskCard = ({ title, description, priority, likes, comments, files, profileImage }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      {/* Profile Image and Title */}
      <div className="flex items-center mb-4">
        {profileImage && (
          <img
            src={profileImage}
            alt="Profile"
            className="w-12 h-12 object-cover rounded-full border-2 border-indigo-600 mr-4"
          />
        )}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Task Description */}
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {/* Priority Badge */}
      <p
        className={`font-semibold ${
          priority === 'High' ? 'text-red-500' : priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'
        }`}
      >
        Priority: {priority}
      </p>

      {/* Task Stats */}
      <div className="flex justify-between items-center mt-4">
        {/* Likes */}
        <div className="flex items-center">
          <Favorite color="error" className="text-red-500" />
          <span className="ml-2 text-sm">{likes}</span>
        </div>

        {/* Comments */}
        <div className="flex items-center">
          <Comment color="primary" className="text-blue-500" />
          <span className="ml-2 text-sm">{comments}</span>
        </div>

        {/* Files */}
        <div className="flex items-center">
          <AttachFile color="action" className="text-gray-500" />
          <span className="ml-2 text-sm">{files}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
