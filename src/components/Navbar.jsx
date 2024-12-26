import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight, SlArrowDown } from "react-icons/sl";
import AddCard from "./AddEventCard"; // Assuming AddCard is a separate component

export default function Navbar() {
  const [isDateOpen, setIsDateOpen] = useState(false); // Toggle for "July 17" dropdown
  const [isWeekOpen, setIsWeekOpen] = useState(false);
  const [isTimeZoneOpen, setIsTimeZoneOpen] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState("Asia/Ulaanbaatar");
  const [currentTime, setCurrentTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showAddCard, setShowAddCard] = useState(false); // State for modal visibility

  const timeZones = [
    { label: "Mongolian Time", value: "Asia/Ulaanbaatar" },
    { label: "Indian Time", value: "Asia/Kolkata" },
    { label: "American Time", value: "America/New_York" },
    { label: "UTC Time", value: "UTC" },
  ];

  const dates = ["July 16", "July 17", "July 18"]; // Available dates in the dropdown

  useEffect(() => {
    // Set the current date dynamically based on the system date
    const today = new Date();
    const options = { month: "short", day: "numeric" };
    setSelectedDate(today.toLocaleDateString("en-US", options));

    // Set the current time based on the selected timezone
    const timer = setInterval(() => {
      const now = new Date();
      const options = {
        timeZone: selectedTimeZone,
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setCurrentTime(formatter.format(now));
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedTimeZone]);

  // Function to close the AddCard modal
  const closeAddCard = () => setShowAddCard(false);

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
            {selectedDate} <SlArrowDown />
          </button>
          {isDateOpen && (
            <div className="absolute left-0 z-10 mt-1 w-36 bg-white border rounded-lg shadow">
              <ul>
                {dates.map((date) => (
                  <li
                    key={date}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedDate(date);
                      setIsDateOpen(false); // Close the dropdown when a date is selected
                    }}
                  >
                    {date}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Timezone Dropdown */}
        <div className="relative">
          <button
            className="h-10 px-4 border rounded-lg flex items-center gap-1"
            onClick={() => setIsTimeZoneOpen(!isTimeZoneOpen)}
          >
            {timeZones.find((tz) => tz.value === selectedTimeZone)?.label}{" "}
            <SlArrowDown />
          </button>
          {isTimeZoneOpen && (
            <div className="absolute right-0 z-10 mt-1 w-44 bg-white border rounded-lg shadow">
              <ul>
                {timeZones.map((zone) => (
                  <li
                    key={zone.value}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedTimeZone(zone.value);
                      setIsTimeZoneOpen(false);
                    }}
                  >
                    {zone.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Current Time */}
        <span className="hidden md:flex h-10 px-4 text-red-500 border rounded-lg items-center">
          ● {currentTime}
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
            This week <SlArrowDown className="w-3 h-3" />
          </button>
          {isWeekOpen && (
            <div className="absolute right-0 z-10 mt-1 w-36 bg-white border rounded-lg shadow-md">
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
        <button
          onClick={() => setShowAddCard(true)}
          className="px-4 py-1 text-xs font-medium text-white bg-purple-500 rounded-full"
        >
          Add Event
        </button>
      </div>

      {/* Modal for Add Event */}
      {showAddCard && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full sm:w-auto max-w-md">
            <AddCard closeAddCard={closeAddCard} />
          </div>
        </div>
      )}
    </div>
  );
}
