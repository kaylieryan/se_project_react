import React from "react";
import "./ClothingSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

const ClothingSection = ({ onSelectCard }) => {
  return (
    <section className="clothingsection">
      {/* <div className="clothingsection__cards"> */}
      {/* <button className="clothing__section-button" type="text">
          + Add new
        </button>
      </div> */}
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

export default ClothingSection;
