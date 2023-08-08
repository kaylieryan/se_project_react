import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";

const WeatherCard = ({ day, type, weatherTemp = 0 }) => {
  const imageSource = weatherOptions.filter((option) => {
    return option.day === day && option.type === type;
  });

  const imageSourceUrl = imageSource[0].url || "";
  //const imageSourceUrl = imageSource ? imageSource.url || "" : "";
  console.log(imageSourceUrl);

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}° F</div>
      <img src={imageSourceUrl} alt="weather" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
