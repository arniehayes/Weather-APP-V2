import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AddressContext } from "../pages/index";
import CurrentWeather from "./CurrentWeather";
import style from "../styles/body.module.scss";
import HourlyWeather from "./HourlyWeather";

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

  const API_KEY: string = "4c9c09da9dd01b0168f894bc925358bd";
  const API_KEY_V2: string = "53097cb2fae5a9644a976017e7d9515c";

  // use useEffect if you want to set a default location
  useEffect(() => {
    if (searchTerm && hasBeenSearched) {
      getDailyForecast(searchTerm);
      setHasBeenSearched(false);
    }
  }, [searchTerm, hasBeenSearched]);

  useEffect(() => {
    console.log("Daily Forecast:", dailyForecast);
    console.log("Weekly Forecast: ", weeklyForecast);
    console.log("Info: ", info);
  }, [dailyForecast, weeklyForecast, info]);

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
        setWeeklyForecast([
          {
            weekDay: "sunday",
            temp: res.data.daily[0].temp.day,
            conditionIcon: res.data.daily[0].weather[0].icon,
          },
          {
            weekDay: "monday",
            temp: res.data.daily[1].temp.day,
            conditionIcon: res.data.daily[1].weather[0].icon,
          },
          {
            weekDay: "tuesday",
            temp: res.data.daily[2].temp.day,
            conditionIcon: res.data.daily[2].weather[0].icon,
          },
          {
            weekDay: "wednesday",
            temp: res.data.daily[3].temp.day,
            conditionIcon: res.data.daily[3].weather[0].icon,
          },
          {
            weekDay: "thursday",
            temp: res.data.daily[4].temp.day,
            conditionIcon: res.data.daily[4].weather[0].icon,
          },
          {
            weekDay: "friday",
            temp: res.data.daily[5].temp.day,
            conditionIcon: res.data.daily[5].weather[0].icon,
          },
          {
            weekDay: "saturday",
            temp: res.data.daily[6].temp.day,
            conditionIcon: res.data.daily[6].weather[0].icon,
          },
        ]);

        setInfo(
          {
            uvIndex: res.data.current.uvi,
            windStatus: res.data.current.wind_speed,
            sunRise: res.data.current.sunrise,
            sunSet: res.data.current.sunset,
            humidity: res.data.current.humidity,
            visibility: res.data.current.visibility,
            feelsLike: res.data.current.feels_like,
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
    <section className={style["body"]}>
      {dailyForecast && (
        <>
          <CurrentWeather />
          <HourlyWeather />
        </>
      )}
    </section>
  );
};

export default Body;
