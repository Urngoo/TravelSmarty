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

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/flight" element={<Flight />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
