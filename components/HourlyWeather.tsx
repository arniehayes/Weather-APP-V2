import { useContext } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/hourlyWeather.module.scss";

const HourlyWeather = () => {

    const { hourlyForecast } = useContext(AddressContext);

    return (
        <section>
            <div>
                {hourlyForecast.map((temp: number) => {
                    <li>{temp}</li>
                })}
            </div>
        </section>
    )
};

export default HourlyWeather;
