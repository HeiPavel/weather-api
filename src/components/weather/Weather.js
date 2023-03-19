import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWeather, loadData, addDate, selectDate } from "../../features/weather/weatherSlice";
import { round, windDirection, getCurrentDate } from "../../util/util";
import { Loading } from "../loading/Loading";

export const Weather = () => {
    const dispatch = useDispatch();
    const {city, temp, wind, deg, humidity, pressure, weather, icon, isLoading} = useSelector(selectWeather);
    const {day, month, weekday, hours, minutes, seconds} = useSelector(selectDate);

    useEffect(() => {
      dispatch(loadData());
      const date = getCurrentDate();
      dispatch(addDate(date));
    }, [dispatch]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        const date = getCurrentDate();
        dispatch(addDate(date));
      }, (60 - seconds) * 1000);
      return () => {
        clearInterval(intervalId);
      }
    }, [dispatch, seconds]);

    const loadedWeatherCard = () => {
      return (
        <div className="weather-card-inner-container">
            <div className="basic-weather-data">
              <div className="icon-container">
                <img src={icon} alt="" />
                <div className="date">
                  <p id="time">{hours < 10 ? '0' + hours: hours}:{minutes < 10 ? '0' + minutes : minutes}</p>
                  <p id="current-day">{weekday}, {day} {month}</p>
                </div>
              </div>
              <div className="basic-weather-data-container">
                <p id="current-weather">{weather}</p>
                <p id="temp">{round(temp)}</p>
                <p id="city">{city}</p>
              </div>
            </div>
            <div className="minor-weather-data">
              <div className="prop-container">
                <p>Wind:</p>
                <p><span style={{'--deg': `${deg + 90}deg`}} id="wind">➤</span> {windDirection(deg)} {round(wind)} m/s</p>
              </div>
              <div className="prop-container">
                <p>Humidity:</p>
                <p>{humidity}%</p>
              </div>
              <div className="prop-container">
                <p>Pressure:</p>
                <p>{pressure} Pa</p>
              </div>
            </div>
          </div>
      );
    }

    return (
        <div className="weather-card">
          {isLoading ? <Loading /> : loadedWeatherCard()}
        </div>
    );
}