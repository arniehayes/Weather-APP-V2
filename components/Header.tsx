import React, { useState, useContext } from "react";
import { getDailyForecast } from "../api/useAPI";

const Header = () => {

  // getting the search value
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleInput = (e: any) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const data = getDailyForecast(searchTerm);

  return (<div>{data.setCity}</div>);
};

export default Header;
