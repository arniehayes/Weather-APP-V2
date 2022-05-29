import { info } from "console";
import { useContext } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/weatherInfo.module.scss";
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const WeatherInfo = () => {

    const { info } = useContext(AddressContext);

    const getQuality = (UV: number) => {
        if (UV <= 2)
            return "Low";
        else if (UV >= 3 && UV <= 5)
            return "Moderate";
        else if (UV >= 6 && UV <= 7)
            return "High";
        else if (UV > 7)
            return "Very High";
    }

    const getSunrise = (sunRise: number) => {
        const time = new Date(sunRise * 1000).toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles", timeZoneName: "short" });
        return String(time).slice(0, 4) + " PM";
    };
    const getSunset = (sunSet: number) => {
        const time = new Date(sunSet * 1000).toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles", timeZoneName: "short" });
        return String(time).slice(0, 4) + " AM";
    };

    const visibilityLevel = (visibility) => {
        return Math.trunc(visibility * 0.000621371192237) + " mi";
    };

    return (
        <div className={style["info__container"]}>
            {/* UV INDEX */}
            <div className={style["__container"]}>
                <div className={style["__inner"]}>
                    <div className={style["title__container"]}>
                        <LightModeRoundedIcon className={style["icon"]}/>
                        <span className={style["title"]}>UV INDEX</span>
                    </div>
                    <span className={style["number"]}>
                        {info && Math.trunc(info.uvIndex)}
                    </span>
                    <span className={style["slider"]} />
                    <span className={style["uv-index--quality"]}>
                        {info && getQuality(info.uvIndex)}
                    </span>
                </div>
            </div>

            {/* Sunrise && Sunset */}
            <div className={style["__container"]}>
                <div className={style["__inner"]}>
                    <div className={style["title__container"]}>
                        <img src="sunrise.png" className={style["icon"]}/>
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
                        {info && getSunrise(info.sunSet)}
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
                        {info && Math.trunc(info.windStatus) + " mph"}
                    </span>
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
                        {info && visibilityLevel(info.visibility)}
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
                </div>
            </div>

        </div>
    )
}

export default WeatherInfo