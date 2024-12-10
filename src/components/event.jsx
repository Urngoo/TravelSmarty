import React, { useState } from "react";
import { Switch, DatePicker, Card, Calendar } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { MdCancel } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsPersonAdd } from "react-icons/bs";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { SlClock } from "react-icons/sl";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";


const AddEvent = () => {
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
        <div className="p-6 bg-white shadow-lg rounded-md w-[558px] h-auto max-w-lg mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-700">Add new event</h2>
                <button className="bg-white p-2 rounded-full focus:outline-none">
                <svg
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-gray-500"
                >
                    <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 8.7070312 7.2929688 L 7.2929688 8.7070312 L 10.585938 12 L 7.2929688 15.292969 L 8.7070312 16.707031 L 12 13.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13.414062 12 L 16.707031 8.7070312 L 15.292969 7.2929688 L 12 10.585938 L 8.7070312 7.2929688 z"></path>
                </svg>
                </button>
            </div>

            {/* Meeting Heading */}
            <input
                type="text"
                placeholder="Meeting heading..."
                value={meetingHeading}
                onChange={(e) => setMeetingHeading(e.target.value)}
                className="w-full bg-white px-3 py-2 border rounded-md mb-4"
            />

            {/* suggestion\ */}

            <div className="border rounded-lg text-gray-700 px-4 h-56 mb-3">
                <div className="flex justify-between grid-rows-2 py-2">
                    <h1 className="flex items-center justify-start  text-sm gap-2">
                        <AiOutlineThunderbolt className="text-lg" />
                        Smart suggestion <span className="font-semibold text-blue-500">(premium)</span>
                    </h1>
                    <div className="text-center">
                        <select
                            className="bg-white border rounded-lg text-gray-700 text-sm outline-none cursor-pointer px-2 h-8 appearance-none"
                        >
                            <option value="" disabled selected hidden>
                                Duration
                            </option>
                            <option value="UTC+0">UTC+00:00</option>
                            <option value="UTC+5:30">UTC+05:30</option>
                            <option value="UTC+10">UTC+10:00</option>
                        </select>
                        <select
                            className="bg-white border rounded-lg text-gray-700 text-sm outline-none cursor-pointer px-2 h-8 appearance-none"
                        >
                            <option value="" disabled selected hidden>
                                Timezone
                            </option>
                            <option value="UTC+0">UTC+00:00</option>
                            <option value="UTC+5:30">UTC+05:30</option>
                            <option value="UTC+10">UTC+10:00</option>
                        </select>
                    </div>
                </div>

                <hr className="my-2"/>

                <div className="flex gap-4">
                {/* Card 1 */}
                <div className="border rounded-lg p-4 w-64 shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Free slot 1</h3>
                        <button className="text-blue-600 text-lg">
                            <IoIosAddCircleOutline />                        
                        </button>
                    </div>
                    <div className="mt-2 text-gray-600 flex items-center gap-2">
                        <FaRegCalendarAlt />
                        <p>19 January 2024</p>
                    </div>
                    <div className="mt-1 text-gray-600 flex items-center gap-2">
                        <CiClock2 />
                        <p>
                            <span className="text-green-600">9:00 PM</span> : <span className="text-red-600">10:00 PM</span>
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="border rounded-lg p-4 w-64 shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Free slot 2</h3>
                        <button className="text-blue-600 text-lg">
                            <IoIosAddCircleOutline />
                        </button>
                    </div>
                    <div className="mt-2 text-gray-600 flex items-center gap-2">
                        <FaRegCalendarAlt />
                        <p>20 January 2024</p>
                    </div>
                    <div className="mt-1 text-gray-600 flex items-center gap-2">
                        <CiClock2 />
                        <p>
                            <span className="text-green-600">9:00 PM</span> : <span className="text-red-600">10:00 PM</span>
                        </p>
                    </div>
                </div>
            </div>


            </div>


            <div className="border rounded-lg text-gray-700 px-4 h-56 mb-3">
                {/* Date Time Section */}
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center gap-2">
                        <SlClock className="text-xl text-gray-500 h-4 w-4" />
                        <p className="text-gray-700">Date Time</p>
                    </div>            
                    {/* Timezone Dropdown */}
                    <select
                        className="bg-white border rounded-lg text-gray-700 text-sm outline-none cursor-pointer px-2 h-8 appearance-none"
                    >
                        <option value="" disabled selected hidden>
                            Select Timezone
                        </option>
                        <option value="UTC+0">UTC+00:00</option>
                        <option value="UTC+5:30">UTC+05:30</option>
                        <option value="UTC+10">UTC+10:00</option>
                    </select>
                </div>

                <hr className="my-2"/>

                <div className="text-gray-700 py-2">
                    <h2 className="flex justify-start">Meeting date</h2>
                    <DatePicker  className="w-full my-2"/>
                    <div className="flex justify-between grid-rows-2 gap-3">
                        <div>
                            <h2 className="flex justify-start">To</h2>
                            <select
                                className="bg-white border rounded-lg text-gray-700 text-sm outline-none cursor-pointer px-2 w-52 h-7 appearance-none"
                            >
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
                            <select
                                className="bg-white border rounded-lg text-gray-700 text-sm outline-none cursor-pointer px-2 w-52 h-7 appearance-none"
                            >
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

            {/* Location Dropdown */}
            <div className="border rounded-lg flex items-center h-10 mb-3 px-3 bg-white">
                <CiLocationOn className="text-gray-500 text-xl mr-3" />
                <select
                    className="flex-1 bg-white text-gray-700 outline-none cursor-pointer appearance-none"
                >
                    <option value="" disabled selected hidden>
                        Choose location
                    </option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                </select>
            </div>

            {/* Add Participants Dropdown */}
            <div className="border rounded-lg flex items-center h-10 mb-3 px-3 bg-white">
                <BsPersonAdd className="text-gray-500 text-xl mr-3" />
                <select
                    className="flex-1 bg-white text-gray-700 outline-none cursor-pointer appearance-none"
                >
                    <option value="" disabled selected hidden>
                        Add participants
                    </option>
                    <option value="participant1">Participant 1</option>
                    <option value="participant2">Participant 2</option>
                    <option value="participant3">Participant 3</option>
                </select>
            </div>


            {/* meeting  */}
            <div className="flex flex-row justify-between mb-3">
                <div className="border rounded-lg w-auto h-10 text-gray-700 px-3 flex items-center justify-between gap-2">
                    <CgProfile />
                    <p>meeting</p>
                    <MdCancel className="text-gray-500" />
                </div>
                <div className="border rounded-lg w-auto h-10 text-gray-700 px-3 flex items-center justify-between gap-2">
                    <CgProfile />
                    <p>meeting</p>
                    <MdCancel className="text-gray-500" />
                </div>
                <div className="border rounded-lg w-auto h-10 text-gray-700 px-3 flex items-center justify-between gap-2">
                    <CgProfile />
                    <p>meeting</p>
                    <MdCancel className="text-gray-500" />
                </div>
            </div>



            {/* Repeating */}
            <div className="border rounded mx-auto w-full h-116px mb-3">
                <div className="flex justify-between items-center text-gray-700 text-xs px-4 py-3 mx-auto">
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

                <hr className="my-2"/>

                <div className="flex items-center justify-between gap-2 py-2 mx-4">
                    <p className="text-gray-700">On</p>
                    {days.map((day, index) => (
                        <button
                        key={index}
                        className="w-14 h-7 rounded-full flex justify-center items-center bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
                        >
                        {day}
                        </button>
                    ))}
                </div>
            </div>

        {/* Save and Cancel */}
        <div className="flex justify-end gap-4">
        <button className="px-4 py-2 border rounded-md bg-white text-gray-500">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-purple-600 text-white rounded-md"
        >
          Save
        </button>
        </div>
    </div>
  );
};

export default AddEvent;
