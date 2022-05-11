import axios from "axios";
import { useState, useContext } from "react";

// Open Weather Map API key //
const OPEN_WEATHER_KEY = '4c9c09da9dd01b0168f894bc925358bd';

// using api to get the daily forecast
export const getDailyForecast = (searchTerm, OPEN_WEATHER_KEY) => {
    axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=${OPEN_WEATHER_KEY}`
        )
        .then((response) => {
            // Getting main display data
            setCity(response.data.name);
            setConditionIcon(response.data.weather[0].icon);
            setTemp(response.data.main.temp);
            setCondition(response.data.weather[0].main);

            // calling this here so the lat and lon values will be correct
            const coords = getWeeklyForecast(response.data.coord.lat, response.data.coord.lon);

            console.log(response);
        })
        .catch((error) => console.error(`Error: ${error}`));
    return {setCity, setConditionIcon, setTemp, setCondition, coords};
}; 



export const getWeeklyForecast = (lat, lon) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_KEY}`
    )
    .then((res) => {
      // Getting weekly data
        
        // TODO: Try to put this data in an array or something so it isn't so repetative
      setSunTemp(res.data.daily[0].temp.day);
      setMonTemp(res.data.daily[1].temp.day);
      setTueTemp(res.data.daily[2].temp.day);
      setWedTemp(res.data.daily[3].temp.day);
      setThuTemp(res.data.daily[4].temp.day);
      setFriTemp(res.data.daily[5].temp.day);
      setSatTemp(res.data.daily[6].temp.day);

      // Getting other info data
      // Top info
      setSunCond(res.data.daily[0].weather[0].icon);
      setMonCond(res.data.daily[1].weather[0].icon);
      setTueCond(res.data.daily[2].weather[0].icon);
      setWedCond(res.data.daily[3].weather[0].icon);
      setThuCond(res.data.daily[4].weather[0].icon);
      setFriCond(res.data.daily[5].weather[0].icon);
      setSatCond(res.data.daily[6].weather[0].icon);

      //Bottom info
      setUvIndex(res.data.current.uvi);
      setWindStatus(res.data.current.wind_speed);
      setRise(res.data.current.sunrise);
      setSet(res.data.current.sunset);
      setHumidity(res.data.current.humidity);
      setVisibility(res.data.current.visibility);
      setFeelsLike(res.data.current.feels_like);

      setFirstAlert(res.data.alerts[0].event);
      setSecondAlert(res.data.alerts[1].event);

      console.log(res);
    })
    .catch((error) => console.error(`Error: ${error}`));
};