import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import React from "react";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const isOwner = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = ` ${
    isOwner ? "item_modal__delete-button" : "item_modal__delete-button_hidden"
  }`;

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
          className={itemDeleteButtonClassName}
          onClick={() => handleDeleteCard(selectedCard)}>
          Delete item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
