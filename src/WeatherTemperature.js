import React, { useState } from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          {" "}
          °C |{" "}
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="units">
          {" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F{" "}
        </span>
      </div>
    );
  }
}
