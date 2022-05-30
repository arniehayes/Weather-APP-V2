import React, { useState, useContext } from "react";
import { AddressContext } from "../pages/index";
import style from "../styles/searchBar.module.scss";

import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
    
    const { setHasBeenSearched, setSearchTerm, searchTerm } =
      useContext(AddressContext);
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    return (
      <div className={style["search__container"]}>
        <div className={style["search__input-container"]}>
          <input
            type="text"
            onChange={handleInput}
            placeholder="City Name"
            className={style["search__input-container__input"]}
            name={searchTerm}
          ></input>
          <Button
            onClick={() => {
              setHasBeenSearched(true);
            }}
            id="search_button"
            type="submit"
            className={style["search__input-container--button"]}
            variant="text"
            size="small"
          >
            <SearchIcon />
          </Button>
        </div>
        {/* this will call your api whatever the input value is */}
      </div>
    );
};

export default SearchBar;
