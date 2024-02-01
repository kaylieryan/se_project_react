import React, { useContext } from "react";
import "./SideBar.css";
//import avatar from "../../images/avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onEditProfileModal, onLogOut }) => {
  const currentUser = useContext(CurrentUserContext);

  const handleLogoutClick = () => {
    onLogOut();
  };

  return (
    <div className="sidebar">
      <div className="sidebar__avatar-name">
        <img
          className="sidebar__avatar-image"
          src={currentUser.avatar}
          alt={currentUser.name}></img>
        <div className="profile__name">{currentUser.name}</div>
      </div>
      <div className="sidebar__button-container">
        <button
          className="sidebar__button"
          type="button"
          onClick={onEditProfileModal}>
          Change Profile Data
        </button>
        <button
          className="sidebar__button"
          type="button"
          onClick={handleLogoutClick}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
