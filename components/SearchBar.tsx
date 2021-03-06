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
  
  // TODO :
  // Add error handling for bad inputs
  // Add some animations

    return (
      <div className={style["search__container"]}>
        <div className={style["search__input-container"]}>
          <form onSubmit={(e) => e.preventDefault()} className={style["form"]}>
            <input
              type="text"
              onChange={handleInput}
              placeholder="City, Country"
              className={style["search__input-container__input"]}
              name={searchTerm}
              // this clears the search bar after something has been searched
              value={searchTerm}
              enterKeyHint="done"
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
              <SearchIcon width={20} height={20}/>
            </Button>
          </form>
        </div>
        {/* this will call your api whatever the input value is */}
      </div>
    );
};

export default SearchBar;
