import { useContext, useEffect } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/hourlyWeather.module.scss";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";

const HourlyWeather = () => {
  const { hourlyForecast, alerts } = useContext(AddressContext);

  const newHourly = hourlyForecast.slice(0, 12);
  const date = new Date();
  var hour = date
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "numeric",
      hour12: true,
    })
    .replace(/AM|PM/, "");;
  var updatedHour = Number(hour);

  const formatAMPM = () => {
    var ampm = updatedHour >= 12 ? "pm" : "am";
    return ampm;
  };

  const time = [
    "Now",
    String(updatedHour + 1) + formatAMPM(),
    String(updatedHour + 2) + formatAMPM(),
    String(updatedHour + 3) + formatAMPM(),
    String(updatedHour + 4) + formatAMPM(),
    String(updatedHour + 5) + formatAMPM(),
    String(updatedHour + 6) + formatAMPM(),
    String(updatedHour + 7) + formatAMPM(),
    String(updatedHour + 8) + formatAMPM(),
    String(updatedHour + 9) + formatAMPM(),
    String(updatedHour + 10) + formatAMPM(),
    String(updatedHour + 11) + formatAMPM(),
  ];

  const zipped = time.map((x, i) => [x, newHourly[i]]);
  console.log("zipped: ", zipped)

  useEffect(() => {
    console.log("hourly: ", hourlyForecast);
    console.log("alerts", alerts);
  }, [hourlyForecast, alerts]);

  return (
    <div className={style["hourly-weather__container"]}>
      <div className={style["hourly-weather__list-container"]}>
        <div className={style["hourly-weather__title"]}>
          <DateRangeRoundedIcon
            className={style["hourly-weather__title--icon"]}
          />
          <p className={style["hourly-weather__title--name"]}>
            Hourly Forecast
          </p>
        </div>
        <ul className={style["hourly-weather__list--ul"]}>
          {hourlyForecast.length > 0 &&
            zipped.map((item, key) => (
              <li key={key} className={style["hourly-weather__list--li"]}>
                <p className={style["hourly-weather__list--li-time"]}>
                  {item[0]}
                </p>
                <img
                  src={item[1].weather[0].icon + "@2x.png"}
                  alt="weather-icon"
                  className={style["hourly-weather__list--li-icon"]}
                />
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
