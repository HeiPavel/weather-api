import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectWeather, loadData, addDate, selectDate } from "../../features/weather/weatherSlice";
import { round, windDirection, getCurrentDate } from "../../util/util";

export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const {day, month, weekday, hours, minutes} = useSelector(selectDate);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      dispatch(loadData());
      const date = getCurrentDate();
      dispatch(addDate(date));
    }, [dispatch]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        const date = getCurrentDate();
        setSeconds(60 - date.seconds);
        dispatch(addDate(date));
      }, seconds * 1000);
      return () => {
        clearInterval(intervalId);
      }
    }, [dispatch, seconds]);

    return (
        <div className="weather-card">
          <div className="basic-weather-data">
            <div className="icon-container">
              <img src={weather.icon} alt="" />
              <div className="date">
                <p id="time">{hours < 10 ? '0' + hours: hours}:{minutes < 10 ? '0' + minutes : minutes}</p>
                <p id="current-day">{weekday}, {day} {month}</p>
              </div>
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