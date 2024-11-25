import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./Pages/Calendar";
import Dashboard from "./Pages/Dashboard";
import Inbox from "./Pages/Inbox";
import Integration from "./Pages/Integration";
import Map from "./Pages/Map";

function App() {
  const [count, setCount] = useState(0); //test hiiv

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
