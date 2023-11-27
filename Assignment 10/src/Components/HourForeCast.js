// HourForeCast.js
import React from "react";
import { useParams } from "react-router-dom";
import useResultsforecast from "./useResultsforecast";
import Cards from "./Cards";
import "../App.css"; // Import the global styles
import "./Weather.css"; // Assuming your custom styles are in HourForeCast.css

const HourForeCast = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const { day } = useParams();
  const [hourdata] = useResultsforecast(2);

  return (
    <div className="day-hourly-forecast">
      <h2 className="title">{day} Hourly Forecast</h2>
      <div className="container">
        <div className="row">
          {hourdata && hourdata[1] ? (
            hourdata[days.indexOf(day)].map((dayData, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                <Cards
                  day={dayData.day || ""}
                  highTemp={dayData.highTemp || ""}
                  lowTemp={dayData.lowTemp || ""}
                  weatherType={dayData.icon || ""}
                />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HourForeCast;
