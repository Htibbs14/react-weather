import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState("");

  useEffect(() => {
    setReady(false);
  }, [props.coord]);

  function forecastInfo(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDays data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "c176156c8c25cae90d4b83c175b81e5f";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(forecastInfo);

    return null;
  }
}
