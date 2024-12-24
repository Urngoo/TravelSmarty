import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PageLayout from "../PageLayout";
import Navbar from "../components/Navbar";

const Map = () => {
  const [position, setPosition] = useState(null); // State for the user's location
  const [error, setError] = useState(null); // State for geolocation errors

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          console.log("Location fetched:", latitude, longitude);
          setPosition([latitude, longitude]); // Set accurate location
        },
        (err) => {
          console.error("Error fetching location:", err);
          if (err.code === 1) {
            setError("Permission denied. Please enable location access.");
          } else if (err.code === 2) {
            setError("Position unavailable. Unable to get your location.");
          } else {
            setError("An unknown error occurred.");
          }
        },
        {
          enableHighAccuracy: true, // Request for high accuracy
          timeout: 1500, // Set a longer timeout to give it time to fetch
          maximumAge: 0, // Don't use cached location data
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <PageLayout>
      <div>
        <Navbar />
        <div style={{ height: "100vh", width: "100%" }}>
          {error ? (
            <p>{error}</p>
          ) : position ? (
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>You are here!</Popup>
              </Marker>
            </MapContainer>
          ) : (
            <p>Finding your location...</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Map;
