import { useContext, useEffect } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/hourlyWeather.module.scss";

const HourlyWeather = () => {
  const { hourlyForecast, alerts } = useContext(AddressContext);

  const newHourly = hourlyForecast.slice(0, 12);
  const date = new Date();
  const hour = date
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "numeric",
      hour12: true,
    })
    .replace(/AM|PM/, "");
  const updatedHour = Number(hour);

  const time = [
    "Now",
    updatedHour + 1,
    updatedHour + 2,
    updatedHour + 3,
    updatedHour + 4,
    updatedHour + 5,
    updatedHour + 6,
    updatedHour + 7,
    updatedHour + 8,
    updatedHour + 9,
    updatedHour + 10,
    updatedHour + 11,
  ];

  useEffect(() => {
    console.log("hourly: ", hourlyForecast);
    console.log("alerts", alerts);
  }, [hourlyForecast, alerts]);

  return (
    <div className={style["hourly-weather__container"]}>
      <div className={style["hourly-weather__list-container"]}>
        <ul className={style["hourly-weather__list--time"]}>
          {time.map((item: any, key: number) => (
            <li key={key} className={style["hourly-weather__list--li-time"]}>
              {item}
            </li>
          ))}
        </ul>
        <ul className={style["hourly-weather__list--temp"]}>
          {hourlyForecast.length > 0 &&
            newHourly.map((item, key: number) => (
              <li key={key} className={style["hourly-weather__list--li-temp"]}>
                {Math.trunc(item.temp)}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HourlyWeather;
