//import styles from '../styles/......'
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
  }

  interface Info {
    temp: number
    conditionIcon: string;
  }

  interface Weekly {
    day: Info[];
  }


  
  const [dailyForecast, setDailyForecast] = useState<Daily[]>([]);
  const [weeklyForecast, setWeeklyForecast] = useState<Weekly[]>([]);



  const [hasBeenSearched, setHasBeenSearched] = useState<boolean>(false);
  // Main info searched
  //const [city, setCity] = useState<string>("");
  const [temp, setTemp] = useState<number>(0);
  const [condition, setCondition] = useState<string>("");
  const [conditionIcon, setConditionIcon] = useState<string>("");

  // Weekly info from searched
  const [sunTemp, setSunTemp] = useState<number>(0);
  const [monTemp, setMonTemp] = useState<number>(0);
  const [tueTemp, setTueTemp] = useState<number>(0);
  const [wedTemp, setWedTemp] = useState<number>(0);
  const [thuTemp, setThuTemp] = useState<number>(0);
  const [friTemp, setFriTemp] = useState<number>(0);
  const [satTemp, setSatTemp] = useState<number>(0);

  const [sunCond, setSunCond] = useState<string>("");
  const [monCond, setMonCond] = useState<string>("");
  const [tueCond, setTueCond] = useState<string>("");
  const [wedCond, setWedCond] = useState<string>("");
  const [thuCond, setThuCond] = useState<string>("");
  const [friCond, setFriCond] = useState<string>("");
  const [satCond, setSatCond] = useState<string>("");

  // Other info from searched
  const [uvIndex, setUvIndex] = useState<number>(0);
  const [windStatus, setWindStatus] = useState<number>(0);
  const [rise, setRise] = useState<number>(0);
  const [set, setSet] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [visibility, setVisibility] = useState<number>(0);
  const [feelsLike, setFeelsLike] = useState<number>(0);
  return (
    <>
      {/* Components */}
      <AddressContext.Provider
        value={{
          
          dailyForecast,
          setDailyForecast,

          weeklyForecast,
          setWeeklyForecast,

          hasBeenSearched,
          setHasBeenSearched,

          // city,
          // setCity,
          temp,
          setTemp,
          condition,
          setCondition,
          conditionIcon,
          setConditionIcon,

          sunTemp,
          setSunTemp,
          monTemp,
          setMonTemp,
          tueTemp,
          setTueTemp,
          wedTemp,
          setWedTemp,
          thuTemp,
          setThuTemp,
          friTemp,
          setFriTemp,
          satTemp,
          setSatTemp,

          sunCond,
          setSunCond,
          monCond,
          setMonCond,
          tueCond,
          setTueCond,
          wedCond,
          setWedCond,
          thuCond,
          setThuCond,
          friCond,
          setFriCond,
          satCond,
          setSatCond,

          uvIndex,
          setUvIndex,
          windStatus,
          setWindStatus,
          rise,
          setRise,
          set,
          setSet,
          humidity,
          setHumidity,
          visibility,
          setVisibility,
          feelsLike,
          setFeelsLike,
        }}
      >
        <Header />
        <Body />
      </AddressContext.Provider>
    </>
  );
}
