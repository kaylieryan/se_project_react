import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSource = weatherOptions.filter((option) => {
    return option.day === day && option.type === type;
  });

  const imageSourceUrl = imageSource[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}° F</div>
      <img src={imageSourceUrl} alt="weather" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
