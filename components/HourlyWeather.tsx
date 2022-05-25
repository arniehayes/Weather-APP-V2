import { useContext, useEffect } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/hourlyWeather.module.scss";

const HourlyWeather = () => {

  const { hourlyForecast, alerts } = useContext(AddressContext);
  const newHourly = hourlyForecast.slice(0, 12);

    useEffect(() => {
      console.log("hourly: ", hourlyForecast);
      console.log("alerts", alerts)
    }, [hourlyForecast, alerts]);

    return (
      <div className={style["hourly-weather__container"]}>
        <div className={style["hourly-weather__list-container"]}>
          <ul className={style["hourly-weather__list"]}>
            {hourlyForecast.length > 0 &&
              newHourly.map((item, key: number) => (
                <li key={key} className={style["hourly-weather__list--li"]}>
                  {Math.trunc(item.temp)}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
};

export default HourlyWeather;
