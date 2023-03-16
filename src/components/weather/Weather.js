import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectWeather, loadData } from "../../features/weather/weatherSlice";

export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    
      useEffect(() => {
        dispatch(loadData());
      }, [dispatch]);

    return (
        <div className="weather">
          <div className="prop-container">
            <p className="prop">City:</p>
            <p className="value">{weather.city}</p>
          </div>
          <div className="prop-container">
            <p className="prop">Weather:</p>
            <p className="value">{weather.weather}</p>
          </div>
          <div className="prop-container">
            <p className="prop">Temperature:</p>
            <p className="value">{weather.temp} °C</p>
          </div>
          <div className="prop-container">
            <p className="prop">Wind:</p>
            <p className="value">{weather.wind} m/s</p>
          </div>
        </div>
    );
}