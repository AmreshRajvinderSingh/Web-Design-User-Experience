import React, { useEffect, useState } from "react";

const useResultsforecast = (index) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [hourweatherdata, setHourWeatherData] = useState([]);
  const [dayweatherdata, setDayWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=42.361145&lon=-71.057083&appid=396eb7ac98f7f04fb52ccfdf74ad53e4`
        );
        const weatherData = await response.json();

        // Separate hourly and daily forecasts
        const separatedHourly = {};
        const separatedDaily = {};

        weatherData.list.forEach((item) => {
          const dateString = item.dt_txt;
          const date = new Date(dateString);
          const dayOfWeek = date.getDay();

          if (!separatedHourly[dayOfWeek]) {
            separatedHourly[dayOfWeek] = [];
          }

          separatedHourly[dayOfWeek].push({
            day: dateString,
            highTemp: item.main.temp_max,
            lowTemp: item.main.temp_min,
            weatherType: item.weather[0].main,
            icon: item.weather[0].icon,
          });

          if (date > new Date()) {
            if (!separatedDaily[dayOfWeek]) {
              separatedDaily[dayOfWeek] = {
                day: dateString,
                highTemp: item.main.temp_max,
                lowTemp: item.main.temp_min,
                weatherType: item.weather[0].main,
                icon: item.weather[0].icon,
              };
            }
          }
        });

        const sortedDaily = Object.values(separatedDaily).sort(
          (a, b) => new Date(a.day) - new Date(b.day)
        );

        setHourWeatherData(separatedHourly);
        setDayWeatherData(sortedDaily);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return index === 1 ? [dayweatherdata] : [hourweatherdata];
};

export default useResultsforecast;
