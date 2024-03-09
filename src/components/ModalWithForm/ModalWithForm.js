import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText = "Add Garment",
  buttonTextTwo,
  title,
  onClose,
  name,
  onSubmit,
  handleClickTwo,
  classNameTwo = "modal__submit_button_two_hidden",
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__form_close_button"
        />
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit_button">
            {buttonText}
          </button>
          <button
            type="button"
            className={classNameTwo}
            onClick={handleClickTwo}>
            {buttonTextTwo}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
