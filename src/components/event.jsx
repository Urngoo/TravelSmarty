import React from "react";
import {
  CalendarIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const Event = () => {
  const cardData = [
    {
      icon: <CalendarIcon className="h-8 w-8 text-blue-500" />,
      count: 12,
      title: "Upcoming Events",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: <MapPinIcon className="h-8 w-8 text-purple-500" />,
      count: 3,
      title: "Upcoming Travel",
      iconBgColor: "bg-purple-100",
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />,
      count: 12,
      title: "Meeting Done!!",
      iconBgColor: "bg-green-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-5">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 rounded-lg border border-slate-300 shadow-md bg-white"
        >
          <div
            className={`flex items-center justify-center h-12 w-12 rounded-full ${item.iconBgColor}`}
          >
            {item.icon}
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-gray-800">{item.count}</h2>
            <p className="text-sm font-medium text-gray-500">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
