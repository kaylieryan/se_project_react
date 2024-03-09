import React from "react";
import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  isOpen,
  onRegister,
  setActiveModal,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  //handlers go here

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password, name, avatar);
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      modalName={"register"}
      onSubmit={handleRegisterSubmit}
      buttonText="Next"
      buttonTextTwo="or Log in"
      handleClickTwo={handleLoginClick}
      classNameTwo={"modal__submit-button"}
      >
      <div className="modal__text-inputs">
        <label className="modal__label">
          Email*
          <input
            type="text"
            name="email"
            placeholder="Email"
            minLength="1"
            maxLength="30"
            className="modal__input"
            value={email}
            onChange={handleEmailChange}></input>
        </label>
        <label className="modal__label">
          Password*
          <input
            type="text"
            name="password"
            placeholder="Password"
            minLength="1"
            maxLength="30"
            className="modal__input"
            value={password}
            onChange={handlePasswordChange}></input>
        </label>
        <label className="modal__label">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            minLength="1"
            maxLength="30"
            className="modal__input"
            value={name}
            onChange={handleNameChange}></input>
        </label>
        <label className="modal__label">
          Avatar URL
          <input
            type="url"
            name="name"
            placeholder="Avatar URL"
            minLength="1"
            maxLength="256"
            className="modal__input"
            value={avatar}
            onChange={handleAvatarChange}></input>
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
