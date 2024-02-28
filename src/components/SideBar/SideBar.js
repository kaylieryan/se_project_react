import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./SideBar.css";

const SideBar = ({ onEditProfileModal, onLogOut }) => {
  const currentUser = useContext(CurrentUserContext);

  const handleLogoutClick = () => {
    onLogOut();
  };

  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar-avatar-name">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt={currentUser.name}></img>
        <div className="profile__name">{currentUser.name}</div>
      </div>
      <div className="profile__sidebar-button-container">
        <button
          className="profile__sidebar-button"
          type="button"
          onClick={onEditProfileModal}>
          Change Profile Data
        </button>
        <button
          className="profile__sidebar-button"
          type="button"
          onClick={handleLogoutClick}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
