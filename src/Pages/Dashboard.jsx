import { useState } from "react";
import WeatherCard from "../dashboard/WeatherCard";
import ToggleSwitch from "../dashboard/ToggleSwitch";
import PageLayout from "../PageLayout";

function Dashboard() {
  const [count, setCount] = useState(0); //test hiiv

  return (
    <>
      <PageLayout>
        <ToggleSwitch />
        <WeatherCard />
      </PageLayout>
    </>
  );
}

export default Dashboard;
