// Card.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

const Card = ({ day, highTemp, lowTemp, weatherType, from }) => {
  const [showHourlyForecast, setShowHourlyForecast] = useState(false);

  const toggleHourlyForecast = () => {
    setShowHourlyForecast(!showHourlyForecast);
  };

  return (
    <div className="col-lg-10 col-md-6 col-sm-12 mb-6">
      <div className="card weather-card dark-theme">
        <h2 className="card-title">{day}</h2>
        <img
          className="card-img-top"
          src={`https://openweathermap.org/img/wn/${weatherType}@2x.png`}
          alt={weatherType}
          style={{ cursor: "pointer" }}
        />
        <div className="card-body">
          <p className="card-text">High: {highTemp}°F</p>
          <p className="card-text">Low: {lowTemp}°F</p>
          {from === 1 ? (
            <Link to={`/${day}`} className="btn btn-light">
              See Hourly Forecast
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
