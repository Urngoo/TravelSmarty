import React from "react";
import PageLayout from "../PageLayout";
import Navbar from "../components/Navbar";
import WeatherCard from "../dashboard/WeatherCard";

const Wether = () => {
  return (
    <div>
      <PageLayout />
      <Navbar />
      <WeatherCard />
    </div>
  );
};

export default Wether;
