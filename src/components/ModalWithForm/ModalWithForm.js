import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button
          type="button"
          onClick={onClose}
          className="modal__form_close_button"></button>
        <form onSubmit={onSubmit} className="modal__form">{children}</form>
        <button type="submit" className="modal__submit_button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
