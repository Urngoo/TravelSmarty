import React, { useState, useEffect } from "react";
import axios from "axios";
import PageLayout from "../PageLayout";
import Navbar from "../components/Navbar";
const WeatherCard = ({
  collapsed = false,
  city = "Ulaanbaatar", // gazraa songono
}) => {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    weatherCondition: "Unknown",
    icon: null,
    highTemp: 0,
    lowTemp: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric");
  const [cityName, setCityName] = useState(city);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=dee14d37e8ebc054c177f18900a00436`
        );
        const data = response.data;
        setWeatherData({
          temperature: data.main.temp,
          weatherCondition: data.weather[0].description,
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          highTemp: data.main.temp_max,
          lowTemp: data.main.temp_min,
        });
      } catch (err) {
        setError("Failed to fetch weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [cityName, unit]);

  const handleCityChange = (e) => {
    setCityName(e.target.value);
  };

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <PageLayout>
      <Navbar />
      <div
        className={`max-w-xs p-4 rounded-lg bg-white shadow-lg transition-all duration-300 mt-5 ${
          collapsed ? "" : "ml-64"
        }`}
      >
        {/* Weather Icon */}
        <div className="flex justify-center mb-4">
          {weatherData.icon ? (
            <img
              src={weatherData.icon}
              alt="weather-icon"
              className="h-12 w-12"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 0 512 512"
              fill="#FFA500"
            >
              <path d="M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336 c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112 c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400 c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167 l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625 S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0 l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256 c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32 c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167 c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0 c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0 c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z" />
            </svg>
          )}
        </div>

        {/* Weather Information */}
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-gray-800">
            {weatherData.temperature}°{unit === "metric" ? "C" : "F"}
          </h2>
          <p className="text-lg text-gray-600">
            {weatherData.weatherCondition}
          </p>
        </div>

        {/* Temperatures */}
        <div className="flex justify-between items-center text-xl font-semibold">
          <span className="text-red-600">{weatherData.highTemp}°</span>
          <span className="text-gray-400">|</span>
          <span className="text-blue-600">{weatherData.lowTemp}°</span>
        </div>

        {/* City and Unit Switch */}
        <div className="mt-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Enter City"
            value={cityName}
            onChange={handleCityChange}
            className="p-2 border rounded-md"
          />
          <button
            onClick={toggleUnit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default WeatherCard;
