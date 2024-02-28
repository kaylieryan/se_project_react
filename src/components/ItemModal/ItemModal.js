import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import React from "react";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwner =
    selectedCard && currentUser && selectedCard.owner === currentUser._id;

  const itemModalDeleteButton = ` ${
    isOwner ? "modal__delete-button_visible" : "modal__delete-button_hidden"
  }`;

  return (
    <div className={`item__modal`}>
      <div className="item_modal__content">
        <button
          type="button"
          onClick={onClose}
          className="item_modal__close_button"></button>
        <img
          src={selectedCard.imageUrl}
          className="item_modal__item_image"
          alt={selectedCard.name}
        />
        <div className="item_modal__caption">
          <div>
            <div className="item_modal__caption_name">{selectedCard.name}</div>
            <div className="item_modal__caption_weather">
              Weather: {selectedCard.weather}
            </div>
          </div>
          <button
            type="button"
            className={itemModalDeleteButton}
            onClick={() => handleDeleteCard(selectedCard)}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
