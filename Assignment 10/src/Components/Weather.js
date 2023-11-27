import React, { useEffect, useState } from "react";
import Card from "./Cards";
import useResultsforecast from "./useResultsforecast";
import "../App.css";
import "./Weather.css";

const Weather = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [dayweatherdata] = useResultsforecast(1);

  return (
    <div className="weather-forecast">
      <h1 className="title"> Weather Forecast</h1>
      <div className="container">
        <div className="row">
          {dayweatherdata &&
            dayweatherdata.map((dayData, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                <Card
                  day={days[new Date(dayData.day).getDay()]}
                  highTemp={dayData.highTemp}
                  lowTemp={dayData.lowTemp}
                  weatherType={dayData.icon}
                  from={1}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
