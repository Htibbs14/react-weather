import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.data.city}</h1>
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
                />
              </span>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-sm-5">
            <span className="col-sm--5">
              <ul>
                <br />
                <li>Feels like {props.data.feelsLike}°C</li>
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
