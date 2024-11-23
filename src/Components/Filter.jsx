// import React, { useState } from 'react';
// import { FaEllipsisH } from 'react-icons/fa'; // Importing required icons

// const Filter = ({ onFilterChange }) => {
//   const [priority, setPriority] = useState('');
//   const [category, setCategory] = useState('');
//   const [dueDate, setDueDate] = useState('');

//   const handleFilterChange = () => {
//     // Ensure onFilterChange is defined before calling it
//     if (onFilterChange) {
//       // Passing selected filters to the parent component
//       onFilterChange({ priority, category, dueDate });
//     } else {
//       console.error("onFilterChange function is missing!");
//     }
//   };

//   return (
//     <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-blue-500 p-4">
//       {/* Priority Filter */}
//       <select
//         value={priority}
//         onChange={(e) => setPriority(e.target.value)}
//         className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md focus:outline-none w-full sm:w-auto"
//       >
//         <option value="">Priority</option>
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//       </select>

//       {/* Category Filter */}
//       <input
//         type="text"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         placeholder="Category"
//         className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md focus:outline-none w-full sm:w-auto"
//       />

//       {/* Due Date Filter */}
//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md focus:outline-none w-full sm:w-auto"
//       />

//       {/* Apply Filter Button */}
//       <button
//         onClick={handleFilterChange}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full sm:w-auto"
//       >
//         Apply Filters
//       </button>

//       {/* Share Button */}
//       <button className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 w-full sm:w-auto">
//         Share
//       </button>

//       {/* Four Dots (ellipsis) Icon */}
//       <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 sm:hidden">
//         <FaEllipsisH className="text-lg" />
//       </button>
//     </div>
//   );
// };

// export default Filter;



import React, { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa'; // Importing required icons

const Filter = ({ onFilterChange }) => {
  const [priority, setPriority] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleFilterChange = () => {
    // Ensure onFilterChange is defined before calling it
    if (onFilterChange) {
      // Passing selected filters to the parent component
      onFilterChange({ priority, category, dueDate });
    } else {
      console.error('onFilterChange function is missing!');
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-blue-500 p-4">
      {/* Priority Filter */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md focus:outline-none w-full sm:w-auto"
      >
        <option value="">Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      {/* Category Filter */}
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md focus:outline-none w-full sm:w-auto"
      />

      {/* Due Date Filter */}
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md focus:outline-none w-full sm:w-auto"
      />

      {/* Apply Filter Button */}
      <button
        onClick={handleFilterChange}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full sm:w-auto"
      >
        Apply Filters
      </button>

      {/* Share Button */}
      <button className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 w-full sm:w-auto">
        Share
      </button>

      {/* Four Dots (ellipsis) Icon */}
      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 sm:hidden">
        <FaEllipsisH className="text-lg" />
      </button>
    </div>
  );
};

export default Filter;
