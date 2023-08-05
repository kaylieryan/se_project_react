import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";


const WeatherCard = ({ day, type }) => {
  console.log("WeatherCard");
  const imageSource = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSource);
  console.log(imageSource[0].url);

  const imageSourceUrl = imageSource[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">75°F</div>
      <img src={imageSourceUrl} alt="weather" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
