import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AddressContext } from "../pages/index";

const Body = () => {


    const {
      setCity,
      city,
      setDailyForecast,
      dailyForecast,
      weeklyForecast,
      setWeeklyForecast,
    } = useContext(AddressContext);
    const OPEN_WEATHER_KEY: string = "4c9c09da9dd01b0168f894bc925358bd";

    useEffect(() => {
        // Getting the Daily forecast and creating a custom hook
        const getDailyForecast = (searchTerm: any) => {
            axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=${OPEN_WEATHER_KEY}`
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

                console.log("Daily Forecast: ", response);
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
                            day: res.data.daily
                        }
                    ]);
                // Getting weekly data

                // TODO: Try to put this data in an array or something so it isn't so repetative
                const sundayTemp: number =
                res.data.daily[0].temp.day; /* setSunTemp */
                const mondayTemp: number =
                res.data.daily[1].temp.day; /* setMonTemp */
                const tuesdayTemp: number =
                res.data.daily[2].temp.day; /* setTueTemp */
                const wednesdayTemp: number =
                res.data.daily[3].temp.day; /* setWedTemp */
                const thursdayTemp: number =
                res.data.daily[4].temp.day; /* setThuTemp */
                const fridayTemp: number =
                res.data.daily[5].temp.day; /* setFriTemp */
                const saturdayTemp: number =
                res.data.daily[6].temp.day; /* setSatTemp */

                // Getting other info data
                // Top info
                const sundayCondition: string =
                res.data.daily[0].weather[0].icon; /* setSunTemp */
                const mondayCondition: string =
                res.data.daily[1].weather[0].icon; /* setMonTemp */
                const tuesdayCondition: string =
                res.data.daily[2].weather[0].icon; /* setTueTemp */
                const wednesdayCondition: string =
                res.data.daily[3].weather[0].icon; /* setWedTemp */
                const thursdayCondition: string =
                res.data.daily[4].weather[0].icon; /* setThuTemp */
                const fridayCondition: string =
                res.data.daily[5].weather[0].icon; /* setFriTemp */
                const saturdayCondition: string =
                res.data.daily[6].weather[0].icon; /* setSatTemp */

                //Bottom info
                const uvIndex: number = res.data.current.uvi; /* setUvIndex */
                const windStatus: number =
                res.data.current.wind_speed; /* setWindStatus */
                const sunRise: number = res.data.current.sunrise; /* setRise */
                const sunSet: number = res.data.current.sunset; /* setSet */
                const humidity: number =
                res.data.current.humidity; /* setHumidity */
                const visibility: number =
                res.data.current.visibility; /* setVisibility */
                const feelsLikeTemp: number =
                res.data.current.feels_like; /* setFeelsLike */

                console.log("Weekly Forecast: ", res);
            })
            .catch((error) => console.error(`Error: ${error}`));
        }

        getDailyForecast(95401);
    },[]);

    return (
        <section>
            {city}
        </section>
    );
};

export default Body;
