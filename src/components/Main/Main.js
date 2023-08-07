import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import { defaultClothingItems } from "../../utils/constants.js";
import "./Main.css";

function Main({ weatherTemp, onSelectCard }) {
  const getWeatherType = (temperature) => {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType(weatherTemp);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="clothing" id="clothing-section">
        <div className="clothing__title">
          Today is {weatherTemp}° F / You may want to wear:
        </div>
        <div className="clothing__items">
          {filteredCards.map((item, index) => (
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
