import React from "react";
import { FaCalendarAlt, FaBell, FaCommentDots, FaChevronDown } from "react-icons/fa";  // Importing React Icons

const Header1 = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-blue-900 shadow-md">
      {/* Search Bar */}
      <div className="flex items-center w-1/3">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-purple-600">
          <FaCalendarAlt className="text-lg" /> {/* Calendar Icon */}
        </button>
        <button className="text-white hover:text-purple-600">
          <FaBell className="text-lg" /> {/* Notification Bell Icon */}
        </button>
        <button className="text-white hover:text-purple-600">
          <FaCommentDots className="text-lg" /> {/* Chat Icon */}
        </button>
      </div>

      {/* Profile */}
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <h4 className="text-sm font-medium text-white">Bharti Dwivedi</h4>
          <p className="text-xs text-white">Rajasthan, India</p>
        </div>
        <img
          src="./assets/23.webp"
          alt="Profile"
          className="w-8 h-8 rounded-full border-2 border-gray-300"
        />
        <button className="text-white hover:text-purple-600">
          <FaChevronDown className="text-lg" /> {/* Down Arrow Icon */}
        </button>
      </div>
    </header>
  );
};

export default Header1;
