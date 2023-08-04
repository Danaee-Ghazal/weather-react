import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  function updateWeather(response) {
    console.log(response);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,

      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(updateWeather);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            onChange={updateCity}
            type="search"
            placeholder="Type the city's name"
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
  );
  if (weather.temperature) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app ">
            {form}
            <div className="overview">
              <h1>{city}</h1>
              <ul>
                <li>
                  Last updated: <span></span>
                </li>
                <li></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix">
                  <div className="float-left">
                    <strong className="ml-5">{weather.temperature}</strong>
                    <span className="units"> °C </span>
                  </div>
                </div>
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="float-left"
                />
                <br />
                <div>{weather.description}</div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity:
                    <span>{weather.humidity}</span>%
                  </li>
                  <li>
                    Wind:
                    <span>{weather.wind}</span> km/h
                  </li>
                </ul>
              </div>
            </div>

            <div className="weather-forecast"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">{form}</div>
        </div>
      </div>
    );
  }
}
