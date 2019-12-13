import React from "react";

export const error = message => (
  <div className="alert alert-danger mx-5" role="alert">
    {message}
  </div>
);

// export const set_WeatherIcon = (icons, rangeID) => {
//   switch (true) {
//     case rangeID >= 200 && rangeID <= 232:
//       this.setState({ icon: this.weatherIcon.Thunderstorm });
//       break;
//     case rangeID >= 300 && rangeID <= 321:
//       this.setState({ icon: this.weatherIcon.Drizzle });
//       break;
//     case rangeID >= 500 && rangeID <= 531:
//       this.setState({ icon: this.weatherIcon.Rain });
//       break;
//     case rangeID >= 600 && rangeID <= 622:
//       this.setState({ icon: this.weatherIcon.Snow });
//       break;
//     case rangeID >= 701 && rangeID <= 781:
//       this.setState({ icon: this.weatherIcon.Atmosphere });
//       break;
//     case rangeID === 800:
//       this.setState({ icon: this.weatherIcon.Clear });
//       break;
//     case rangeID >= 801 && rangeID <= 804:
//       this.setState({ icon: this.weatherIcon.Clouds });
//       break;
//     default:
//       this.setState({ icon: this.weatherIcon.Clouds });
//   }
// };
