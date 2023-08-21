import React from "react";
import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import avatar from "../../images/avatar.svg";
import "./Profile.css";

const Profile = ({ onSelectCard }) => {
  return (
    <div className="profile">
      <div className="profile__heading">
        <div className="profile__heading_user">
          <img src={avatar} alt="logo" className="profile__avatar-image" />
          <div className="profile__username">Kaylie Ryan</div>
        </div>
        <div className="profile__heading_clothes">
          <div className="profile__title">Your items</div>
          <div className="profile__add_new">+ Add new</div>
        </div>
      </div>

      <div className="profile__content">
        <SideBar />
        <ClothesSection
          onSelectCard={onSelectCard}
          className="clothingsection"
        />
      </div>
    </div>
  );
};

export default Profile;
