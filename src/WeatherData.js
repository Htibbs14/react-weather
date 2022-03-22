import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.defaultCity}</h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>
      <h3>{props.data.description}</h3>
      <div className="container" id="weather-container">
        <div className="row">
          <div className="col-7">
            <div className="tempInfo">
              <span>
                <img
                  src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
                  alt=""
                  className="main-emoji"
                  id="icon"
                />
              </span>
              <span className="main-temp">{props.data.temperature}</span>
              <span className="temp-types">
                <span id="far">°F</span>
              </span>
            </div>
          </div>
          <div className="col-sm-5">
            <span className="col-sm--5">
              <ul>
                <br />
                <li>Feels like {props.data.feelsLike}°F</li>
                <li>Humidity {props.data.humidity}%</li>
                <li>Wind {props.data.wind} km/h</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
