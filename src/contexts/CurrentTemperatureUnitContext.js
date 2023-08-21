import React from "react";

const CurrentTemperatureUnitContext = React.createContext();

const handleToggleSwitchChange = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

export { CurrentTemperatureUnitContext };
