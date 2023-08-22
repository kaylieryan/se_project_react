// import React from "react";
// import "./ItemModal.css";

// const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
//   return (
//     <div className={`item_modal`}>
//       <div className="item_modal__content">
//         <button
//           type="button"
//           onClick={onClose}
//           className="item_modal__close-button"></button>
//         <img
//           src={selectedCard.link}
//           alt={selectedCard.name}
//           className="item_modal__image"
//         />
//         <div className="modal__info-section-container"></div>
//         <div className="modal__info">
//           <p className="modal__info-name">{selectedCard.name}</p>
//           <p className="modal__info-weather">Weather: {selectedCard.weather}</p>
//           <button
//             type="button"
//             className="item_modal__delete-button"
//             onClick={() => handleDeleteCard(selectedCard)}>
//             Delete item
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemModal;

import "./ItemModal.css";
import React from "react";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  return (
    <div className={`item_modal`}>
      <div className="item_modal__content">
        <button
          type="button"
          onClick={onClose}
          className="item_modal__close_button"
        />
        <img
          src={selectedCard.imageUrl}
          className="item_modal__item_image"
          alt={selectedCard.name}
        />
        <div className="item_modal__caption">
          <div className="item_modal__caption_name">{selectedCard.name}</div>
          <div className="item_modal__caption_weather">
            Weather: {selectedCard.weather}
          </div>
        </div>
        <button
          type="button"
          className="item_modal__delete-button"
          onClick={() => handleDeleteCard(selectedCard.id)}>
          Delete item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
