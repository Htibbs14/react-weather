import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./App.css";

export default function Weather(props) {
  let [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function showTempInfo(response) {
    console.log(response.data);

    setWeatherInfo({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      ready: true,
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="card main-card">
            <div className="card-body">
              <div className="Search">
                <form className="mb-3">
                  <div className="row">
                    <div className="col-9">
                      <input
                        type="search"
                        placeholder="Type a city.."
                        className="form-control"
                        id="type-city"
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary w-100"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <h1>{props.defaultCity}</h1>
              <h2>
                <FormattedDate date={weatherInfo.date} />
              </h2>
              <h3>{weatherInfo.description}</h3>
              <div className="container" id="weather-container">
                <div className="row">
                  <div className="col-7">
                    <div className="tempInfo">
                      <span>
                        <img
                          src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
                          alt=""
                          className="main-emoji"
                          id="icon"
                        />
                      </span>
                      <span className="main-temp">
                        {weatherInfo.temperature}
                      </span>
                      <span className="temp-types">
                        <span id="far">°F</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <span className="col-sm--5">
                      <ul>
                        <br />
                        <li>Feels like {weatherInfo.feelsLike}°F</li>
                        <li>Humidity {weatherInfo.humidity}%</li>
                        <li>Wind {weatherInfo.wind} km/h</li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="footer">
            {" "}
            <a
              href="https://github.com/Htibbs14/react-weather"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Open-source code
            </a>
            , by Hailey Tibbens
          </p>
        </div>
      </div>
    );
  } else {
    const apiKey = "c176156c8c25cae90d4b83c175b81e5f";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showTempInfo);
    return <h2>Loading...</h2>;
  }
}
