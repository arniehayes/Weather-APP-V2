//import styles from '../styles/......'
import Header from "../components/Header";
import React, { useState, useContext } from "react";


// AddressContext
export const AddressContext = React.createContext("");

export default function Home() {
  const [hasBeenSearched, setHasBeenSearched] = useState(false);
  // Main info searched
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");
  const [firstAlert, setFirstAlert] = useState("");
  const [secondAlert, setSecondAlert] = useState("");

  // Weekly info from searched
  const [sunTemp, setSunTemp] = useState(0);
  const [monTemp, setMonTemp] = useState(0);
  const [tueTemp, setTueTemp] = useState(0);
  const [wedTemp, setWedTemp] = useState(0);
  const [thuTemp, setThuTemp] = useState(0);
  const [friTemp, setFriTemp] = useState(0);
  const [satTemp, setSatTemp] = useState(0);
  const [sunCond, setSunCond] = useState("");
  const [monCond, setMonCond] = useState("");
  const [tueCond, setTueCond] = useState("");
  const [wedCond, setWedCond] = useState("");
  const [thuCond, setThuCond] = useState("");
  const [friCond, setFriCond] = useState("");
  const [satCond, setSatCond] = useState("");

  // Other info from searched
  const [uvIndex, setUvIndex] = useState(0);
  const [windStatus, setWindStatus] = useState(0);
  const [rise, setRise] = useState(0);
  const [set, setSet] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  return (
    <>
      {/* Components */}
      <AddressContext.Provider
        value ={{
          hasBeenSearched,
          setHasBeenSearched,

          city,
          setCity,
          temp,
          setTemp,
          condition,
          setCondition,
          conditionIcon,
          setConditionIcon,
          firstAlert,
          setFirstAlert,
          secondAlert,
          setSecondAlert,

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
      </AddressContext.Provider>
    </>
  );
}
