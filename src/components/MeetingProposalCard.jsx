import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

const MeetingCard = () => {
  const cardData = [
    {
      title: "Brainstorming session",
      time: "12:30 PM → 04:36 PM IST",
      status: "Free Slot",
      statusColor: "text-blue-500",
      dotColor: "bg-green-500",
      attendees: [
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30",
      ],
    },
    {
      title: "Brainstorming session",
      time: "12:30 PM → 04:36 PM IST",
      status: "Not Free",
      statusColor: "text-red-500",
      dotColor: "bg-green-500",
      attendees: [
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30",
      ],
    },
    {
      title: "Brainstorming session",
      time: "12:30 PM → 04:36 PM IST",
      status: "Free Slot",
      statusColor: "text-blue-500",
      dotColor: "bg-green-500",
      attendees: [
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-xl shadow-sm p-4 bg-white flex flex-col space-y-4"
        >
          {/* Header: Title and Attendees */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className={`h-3 w-3 rounded-full ${item.dotColor}`} />
              <h2 className="text-sm font-semibold">{item.title}</h2>
            </div>
            <div className="flex -space-x-2">
              {item.attendees.map((avatar, i) => (
                <img
                  key={i}
                  src={avatar}
                  alt={`Attendee ${i}`}
                  className="w-6 h-6 rounded-full border border-white"
                />
              ))}
            </div>
          </div>

          {/* Time and Status */}
          <div className="flex items-center text-xs text-gray-600 space-x-1">
            <ClockIcon className="h-4 w-4 text-gray-500" />
            <span>{item.time}</span>
            <span className={`${item.statusColor} font-medium`}>
              ({item.status})
            </span>
          </div>

          <hr/>

          {/* Actions: Accept / Reject */}
          <div className="flex flex-row gap-3 justify-center pt-2 text-sm font-medium text-center">
            <div><button className="text-green-600 hover:underline">Accept</button></div>
            <div className="text-gray-300">|</div>
            <div><button className="text-red-600 hover:underline">Reject</button></div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default MeetingCard;
