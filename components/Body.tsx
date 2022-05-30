import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AddressContext } from "../pages/index";
import CurrentWeather from "./CurrentWeather";
import style from "../styles/body.module.scss";
import HourlyWeather from "./HourlyWeather";
import WeeklyWeather from "./WeeklyWeather";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";

const Body = () => {
  const {
    hasBeenSearched,
    setHasBeenSearched,
    setDailyForecast,
    dailyForecast,
    setWeeklyForecast,
    weeklyForecast,
    setInfo,
    info,
    searchTerm,
    setSearchTerm,
    hourlyForecast,
    setHourlyForecast,
    setAlerts,
  } = useContext(AddressContext);

  const API_KEY_V2: string = "53097cb2fae5a9644a976017e7d9515c";

  // use useEffect if you want to set a default location

  useEffect(() => {
    getDailyForecast("New York");
  },[])


  useEffect(() => {
    if (searchTerm && hasBeenSearched) {
      getDailyForecast(searchTerm);
      setHasBeenSearched(false);
    }
  }, [searchTerm, hasBeenSearched]);


  // Getting the Daily forecast and creating a custom hook
  const getDailyForecast = (searchTerm: any) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=${API_KEY_V2}`
      )
      .then((response) => {
        // Getting current weather
        setDailyForecast([
          {
            city: response.data.name,
            temp: response.data.main.temp,
            condition: response.data.weather[0].main,
            conditionIcon: response.data.weather[0].icon,
            minTemp: response.data.main.temp_min,
            maxTemp: response.data.main.temp_max,
          },
        ]);

        // calling this here so the lat and lon values will be correct
        const coords = getWeeklyForecast(
          response.data.coord.lat,
          response.data.coord.lon
        );

        // Clears the search bar immedietly after searching
        setSearchTerm("");
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  // Getting the Weekly forecast and creating a custom hook
  const getWeeklyForecast = (lat: number, lon: number) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY_V2}`
      )
      .then((res) => {
        setWeeklyForecast(res.data.daily);

        setInfo(
          {
            uvIndex: res.data.current.uvi,
            windSpeed: res.data.current.wind_speed,
            windDegree: res.data.current.wind_deg,
            sunRise: res.data.current.sunrise,
            sunSet: res.data.current.sunset,
            humidity: res.data.current.humidity,
            visibility: res.data.current.visibility,
            feelsLike: res.data.current.feels_like,
            actualTemp: res.data.current.temp
          },
        );

        setHourlyForecast(res.data.hourly);

        setAlerts(
          {
            alert: res.data.alerts[0].event
          }
        );

      })
      .catch((error) => console.error(`Error: ${error}`));
  };



  return (
    <section className={style["body"]} >
      {dailyForecast && (
        <>
          <CurrentWeather />
          <HourlyWeather />
          <WeeklyWeather />
          <WeatherInfo />
          <Footer />
        </>
      )}
    </section>
  );
};

export default Body;
