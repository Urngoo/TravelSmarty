import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight, SlArrowDown } from "react-icons/sl";

export default function Navbar() {
  const [isDateOpen, setIsDateOpen] = useState(false); // Toggle for "July 17" dropdown
  const [isWeekOpen, setIsWeekOpen] = useState(false); // Toggle for "This week" dropdown
  const [isTimeZoneOpen, setIsTimeZoneOpen] = useState(false); // Toggle for "TimeZone" dropdown

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 p-2 rounded-lg bg-white h-auto md:h-14 ml-2 md:ml-8">
      {/* Left section */}
      <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start w-full md:w-auto">
        {/* Today Button */}
        <button className="h-10 px-4 border rounded-lg flex items-center">
          Today
        </button>

        {/* Date dropdown */}
        <div className="relative">
          <button
            className="h-10 px-4 border rounded-lg flex items-center gap-1"
            onClick={() => setIsDateOpen(!isDateOpen)}
          >
            July 17 <SlArrowDown />
          </button>
          {isDateOpen && (
            <div className="absolute left-0 z-10 mt-1 w-36 bg-white border rounded-lg shadow">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  July 16
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  July 17
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  July 18
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Timezone Dropdown - Center on small screens */}
        <div className="w-full flex justify-center md:w-auto">
          <button
            className="h-10 px-4 border rounded-lg flex items-center gap-1"
            onClick={() => setIsTimeZoneOpen(!isTimeZoneOpen)}
          >
            TimeZone <SlArrowDown />
          </button>
          {isTimeZoneOpen && (
            <div className="absolute z-10 mt-1 w-36 bg-white border rounded-lg shadow">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Indian TimeZone
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  American TimeZone
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Other TimeZone
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Current Time */}
        <span className="hidden md:flex h-10 px-4 text-red-500 border rounded-lg items-center">
          ● 7:10 PM IST
        </span>
      </div>

      {/* Right section */}
      <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start w-full md:w-auto">
        {/* Left/Right Arrows */}
        <button className="h-10 p-2 border rounded-lg flex items-center">
          <SlArrowLeft />
        </button>
        <button className="h-10 p-2 border rounded-lg flex items-center">
          <SlArrowRight />
        </button>

        {/* Week dropdown */}
        <div className="relative">
          <button
            className="h-10 px-4 border rounded-lg flex items-center gap-1"
            onClick={() => setIsWeekOpen(!isWeekOpen)}
          >
            This week <SlArrowDown />
          </button>
          {isWeekOpen && (
            <div className="absolute right-0 z-10 mt-1 w-36 bg-white border rounded-lg shadow">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  This week
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Next week
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Last week
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Add Event Button */}
        <button className="h-10 px-4 text-white bg-blue-500 rounded-lg flex items-center justify-center md:w-auto">
          <span className="hidden md:inline">+ Add event</span>
          <span className="md:hidden">+</span>
        </button>
      </div>
    </div>
  );
}
