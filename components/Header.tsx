import React, { useState, useContext } from "react";
import { getDailyForecast } from "../api/useAPI";

import { AddressContext } from "../pages/index";

const Header = () => {

  const {
    setCity,
    city
  } = useContext(AddressContext);

  // getting the search value
  const [searchTerm, setSearchTerm] = useState<any>();
  const handleInput = (e: any) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <header>
      {}
    </header>
  );
};

export default Header;
