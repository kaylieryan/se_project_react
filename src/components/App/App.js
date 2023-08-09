import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import { getForecastWeather } from "../../utils/WeatherApi";
import { parseWeatherData } from "../../utils/WeatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

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

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        {
          handleCloseModal();
        }
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  useEffect(() => {
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
  }, []);

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

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <div className="modal__input_wrapper">
            <label className="modal__label_input">
              Name{" "}
              <input
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
                className="modal__input"
              />
            </label>
          </div>
          <div className="modal__input_wrapper">
            <label className="modal__label_input">
              Image{" "}
              <input
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
                className="modal__input"
              />
            </label>
          </div>
          <p>Select weather type:</p>
          <div className="modal__radio_buttons">
            <div className="modal__radio_option">
              <input
                type="radio"
                id="hot"
                value="hot"
                name="temp_range"
                className="modal__radio_button"
              />

              <label className="modal__label_radio"> Hot</label>
            </div>
            <div className="modal__radio_option">
              <input
                type="radio"
                id="warm"
                value="warm"
                name="temp_range"
                className="modal__radio_button"
              />
              <label className="modal__label_radio"> Warm</label>
            </div>
            <div className="modal__radio_option">
              <input
                type="radio"
                id="cold"
                value="cold"
                name="temp_range"
                className="modal__radio_button"
              />
              <label className="modal__label_radio"> Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}

      {activeModal === "previewModal" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
