import React from "react";
import "./form.style.css";
import { error } from "../utils/utilities";

const Form = props => (
  <div className="container text-light">
    <div>{props.error ? error(props.error) : null}</div>
    <form onSubmit={props.getWeather}>
      <div className="row">
        <div className="col-md-3 offset-md-2 mb-4 mr-md-3">
          <input
            type="text"
            name="city"
            className="form-city"
            autoComplete="off"
            placeholder="City"
          />
        </div>
        <div className="col-md-3 mb-4 mr-md-3">
          <input
            type="text"
            name="country"
            className="form-country"
            autoComplete="off"
            placeholder="Country"
          />
        </div>
        <div className="col-md-3 mt-md-0 text-md-left">
          <button className="btn btn-warning">Get Weather</button>
        </div>
      </div>
    </form>
  </div>
);

export default Form;
