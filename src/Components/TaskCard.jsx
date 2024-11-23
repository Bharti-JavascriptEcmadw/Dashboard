// import React from 'react';
// import { Favorite, Comment, AttachFile } from '@mui/icons-material';

// const TaskCard = ({ title, description, priority, likes, comments, files, profileImage }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
//       {/* Priority Badge */}
//       <p
//         className={`font-semibold text-sm mb-2 ${
//           priority === 'High' ? 'text-red-500' : priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'
//         }`}
//       >
//         Priority: {priority}
//       </p>

//       {/* Title */}
//       <div className="flex items-center mb-4">
//         <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
//       </div>

 

//       {/* Task Description */}
//       <p className="text-sm text-gray-600 mb-4">{description}</p>

//       {/* Task Stats */}
//       <div className="flex justify-between items-center mt-4">

//              {/* Profile Image below the title */}
//       {profileImage && (
//         <div className="flex justify-center mb-4">
//           <img
//             src="/assets/ff.jpg"
//             alt="Profile"
//             className="w-12 h-12 object-cover rounded-full border-2 border-indigo-600"
//           />
//         </div>
//       )}
//         {/* Likes */}
//         <div className="flex items-center">
//           <Favorite color="error" className="text-red-500" />
//           <span className="ml-2 text-sm">{likes}</span>
//         </div>

//         {/* Comments */}
//         <div className="flex items-center">
//           <Comment color="primary" className="text-blue-500" />
//           <span className="ml-2 text-sm">{comments}</span>
//         </div>

//         {/* Files */}
//         <div className="flex items-center">
//           <AttachFile color="action" className="text-gray-500" />
//           <span className="ml-2 text-sm">{files}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;



import React from 'react';
import { Favorite, Comment, AttachFile } from '@mui/icons-material';

const TaskCard = ({ title, description, priority, likes, comments, files, profileImage }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      {/* Priority Badge */}
      <p
        className={`font-semibold text-sm mb-2 ${
          priority === 'High'
            ? 'text-red-500'
            : priority === 'Medium'
            ? 'text-yellow-500'
            : 'text-green-500'
        }`}
      >
        Priority: {priority}
      </p>

      {/* Title */}
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Task Description */}
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {/* Task Stats */}
      <div className="flex flex-wrap justify-between items-center mt-4">
        {/* Profile Image */}
        {profileImage && (
          <div className="flex justify-center mb-4 w-12 h-12 sm:w-16 sm:h-16">
            <img
              src={profileImage} // Use the passed profileImage instead of hardcoded path
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-2 border-indigo-600"
            />
          </div>
        )}

        {/* Stats - Likes, Comments, Files */}
        <div className="flex flex-wrap sm:flex-row justify-start sm:justify-between items-center w-full sm:w-auto">
          {/* Likes */}
          <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
            <Favorite color="error" className="text-red-500" />
            <span className="ml-2 text-sm">{likes}</span>
          </div>

          {/* Comments */}
          <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
            <Comment color="primary" className="text-blue-500" />
            <span className="ml-2 text-sm">{comments}</span>
          </div>

          {/* Files */}
          <div className="flex items-center mb-2 sm:mb-0">
            <AttachFile color="action" className="text-gray-500" />
            <span className="ml-2 text-sm">{files}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

