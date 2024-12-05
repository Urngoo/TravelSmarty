import React, { useState } from "react";
import { Button } from "antd";
import {
  TeamOutlined,
  CloudOutlined,
  RocketOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  InboxOutlined,
  CarryOutOutlined,
  EnvironmentOutlined,
  GoogleOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 p-3 transition-all duration-300 min-h-screen shadow-md bg-gray-50 ${
          collapsed ? "w-16" : "w-64"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex justify-between items-center mx-2 mb-2">
          {/* Logo or Title */}
          {!collapsed && (
            <div className="text-blue-500 text-3xl font-bold font-mono">
              SMART TRAVEL
            </div>
          )}
          {/* Collapse Button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleSidebar}
            className="text-gray-500 px-1"
            aria-label="Toggle Sidebar"
          />
        </div>

        {/* Sidebar Menu */}
        <ul className="text-black text-lg space-y-3">
          <li className="hover:bg-slate-300 rounded-lg">
            <Link to="/" className="text-black flex items-center px-2 py-1">
              <AppstoreOutlined className="text-xl" />
              {!collapsed && <span className="ml-2">Dashboard</span>}
            </Link>
          </li>
          <li className="hover:bg-slate-300 rounded-lg">
            <Link
              to="/calendar"
              className="text-black flex items-center px-2 py-1"
            >
              <CalendarOutlined className="text-xl" />
              {!collapsed && <span className="ml-2">Calendar</span>}
            </Link>
          </li>
          <li className="hover:bg-slate-300 rounded-lg">
            <Link
              to="/inbox"
              className="text-black flex items-center px-2 py-1"
            >
              <InboxOutlined className="text-xl" />
              {!collapsed && <span className="ml-2">Inbox</span>}
            </Link>
          </li>
          <li className="hover:bg-slate-300 rounded-lg">
            <Link to="/map" className="text-black flex items-center px-2 py-1">
              <EnvironmentOutlined className="text-xl" />
              {!collapsed && <span className="ml-2">Map</span>}
            </Link>
          </li>
          <li className="hover:bg-slate-300 rounded-lg">
            <Link
              to="/integration"
              className="text-black flex items-center px-2 py-1"
            >
              <CarryOutOutlined className="text-xl" />
              {!collapsed && <span className="ml-2">Integration</span>}
            </Link>
          </li>
        </ul>

        {/* Additional Sections */}
        {!collapsed && (
          <>
            <div className="mt-6">
              <div className="text-gray-400 font-bold px-2 pt-2">
                Current View
              </div>
              <div className="mt-4">
                <div className="flex justify-center">
                  <Button
                    type="default"
                    className="flex flex-col justify-center text-gray-500 border-gray-400 w-full mb-2 py-10"
                  >
                    <TeamOutlined className="text-3xl text-gray-500 hover:text-blue-300" />
                    <div>Primary Button</div>
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    type="default"
                    className="flex flex-col items-center text-gray-500 border-gray-400 w-full py-10"
                  >
                    <CloudOutlined className="text-3xl text-gray-500 hover:text-blue-300" />
                    <div>Weather</div>
                  </Button>
                  <Button
                    type="default"
                    className="flex flex-col items-center text-gray-500 border-gray-400 w-full py-10"
                  >
                    <RocketOutlined className="text-3xl text-gray-500 hover:text-blue-300" />
                    <div>Travel</div>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-gray-400 font-bold rounded px-2 pt-2">
                Upcoming Events
              </div>
              <div className="mt-4 bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center space-x-2">
                  <CalendarOutlined className="text-xl text-blue-500" />
                  <div className="font-bold text-lg">31</div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <div className="font-medium">Upcoming Event</div>
                  <div className="mt-1">• Meeting with Prashant</div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-xl font-semibold">8:45 AM</div>
                  <span className="mx-2 text-gray-400">→</span>
                  <div className="text-xl font-semibold">10:45 AM</div>
                </div>
                <div className="mt-4">
                  <Button
                    type="primary"
                    icon={<GoogleOutlined />}
                    className="w-full"
                  >
                    Go to meet link
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Content Area */}
      <div
        className={`ml-${
          collapsed ? "16" : "64"
        } w-full transition-all duration-300`}
      >
        {/* Place your content here */}
      </div>
    </div>
  );
};

export default SideBar;
