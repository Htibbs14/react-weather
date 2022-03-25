import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDays">Thu</div>
          <div className="ForecastIcons">icon</div>
          <div>
            <span className="ForecastMaxTemp"> 20°</span> / <span className="ForecastMinTemp">9°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
