import React, { useState, useEffect } from "react";

import ServiceWeatherApi from "../../serviseWeatherApi/ServiceWeatherApi";


import "./WeatherToday.css";

const WeatherToday = ({ newCity, onHasError }) => {
  
  const serviceWeatherApi = new ServiceWeatherApi();
  
  const [weatherCity, setWeatherSity] = useState( {} );

  useEffect(() => { getLocationCity(); console.log('did mount')}, []);
  
  useEffect(() => { 
    if (newCity !== null) {
      getDataByCity(newCity); 
      console.log('did update') }
      }, [newCity]);


  // - разобраться какие зависимости нужны useEffect
  // - еще раз просмотреть видео про useCallback and useMemo



  const getLocationCity = () => {
    navigator.geolocation.getCurrentPosition(position =>
      
      getDataByCord(position.coords.latitude, position.coords.longitude)
    );
    
  }

  const onError = (err) => {
    onHasError(err)
  }

  const getDataByCord = (latitude, longitude) => {
    serviceWeatherApi
      .getDataByCordinates(latitude, longitude)
      .then(data => {
        setWeatherSity(data)
      })
      .catch(onError);
  }

  const getDataByCity = (newCity) => {
    serviceWeatherApi
      .getDataByCityName(newCity)
      .then(data => {
        setWeatherSity(data)
      })
      .catch(onError);
      
  }

  const { city, date, temperatureDay, wind } = weatherCity;

  return (
    <div className="weather-today">
        
      <div className="city">
        <h2>{city}</h2>
      </div>
      <div className="date">date {date}</div>
      <div className="temp">temp {temperatureDay}</div>
      <div className="wind">wind {wind}</div>
       
    </div>
  );
  
};

export default WeatherToday;
