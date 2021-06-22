import React, { useState } from "react";
import "../static/css/weather.css";

export const Weather = (props) => {
  const [icon, setIcon] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [localtime, setLocaltime] = useState("");
  const [temperature, setTemperature] = useState("");
  const [timezone, setTimezone] = useState("");
  const [visibility, setVisibility] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const getWeather = async () => {
    const api_key = props.api_key;
    const api_city = props.city;
    if (api_city.trim() !== "") {
      let api_data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${api_city}&aqi=no`
      );
      if (api_data.status !== 400) {
        let api_json = await api_data.json();
        setIcon(api_json.current.condition.icon);
        setCountry(api_json.location.country);
        setCity(api_json.location.city);
        setLocaltime(api_json.location.localtime);
        setTemperature(api_json.current.temp_c);
        setTimezone(api_json.location.tz_id);
        setVisibility(api_json.current.vis_km);
        setWindDirection(api_json.current.wind_dir);
        setWindSpeed(api_json.current.wind_kph);
      }
    }
  };

  getWeather();

  return (
    <div className="weather">
      <h3>Weather</h3>
      <hr />
      {props.city && (
        <div className="data-list">
          <img src={icon} alt="..." />
          <table border="1">
            <thead>
              <tr>
                <th>№</th>
                <th>параметр</th>
                <th>значення</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>country</th>
                <th>{country}</th>
              </tr>
              <tr>
                <th>2</th>
                <th>city</th>
                <th>{city}</th>
              </tr>
              <tr>
                <th>3</th>
                <th>Local Time</th>
                <th>{localtime}</th>
              </tr>
              <tr>
                <th>4</th>
                <th>Timezone</th>
                <th>{timezone}</th>
              </tr>
              <tr>
                <th>5</th>
                <th>Temperature</th>
                <th>{temperature}&deg;C</th>
              </tr>
              <tr>
                <th>6</th>
                <th>Visibility</th>
                <th>{visibility}</th>
              </tr>
              <tr>
                <th>7</th>
                <th>Wind Direction</th>
                <th>{windDirection}</th>
              </tr>
              <tr>
                <th>8</th>
                <th>Wind Speed</th>
                <th>{windSpeed}</th>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
