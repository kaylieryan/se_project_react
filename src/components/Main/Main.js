import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({
  weatherTemp,
  onSelectCard,
  clothingItems,
  isLoggedIn,
  onCardLike,
}) => {
  const currentTemperatureUnit = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const temp =
    weatherTemp?.temperature?.[currentTemperatureUnit.currentTemperatureUnit];

  const getWeatherType = () => {
    if (currentTemperatureUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 19 && temp <= 29) {
        return "warm";
      } else if (temp <= 18) {
        return "cold";
      }
    }

    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();
  console.log(weatherType);

  const filteredCards = clothingItems?.filter((item) => {
    console.log(item);
    return item?.weather?.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="fog" weatherTemp={temp} />
      <section className="clothing" id="clothing-section">
        <div className="clothing__title">
          Today is {temp}°{currentTemperatureUnit.currentTemperatureUnit} / You
          may want to wear:
        </div>
        <div className="clothing__items">
          {filteredCards.map((item) => (
            <ItemCard
              item={item}
              onSelectCard={onSelectCard}
              key={item._id}
              isLoggedIn={isLoggedIn}
              onCardLike={onCardLike}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
