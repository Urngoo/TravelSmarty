import React, { useState } from "react";
import PageLayout from "../PageLayout";
import { Calendar, Tag } from "antd";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const initialMeetingData = {
  "2024-12-04": [
    { id: 1, text: "Meeting 1", status: "green" },
    { id: 2, text: "Meeting 2", status: "green" },
  ],
  "2024-12-05": [
    { id: 3, text: "Meeting 3", status: "yellow" },
    { id: 4, text: "Meeting 4", status: "blue" },
  ],
  "2024-12-17": [
    { id: 5, text: "Meeting 5", status: "blue" },
    { id: 6, text: "Meeting 6", status: "green" },
  ],
  "2024-12-20": [{ id: 7, text: "Meeting 7", status: "red" }],
  "2024-12-13": [{ id: 8, text: "Meeting 8", status: "yellow" }],
};

const statusColors = {
  blue: "processing",
  red: "error",
  yellow: "warning",
  green: "success",
};

const DraggableMeeting = ({ meeting, onDragStart }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "MEETING",
    item: { id: meeting.id, text: meeting.text, status: meeting.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Tag color={statusColors[meeting.status]} style={{ marginBottom: 4 }}>
        {meeting.text}
      </Tag>
    </div>
  );
};

const Cal = () => {
  const [meetingData, setMeetingData] = useState(initialMeetingData);

  const handleDrop = (date, meeting) => {
    const formattedDate = date.format("YYYY-MM-DD");

    setMeetingData((prev) => {
      const newData = { ...prev };

      // Huuchnaas ni ustgah
      Object.keys(newData).forEach((key) => {
        newData[key] = newData[key].filter((m) => m.id !== meeting.id);
      });

      // uur udur nemeh
      if (!newData[formattedDate]) {
        newData[formattedDate] = [];
      }
      newData[formattedDate].push(meeting);

      return newData;
    });
  };

  // Cell render function
  const dateCellRender = (date) => {
    const dateKey = date.format("YYYY-MM-DD");
    const meetings = meetingData[dateKey] || [];

    const [{ isOver }, drop] = useDrop(() => ({
      accept: "MEETING",
      drop: (item) => handleDrop(date, item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));

    return (
      <div
        ref={drop}
        style={{
          minHeight: 50,
          backgroundColor: isOver ? "#f0f7ff" : "transparent",
          padding: 4,
          borderRadius: 4,
        }}
      >
        {meetings.map((meeting) => (
          <DraggableMeeting key={meeting.id} meeting={meeting} />
        ))}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <PageLayout>
        <Calendar
          dateCellRender={dateCellRender}
          style={{ width: "100%", margin: "auto" }}
        />
      </PageLayout>
    </DndProvider>
  );
};

export default Cal;
