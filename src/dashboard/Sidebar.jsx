import React from 'react';

const SideBar = () => {
  return (
    <div className="sidebar fixed top-0 left-0 w-64 bg-gray-50 h-screen shadow-md p-6">
      <div className="">
        <div className='text-blue-500 text-3xl font-bold font-mono'>SMART TRAVEL</div>
      </div>
        <div className="sidebar__menu">
          <ul className=' text-black  text-lg space-y-3 mt-3'>
            <li className=''><a href="#" className='text-black flex justify-start rounded  px-2 py-1'>
              Dashboard
            </a></li>
            <li className=''><a href="#" className='text-black flex justify-start rounded  px-2 py-1'>
              Calendar
            </a></li>
            <li className=''><a href="#" className='text-black flex justify-start rounded  px-2 py-1'>
              Inbox
            </a></li>
            <li className=''><a href="#" className='text-black flex justify-start rounded  px-2 py-1'>
              Map
            </a></li>
            <li className=''><a href="#" className='text-black flex justify-start rounded  px-2 py-1'>
              Integration
            </a></li>
          </ul>
          <div className='text-gray-400 text-bold flex justify-start rounded  px-2 py-2'>Current View</div>
      </div>
    </div>
  );
};

export default SideBar;
