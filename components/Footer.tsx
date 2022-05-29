import style from "../styles/footer.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={style["footer__container"]}>
            <span className={style["text"]}>Data Provided by Open Weather Map</span>
            <Link href="https://openweathermap.org/">
                <a className={style["link"]}>OpenWeather API</a>
            </Link>
        </div>
    )
}

export default Footer