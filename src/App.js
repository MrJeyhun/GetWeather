import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Weather from "./app_component/weather.component";
import Form from "./app_component/form.component";
import { error } from "./utils/utilities";

//API key api.openweathermap.org/data/2.5/weather?q=London
const API_key = "138e72ac54592f72eaa4d89a634ebda4";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: null,
      country: "",
      city: "",
      main: "",
      icon: "",
      celsius: "",
      temp_min: "",
      temp_max: "",
      description: "",
      error: ""
    };
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      try {
        const API_call = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
        );
        const response = await API_call.json();
        this.setState({ response });
      } catch (e) {
        this.setState({
          error: `API Connection Failed: ${e}, Check Internet Connection`
        });
        return error(this.state.error);
      }

      const { response } = this.state;
      console.log(response);

      if (response.cod === 200) {
        this.setState({
          city: `${response.name}`,
          country: `${response.sys.country}`,
          celsius: this.convertToCelsius(+response.main.temp),
          temp_min: this.convertToCelsius(+response.main.temp_min),
          temp_max: this.convertToCelsius(+response.main.temp_max),
          description: response.weather[0].description,
          icon: this.weatherIcon.Clouds, //by default
          error: ""
        });

        this.set_WeatherIcon(this.weatherIcon, response.weather[0].id);
      } else {
        this.setState({ error: response.message });
        error(this.state.error);
      }
    } else {
      this.setState({ error: "Please Enter City and Country" });
    }
  };

  convertToCelsius(temp) {
    let cel = Math.floor(temp - 273.15);
    return cel;
  }

  set_WeatherIcon = (icons, rangeID) => {
    switch (true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeID === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  };

  render() {
    const {
      city,
      country,
      celsius,
      temp_min,
      temp_max,
      description,
      icon
    } = this.state;

    return (
      <div className="App">
        <Form getWeather={this.getWeather} error={this.state.error} />
        {city && country ? (
          <Weather
            city={city}
            country={country}
            temp_celsius={celsius}
            temp_min={temp_min}
            temp_max={temp_max}
            description={description}
            weatherIcon={icon}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
