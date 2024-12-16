import React from "react";
import {
  CalendarIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const event = () => {
  const cardData = [
    {
      icon: <CalendarIcon className="h-8 w-8 text-blue-500" />,
      count: 12,
      title: "Upcoming Events",
      bgColor: "bg-blue-100",
      cardColor: "text-blue-500",
    },
    {
      icon: <MapPinIcon className="h-8 w-8 text-purple-500" />,
      count: 3,
      title: "Upcoming Travel",
      bgColor: "bg-purple-100",
      cardColor: "text-purple-500",
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />,
      count: 12,
      title: "Meeting Done!!",
      bgColor: "bg-green-100",
      cardColor: "text-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cardData.map((item, index) => (
        <div
          key={index}
          className={`p-6 my-10 rounded-lg shadow-sm border border-slate-300 hover:bg-opacity-25 text-center items-center ${item.bgColor}`}
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="my-auto mx-auto h-fit w-fit">{item.icon}</div>
            <div>
              <h2 className={`text-2xl font-bold ${item.cardColor}`}>
                {item.count}
              </h2>
              <p className={`text-gray-600 ${item.cardColor}`}>{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default event;
