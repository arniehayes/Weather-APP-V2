import style from "../styles/header.module.scss";
import SearchBar from "./SearchBar";

const Header = () => {

  return (
    <header className={style["header"]}>
      {/* <div className={style['header__title']}>
        <h1 className={style["search__logo"]}>Weather</h1>
      </div> */}
      <SearchBar />
    </header>
  );
};

export default Header;
