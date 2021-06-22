import React from "react";
import "../static/css/main.css";

export const Main = (props) => {
  return (
    <div className="main">
      <div className="form">
        <form onSubmit={props.getCity}>
          <label htmlFor="city">City:</label>
          <br />
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city name"
            required
          />
          <br />
          <button onClick={props.clickHandlerOne} id="run">
            Get Weather1
          </button>
          <button onClick={props.clickHandlerTwo}>Get Forecast</button>
        </form>
      </div>
    </div>
  );
};
