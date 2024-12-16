import React from 'react'

export default function CardForEvent() {
  return (
    <div className="w-auto h-auto border rounded-lg p-4">
      <div className="flex items-center justify-start space-x-4">
        {/* Icon */}
        <div className="bg-blue-200 rounded-full p-4">
          <i className="fas fa-calendar-alt text-blue-600 text-xl"></i>
        </div>

        {/* Text Content */}
        <div>
          <p className="text-3xl font-semibold text-blue-600">12</p>
          <p className="text-sm text-blue-500">Upcoming Events</p>
        </div>
      </div>
    </div>
  )
}
