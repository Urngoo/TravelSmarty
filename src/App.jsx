import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./Pages/Calendar";
import Dashboard from "./Pages/Dashboard";
import Inbox from "./Pages/Inbox";
import Integration from "./Pages/Integration";
import Map from "./Pages/Map";
import AddEvent from "./component/event";
import SideBar from "./dashboard/Sidebar";
import Flight from "./component/flight";



function App() {
  const [count, setCount] = useState(0); //test hiiv

  return (
    <>
      <CardComponent />
      <ToggleSwitch />
      <SideBar/>
    </>
  );
}

export default App;
