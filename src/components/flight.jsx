import React from "react";
import { FaStar, FaSuitcase, FaPlane } from "react-icons/fa";

export default function Flight() {
  return (
    <div className="border rounded-lg w-full max-w-xs bg-white shadow-md mx-auto min-h-[180px] p-4">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <div className="text-md font-semibold">AV 121</div>
          <div className="text-xs text-gray-600">Avianca</div>
        </div>
        <div className="flex items-center gap-2">
          <FaStar className="text-gray-600 text-sm" />
          <div className="text-xs">Business</div>
          <div className="flex items-center gap-1">
            <FaSuitcase className="text-gray-600 text-sm" />
            <span className="text-xs">2 Bags</span>
          </div>
        </div>
      </div>

      <hr className="my-2" />

      {/* Flight Info Section */}
      <div className="flex justify-between items-center gap-3">
        {/* Left Section */}
        <div>
          <div className="text-xs text-gray-500">18 Feb 2023</div>
          <div className="text-xl font-bold">23:45</div>
          <div className="text-xs text-gray-500">LHR (London)</div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <FaPlane className="text-gray-600 text-lg" />
            <div className="border-t-2 border-dashed border-gray-400 w-10 mt-1"></div>
          </div>
          <div className="text-[10px] text-gray-500">10h 10m</div>
        </div>

        {/* Right Section */}
        <div>
          <div className="text-xs text-gray-500">18 Feb 2023</div>
          <div className="text-xl font-bold">23:45</div>
          <div className="text-xs text-gray-500">LHR (London)</div>
        </div>
      </div>
    </div>
  );
}
