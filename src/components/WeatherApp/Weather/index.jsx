import React, { useState, useEffect } from 'react';
import Search from '../Search';

const WeatherApp = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${param}&appid=8422f1ac14709bb1db7dd36cb7a151ed`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(search);
    setSearch('')
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-us', {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })
  }

  useEffect(() => {
    fetchWeatherData('Mumbai');
  }, []);

  console.log(weatherData);
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className='container'>
          <div className='city-name'>
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className='date'>{getCurrentDate()}</div>
          <div className='temp'>
            <p>{weatherData && weatherData?.main?.temp} &deg;C</p>
          </div>
          <div className='description'>
            {weatherData && weatherData.weather[0]?.description}
          </div>
          <div className='weather-info'>
            <div>
              <p className='wind-speed'>{weatherData?.wind?.speed}</p>
              <p>Wind Speed</p>
            </div>
            <div>
              <p className='humidity'>{weatherData?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
