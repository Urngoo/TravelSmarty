import React from 'react';
import { Button } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import { CloudOutlined } from '@ant-design/icons';

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
          <div>
            <div className='text-gray-400 text-bold flex justify-start rounded px-2 py-2'>Current View</div>
            <div className='mt-4'>
              <div className='flex justify-center'>
              <Button type="default" className='flex flex-col justify-center text-gray-500 border-gray-400 w-full mb-2 py-10'>
              <TeamOutlined className="text-3xl text-gray-500 "/>
                <div>Primary Button</div>
              </Button>
              </div>
              <div className='flex flex-row gap-2'>
                <Button type="default" className='flex flex-col items-center text-gray-500 border-gray-400 w-full py-10'>
                <CloudOutlined className="text-3xl text-gray-500" />
                <div>Weather</div>
                </Button>
                <Button type="default" className='flex flex-col items-center text-gray-500 border-gray-400 w-full py-10'>
                <CloudOutlined className="text-3xl text-gray-500 hover:text-blue-400" />
                <div>Weather</div>
                </Button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SideBar;
