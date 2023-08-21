import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

const ClothesSection = ({ onSelectCard }) => {
  return (
    <section className="clothingsection">
      <div className="clothingsection__cards">
        {defaultClothingItems.map((item) => (
          <ItemCard
            item={item}
            key={item._id}
            onSelectCard={onSelectCard}
            className="clothingsection__card"
          />
        ))}
      </div>
    </section>
  );
};

export default ClothesSection;