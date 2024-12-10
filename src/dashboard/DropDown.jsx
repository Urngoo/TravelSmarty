import React, { useState } from "react";
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Dropdown = ({
  label,
  options,
  isOpen,
  toggleOpen,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="relative">
      <button
        className="h-full px-4 border rounded-lg flex items-center gap-1"
        onClick={toggleOpen}
      >
        {selectedOption || label} <SlArrowDown />
      </button>
      {isOpen && (
        <div className="absolute left-0 z-10 mt-1 w-36 bg-white border rounded-lg shadow">
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedOption(option);
                  toggleOpen(); // Close dropdown after selection
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
