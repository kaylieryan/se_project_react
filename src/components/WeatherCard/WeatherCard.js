import "./WeatherCard.css";
import { WeatherOptions } from "../../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

// const WeatherCard = ({ day, type, weatherTemp = "" }) => {
//   const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
//   const weatherOption = weatherOptions.filter((option) => {
//     return option.day === day && option.type === type;
//   });

//   const imageSourceUrl = weatherOption[0].url || "";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const weatherOption = WeatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const imageSourceUrl = weatherOption[0]?.url || "";

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp}° {currentTemperatureUnit}
      </div>
      <div>
        <img src={imageSourceUrl} alt="weather" className="weather__image" />
      </div>
    </section>
  );
};

export default WeatherCard;