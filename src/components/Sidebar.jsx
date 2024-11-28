<<<<<<< HEAD
import React from "react";
import { Button } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import { CloudOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar fixed top-0 left-0 w-64 bg-gray-50 h-screen shadow-md p-6">
      <div className="">
        <div className="text-blue-500 text-3xl font-bold font-mono">
          SMART TRAVEL
        </div>
      </div>
      <div className="sidebar__menu">
        <ul className=" text-black  text-lg space-y-3 mt-3">
          <li className="">
            <Link
              to="/"
              href="#"
              className="text-black flex justify-start rounded  px-2 py-1"
            >
              Dashboard
            </Link>
          </li>
          <li className="">
            <Link
              to="/calendar"
              href="#"
              className="text-black flex justify-start rounded  px-2 py-1"
            >
              Calendar
            </Link>
          </li>
          <li className="">
            <Link
              to="/inbox"
              href="#"
              className="text-black flex justify-start rounded  px-2 py-1"
            >
              Inbox
            </Link>
          </li>
          <li className="">
            <Link
              to="/map"
              href="#"
              className="text-black flex justify-start rounded  px-2 py-1"
            >
              Map
            </Link>
          </li>
          <li className="">
            <Link
              to="/integration"
              href="#"
              className="text-black flex justify-start rounded  px-2 py-1"
            >
              Integration
            </Link>
          </li>
        </ul>
        <div>
          <div className="text-gray-400 text-bold flex justify-start rounded px-2 py-2">
            Current View
          </div>
          <div className="mt-4">
            <div className="flex justify-center">
              <Button
                type="default"
                className="flex flex-col justify-center text-gray-500 border-gray-400 w-full mb-2 py-10"
              >
                <TeamOutlined className="text-3xl text-gray-500 " />
                <div>Primary Button</div>
              </Button>
            </div>
            <div className="flex flex-row gap-2">
              <Button
                type="default"
                className="flex flex-col items-center text-gray-500 border-gray-400 w-full py-10"
              >
                <CloudOutlined className="text-3xl text-gray-500" />
                <div>Weather</div>
              </Button>
              <Button
                type="default"
                className="flex flex-col items-center text-gray-500 border-gray-400 w-full py-10"
              >
                <CloudOutlined className="text-3xl text-gray-500 hover:text-blue-400" />
                <div>Weather</div>
              </Button>
            </div>
          </div>
        </div>
=======
import React, { useState } from "react";
import {
  Button,
  Tooltip
} from "antd";
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
  MenuOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 z-50 p-3 ${
          collapsed ? "w-16" : "w-64"
        } bg-gray-50 min-h-screen shadow-md p-6 transition-all duration-300`}
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
          />
        </div>

        {/* Sidebar Menu */}
        <div className="sidebar__menu">
          <ul className="text-black text-lg space-y-3">
            <li className="hover:bg-slate-300 rounded-lg">
              <Link
                to="/"
                className="text-black flex items-center px-2 py-1"
              >
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
              <Link
                to="/map"
                className="text-black flex items-center px-2 py-1"
              >
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
        </div>

        {/* Current View Section */}
        {!collapsed && (
          <div>
            <div className="text-gray-400 text-bold flex justify-start rounded px-2 pt-2">
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
              <div className="flex flex-row gap-2">
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
        )}

        {/* Upcoming Events Section */}
        {!collapsed && (
          <div className="mt-6">
            <div className="text-gray-400 text-bold flex justify-start rounded px-2 pt-2">
              Upcoming Events
            </div>
            <div className="mt-4 bg-white rounded-lg shadow-md p-4">
              {/* Header: Calendar Icon and Date */}
              <div className="flex items-center space-x-2">
                <CalendarOutlined className="text-xl text-blue-500" />
                <div className="font-bold text-lg">31</div>
              </div>
              {/* Event Details */}
              <div className="mt-4 text-sm text-gray-600">
                <div className="font-medium">Upcoming Event</div>
                <div className="mt-1">• Meeting with Prashant</div>
              </div>
              {/* Time Range */}
              <div className="mt-4 flex justify-between items-center">
                <div className="text-xl font-semibold">8:45 AM</div>
                <span className="mx-2 text-gray-400">→</span>
                <div className="text-xl font-semibold">10:45 AM</div>
              </div>
              {/* Button to Join Meeting */}
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
        )}
>>>>>>> babb4448c65a5e08ebf66ff6546cf5d17e31d2cf
      </div>
    </div>
  );
};

export default SideBar;
