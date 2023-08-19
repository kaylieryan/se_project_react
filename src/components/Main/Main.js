import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants.js";
import "./Main.css";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const getWeatherType = (temp) => {
    if (currentTemperatureUnit === "C") {
      temp = (temp * 9) / 5 + 32;
    }
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const weatherType = getWeatherType(temp);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="fog" weatherTemp={temp} />
      <section className="clothing" id="clothing-section">
        <div className="clothing__title">
          Today is {temp}° {currentTemperatureUnit} / You may want to wear:{" "}
        </div>
        <div className="clothing__items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
