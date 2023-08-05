export const weatherOptions = [
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
  { url: require("../images/day/cloudy.svg").default, day: true, type: "cloudy" },
  { url: require("../images/day/rain.svg").default, day: true, type: "rain" },
  { url: require("../images/day/snow.svg").default, day: true, type: "snow" },
  { url: require("../images/day/storm.svg").default, day: true, type: "storm" },
  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },

  {
    url: require("../images/night/night_clear.svg").default,
    night: false,
    type: "night-clear",
  },
  {
    url: require("../images/night/night_cloudy.svg").default,
    night: false,
    type: "night-cloudy",
  },
  {
    url: require("../images/night/night_rain.svg").default,
    night: false,
    type: "night-rain",
  },
  {
    url: require("../images/night/night_snow.svg").default,
    night: false,
    type: "night-snow",
  },
  {
    url: require("../images/night/night_storm.svg").default,
    night: false,
    type: "night-storm",
  },
  {
    url: require("../images/night/night_fog.svg").default,
    night: false,
    type: "night-fog",
  },
];
