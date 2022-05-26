import React, { useState, useContext } from "react";
import Body from "../components/Body";
import Header from "../components/Header";

// AddressContext
export const AddressContext = React.createContext<any>({});

export default function Home() {
  interface Daily {
    city: string;
    temp: number;
    condition: string;
    conditionIcon: string;
    minTemp: number;
    maxTemp: number;
  }

  interface Weekly {
    weekDay: string;
    temp: number;
    conditionIcon: string;
  }

  interface WeatherInfo {
    uvIndex: number;
    windStatus: number;
    sunRise: number;
    sunSet: number;
    humidity: number;
    visibility: number;
    feelsLike: number;
    pressure: number;
  }

  interface Hourly {
    temp: number;
  }

  interface Alerts {
    alert: string;
  }

  //  API states
  const [dailyForecast, setDailyForecast] = useState<Daily[]>([]);
  const [weeklyForecast, setWeeklyForecast] = useState<Weekly[]>([]);
  const [hourlyForecast, setHourlyForecast] = useState<Hourly[]>([]);
  const [info, setInfo] = useState<WeatherInfo[]>([]);
  const [alerts, setAlerts] = useState<Alerts[]>([]);

  // State fir holding if something has been searched
  const [hasBeenSearched, setHasBeenSearched] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <>
      {/* Components */}
      <AddressContext.Provider
        value={{
          hasBeenSearched,
          setHasBeenSearched,
          searchTerm,
          setSearchTerm,
          dailyForecast,
          setDailyForecast,
          weeklyForecast,
          setWeeklyForecast,
          info,
          setInfo,
          hourlyForecast,
          setHourlyForecast,
          alerts,
          setAlerts,
        }}
      >
        <Header />
        <Body />
      </AddressContext.Provider>
    </>
  );
}
