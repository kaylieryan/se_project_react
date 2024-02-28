import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ClothesSection = ({
  onSelectCard,
  clothingItems,
  onCreateModal,
  isLoggedIn,
  onCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const currentItems = clothingItems.filter((item) => {
    return item.owner === currentUser._id;
  });

  return (
    <div className="clothing__section">
      <div className="clothing__section-wrapper">
        <p className="clothing__section-title">Your items</p>
        <button
          className="clothing__section-button"
          onClick={onCreateModal}
          type="submit">
          + Add new
        </button>
      </div>
      <div className="clothing__section-cards">
        {currentItems.map((item) => {

          return (
          <ItemCard
            item={item}
            key={item?._id ?? item?._id}
            onSelectCard={onSelectCard}
            isLoggedIn={isLoggedIn}
            onCardLike={onCardLike}
          />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
