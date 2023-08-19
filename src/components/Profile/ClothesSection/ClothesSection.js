import React from "react";
import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";

function ClothesSection({ onSelectCard, onCreateModal, clothingItems }) {
  const serverCards = clothingItems.filter((item) => {
    return item.weather;
  });
  return (
    <div className="clothes__section-container">
      <div className="clothes__section-header-container">
        <p className="clothes__section-text">Your Items</p>
        <button
          className="clothes__section-button"
          type="text"
          onClick={onCreateModal}>
          + Add New
        </button>
      </div>
      <div className="clothes__section-card-items">
        {serverCards.map((item) => (
          <ItemCard
            item={item}
            key={item?.id ?? item?._id}
            onSelectCard={onSelectCard}
          />
        ))}
      </div>
    </div>
  );
}

export default ClothesSection;
