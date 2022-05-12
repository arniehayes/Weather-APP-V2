import React, { useState, useContext, useEffect } from "react";
import { getDailyForecast } from "../api/useAPI";
import { AddressContext } from "../pages/index";

const Body = () => {

    const { setCity, city } = useContext(AddressContext);

    useEffect(() => {
        const fetchData: any = async () => {
            const data = await getDailyForecast(95401);
            setCity(data);
        }
        fetchData();
        console.log("currentCity: ", city);
    },);

    return (
        <section>
            {city}
        </section>
    );
};

export default Body;
