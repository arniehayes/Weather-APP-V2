import { useContext } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/weatherInfo.module.scss";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import AirIcon from "@mui/icons-material/Air";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const WeatherInfo = () => {
  const { info } = useContext(AddressContext);

  const getUVQuality = (UV: number) => {
    if (UV <= 2) return "Low";
    else if (UV >= 3 && UV <= 5) return "Moderate";
    else if (UV >= 6 && UV <= 7) return "High";
    else if (UV > 7) return "Very High";
  };


  const getSunrise = (sunRise: number) => {
    const time = new Date(sunRise * 1000).toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
      timeZoneName: "short",
    });
    return String(time).slice(0, 4) + " AM";
  };

  const getSunset = (sunSet: number) => {
    const time = new Date(sunSet * 1000).toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
      timeZoneName: "short",
    });
    return String(time).slice(0, 4) + " PM";
  };

  const getVisibility = (visibility: number) => {
    return Math.trunc(visibility * 0.000621371192237);
  };

  const getVisibilityInfo = (visibility: number) => {
    if (visibility <= 3) return "poor";
    else if (visibility <= 5 && visibility > 3) return "foggy";
    else return "clear";
  };

  const getWindDirection = (windDegree: number) => {
    let myElement = document.getElementById("arrow");
      if (windDegree === 360) {
          myElement.style.transform = "rotate(0turn)";
          return "N";
      }
      else if (windDegree === 90) {
          myElement.style.transform = "rotate(.25turn)";
          return "E";
    }
      else if (windDegree === 180) {
          myElement.style.transform = "rotate(.5turn)";
          return "S";
      }
      else if (windDegree === 270) {
          myElement.style.transform = "rotate(.75turn)";
          return "W";
      }
      else if (windDegree > 0 && windDegree < 90) {
          myElement.style.transform = "rotate(.15turn)";
          return "NE";
      }
      else if (windDegree > 90 && windDegree < 180) {
          myElement.style.transform = "rotate(.35turn)";
          return "SE";
      }
      else if (windDegree > 180 && windDegree < 270) {
          myElement.style.transform = "rotate(.65turn)";
          return "SW";
      }
      else if (windDegree > 270 && windDegree < 360) {
          myElement.style.transform = "rotate(-.1turn)";
          return "NW";
      }
    else if (windDegree === 0) return "";
  };


  const getHumidity = (humidity: number) => {
    if (humidity >= 40 && humidity <= 60) return "Healthy";
    else if (humidity < 40) return "Dry";
    else if (humidity > 60) return "Humid";
  };

  const getFeelsLike = (feelsLike: number) => {
    if (Math.trunc(info.actualTemp - feelsLike) <= 2)
      return "Similar to the actual temperature.";
    else if (Math.trunc(info.actualTemp - feelsLike) > 2)
      return "It feels cooler than the actual temperature";
  };

  return (
    <div className={style["info__container"]}>
      {/* UV INDEX */}
      <div className={style["__container"]}>
        <div className={style["__inner"]}>
          <div className={style["title__container"]}>
            <LightModeRoundedIcon className={style["icon"]} />
            <span className={style["title"]}>UV INDEX</span>
          </div>
          <span className={style["number"]}>
            {info && Math.trunc(info.uvIndex)}
          </span>
          <span className={style["uv-index--quality"]}>
            {info && getUVQuality(info.uvIndex)}
          </span>
          <span className={style["slider"]} />
          <span className={style["info-message"]}>
            {info && info.uvIndex >= 6 ? "Use sun protection until 6pm." : "Use sun protection until 3pm."}
          </span>
        </div>
      </div>

      {/* Sunrise && Sunset */}
      <div className={style["__container"]}>
        <div className={style["__inner"]}>
          <div className={style["title__container"]}>
            <img src="sunrise.png" className={style["icon"]} />
            <span className={style["title"]}>SUNRISE</span>
          </div>
          <span className={style["number"]}>
            {info && getSunrise(info.sunRise)}
          </span>
          <div className={style["title__container"]}>
            <img src="sunset.png" className={style["icon"]} />
            <span className={style["title"]}>SUNSET</span>
          </div>
          <span className={style["number"]}>
            {info && getSunset(info.sunSet)}
          </span>
        </div>
      </div>

      {/* WIND */}
      <div className={style["__container"]}>
        <div className={style["__inner"]}>
          <div className={style["title__container"]}>
            <AirIcon className={style["icon"]} />
            <span className={style["title"]}>WIND</span>
          </div>
          <span className={style["number"]}>
            {info && Math.trunc(info.windSpeed) + " mph"}
          </span>
          <div className={style["wind-direction"]}>
            <span className={style["number"]}>
              {info && getWindDirection(info.windDegree)}
            </span>
            <img
              src="arrow.png"
              className={`${style["wind-arrow"]}`}
              id="arrow"
            />
          </div>
        </div>
      </div>

      {/* HUMIDITY */}
      <div className={style["__container"]}>
        <div className={style["__inner"]}>
          <div className={style["title__container"]}>
            <img src="humidity.png" className={style["icon"]} />
            <span className={style["title"]}>HUMIDITY</span>
          </div>
          <span className={style["number"]}>
            {info && Math.trunc(info.humidity) + "%"}
          </span>
          <span className={style["info-message"]}>
            {info && "Conditions are " + getHumidity(info.humidity) + " today."}
          </span>
        </div>
      </div>

      {/* VISIBILITY */}
      <div className={style["__container"]}>
        <div className={style["__inner"]}>
          <div className={style["title__container"]}>
            <VisibilityIcon className={style["icon"]} />
            <span className={style["title"]}>VISIBILITY</span>
          </div>
          <span className={style["number"]}>
            {info && getVisibility(info.visibility) + " mi"}
          </span>
          <span className={style["info-message"]}>
            {info &&
              "It's " +
                getVisibilityInfo(getVisibility(info.visibilty)) +
                " right now."}
          </span>
        </div>
      </div>

      {/* FEELS LIKE */}
      <div className={style["__container"]}>
        <div className={style["__inner"]}>
          <div className={style["title__container"]}>
            <ThermostatIcon className={style["icon"]} />
            <span className={style["title"]}>FEELS LIKE</span>
          </div>
          <span className={style["number"]}>
            {info && Math.trunc(info.feelsLike) + "°"}
          </span>
          <span className={style["info-message"]}>
            {info && getFeelsLike(info.feelsLike)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
