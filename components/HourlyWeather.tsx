import { useContext, useEffect } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/hourlyWeather.module.scss";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import Image from "next/image";

const HourlyWeather = () => {
  const { hourlyForecast } = useContext(AddressContext);

  const newHourly = hourlyForecast.slice(0, 12);
  const date = new Date();
  var hour = date
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "numeric",
      hour12: true,
    })
    .replace(/AM|PM/, "");
  var currentHour = Number(hour);

  const updatedTime = ["Now"];

  // This function takes in the current time and gets the next 12 hours
  const getTime = (currentHour) => {
    var time = currentHour;
    // adding +1 to the current hour for 12 hours
    for (let i = 1; i < 12; i++) {
      time += i;
      if (time > 12) {
        time -= 12;
        updatedTime.push(time);
      } else updatedTime.push(time);
      // resetting the time each iteration
      time = currentHour;
    }
  };
  getTime(currentHour);


  const zipped = updatedTime.map((x, i) => [x, newHourly[i]]);

  return (
    <div className={style["hourly-weather__container"]}>
      <div className={style["hourly-weather__list-container"]}>
        <div className={style["hourly-weather__title-container"]}>
          <DateRangeRoundedIcon
            className={style["hourly-weather__title--icon"]}
            width={18}
            height={18}
          />
          <p className={style["hourly-weather__title--name"]}>
            Hourly Forecast
          </p>
        </div>
        <div className={style["hourly-weather__spacer-container"]}>
          <hr className={style["hourly-weather__spacer-container--hr"]} />
        </div>
        <div className={style["list-scroll"]}>
          <ul className={style["hourly-weather__list"]}>
            {hourlyForecast &&
              zipped.map((item, key) => (
                <li key={key} className={style["hourly-weather__list--li"]}>
                  <p className={style["hourly-weather__list--li-time"]}>
                    {item[0]}
                  </p>
                  {hourlyForecast && hourlyForecast.length > 0 &&
                    <Image
                      src={"/" + item[1].weather[0].icon + "@2x.png"}
                      alt="weather-icon"
                      className={style["hourly-weather__list--li-icon"]}
                      width="50px"
                      height="50px"
                    />
                  }
                  {hourlyForecast && hourlyForecast.length > 0 &&
                    <p className={style["hourly-weather__list--li-temp"]}>
                      {Math.trunc(item[1].temp)}
                    </p>
                  }
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HourlyWeather;
