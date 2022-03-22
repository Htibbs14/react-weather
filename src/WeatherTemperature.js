import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelTemp(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="main-temp">{props.celsius}</span>
        <span className="temp-types">
          <span>
            °C |{" "}
            <a href="/" onClick={showFarTemp}>
              °F
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="main-temp">{Math.round(fahrenheit)}</span>
        <span className="temp-types">
          <span>
            <a href="/" onClick={showCelTemp}>
              °C
            </a>{" "}
            | °F
          </span>
        </span>
      </span>
    );
  }
}
