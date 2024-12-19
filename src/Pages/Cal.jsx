import React, { useState } from "react";
import PageLayout from "../PageLayout";
import {
  Calendar,
  Badge,
  Tag,
  Button,
  Modal,
  Form,
  Input,
  Select,
  List,
  DatePicker,
  Table,
  Space,
} from "antd";
import Navbar from "../components/Navbar";

const initialMeetingData = {
  "2024-12-04": [
    { id: "1", text: "Meeting 1", status: "green" },
    { id: "2", text: "Meeting 2", status: "green" },
  ],
  "2024-12-05": [
    { id: "3", text: "Meeting 3", status: "yellow" },
    { id: "4", text: "Meeting 4", status: "blue" },
  ],
  // ... your existing meeting data
};

const statusColors = {
  blue: "processing",
  red: "error",
  yellow: "warning",
  green: "success",
};

const Cal = () => {
  const [meetingData, setMeetingData] = useState(initialMeetingData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("calendar");
  const [form] = Form.useForm();

  const dateCellRender = (value) => {
    const dateKey = value.format("YYYY-MM-DD");
    const meetings = meetingData[dateKey] || [];

    return (
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, dateKey)}
        style={{ minHeight: "50px" }}
      >
        {meetings.map((meeting) => (
          <Tag
            key={meeting.id}
            color={statusColors[meeting.status]}
            draggable
            onDragStart={(e) => onDragStart(e, meeting.id, dateKey)}
            style={{ marginBottom: 4, cursor: "move", display: "block" }}
          >
            {meeting.text}
          </Tag>
        ))}
      </div>
    );
  };

  const onDragStart = (e, meetingId, dateKey) => {
    e.dataTransfer.setData("meetingId", meetingId);
    e.dataTransfer.setData("sourceDate", dateKey);
  };

  const onDrop = (e, targetDate) => {
    const meetingId = e.dataTransfer.getData("meetingId");
    const sourceDate = e.dataTransfer.getData("sourceDate");

    if (sourceDate === targetDate) return;

    const sourceMeetings = [...(meetingData[sourceDate] || [])];
    const targetMeetings = [...(meetingData[targetDate] || [])];

    const draggedMeetingIndex = sourceMeetings.findIndex(
      (meeting) => meeting.id === meetingId
    );
    if (draggedMeetingIndex === -1) return;

    const [draggedMeeting] = sourceMeetings.splice(draggedMeetingIndex, 1);
    targetMeetings.push(draggedMeeting);

    setMeetingData({
      ...meetingData,
      [sourceDate]: sourceMeetings.length ? sourceMeetings : undefined,
      [targetDate]: targetMeetings,
    });
  };

  const getEventsList = () => {
    return Object.entries(meetingData).flatMap(([date, meetings]) =>
      meetings.map((meeting) => ({
        key: meeting.id,
        date: date,
        text: meeting.text,
        status: meeting.status,
        id: meeting.id,
      }))
    );
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: "Event",
      dataIndex: "text",
      key: "text",
      sorter: (a, b) => a.text.localeCompare(b.text),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={statusColors[status]}>{status.toUpperCase()}</Tag>
      ),
      filters: [
        { text: "Success", value: "green" },
        { text: "Processing", value: "blue" },
        { text: "Warning", value: "yellow" },
        { text: "Error", value: "red" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button size="small" onClick={() => handleEditEvent(record)}>
            Edit
          </Button>
          <Button size="small" danger onClick={() => handleDeleteEvent(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleEditEvent = (record) => {
    // Implement edit functionality
    console.log("Edit:", record);
  };

  const handleDeleteEvent = (record) => {
    const { date, id } = record;
    setMeetingData((prev) => {
      const newData = { ...prev };
      newData[date] = newData[date].filter((meeting) => meeting.id !== id);
      if (newData[date].length === 0) {
        delete newData[date];
      }
      return newData;
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleAddEvent = (values) => {
    const { date, text, status } = values;
    const dateKey = date.format("YYYY-MM-DD");
    const newEvent = {
      id: String(Date.now()),
      text,
      status,
    };

    setMeetingData((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), newEvent],
    }));

    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <PageLayout>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Space style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={showModal}>
            Add Event
          </Button>
          <Button
            type={activeTab === "calendar" ? "primary" : "default"}
            onClick={() => setActiveTab("calendar")}
          >
            Calendar View
          </Button>
          <Button
            type={activeTab === "list" ? "primary" : "default"}
            onClick={() => setActiveTab("list")}
          >
            List View
          </Button>
        </Space>

        {activeTab === "calendar" ? (
          <Calendar
            cellRender={dateCellRender}
            style={{ width: "100%", margin: "auto" }}
          />
        ) : (
          <Table
            columns={columns}
            dataSource={getEventsList()}
            pagination={{ pageSize: 10 }}
          />
        )}

        <Modal
          title="Add New Event"
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form form={form} onFinish={handleAddEvent} layout="vertical">
            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: "Please select a date!" }]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              name="text"
              label="Event Name"
              rules={[{ required: true, message: "Please enter event name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true, message: "Please select a status!" }]}
            >
              <Select>
                <Select.Option value="green">Success</Select.Option>
                <Select.Option value="blue">Processing</Select.Option>
                <Select.Option value="yellow">Warning</Select.Option>
                <Select.Option value="red">Error</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Event
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  );
};

export default Cal;
