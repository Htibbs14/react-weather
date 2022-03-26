import React from "react";

export default function ForecastDays(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDays">
      <div className="ForecastDay">{day()}</div>
      <div className="ForecastIcons">
        <img
          src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <div>
        <span className="ForecastMaxTemp">
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        /{" "}
        <span className="ForecastMinTemp">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
