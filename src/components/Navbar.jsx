import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { SlArrowLeft, SlArrowRight, SlArrowDown } from "react-icons/sl";
import "react-datepicker/dist/react-datepicker.css";

export default function Navbar() {
  const [isWeekOpen, setIsWeekOpen] = useState(false); // Toggle for "This week" dropdown
  const [isTimeZoneOpen, setIsTimeZoneOpen] = useState(false); // Toggle for "TimeZone" dropdown
  const [selectedDate, setSelectedDate] = useState(new Date()); // Calendar state

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white rounded-lg mx-8">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button className="px-3 py-1 border rounded-full flex items-center text-sm">
          Today
        </button>

        {/* Date calendar */}
        <div className="relative">
          <div className="px-3 py-1 border rounded-full flex items-center gap-1 text-sm cursor-pointer">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d"
              className="w-full bg-transparent focus:outline-none"
              popperPlacement="bottom-start"
            />
            <SlArrowDown />
          </div>
        </div>

        <span className="px-3 py-1 text-red-500 border rounded-full flex items-center text-sm">
          ● 7:10 PM IST
        </span>

        {/* TimeZone dropdown */}
        <div className="relative">
          <button
            className="px-3 py-1 border rounded-full flex items-center gap-1 text-sm"
            onClick={() => setIsTimeZoneOpen(!isTimeZoneOpen)}
          >
            Indian TimeZone <SlArrowDown />
          </button>
          {isTimeZoneOpen && (
            <div className="absolute left-0 z-10 mt-1 w-36 bg-white border rounded-lg shadow">
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
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 p-1 border rounded-full flex items-center justify-center">
          <SlArrowLeft />
        </button>
        <button className="w-8 h-8 p-1 border rounded-full flex items-center justify-center">
          <SlArrowRight />
        </button>

        {/* Week dropdown */}
        <div className="relative">
          <button
            className="px-3 py-1 border rounded-full flex items-center gap-1 text-sm"
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

        <button className="px-4 py-1 text-sm text-white bg-purple-600 rounded-full flex items-center">
          + Add event
        </button>
      </div>
    </div>
  );
}
