import React, { useState } from "react";
import axios from "axios";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type the city's name please..."
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-warning w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1></h1>
            <ul>
              <li>
                Last updated: <span></span>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img src="" alt="Clear" className="float-left" />
                <div className="float-left">
                  <strong></strong>
                  <span className="units"> °C </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span></span>%
                </li>
                <li>
                  Wind: <span></span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </div>
        <small>
          <a
            href="https://github.com/Danaee-Ghazal/vanilla-weather-app/tree/main"
            target="_blank"
          >
            Open-source code
          </a>
          by Ghazal Danaee
        </small>
      </div>
    </div>
  );
}
