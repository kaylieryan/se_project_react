export const WeatherOptions = [
  {
    url: require("../images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/day/rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../images/day/snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../images/day/storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../images/day/fog.svg").default,
    day: true,
    type: "fog",
  },

  {
    url: require("../images/night/night_clear.svg").default,
    day: false,
    type: "night-clear",
  },
  {
    url: require("../images/night/night_cloudy.svg").default,
    day: false,
    type: "night-cloudy",
  },
  {
    url: require("../images/night/night_rain.svg").default,
    day: false,
    type: "night-rain",
  },
  {
    url: require("../images/night/night_snow.svg").default,
    day: false,
    type: "night-snow",
  },
  {
    url: require("../images/night/night_storm.svg").default,
    day: false,
    type: "night-storm",
  },
  {
    url: require("../images/night/night_fog.svg").default,
    day: false,
    type: "night-fog",
  },
];

export const latitude = 35.19;
export const longitude = 111.65;
export const APIkey = "1c8987e8045de68b6d5f029698cad7f6";


export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.verymad.net"
    : "http://localhost:3001";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`error: ${res.status}`);
  }
};

export const headers = {
  authorization: "",
  "Content-Type": "application/json",
};
