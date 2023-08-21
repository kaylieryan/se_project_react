import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";


const WeatherCard = ({ day, type, weatherTemp = "", isFahrenheit }) => {
  const imageSource = weatherOptions.filter((option) => {
    return option.day === day && option.type === type;
  });

  const imageSourceUrl = imageSource[0].url || "";

  const temperature = isFahrenheit ? weatherTemp : ((weatherTemp - 32) * 5) / 9;

  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {Math.round(temperature)}
        {isFahrenheit ? "°F" : "°C"}
      </div>
      <img src={imageSourceUrl} alt="weather" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
