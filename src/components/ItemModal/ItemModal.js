import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`item_modal`}>
      <div className="modal__content-item">
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__image"
        />
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button-item"
        />
        <div className="modal__info-section-container"></div>
        <div className="modal__info">
          <p className="modal__info-name">{selectedCard.name}</p>
          <p className="modal__info-weather">
            Weather: {selectedCard.weather}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
