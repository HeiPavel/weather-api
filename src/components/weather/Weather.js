import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectWeather, loadData } from "../../features/weather/weatherSlice";

export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const round = (prop) => {
      const floor = Math.floor(prop);
      return (floor <= prop - 0.5) ? Math.ceil(prop) : floor;
    }

    const windDirection = (deg) => {
      if (deg > 340 || deg <= 10) return 'N';
      const directions = ['NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
      let sector = Math.ceil((deg)/10);
      const multiplier = Math.floor((sector - 1)/9);
      if (multiplier >= 1) sector -= multiplier;
      const index = sector > 1 ? Math.floor(sector/2) - 1 : Math.floor(sector/2);
      return directions[index];
    }
    
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
              <p id="temp">{round(weather.temp)}</p>
              <p id="city">{weather.city}</p>
            </div>
          </div>
          <div className="minor-weather-data">
            <div className="prop-container">
              <p>Wind:</p>
              <p><span style={{'--deg': `${weather.deg + 90}deg`}} id="wind">➤</span> {windDirection(weather.deg)} {round(weather.wind)} m/s</p>
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