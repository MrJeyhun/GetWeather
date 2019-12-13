import React from "react";

//There's "0 issue => when temp is 0 if statement consider that it's false
const Weather = props => (
  <div className="container text-light">
    <div className="cards pt-4">
      <h1>
        {props.city} , {props.country}
      </h1>
      <h5 className="py-4">
        <i className={`wi ${props.weatherIcon} display-1`}></i>
      </h5>

      {props.temp_celsius || props.temp_celsius === 0 ? (
        <h1 className="py-2">{props.temp_celsius}&deg;</h1>
      ) : null}

      {/*show min and max temperatures*/}
      {minmaxTemp(props.temp_min, props.temp_max)}

      <h4 className="py-3">{props.description}</h4>
    </div>
  </div>
);

const minmaxTemp = (min, max) => {
  if ((min && max) || min === 0 || max === 0) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
};

export default Weather;
