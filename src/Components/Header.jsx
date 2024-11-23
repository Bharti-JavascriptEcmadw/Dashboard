// // import React from 'react';
// // import { FaPencilAlt, FaLink, FaPlus, } from 'react-icons/fa';  // Importing required icons

// // const Header = ({ onFilterChange }) => {

// //   // Handle filter changes and pass to the parent component
// //   // const handleFilterChange = () => {
// //   //   // Pass the filter values to parent component for filtering tasks
// //   //   onFilterChange({ priority, category, dateRange });
// //   // };

// //   return (
// //     <div className="flex flex-col bg-blue-500 px-5  pt-2 shadow-sm">
// //       {/* Page Title and Icons */}
// //       <div className="flex justify-between items-center mb-2">
// //         <div className="flex items-center space-x-2">
// //           <h1 className="text-2xl font-bold text-gray-800">Mobile App</h1>

// //           {/* Pencil and Link Icons */}
// //           <FaPencilAlt className="text-xl   bg-green-300 text-gray-900 cursor-pointer hover:text-gray-900" />
// //           <FaLink className="text-lg text-gray-700 bg-green-300  cursor-pointer hover:text-gray-900" />
// //         </div>

        

// //         {/* Right-side Invite Link, + Icon, and Profile Circle Photos */}
// //         <div className="flex items-center space-x-4">
// //           {/* + Icon and Invite Link */}
// //           <div className="flex items-center space-x-2">
// //             <FaPlus className="text-lg text-white cursor-pointer hover:text-gray-900" />
// //             <button className="text-white text-sm font-medium bg-black p-2 rounded-md">Invite</button>
// //             {/* <button>Invite</button> */}
// //           </div>

// //           {/* Three Profile Circle Photos */}
// //           <div className="flex items-center ">
// //             <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
// //             <img
// //           src="./assets/images.jpg"
// //           alt="Profile"
// //           className="w-8 h-8 rounded-full border-2 border-gray-300"
// //         />
// //             </div>
// //             <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
// //             <img
// //           src="./assets/ff.jpg"
// //           alt="Profile"
// //           className="w-8 h-8 rounded-full border-2 border-gray-300"
// //         />
// //             </div>
// //             <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
// //             <img
// //           src="./assets/dd.png"
// //           alt="Profile"
// //           className="w-8 h-8 rounded-full border-2 border-gray-300"
// //         />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Filter, Date Section, Share Button, and Four Dots Icon */}
// //       <div className="flex items-center justify-between mt-4">
// //         {/* Left Section: Filter and Date Selector */}
// //         <div className="flex items-center space-x-6">
// //           {/* <button
// //             onClick={handleFilterChange}
// //             className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
// //           >
// //             Filter
// //           </button> */}


      
// // {/* 
// //           <select
// //             value={dateRange}
// //             onChange={(e) => setDateRange(e.target.value)}
// //             className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md focus:outline-none"
// //           >
// //             <option value="today">Today</option>
// //             <option value="week">This Week</option>
// //             <option value="month">This Month</option>
// //           </select> */}
// //         </div>

// //         {/* Right Section: Share Button and Four Dots Icon */}
       
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header;



// import React from 'react';
// import { FaPencilAlt, FaLink, FaPlus } from 'react-icons/fa';  // Importing required icons

// const Header = ({ onFilterChange }) => {
//   return (
//     <div className="w-full flex flex-col bg-blue-500 px-4 sm:px-5 pt-4 sm:pt-2 shadow-sm">
//       {/* Page Title and Icons */}
//       <div className="w-full flex justify-between items-center mb-3 flex-wrap">
//         <div className="flex items-center space-x-2">
//           <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Mobile App</h1>

//           {/* Pencil and Link Icons */}
//           <FaPencilAlt className="text-xl sm:text-2xl bg-green-300 text-gray-900 cursor-pointer hover:text-gray-900" />
//           <FaLink className="text-lg sm:text-xl text-gray-700 bg-green-300 cursor-pointer hover:text-gray-900" />
//         </div>

//         {/* Right-side Invite Link, + Icon, and Profile Circle Photos */}
//         <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
//           {/* + Icon and Invite Link */}
//           <div className="flex items-center space-x-2">
//             <FaPlus className="text-lg sm:text-xl text-white cursor-pointer hover:text-gray-900" />
//             <button className="text-white text-sm sm:text-base font-medium bg-black p-2 rounded-md">
//               Invite
//             </button>
//           </div>

//           {/* Three Profile Circle Photos */}
//           <div className="flex items-center space-x-2 sm:space-x-3">
//             <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center">
//               <img
//                 src="./assets/images.jpg"
//                 alt="Profile"
//                 className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300"
//               />
//             </div>
//             <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center">
//               <img
//                 src="./assets/ff.jpg"
//                 alt="Profile"
//                 className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300"
//               />
//             </div>
//             <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center">
//               <img
//                 src="./assets/dd.png"
//                 alt="Profile"
//                 className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filter, Date Section, Share Button, and Four Dots Icon */}
//       <div className="w-full flex items-center justify-between mt-4 flex-wrap">
//         {/* Left Section: Filter and Date Selector */}
//         <div className="flex items-center space-x-6 flex-wrap">
//           {/* Add any additional filter or date range options here */}
//         </div>

//         {/* Right Section: Share Button and Four Dots Icon */}
//         <div className="flex items-center space-x-3">
//           {/* Add any icons or buttons for the share functionality */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React from 'react';
import { FaPencilAlt, FaLink, FaPlus } from 'react-icons/fa'; // Importing required icons

const Header = ({ onFilterChange }) => {
  return (
    <div className="w-full flex flex-col bg-blue-500 px-4 sm:px-5 pt-4 sm:pt-2 shadow-sm">
      {/* Page Title and Icons */}
      <div className="w-full flex justify-between items-center mb-3 flex-wrap">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Mobile App</h1>

          {/* Pencil and Link Icons */}
          <FaPencilAlt className="text-xl sm:text-2xl bg-green-300 text-gray-900 cursor-pointer hover:text-gray-900" />
          <FaLink className="text-lg sm:text-xl text-gray-700 bg-green-300 cursor-pointer hover:text-gray-900" />
        </div>

        {/* Right-side Invite Link, + Icon, and Profile Circle Photos */}
        <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0 flex-wrap justify-end">
          {/* + Icon and Invite Link */}
          <div className="flex items-center space-x-2">
            <FaPlus className="text-lg sm:text-xl text-white cursor-pointer hover:text-gray-900" />
            <button className="text-white text-sm sm:text-base font-medium bg-black p-2 rounded-md">
              Invite
            </button>
          </div>

          {/* Three Profile Circle Photos */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <img
                src="./assets/images.jpg"
                alt="Profile"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300"
              />
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <img
                src="./assets/ff.jpg"
                alt="Profile"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300"
              />
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <img
                src="./assets/dd.png"
                alt="Profile"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter, Date Section, Share Button, and Four Dots Icon */}
      <div className="w-full flex items-center justify-between mt-4 flex-wrap">
        {/* Left Section: Filter and Date Selector */}
        <div className="flex items-center space-x-6 flex-wrap">
          {/* Add any additional filter or date range options here */}
        </div>

        {/* Right Section: Share Button and Four Dots Icon */}
        <div className="flex items-center space-x-3">
          {/* Add any icons or buttons for the share functionality */}
        </div>
      </div>
    </div>
  );
};

export default Header;

