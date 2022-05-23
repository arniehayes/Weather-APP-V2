import { useContext, useEffect } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/hourlyWeather.module.scss";

const HourlyWeather = () => {

    const { hourlyForecast } = useContext(AddressContext);

    useEffect(() => {
        console.log("hourly: ", hourlyForecast);
    }, [hourlyForecast]);

    return (
      <section>
        <div>
          <ul>
            {hourlyForecast.length > 0 && hourlyForecast && hourlyForecast.temp.map((temp: number, key: number) => (
              <li key={key}>{temp}</li>
            ))}
          </ul>
        </div>
      </section>
    );
};

export default HourlyWeather;
