import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";
import {
  removeItems,
  fetchItems,
  postClothingItems,
} from "../../utils/Api/Api";
import { UseForm } from "../UseForm/UseForm"

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const { values, handleChange, setValues } = UseForm({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("previewModal");
    setSelectedCard(card);
  };

  const handleAddItemSubmit = (values) => {
    postClothingItems(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleItemCard = (selectedCard) => {
    setActiveModal("previewModal");
    setSelectedCard(selectedCard);
  };

  const handleActiveCreateModal = () => {
    setActiveModal("create");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleDeleteCard = (selectedCard) => {
    console.log(selectedCard);
    removeItems(selectedCard.id)
      .then(() => {
        const newClothingItems = clothingItems.filter((cards) => {
          return cards.id !== selectedCard;
        });
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteConfirmationModal = (selectedCard) => {
    setActiveModal("confirmation-opened");
    setSelectedCard(selectedCard);
  };

  useEffect(() => {
    fetchItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  useEffect(() => {
    if (!activeModal) return;

    const handleClickClose = (evt) => {
      if (
        evt.target.classList.contains("item_modal") ||
        evt.target.classList.contains("modal")
      ) {
        console.log("handleClickClose");
        handleCloseModal();
      }
    };

    document.addEventListener("click", handleClickClose);

    return () => {
      document.removeEventListener("click", handleClickClose);
    };
  }, [activeModal]);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);

        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(currentTemperatureUnit);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <Header onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              onCreateModal={handleActiveCreateModal}
              clothingItems={clothingItems}></Profile>
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            handleAddItemSubmit={handleAddItemSubmit}
            values={values}
            handleChange={handleChange}
          />
        )}

        {activeModal === "previewModal" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            handleDeleteCard={handleDeleteConfirmationModal}
          />
        )}
        {activeModal === "confirmation-opened" && (
          <div>
            <p>Selected Card: {JSON.stringify(selectedCard)}</p>

            <DeleteModal
              onClose={handleCloseModal}
              selectedCard={selectedCard}
              handleDeleteCard={handleDeleteCard}
            />
          </div>
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
