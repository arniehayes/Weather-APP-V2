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

  const zipped = time.map((x, i) => [x, newHourly[i]]);
  console.log("zip: ", zipped);

  useEffect(() => {
    console.log("hourly: ", hourlyForecast);
    console.log("alerts", alerts);
  }, [hourlyForecast, alerts]);

  return (
    <div className={style["hourly-weather__container"]}>
      <div className={style["hourly-weather__list-container"]}>
        <ul className={style["hourly-weather__list--ul"]}>
          {hourlyForecast.length > 0 &&
            zipped.map((item, key) => (
              <li key={key} className={style["hourly-weather__list--li"]}>
                <p className={style["hourly-weather__list--li-time"]}>
                  {item[0]}
                </p>
                <p className={style["hourly-weather__list--li-temp"]}>
                  {Math.trunc(item[1].temp)}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HourlyWeather;
