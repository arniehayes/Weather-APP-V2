import React, { useState, useContext } from "react";
import { AddressContext } from "../pages/index";

const Header = () => {

  const { setHasBeenSearched, setSearchTerm } = useContext(AddressContext);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  return (
    <header>
      <div className="header">
        Weather
        <nav className="nav">
          <input
            type="text"
            onChange={handleInput}
            placeholder="Enter zip code"
            className="Search"
          ></input>
          {/* this will call your api whatever the input value is */}
          <button
            onClick={() => {
              // getDailyForecast();
              setHasBeenSearched(true);
            }}
            id="search_button"
            type="submit"
          >
            {" "}
            Search
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
