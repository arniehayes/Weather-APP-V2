import style from "../styles/header.module.scss";
import SearchBar from "./SearchBar";

const Header = () => {

  return (
    <header className={style["header"]}>
      <SearchBar />
    </header>
  );
};

export default Header;
