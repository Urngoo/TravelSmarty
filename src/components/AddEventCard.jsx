import React, { useState } from "react";
import { Switch, DatePicker } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { BsPersonAdd } from "react-icons/bs";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { SlClock } from "react-icons/sl";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddCard = ({ closeAddCard }) => {
  const [meetingHeading, setMeetingHeading] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [timezone, setTimezone] = useState("Indian Timezone");
  const [participants, setParticipants] = useState([]);
  const [isRepeating, setIsRepeating] = useState(false);

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const handleSave = () => {
    console.log({
      meetingHeading,
      selectedDate,
      timezone,
      participants,
      isRepeating,
    });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-full sm:w-[420px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-700">Add new event</h2>
        <button
          onClick={closeAddCard}
          className="bg-white p-2 rounded-full focus:outline-none"
        >
          <IoIosCloseCircleOutline />
        </button>
      </div> 

      {/* Meeting Heading */}
      <input
        type="text"
        placeholder="Meeting heading..."
        value={meetingHeading}
        onChange={(e) => setMeetingHeading(e.target.value)}
        className="w-full bg-white px-2 py-2 border rounded-md mb-3 text-sm"
      />

      {/* Suggestions */}
      <div className="border rounded-lg text-gray-700 px-3 h-auto mb-3">
        <div className="flex flex-wrap justify-between py-2">
          <h1 className="flex items-center justify-start text-xs gap-2">
            <AiOutlineThunderbolt className="text-lg" />
            Smart suggestion <span className="font-semibold text-blue-500">(premium)</span>
          </h1>
          <div className="text-center">
            <select className="bg-white border rounded-lg text-xs outline-none cursor-pointer px-2 h-6 appearance-none">
              <option value="" disabled selected hidden>
                Duration
              </option>
              <option value="UTC+0">UTC+00:00</option>
              <option value="UTC+5:30">UTC+05:30</option>
              <option value="UTC+10">UTC+10:00</option>
            </select>
            <select className="bg-white border rounded-lg text-xs outline-none cursor-pointer px-2 h-6 appearance-none">
              <option value="" disabled selected hidden>
                Timezone
              </option>
              <option value="UTC+0">UTC+00:00</option>
              <option value="UTC+5:30">UTC+05:30</option>
              <option value="UTC+10">UTC+10:00</option>
            </select>
          </div>
        </div>

        <hr className="my-2" />

        <div className="flex flex-wrap gap-2">
          {/* Card 1 */}
          <div className="border rounded-lg p-2 w-40 shadow-sm flex flex-col justify-between mb-3 text-xs">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-semibold">Free slot 1</h3>
              <button className="text-blue-600 text-lg">
                <IoIosAddCircleOutline />
              </button>
            </div>
            <div className="mt-1 text-gray-600 flex items-center gap-1 text-xs">
              <FaRegCalendarAlt />
              <p>19 January 2024</p>
            </div>
            <div className="mt-1 text-gray-600 flex items-center gap-1 text-xs">
              <CiClock2 />
              <p>
                <span className="text-green-600">9:00 PM</span> : <span className="text-red-600">10:00 PM</span>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border rounded-lg p-2 w-40 shadow-sm flex flex-col justify-between mb-3 text-xs">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-semibold">Free slot 2</h3>
              <button className="text-blue-600 text-lg">
                <IoIosAddCircleOutline />
              </button>
            </div>
            <div className="mt-1 text-gray-600 flex items-center gap-1 text-xs">
              <FaRegCalendarAlt />
              <p>20 January 2024</p>
            </div>
            <div className="mt-1 text-gray-600 flex items-center gap-1 text-xs">
              <CiClock2 />
              <p>
                <span className="text-green-600">9:00 PM</span> : <span className="text-red-600">10:00 PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Date and Time */}
      <div className="border rounded-lg text-gray-700 px-3 h-auto mb-3">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <SlClock className="text-xl text-gray-500" />
            <p className="text-gray-700 text-xs">Date Time</p>
          </div>
          <select className="bg-white border rounded-lg text-xs outline-none cursor-pointer px-2 h-6 appearance-none">
            <option value="" disabled selected hidden>
              Select Timezone
            </option>
            <option value="UTC+0">UTC+00:00</option>
            <option value="UTC+5:30">UTC+05:30</option>
            <option value="UTC+10">UTC+10:00</option>
          </select>
        </div>

        <hr className="my-2" />

        <div className="text-gray-700 py-2">
          <h2 className="flex justify-start text-xs">Meeting date</h2>
          <DatePicker className="w-full my-2 text-xs" />
          <div className="flex justify-between gap-2 text-xs">
            <div>
              <h2 className="flex justify-start">To</h2>
              <select className="bg-white border rounded-lg text-xs outline-none cursor-pointer px-2 w-44 h-6 appearance-none">
                <option value="" disabled selected hidden>
                  Select Timezone
                </option>
                <option value="UTC+0">UTC+00:00</option>
                <option value="UTC+5:30">UTC+05:30</option>
                <option value="UTC+10">UTC+10:00</option>
              </select>
            </div>
            <div>
              <h2 className="flex justify-start">From</h2>
              <select className="bg-white border rounded-lg text-xs outline-none cursor-pointer px-2 w-44 h-6 appearance-none">
                <option value="" disabled selected hidden>
                  Select Timezone
                </option>
                <option value="UTC+0">UTC+00:00</option>
                <option value="UTC+5:30">UTC+05:30</option>
                <option value="UTC+10">UTC+10:00</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="border rounded-lg flex items-center h-8 mb-3 px-2 bg-white">
        <CiLocationOn className="text-gray-500 text-xl mr-2" />
        <select className="flex-1 bg-white text-gray-700 outline-none cursor-pointer appearance-none text-xs">
          <option value="" disabled selected hidden>
            Choose location
          </option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </select>
      </div>

      {/* Add Participants */}
      <div className="border rounded-lg flex items-center h-8 mb-3 px-2 bg-white">
        <BsPersonAdd className="text-gray-500 text-xl mr-2" />
        <select className="flex-1 bg-white text-gray-700 outline-none cursor-pointer appearance-none text-xs">
          <option value="" disabled selected hidden>
            Add participants
          </option>
          <option value="participant1">Participant 1</option>
          <option value="participant2">Participant 2</option>
          <option value="participant3">Participant 3</option>
        </select>
      </div>

      {/* Repeating */}
      <div className="border rounded mx-auto w-full mb-3">
        <div className="flex justify-between items-center text-gray-700 text-xs px-3 py-2">
          <div className="flex items-center gap-2">
            <SyncOutlined />
            <p>Repeating</p>
          </div>
          <div className="flex items-center gap-2">
            <p>All day</p>
            <Switch
              checked={isRepeating}
              onChange={(checked) => setIsRepeating(checked)}
            />
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex items-center text-gray-700 gap-2 px-3 py-2 text-xs">
          {days.map((day, index) => (
            <button
              key={index}
              className="w-12 h-5 border rounded-full flex items-center justify-center text-xs font-semibold text-gray-700"
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex justify-end gap-3 mt-3">
        <button className="px-3 py-2 border rounded-md bg-white text-gray-500 text-xs">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-3 py-2 bg-purple-600 text-white rounded-md text-xs"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCard;
