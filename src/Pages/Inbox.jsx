import React from "react";
import PageLayout from "../PageLayout";
import Navbar from "../components/Navbar";
import AddCard from "../components/AddEventCard";

const Inbox = () => {
  return (
    <PageLayout>
      <div>
        <Navbar />
        <AddCard />
      </div>
    </PageLayout>
  );
};

export default Inbox;
