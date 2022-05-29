import { useContext } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/weeklyWeather.module.scss";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";

const WeeklyWeather = () => {
  //DAYS
  //0 = Sunday
  //1 = Monday
  //2 = Tuesday
  //3 = Wednesday
  //4 = Thursday
  //5 = Friday
  //6 = Saturday

  // function that gets the current day number and
  // gets the next 7 day numbers to push into an array
  const weekDayObj = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };
  const weekDays = [];
  const getDay = () => {
    var date = new Date();
    var day = date.getDay();
    weekDays.push(weekDayObj[day]);
    for (let i = 0; i < 8; i++) {
      var current = (day += 1);
      if (weekDays.length < 8) {
        if (current > 6) {
          // subtracting 7 to reset the days
          weekDays.push(weekDayObj[current - 7]);
        } else weekDays.push(weekDayObj[current]);
      }
    }
    weekDays[0] = "Today";
  };
  getDay();

  const { weeklyForecast } = useContext(AddressContext);

  return (
    <div className={style["weekly-weather__container"]}>
      <div className={style["hourly-weather__title-container"]}>
        <DateRangeRoundedIcon
          className={style["hourly-weather__title--icon"]}
        />
        <p className={style["hourly-weather__title--name"]}> 8-Day Forecast</p>
      </div>
      <div className={style["hourly-weather__spacer-container"]}>
        <hr className={style["hourly-weather__spacer-container--hr"]} />
      </div>
      <div className={style["weekly-weather__list-container"]}>
        <ul className={style["weekly-weather__list"]}>
          {weeklyForecast.length > 0 &&
            weeklyForecast.map((item, key) => (
              <li key={key} className={style["weekly-weather__list--item"]}>
                <div className={style["weekly-weather__list--item__content"]}>
                  <span className={style["weekly-weather__content--day"]}>
                    {weekDays[key]}
                  </span>
                  <img
                    src={item.weather[0].icon + "@2x.png"}
                    className={style["weekly-weather__content--icon"]}
                  />
                  <span className={style["weekly-weather__content--minTemp"]}>
                    {Math.trunc(item.temp.min) + "°"}
                  </span>
                  <span className={style["gradient-bar"]} />
                  <span className={style["weekly-weather__content--maxTemp"]}>
                    {Math.trunc(item.temp.max) + "°"}
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WeeklyWeather;
