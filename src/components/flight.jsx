import React from "react";
import { FaStar, FaSuitcase, FaPlane } from "react-icons/fa";

export default function Flight() {
  return (
    <div className="border rounded-lg w-[387px] h-[220px] mx-32 bg-white shadow-md">
      {/* Top Section */}
      <div className="pt-5 px-5 flex justify-between items-center mx-10">
        <div>
          <div className="text-lg font-semibold">AV 121</div>
          <div className="text-sm text-gray-600">Avianca</div>
        </div>
        <div className="flex items-center gap-3">
          <FaStar className="text-gray-600" />
          <div className="text-sm">Business</div>
          <div className="flex items-center gap-1">
            <FaSuitcase className="text-gray-600" />
            <span className="text-sm">2 Bags</span>
          </div>
        </div>
      </div>

      <hr className="my-3" />

      {/* Flight Info Section */}
      <div className="flex justify-between items-center px-5 gap-5">
        <div>
          <div className="text-sm text-gray-500">18 Feb 2023</div>
          <div className="text-2xl font-bold">23:45</div>
          <div className="text-sm text-gray-500">LHR (London)</div>
        </div>
        <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
                <FaPlane className="text-gray-600 text-2xl" />
                <div className="border-t-2 border-dashed border-gray-400 w-16 mt-1"></div>
            </div>
          <div className="text-xs text-gray-500">10h 10m</div>
        </div>
        <div>
          <div className="text-sm text-gray-500">18 Feb 2023</div>
          <div className="text-2xl font-bold">23:45</div>
          <div className="text-sm text-gray-500">LHR (London)</div>
        </div>
      </div>
    </div>
  );
}
