import React, { useState, useEffect } from "react";
import { Card, Spin } from "antd";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use your own API key from OpenWeatherMap
  const API_KEY = "32a5a815c6a4e8c9ed876eaef2f294d1";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Ulaanbaatar&appid=${API_KEY}&units=metric`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Weather data:", data); // Debug log
        setWeather(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError("Failed to load weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    // Refresh weather every 10 minutes
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Card style={{ width: 300, marginBottom: 16, textAlign: "center" }}>
        <Spin />
      </Card>
    );
  }

  if (error || !weather) {
    return (
      <Card style={{ width: 300, marginBottom: 16 }}>
        <div style={{ textAlign: "center", color: "red" }}>
          {error || "Unable to load weather data"}
        </div>
      </Card>
    );
  }

  return (
    <Card
      title={<div style={{ textAlign: "center" }}>Ulaanbaatar Weather</div>}
      style={{
        width: 300,
        marginBottom: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "24px" }}>
            {Math.round(weather.main.temp)}°C
          </h2>
          <p
            style={{
              margin: "4px 0",
              textTransform: "capitalize",
            }}
          >
            {weather.weather[0].description}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          style={{ width: 60, height: 60 }}
        />
      </div>
      <div
        style={{
          marginTop: 12,
          borderTop: "1px solid #f0f0f0",
          paddingTop: 12,
        }}
      >
        <p style={{ margin: "4px 0" }}>
          Feels like: {Math.round(weather.main.feels_like)}°C
        </p>
        <p style={{ margin: "4px 0" }}>Humidity: {weather.main.humidity}%</p>
        <p style={{ margin: "4px 0" }}>
          Wind: {Math.round(weather.wind.speed)} m/s
        </p>
      </div>
    </Card>
  );
};

export default Weather;
