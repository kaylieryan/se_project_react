import React from "react";
import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal modal_type_item`}>
      <div className="modal__content-item">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button-item"
        ></button>
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__info-section-container"></div>
        <div className="modal__info">
          <p className="modal__info-name">{selectedCard.name}</p>
          <p className="modal__info-weather">Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
