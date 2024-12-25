import React from "react";
import ToggleSwitch from "../dashboard/ToggleSwitch";

const IntegrationCard = ({ title, description, icon, toggle, activate }) => (
  <div className="flex items-center p-4 bg-white border rounded-lg shadow-sm">
    {/* Icon */}
    <div className="w-12 h-12 flex items-center justify-center  rounded-lg mr-4">
      <img src={icon} alt={`${title} icon`} className="w-8 h-8" />
    </div>
    {/* Content */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    {/* Toggle or Button */}
    <ToggleSwitch />

  </div>
);

const IntegrationsSection = ({ title, data, hasToggle }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((integration, index) => (
        <IntegrationCard
          key={index}
          title={integration.title}
          description={integration.description}
          icon={integration.icon}
          toggle={hasToggle}
          activate={!hasToggle}
        />
      ))}
    </div>
  </div>
);

export default function Integrations() {
  const customizeData = [
    {
      title: "Google Calendar",
      description:
        "New Google Calendar 2020 icon PNG with transparent background image and SVG vector.",
      icon: "https://via.placeholder.com/40", // Replace with your icon link
    },
    {
      title: "Zoom",
      description:
        "New Google Calendar 2020 icon PNG with transparent background image and SVG vector.",
      icon: "https://via.placeholder.com/40", // Replace with your icon link
    },
    {
      title: "Zapier",
      description:
        "New Google Calendar 2020 icon PNG with transparent background image and SVG vector.",
      icon: "https://via.placeholder.com/40", // Replace with your icon link
    },
  ];

  const marketplaceData = [
    {
      title: "Taskade",
      description:
        "New Google Calendar 2020 icon PNG with transparent background image and SVG vector.",
      icon: "https://via.placeholder.com/40", // Replace with your icon link
    },
    {
      title: "Google Calendar",
      description:
        "New Google Calendar 2020 icon PNG with transparent background image and SVG vector.",
      icon: "https://via.placeholder.com/40", // Replace with your icon link
    },
    {
      title: "Trello",
      description:
        "New Google Calendar 2020 icon PNG with transparent background image and SVG vector.",
      icon: "https://via.placeholder.com/40", // Replace with your icon link
    },
  ];

  return (
    <div className="p-8 ">
      <IntegrationsSection title="Customize Integrations" data={customizeData} hasToggle />
      <IntegrationsSection title="Integrations Marketplace" data={marketplaceData} hasToggle={false} />
    </div>
  );
}
