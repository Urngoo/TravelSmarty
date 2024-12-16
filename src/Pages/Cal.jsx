import React from "react";
import PageLayout from "../PageLayout";
import { Calendar, Badge, Tag } from "antd";
import Navbar from "../components/Navbar";

const meetingData = {
  "2024-12-04": [
    { text: "Meeting 1", status: "green" },
    { text: "Meeting 2", status: "green" },
  ],
  "2024-12-05": [
    { text: "Meeting 3", status: "yellow" },
    { text: "Meeting 4", status: "blue" },
  ],
  "2024-12-17": [
    { text: "Meeting 5", status: "blue" },
    { text: "Meeting 6", status: "green" },
  ],
  "2024-12-20": [{ text: "Meeting 7", status: "red" }],
  "2024-12-13": [{ text: "Meeting 8", status: "yellow" }],
};

const statusColors = {
  blue: "processing",
  red: "error",
  yellow: "warning",
  green: "success",
};

const dateCellRender = (date) => {
  const dateKey = date.format("YYYY-MM-DD");
  const meetings = meetingData[dateKey] || [];

  return (
    <div>
      {meetings.map((meeting, index) => (
        <Tag
          key={index}
          color={statusColors[meeting.status]}
          style={{ marginBottom: 4 }}
        >
          {meeting.text}
        </Tag>
      ))}
    </div>
  );
};
const Cal = () => {
  return (
    <PageLayout>
      <Navbar />
      <Calendar
        dateCellRender={dateCellRender}
        style={{ width: "100%", margin: "auto" }}
      />
    </PageLayout>
  );
};

export default Cal;
