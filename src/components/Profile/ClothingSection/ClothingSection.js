import React from "react";
import "./ClothingSection.css";
import ItemCard from "../../ItemCard/ItemCard";
import { defaultClothingItems } from "../../../utils/constants";

const ClothingSection = ({ onSelectCard }) => {
  return (
    <section className="clothing__section">
      {}
      <div className="clothing__section-title-wrapper">
        <p className="clothing__section-title">Your Items</p>
        <button className="clothing__section-button" type="text">
          + Add new
        </button>
      </div>
      <div className="clothing__section-card">
        {defaultClothingItems.map((item) => (
          <ItemCard key={item.id} item={item} onSelectCard={onSelectCard} />
        ))}
      </div>
    </section>
  );
};

export default ClothingSection;
