import React from "react";
import "./ClothingSection.css";
import ItemCard from "../../ItemCard/ItemCard";
import { defaultClothingItems } from "../../../utils/constants";

const ClothingSection = ({ onSelectCard }) => {
  return (
    <section className="clothingsection">
      {}
      <div className="clothingsection__items">
        {defaultClothingItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onSelectCard={onSelectCard}
            className="clothingsection__item"
          />
        ))}
      </div>
    </section>
  );
};

export default ClothingSection;
