import { useState } from "react";
import WeatherCard from "../dashboard/WeatherCard";
import ToggleSwitch from "../dashboard/ToggleSwitch";
import PageLayout from "../PageLayout";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [count, setCount] = useState(0); //test hiiv

  return (
    <>
      <PageLayout>
        <Navbar />
        <ToggleSwitch />
        <WeatherCard />
      </PageLayout>
    </>
  );
}

export default Dashboard;
