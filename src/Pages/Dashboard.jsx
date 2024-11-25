import { useState } from "react";
import SideBar from "../components/Sidebar";
import WeatherCard from "../dashboard/WeatherCard";
import ToggleSwitch from "../dashboard/ToggleSwitch";

function Dashboard() {
  const [count, setCount] = useState(0); //test hiiv

  return (
    <>
      <ToggleSwitch />
      <WeatherCard />
      <SideBar />
    </>
  );
}

export default Dashboard;
