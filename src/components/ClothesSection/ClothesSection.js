import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

const ClothesSection = ({ onSelectCard, clothingItems, onCreateModal }) => {
  return (
    <div className="clothingsection">
      <div className="clothingsection__title">
        <h3>Your items</h3>
        <button
          className="clothingsection__button"
          onClick={onCreateModal}
          type="text">
          + Add new
        </button>
      </div>
      <div className="clothingsection__cards">
        {clothingItems.map((item) => (
          <ItemCard item={item} key={item._id} onSelectCard={onSelectCard} />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;

// const ClothesSection = ({ onSelectCard }) => {
//   return (
//     <section className="clothingsection">
//       <div className="clothingsection__cards">
//         {defaultClothingItems.map((item) => (
//           <ItemCard
//             item={item}
//             key={item._id}
//             onSelectCard={onSelectCard}
//             className="clothingsection__card"
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ClothesSection;
