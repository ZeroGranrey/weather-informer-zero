import React, { useState } from "react";
import "./styles.css";

import { Main } from "./components/main";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Weather } from "./components/weather";
import { WeatherTomorrow } from "./components/weather-tomorow";

export default function App() {
  const [today, setToday] = useState(true);
  const api_key = "e1b6ba0f258448b4ada91756210306";
  const [city, setCity] = useState("");

  const getCity = async (event) => {
    event.preventDefault();
    const api_city = event.target.elements.city.value;
    let api_data = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${api_city}&aqi=no`
    );
    if (api_data.status === 400) {
      alert("There aro no such City you stupid donkey");
    } else {
      setCity(api_city);
    }
  };

  const clickHandlerOne = () => {
    if (document.getElementById("city").value.trim() === "") {
      alert("Enter city, please!");
    } else {
      setToday(true);
    }
  };
  const clickHandlerTwo = () => {
    if (document.getElementById("city").value.trim() === "") {
      alert("Enter city, please!");
    } else {
      setToday(false);
    }
  };
  return (
    <div className="App">
      <Header />
      <Main
        getCity={getCity}
        clickHandlerOne={clickHandlerOne}
        clickHandlerTwo={clickHandlerTwo}
      />
      {today === true && <Weather api_key={api_key} city={city} />}
      {today === false && <WeatherTomorrow api_key={api_key} city={city} />}
      <Footer />
    </div>
  );
}
