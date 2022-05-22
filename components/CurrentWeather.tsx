import { useContext } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/currentWeather.module.scss";

const CurrentWeather = () => {
    const { dailyForecast } = useContext(AddressContext);

    const truncatedValues = {
      temp: Math.trunc(dailyForecast[0].temp),
      maxTemp: "H:" + Math.trunc(dailyForecast[0].maxTemp),
      minTemp: "L:" + Math.trunc(dailyForecast[0].minTemp)
    };

    return (
      <div className={style["current-weather__container"]}>
        <div className={style["current-weather__container--inner"]}>
          {/* CITY NAME */}
          <div className={style["current-weather--city"]}>
            {dailyForecast[0].city}
          </div>
          {/* TEMPERATURE */}
          <div className={`${style["current-weather--temp"]}`}>
            {truncatedValues.temp}
          </div>
          {/* CONDITION */}
          <div className={style["current-weather--condition"]}>
            {dailyForecast[0].condition}
          </div>
          {/* TEMP CONTAINER */}
          <div className={style["current-weather__temp-container"]}>
            {/* MAX TEMP */}
            <div className={style["current-weather--min-max-temp"]}>
              {truncatedValues.maxTemp}
            </div>
            {/* MIN TEMP */}
            <div className={style["current-weather--min-max-temp"]}>
              {truncatedValues.minTemp}
            </div>
          </div>
        </div>
      </div>
    );
};

export default CurrentWeather;