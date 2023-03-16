import React from "react";
import { useState, useEffect } from "react";
import { sendCoordinats } from "../../util/weatherRequest";

export const Weather = () => {
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('');
    const [wind, setWind] = useState('');
    const [weather, setWeather] = useState('');

    const handler = async () => {
        const fetchData = await sendCoordinats();
        //console.log('fetchData: ', fetchData);
        setCity(fetchData.data.name);
        setTemp(fetchData.data.main.temp);
        setWind(Math.ceil(fetchData.data.wind.speed));
        setWeather(fetchData.data.weather[0].main);
      }
    
      useEffect(() => {
        handler();
      }, []);

    return (
        <div className="weather">
            <p>City: {city}</p>
            <p>Weather: {weather}</p>
            <p>Temperature: {temp} °C</p>
            <p>Wind: {wind} m/s</p>
        </div>
    );
}