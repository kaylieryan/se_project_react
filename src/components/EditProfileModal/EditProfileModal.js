import React, { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({
  handleCloseModal,
  onSubmit,
  isLoading,
  isOpen,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name || "");
  console.log("name", name);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState(currentUser.avatar || "");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };
  console.log("avatar", avatar);

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    onSubmit(name, avatar);
  };

  const isEnabled = name.length > 0 && avatar.length > 0;

  return (
    <ModalWithForm
      buttonText={isLoading ? "Submitting Changes..." : "Submit Changes"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      isEnabled={isEnabled}>
      <h2>Change Profile Data</h2>
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          minLength="1"
          maxLength="30"></input>
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          className="modal__input"
          type="url"
          name="avatar"
          value={avatar}
          onChange={handleAvatarChange}
          placeholder="Avatar URL"
          minLength="1"></input>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
