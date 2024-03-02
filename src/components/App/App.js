import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import LoginModal from "../LoginModal/LoginModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import {
  getForecastWeather,
  parseWeatherData,
  parseLocation,
} from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route, Redirect } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";
import {
  removeItems,
  fetchItems,
  postClothingItems,
  removeCardLike,
  addCardLike,
} from "../../utils/Api.js";
import {
  postSignIn,
  postSignUp,
  getUserInfo,
  editProfile,
} from "../../utils/auth.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

//------------------------------Functions-------------------------------------

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedInLoading, setIsLoggedInLoading] = useState(true);

  //------------------------------Constants-------------------------------------

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleEditProfileModal = () => {
    setActiveModal("editProfile");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleLogin = (email, password) => {
    postSignIn({ email, password })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          handleCloseModal();
          return res;
        } else {
          console.log("handleLogin error");
        }
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setLoggedIn(false);
    setClothingItems(clothingItems);
  };

  const handleRegisterSubmit = (email, password, name, avatar) => {
    postSignUp({ email, password, name, avatar })
      .then((resBody) => {
        setCurrentUser(resBody.data);
        handleCloseModal();
        handleLogin(email, password);
      })
      .catch(console.error);
  };

  const handleEditProfileSubmit = (name, avatar) => {
    const token = localStorage.getItem("jwt");
    console.log("handleEditProfileSubmit", name, avatar, token);
    editProfile({ name, avatar, token })
      .then((res) => {
        setCurrentUser(res.data);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleCardLike = (item, isLiked, currentUser) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(item, currentUser._id, token)
          .then((updatedCard) => {
            setClothingItems((clothingItems) =>
              clothingItems.map((card) =>
                card._id === item._id ? updatedCard : card
              )
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(item, currentUser._id, token)
          .then((updatedCard) => {
            setClothingItems((clothingItems) =>
              clothingItems.map((card) =>
                card._id === item._id ? updatedCard : card
              )
            );
          })
          .catch((err) => console.log(err));
  };

  const handleSelectedCard = (card) => {
    setActiveModal("previewModal");
    setSelectedCard(card);
  };

  const handleAddItemSubmit = (values) => {
    postClothingItems(values)
      .then((resBody) => {
        // setClothingItems([data, ...clothingItems]);
        setClothingItems((clothingItems) => [resBody.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
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
    removeItems(selectedCard)
      .then(() => {
        const newClothingItems = clothingItems.filter((cards) => {
          return cards._id !== selectedCard;
        });
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleDeleteConfirmationModal = (selectedCard) => {
    setActiveModal("confirmation-opened");
    setSelectedCard(selectedCard);
  };

  //------------------------------UseEffect-------------------------------------

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getUserInfo(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res.data);
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoggedInLoading(false);
        });
    }
  }, [loggedIn]);
  // Check authentication status once when the component mounts

  useEffect(() => {
    fetchItems()
      .then((data) => {
        console.log("Fetched items", data);
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
        const city = parseLocation(data);
        console.log(temperature);
        setTemp(temperature);
        setLocation(city);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //------------------------------HTML-------------------------------------

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          onCreateModal={handleCreateModal}
          onLoginModal={handleLoginModal}
          onRegisterModal={handleRegisterModal}
          loggedIn={loggedIn}
          city={location}
        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              loggedIn={loggedIn}
              onCardLike={handleCardLike}
            />
          </Route>
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            isLoggedInLoading={isLoggedInLoading}>
            <Profile
              onSelectCard={handleItemCard}
              onCreateModal={handleActiveCreateModal}
              onEditProfileModal={handleEditProfileModal}
              clothingItems={clothingItems}
              loggedIn={loggedIn}
              onCardLike={handleCardLike}
              onLogout={handleLogout}></Profile>
          </ProtectedRoute>
          <Route path="*">
            {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/" />}
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            handleAddItemSubmit={handleAddItemSubmit}
            buttonText={isLoading ? "Saving..." : "Save"}
          />
        )}

        {activeModal === "previewModal" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            handleDeleteCard={handleDeleteConfirmationModal}
            buttonText={isLoading ? "Deleting..." : "Delete"}
            loggedIn={loggedIn}
            currentUser={currentUser}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            onClose={handleCloseModal}
            isOpen={activeModal === "login"}
            onLogin={handleLogin}
            setActiveModal={setActiveModal}
            buttonText={isLoading ? "Logging in..." : "Log In"}
            onRegister={handleRegisterModal}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            onClose={handleCloseModal}
            isOpen={activeModal === "register"}
            onRegister={handleRegisterSubmit}
            setActiveModal={setActiveModal}
            buttonText={isLoading ? "Registering..." : "Register"}
          />
        )}
        {activeModal === "confirmation-opened" && (
          <DeleteModal
            onClose={handleCloseModal}
            selectedCard={selectedCard}
            handleDeleteCard={handleDeleteCard}
            buttonText={isLoading ? "Deleting..." : "Delete"}
          />
        )}
        {activeModal === "editProfile" && (
          <EditProfileModal
            handleCloseModal={handleCloseModal}
            onClose={handleCloseModal}
            isOpen={activeModal === "editProfile"}
            onSubmit={handleEditProfileSubmit}
            currentUser={currentUser}
            buttonText={isLoading ? "Saving..." : "Save"}
          />
        )}
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
