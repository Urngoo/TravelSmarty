import React from "react";
import { IoAirplane, IoAirplaneOutline, IoLocationSharp } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";


export default function BrainStormCard() {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Brainstorming session</h1>
        <div className="flex space-x-2">
          {/* Replace with actual images */}
          <img
            src="https://via.placeholder.com/30"
            alt="Profile 1"
            className="w-8 h-8 rounded-full"
          />
          <img
            src="https://via.placeholder.com/30"
            alt="Profile 2"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      <div className="mt-3">
        {/* Time Section */}
        <p className="text-green-600 text-sm font-medium flex items-center space-x-1">
            <GoClock className="text-lg" />
            <span>12:30 PM</span>
            <span className="text-gray-500">→</span>
            <span className="text-red-600">04:36 PM IST</span>
            <span className="text-blue-600">(7H Left)</span>
        </p>

        {/* Location Section */}
        <p className="text-gray-600 text-sm mt-1 flex items-center space-x-1">
            <IoLocationSharp className="text-lg"/>
            <span>
            XYZ Street, New York, America{" "}
            <span className="text-blue-600 cursor-pointer">Get location</span>
            </span>
        </p>
        </div>


      <hr className="my-3" />

      {/* Footer Section */}
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <IoSunnyOutline className="text-gray-500 text-lg" />
          <p className="text-gray-700 text-sm">Weather information</p>
        </div>
        <div className="flex items-center space-x-2">
          <IoAirplaneOutline />
          <p className="text-gray-700 text-sm">Check booking status</p>
        </div>
      </div>
    </div>
  );
}
