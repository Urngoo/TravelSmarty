import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./Pages/Cal";
import Dashboard from "./Pages/Dashboard";
import Inbox from "./Pages/Inbox";
import Integration from "./Pages/Integration";
import Map from "./Pages/Map";
import Flight from "./components/flight";
import SideBar from "./components/Sidebar";
import WeatherCard from "./dashboard/WeatherCard";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <div className={`flex flex-col transition-all duration-300 w-full`}>
          {/* Main content */}
          <div className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/integration" element={<Integration />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/map" element={<Map />} />
              <Route path="/flight" element={<Flight />} />
              <Route path="/WeatherCard" element={<WeatherCard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
