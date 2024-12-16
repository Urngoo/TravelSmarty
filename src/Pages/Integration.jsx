import React, { useState } from "react";
import { Switch, Input, Button } from "antd";
import Navbar from "../components/Navbar";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

const integrations = [
  {
    id: 1,
    name: "Google Calendar",
    description:
      "New Google Calendar 2020 icon PNG with transparent background image and SVG vector. It is free to download and use any commercial projects no attribution",
    icon: "https://img.icons8.com/color/48/google-calendar--v1.png",
    enabled: false,
  },
  {
    id: 2,
    name: "Zoom",
    description:
      "New Google Calendar 2020 icon PNG with transparent background image and SVG vector. It is free to download and use any commercial projects no attribution",
    icon: "https://storage.googleapis.com/a1aa/image/lW9binHg9RaYB9zrj98UBANDjwoYpX2HrkOuqIfvmwfUH35TA.jpg",
    enabled: false,
  },
  {
    id: 3,
    name: "Zapier",
    description:
      "New Google Calendar 2020 icon PNG with transparent background image and SVG vector. It is free to download and use any commercial projects no attribution",
    icon: "https://storage.googleapis.com/a1aa/image/KUYwir8kwl79PN9Ua196P5VUfrEjtopQTHOEWZ1ZFE4qj78JA.jpg",
    enabled: false,
  },
  {
    id: 4,
    name: "Taskade",
    description:
      "New Google Calendar 2020 icon PNG with transparent background image and SVG vector. It is free to download and use any commercial projects no attribution",
    icon: "https://storage.googleapis.com/a1aa/image/KUYwir8kwl79PN9Ua196P5VUfrEjtopQTHOEWZ1ZFE4qj78JA.jpg",
    enabled: false,
  },
  {
    id: 5,
    name: "Google Calendar1",
    description:
      "New Google Calendar 2020 icon PNG with transparent background image and SVG vector. It is free to download and use any commercial projects no attribution",
    icon: "https://storage.googleapis.com/a1aa/image/KUYwir8kwl79PN9Ua196P5VUfrEjtopQTHOEWZ1ZFE4qj78JA.jpg",
    enabled: false,
  },
  {
    id: 6,
    name: "Trello",
    description:
      "New Google Calendar 2020 icon PNG with transparent background image and SVG vector. It is free to download and use any commercial projects no attribution",
    icon: "https://storage.googleapis.com/a1aa/image/KUYwir8kwl79PN9Ua196P5VUfrEjtopQTHOEWZ1ZFE4qj78JA.jpg",
    enabled: false,
  },
];

const Integration = () => {
  const [state, setState] = useState(integrations);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleIntegration = (id) => {
    setState((prevState) =>
      prevState.map((integration) =>
        integration.id === id
          ? { ...integration, enabled: !integration.enabled }
          : integration
      )
    );
  };

  const filteredIntegrations = state.filter((integration) =>
    integration.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const firstThree = filteredIntegrations.slice(0, 3);
  const others = filteredIntegrations.slice(3);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="flex flex-row mb-8 justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Customize Integrations
          </h1>
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search integrations"
              prefix={<SearchOutlined className="text-gray-400" />}
              style={{ borderRadius: "24px", padding: "10px 16px" }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              className="flex items-center px-6 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
              icon={<FilterOutlined />}
            >
              Filter
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {firstThree.map((integration) => (
            <div
              key={integration.id}
              className="border rounded-xl shadow-lg p-6 bg-white flex flex-col text-left transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <img
                  src={integration.icon}
                  alt={`${integration.name} logo`}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <Switch
                  checked={integration.enabled}
                  onChange={() => toggleIntegration(integration.id)}
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {integration.name}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex flex-row mb-8 justify-between items-center">
            <h1 className="text-3xl font-extrabold text-gray-800">
              Customize Integrations
            </h1>
            <div className="flex items-center gap-4">
              <Input
                placeholder="Search integrations"
                prefix={<SearchOutlined className="text-gray-400" />}
                style={{ borderRadius: "24px", padding: "10px 16px" }}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                className="flex items-center px-6 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
                icon={<FilterOutlined />}
              >
                Filter
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((integration) => (
              <div
                key={integration.id}
                className="border rounded-xl shadow-lg p-6 bg-white flex flex-col text-left transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <img
                    src={integration.icon}
                    alt={`${integration.name} logo`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <Switch
                    checked={integration.enabled}
                    onChange={() => toggleIntegration(integration.id)}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {integration.name}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            <p>No integrations found matching your search.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Integration;
