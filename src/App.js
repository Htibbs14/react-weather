import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card main-card">
          <div className="card-body">
            <Search />
            <h1>New York</h1>
            <h2>Sunday 10:27</h2>
            <h3>Overcast clouds</h3>
            <div className="container" id="weather-container">
              <div className="row">
                <div className="col-7">
                  <div className="tempInfo">
                    <span>
                      <img
                        src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                        alt=""
                        className="main-emoji"
                        id="icon"
                      />
                    </span>
                    <span className="main-temp">33</span>
                    <span className="temp-types">
                      <span id="far">°F</span>
                    </span>
                  </div>
                </div>
                <div className="col-sm-5">
                  <span className="col-sm--5">
                    <ul>
                      <br />
                      <li>Feels like 32°F</li>
                      <li>Humidity 15%</li>
                      <li>Wind 10 mph</li>
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
}
