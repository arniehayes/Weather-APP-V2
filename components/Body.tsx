import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AddressContext } from "../pages/index";

const Body = () => {

    const {
        hasBeenSearched,
        setDailyForecast,
        dailyForecast,
        weeklyForecast,
        setWeeklyForecast,
        info,
        setInfo,
        searchTerm,
    } = useContext(AddressContext);
    const OPEN_WEATHER_KEY: string = "4c9c09da9dd01b0168f894bc925358bd";
    const API_KEY_V2: string = "53097cb2fae5a9644a976017e7d9515c";

    // use useEffect if you want to set a default location

    // Getting the Daily forecast and creating a custom hook
    const getDailyForecast = (searchTerm: any) => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=${API_KEY_V2}`
          )
          .then((response) => {
            // Getting main display data
            setDailyForecast([
              {
                city: response.data.name,
                temp: response.data.main.temp,
                condition: response.data.weather[0].main,
                conditionIcon: response.data.weather[0].icon,
              },
            ]);
            // setCity(response.data.name); /* setCity */
            // const conditionIcon: string =
            // response.data.weather[0].icon; /* setConditionIcon */
            // const temp: number = response.data.main.temp; /* setCity */
            // const condition: string =
            // response.data.weather[0].main; /* setCondition */

            // calling this here so the lat and lon values will be correct
            const coords = getWeeklyForecast(
              response.data.coord.lat,
              response.data.coord.lon
            );
          })
          .catch((error) => console.error(`Error: ${error}`));
    }

    // Getting the Weekly forecast and creating a custom hook
    const getWeeklyForecast = (lat: number, lon: number) => {
        axios
        .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_KEY}`
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
                    }
                ]);

                setInfo([
                    {
                    uvIndex: res.data.current.uvi,
                    windStatus: res.data.current.wind_speed,
                    sunRise: res.data.current.sunrise,
                    sunSet: res.data.current.sunset,
                    humidity: res.data.current.humidity,
                    visibility: res.data.current.visibility,
                    feelsLike: res.data.current.feels_like,
                    },
                ]);
            })
        .catch((error) => console.error(`Error: ${error}`));
    }
    getDailyForecast(searchTerm);

    return (
        <section>
            
      </section>
    );
};

export default Body;
