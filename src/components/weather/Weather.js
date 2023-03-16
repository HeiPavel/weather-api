import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectWeather, loadData } from "../../features/weather/weatherSlice";

export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    let temp = Math.floor(weather.temp);
    temp = (temp <= weather.temp - 0.5) ? Math.ceil(weather.temp) : temp;
    
      useEffect(() => {
        dispatch(loadData());
      }, [dispatch]);

    return (
        <div className="weather-card">
          <div className="basic-weather-data">
            <div className="icon-container">
              <img src={weather.icon} alt="" />
            </div>
            <div className="basic-weather-data-container">
              <p id="current-weather">{weather.weather}</p>
              <p id="temp">{temp}</p>
              <p id="city">{weather.city}</p>
            </div>
          </div>
          <div className="minor-weather-data">
            <div className="prop-container">
              <p>Wind:</p>
              <p>{weather.wind} m/s</p>
            </div>
            <div className="prop-container">
              <p>Humidity:</p>
              <p>{weather.humidity}%</p>
            </div>
            <div className="prop-container">
              <p>Pressure:</p>
              <p>{weather.pressure} Pa</p>
            </div>
          </div>
        </div>
    );
}