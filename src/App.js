import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div>
      <WeatherSearch defaultCity="New York" />
    </div>
  );
}
