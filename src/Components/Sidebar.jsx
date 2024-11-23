import React from "react";
import { FaHome, FaEnvelope, FaTasks, FaUsers, FaCogs } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-48 h-screen shadow-md bg-gray-900 fixed top-0 left-0">
      {/* Top Section (Fixed) */}
      <div className="flex items-center px-4 py-4 border-gray-200 border-b bg-gray-900 fixed top-0 left-0 w-full z-10">
        <div className="w-8 h-8 flex items-center justify-center font-bold">
          <img
            src="./assets/ff.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <h1 className="ml-3 text-lg font-semibold text-white">Project M.</h1>
      </div>

      {/* Scrollable Content Section */}
      <div className="mt-20 overflow-y-auto h-[calc(100vh-80px)]">
        {/* Menu Section */}
        <nav>
          <ul>
            <li className="flex items-center px-3 py-2 hover:bg-white group">
              <FaHome className="text-white group-hover:text-black" />
              <span className="ml-3 text-sm font-medium text-white group-hover:text-black">
                Home
              </span>
            </li>
            <li className="flex items-center px-3 py-2 hover:bg-white group">
              <FaEnvelope className="text-white group-hover:text-black" />
              <span className="ml-3 text-sm font-medium text-white group-hover:text-black">
                Messages
              </span>
            </li>
            <li className="flex items-center px-3 py-2 hover:bg-white group">
              <FaTasks className="text-white group-hover:text-black" />
              <span className="ml-3 text-sm font-medium text-white group-hover:text-black">
                Tasks
              </span>
            </li>
            <li className="flex items-center px-3 py-2 hover:bg-white group">
              <FaUsers className="text-white group-hover:text-black" />
              <span className="ml-3 text-sm font-medium text-white group-hover:text-black">
                Members
              </span>
            </li>
            <li className="flex items-center px-3 py-2 hover:bg-white group">
              <FaCogs className="text-white group-hover:text-black" />
              <span className="ml-3 text-sm font-medium text-white group-hover:text-black">
                Settings
              </span>
            </li>
          </ul>
        </nav>

        {/* Projects Section */}
        <div className="mt-6 px-4">
          <h2 className="text-sm font-semibold text-white mb-2">My Projects</h2>
          <ul>
            <li className="flex items-center justify-between px-3 py-2 bg-purple-100 rounded-md group">
              <span className="text-sm font-medium text-black group-hover:text-black">
                Mobile App
              </span>
            </li>
            <li className="flex items-center px-3 py-2 hover:bg-white group">
              <span className="text-sm font-medium text-white group-hover:text-black">
                Website Redesign
              </span>
            </li>
            <li className="flex items-center px-3 py-2 hover:bg-white group">
              <span className="text-sm font-medium text-white group-hover:text-black">
                Design System
              </span>
            </li>
            <li className="flex items-center px-3 py-2 hover:bg-white group">
              <span className="text-sm font-medium text-white group-hover:text-black">
                Wireframes
              </span>
            </li>
          </ul>
        </div>

        {/* Thoughts Section */}
        <div className="mt-4 px-2">
          <div
            className="p-8 rounded-md bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/assets/Union.png')",
              height: "200px",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black bg-opacity-90 rounded-md p-4 mt-8">
              <h3 className="text-lg font-semibold">Thoughts Time</h3>
              <p className="text-sm mt-2">
                No new notice for now. Write your thoughts or share with peers.
              </p>
              <button className="mt-3 text-xs font-medium bg-white text-purple-600 hover:underline">
                Write a message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
