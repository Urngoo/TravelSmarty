import React from "react";
import PageLayout from "../PageLayout";
import Navbar from "../components/Navbar";
import WeatherCard from "../dashboard/WeatherCard";

const Inbox = () => {
  return (
    <PageLayout>
      <div>
        <Navbar />
        <WeatherCard />
        Inbox
      </div>
    </PageLayout>
  );
};

export default Inbox;
